# Vi-Notes Backend

This project implements a backend API for storing writing sessions and keystroke data as part of the Vi-Notes authenticity verification system.

## Features

- Create writing sessions
- Retrieve stored sessions
- Store keystroke data (typing patterns)
- REST API using Express.js

---

## Tech Stack

- Node.js
- Express.js

---

## Project Structure

vi-notes-backend/
│── app.js
│── package.json
│── README.md

---

## API Endpoints

### POST /session
Stores a new writing session.

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
  "message": "Session saved"
}

---

### GET /session
Retrieves all stored sessions.

Response:
[
  {
    "content": "Hello world",
    "keystrokes": [
      { "key": "H", "time": 1 }
    ]
  }
]

---

## How to Run

1. Install dependencies  
npm install  

2. Start server  
node app.js  

3. Server runs on  
http://localhost:3000  

---

## Future Improvements

- Connect MongoDB for persistent storage  
- Add authentication (login/signup)  
- Detect pasted text patterns  
- Improve keystroke analysis  

---

## Contribution Goal

This project focuses on building backend APIs for handling writing session data and keystroke tracking as part of the Vi-Notes system.
