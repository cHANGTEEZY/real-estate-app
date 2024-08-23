import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());

const users = [];

// GET endpoint to retrieve users
app.get("/users", (req, res) => {
  res.send(users);
});

// POST endpoint to create a new user
app.post("/users", (req, res) => {
  try {
    const user = { name: req.body.name, password: req.body.password };
    users.push(user);
    res.status(201).send("user created successfully");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
