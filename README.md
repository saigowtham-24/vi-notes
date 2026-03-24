# Vi-Notes Backend

This project implements a basic backend API for storing writing sessions and keystroke data for the Vi-Notes authenticity verification system.

## Features
- Create writing session
- Retrieve all sessions
- Store keystroke data
- Simple REST API using Express

## Tech Stack
- Node.js
- Express.js

## API Endpoints

### POST /session
Stores a new writing session

Example Request:
{
  "content": "Hello world",
  "keystrokes": [
    { "key": "H", "time": 1 },
    { "key": "e", "time": 2 }
  ]
}

### GET /session
Returns all stored sessions

## How to Run

1. Install dependencies
npm install

2. Start server
node app.js

Server runs on:
http://localhost:3000
