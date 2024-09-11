import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import register from "./routes/register.js";
import login from "./routes/login.js";
import userAcount from "./services/userService.js";
import userAccountUpdate from "./services/userAccountUpdate.js";
import userPasswordUpdate from "./services/userPasswordUpdate.js";

const app = express();
const port = 3000;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/auth/register", register);
app.use("/auth/login", login);

// Services
app.use("/account", userAcount);
app.use("/account/update", userAccountUpdate);
app.use("/account/update/password", userPasswordUpdate);

// Server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
