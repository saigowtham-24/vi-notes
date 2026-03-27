const express = require("express");
const app = express();

app.use(express.json());

let sessions = [];

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

app.post("/session", (req, res) => {
  const newSession = {
    id: sessions.length,
    ...req.body
  };

  sessions.push(newSession);

  res.json({
    message: "Session saved",
    data: newSession
  });
});

app.get("/session", (req, res) => {
  res.json(sessions);
});

app.delete("/session/:id", (req, res) => {
  const id = parseInt(req.params.id);
  sessions = sessions.filter(session => session.id !== id);
  res.json({ message: "Session deleted" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
