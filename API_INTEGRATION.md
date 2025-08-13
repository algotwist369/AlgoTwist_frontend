# API Integration Setup

## Backend Integration

The proposal form has been integrated with your backend API. Here's what you need to know:

### Environment Configuration

Create a `.env` file in your project root and add:

```env
VITE_API_BASE_URL=https://algotwist.onrender.com
```

Replace `https://algotwist.onrender.com` with your actual backend URL.

### API Endpoint

The form sends data to: `POST /api/send-email`

### Request Format

The form sends the following data structure:

```json
{
  "name": "string",
  "email": "string", 
  "phone": "string",
  "budgetRange": "string",
  "projectDescription": "string"
}
```

### Response Format

Expected response from your backend:

```json
{
  "message": "Your request has been sent successfully!",
  "data": {
    "name": "string",
    "email": "string",
    "phone": "string", 
    "budgetRange": "string",
    "projectDescription": "string"
  }
}
```

### Features Added

1. **Form State Management**: Controlled inputs with React state
2. **Form Validation**: Client-side validation for required fields
3. **Loading States**: Button shows "Sending..." during submission
4. **Success/Error Messages**: Visual feedback for form submission results
5. **Form Reset**: Form clears after successful submission
6. **Error Handling**: Network error handling and user-friendly messages
7. **Axios Integration**: Uses axios for HTTP requests with proper error handling
8. **API Client Configuration**: Centralized axios instance with interceptors

### CORS Configuration

Make sure your backend has CORS configured to allow requests from your frontend domain.

### Testing

To test the integration:

1. Start your backend server
2. Set the correct `VITE_API_BASE_URL` in your `.env` file
3. Fill out and submit the proposal form
4. Check the browser console for any errors
5. Verify the email is sent from your backend 