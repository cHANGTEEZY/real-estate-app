import express from "express";
import bcrypt from "bcryptjs";
import { pool } from "../db.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello ");
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json("Please fill all fields");
  }

  try {
    const result = await pool.query(
      "SELECT * FROM user_details WHERE user_email=$1 ",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(400).json("Your email or password is incorrect");
    }

    const user = result.rows[0];

    const checkIfPassworIsCorrect = await bcrypt.compare(
      password,
      user.user_password
    );

    console.log(checkIfPassworIsCorrect);

    if (!checkIfPassworIsCorrect) {
      res.status(400).json("Password incorrect");
    } else {
      res.status(200).json("Logged in ");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server error");
  }
});

export default router;
