import express from "express";
// import bcrypt from "bcryptjs";
import { pool } from "./db";

const router = express.Router();

router.post("/", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).json("Please fill all fields ");
  }
});

export default router;
