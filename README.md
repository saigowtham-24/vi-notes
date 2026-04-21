# Vi-Notes Backend

This project implements a backend API for storing writing sessions and keystroke data as part of the Vi-Notes authenticity verification system. The system now uses MongoDB for persistent data storage.

## Features

- Create writing sessions
- Retrieve stored sessions
- Delete sessions
- Store keystroke data (typing patterns)
- Persistent storage using MongoDB
- REST API using Express.js

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Project Structure

vi-notes/
│── app.js
│── package.json
│── .env
│── README.md

---

## API Endpoints

### GET /
Returns API status and available endpoints.

Response:
{
  "message": "Vi-Notes Backend Running"
}

---

### POST /session
Stores a new writing session in MongoDB.

Example Request:
{
  "content": "Hello world",
  "keystrokes": [
    { "key": "H", "time": 1 },
    { "key": "e", "time": 2 }
  ]
}

Response:
{
  "message": "Session saved",
  "data": {
    "_id": "mongodb_id",
    "content": "Hello world",
    "keystrokes": [...]
  }
}

---

### GET /session
Retrieves all stored sessions from MongoDB.

Response:
[
  {
    "_id": "mongodb_id",
    "content": "Hello world",
    "keystrokes": [...]
  }
]

---

### DELETE /session/:id
Deletes a session by MongoDB ID.

Response:
{
  "message": "Session deleted"
}

---

## How to Run

1. Install dependencies  
npm install  

2. Create `.env` file  

Add:
MONGO_URI=your_mongodb_connection_string  
PORT=3000  

3. Start server  
node app.js  

4. Server runs on  
http://localhost:3000  

---

## Deployment

The backend is deployed on Render and uses environment variables for secure MongoDB connection.

---

## Future Improvements

- Add authentication (login/signup)
- Implement validation for input data
- Detect pasted text patterns
- Improve keystroke behavior analysis

---

## Contribution Goal

This project focuses on building a scalable backend system for handling writing session data and keystroke tracking with database integration as part of the Vi-Notes platform.
