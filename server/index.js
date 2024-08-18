import express from "express";
import bodyparser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyparser.json());

const time = new Date();
const year = time.getFullYear();

app.get("/home", (req, res, next) => {
  res.send(`Hello world in ${year}`);
});

app.post("/signin", (req, res, next) => {});

app.listen(port, () => {
  console.log(`listening in port ${port}`);
});
