const express = require("express");
const app = express();

app.use(express.json());

let sessions = [];

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
