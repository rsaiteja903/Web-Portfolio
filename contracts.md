# Portfolio Backend Integration Contracts

## Overview
This document outlines the integration between the frontend and backend for Sai Teja's Portfolio application.

## Current State
- **Frontend**: Fully functional with mock data in `/app/frontend/src/utils/mockData.js`
- **Mock Contact Form**: Currently shows toast notification on submit (frontend only)

## Backend Implementation Requirements

### 1. Contact Form API

**Endpoint**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "subject": "string (required)",
  "message": "string (required, min 10 chars)"
}
```

**Response** (Success - 201):
```json
{
  "success": true,
  "message": "Message sent successfully!",
  "id": "generated_uuid"
}
```

**Response** (Error - 400/500):
```json
{
  "success": false,
  "error": "Error message description"
}
```

### 2. Database Schema

**Collection**: `contact_messages`

**Fields**:
- `id`: UUID (auto-generated)
- `name`: String
- `email`: String
- `subject`: String
- `message`: String (Text)
- `status`: String (default: "new", options: "new", "read", "replied")
- `created_at`: DateTime (auto-generated)
- `ip_address`: String (optional, for spam prevention)

### 3. Get Messages API (Admin)

**Endpoint**: `GET /api/contact/messages`

**Query Parameters**:
- `status`: Filter by status (optional)
- `limit`: Number of messages to return (default: 50)
- `skip`: Pagination offset (default: 0)

**Response**:
```json
{
  "messages": [
    {
      "id": "uuid",
      "name": "string",
      "email": "string",
      "subject": "string",
      "message": "string",
      "status": "new",
      "created_at": "ISO date"
    }
  ],
  "total": 100
}
```

## Frontend Integration Points

### File to Update: `/app/frontend/src/components/Contact.js`

**Current Mock Implementation** (Line ~27-35):
```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  // Mock submission - in real implementation, this would send to backend
  toast({
    title: "Message Sent!",
    description: "Thank you for reaching out. I'll get back to you soon.",
  });
  setFormData({ name: '', email: '', subject: '', message: '' });
};
```

**New Implementation**:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await axios.post(`${API}/contact`, formData);
    
    if (response.data.success) {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  } catch (error) {
    toast({
      title: "Error",
      description: error.response?.data?.error || "Failed to send message. Please try again.",
      variant: "destructive"
    });
  }
};
```

### Required Import Addition:
```javascript
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;
```

## Backend Files to Create

1. **`/app/backend/models/contact.py`** - Pydantic model for validation
2. **`/app/backend/routes/contact.py`** - API routes for contact form
3. Update **`/app/backend/server.py`** - Include contact routes

## Validation Rules

- **name**: 2-100 characters
- **email**: Valid email format
- **subject**: 5-200 characters
- **message**: 10-2000 characters

## Security Considerations

- Rate limiting: Max 5 submissions per IP per hour
- Email validation
- Sanitize inputs to prevent XSS
- CORS already configured in server.py

## Testing Checklist

- [ ] POST /api/contact with valid data
- [ ] POST /api/contact with invalid email
- [ ] POST /api/contact with missing fields
- [ ] GET /api/contact/messages returns all messages
- [ ] Frontend form submits successfully
- [ ] Toast notifications work correctly
- [ ] Form clears after successful submission

## Notes

- Backend uses FastAPI + Motor (async MongoDB)
- MongoDB is already connected in server.py
- Database name from .env: DB_NAME
