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

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "Vi-Notes Backend Running",
    endpoints: {
      getSessions: "/session",
      createSession: "POST /session",
      deleteSession: "DELETE /session/:id"
    }
  });
});

// POST
app.post("/session", async (req, res) => {
  const newSession = new Session(req.body);
  await newSession.save();
  res.json({ message: "Session saved", data: newSession });
});

// GET
app.get("/session", async (req, res) => {
  const sessions = await Session.find();
  res.json(sessions);
});

// DELETE
app.delete("/session/:id", async (req, res) => {
  await Session.findByIdAndDelete(req.params.id);
  res.json({ message: "Session deleted" });
});

// PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
