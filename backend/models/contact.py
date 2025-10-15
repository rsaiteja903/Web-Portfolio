from pydantic import BaseModel, EmailStr, Field, validator
from typing import Optional
from datetime import datetime
import uuid

class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=5, max_length=200)
    message: str = Field(..., min_length=10, max_length=2000)

    @validator('name', 'subject', 'message')
    def no_empty_strings(cls, v):
        if not v or v.strip() == '':
            raise ValueError('Field cannot be empty')
        return v.strip()

class ContactMessage(ContactMessageCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    status: str = Field(default="new")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    ip_address: Optional[str] = None

    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }

class ContactMessageResponse(BaseModel):
    success: bool
    message: str
    id: Optional[str] = None
    error: Optional[str] = None
