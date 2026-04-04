const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Schema
const sessionSchema = new mongoose.Schema({
  content: String,
  keystrokes: Array
});

const Session = mongoose.model("Session", sessionSchema);

// POST API
app.post("/session", (req, res) => {
  const data = req.body;
  sessions.push(data);
  res.json({ message: "Session saved", data });
});

// GET API
app.get("/session", (req, res) => {
  res.json(sessions);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});