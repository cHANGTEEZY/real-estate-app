import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import register from "./routes/register.js";
import login from "./routes/login.js";

const app = express();
const port = 3000;

//middlewares
app.use(bodyParser.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("Hello World!!!!");
});

app.use("/register", register);
app.use("/login", login);
//server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
