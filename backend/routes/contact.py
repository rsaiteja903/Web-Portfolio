from fastapi import APIRouter, HTTPException, Request
from models.contact import ContactMessageCreate, ContactMessage, ContactMessageResponse
from motor.motor_asyncio import AsyncIOMotorClient
import os
from datetime import datetime, timedelta
from typing import List, Optional

router = APIRouter()

# Get database connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Rate limiting helper
async def check_rate_limit(ip_address: str) -> bool:
    """Check if IP has exceeded rate limit (5 messages per hour)"""
    one_hour_ago = datetime.utcnow() - timedelta(hours=1)
    
    count = await db.contact_messages.count_documents({
        "ip_address": ip_address,
        "created_at": {"$gte": one_hour_ago}
    })
    
    return count < 5

@router.post("/contact", response_model=ContactMessageResponse)
async def create_contact_message(contact_data: ContactMessageCreate, request: Request):
    """
    Create a new contact message
    """
    try:
        # Get IP address
        ip_address = request.client.host
        
        # Check rate limit
        if not await check_rate_limit(ip_address):
            raise HTTPException(
                status_code=429,
                detail="Too many requests. Please try again later."
            )
        
        # Create message object
        message = ContactMessage(
            **contact_data.dict(),
            ip_address=ip_address
        )
        
        # Insert into database
        await db.contact_messages.insert_one(message.dict())
        
        return ContactMessageResponse(
            success=True,
            message="Message sent successfully! I'll get back to you soon.",
            id=message.id
        )
        
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to send message: {str(e)}"
        )

@router.get("/contact/messages")
async def get_contact_messages(
    status: Optional[str] = None,
    limit: int = 50,
    skip: int = 0
):
    """
    Get all contact messages (admin endpoint)
    """
    try:
        # Build query
        query = {}
        if status:
            query["status"] = status
        
        # Get messages
        cursor = db.contact_messages.find(query).sort("created_at", -1).skip(skip).limit(limit)
        messages = await cursor.to_list(length=limit)
        
        # Get total count
        total = await db.contact_messages.count_documents(query)
        
        # Convert ObjectId to string and format dates
        for msg in messages:
            if '_id' in msg:
                del msg['_id']
            if 'created_at' in msg and isinstance(msg['created_at'], datetime):
                msg['created_at'] = msg['created_at'].isoformat()
        
        return {
            "messages": messages,
            "total": total
        }
        
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to fetch messages: {str(e)}"
        )

@router.patch("/contact/messages/{message_id}/status")
async def update_message_status(message_id: str, status: str):
    """
    Update message status (admin endpoint)
    """
    try:
        valid_statuses = ["new", "read", "replied"]
        if status not in valid_statuses:
            raise HTTPException(
                status_code=400,
                detail=f"Invalid status. Must be one of: {', '.join(valid_statuses)}"
            )
        
        result = await db.contact_messages.update_one(
            {"id": message_id},
            {"$set": {"status": status}}
        )
        
        if result.modified_count == 0:
            raise HTTPException(
                status_code=404,
                detail="Message not found"
            )
        
        return {"success": True, "message": "Status updated successfully"}
        
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to update status: {str(e)}"
        )
