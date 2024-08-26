import express from "express";
import bcrypt from "bcryptjs";
import { pool } from "../db.js";
import jwtGenerator from "../utils/jwtGenerator.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json("Please fill all fields ");
  }

  try {
    const checkIfUserExists = await pool.query(
      "SELECT * from user_details WHERE user_name=$1 OR user_email=$2",
      [username, email]
    );
    if (checkIfUserExists.rows.length > 0) {
      return res
        .status(400)
        .json("User with same username or email already exists");
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await pool.query(
      "INSERT INTO user_details (user_name,user_email,user_password) values ($1,$2,$3) RETURNING user_id",
      [username, email, hashedPassword]
    );

    const token = jwtGenerator(newUser.rows[0].user_id);
    res.status(201).json({ message: "Account created", token: token });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

export default router;
