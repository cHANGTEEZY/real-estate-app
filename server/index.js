import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import register from "./register.js";

const app = express();
const port = 3000;

//middlewares
app.use(bodyParser.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("Hello  world");
});

app.use("/register", register);

//server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
