import { pool } from "../db.js";
import express from "express";
import { authenticateToken } from "../middlewares/authorization.js";

const router = express.Router();

router.put("/", authenticateToken, async (req, res) => {
  const userId = req.userId.id;
  const { username, email, phoneNumber, address, zipCode, emergencyContact } =
    req.body;

  try {
    const updateUser = await pool.query(
      "UPDATE user_details SET user_name=$1,user_email=$2,user_phone_number=$3,user_address=$4,address_zip_code=$5,user_emergency_contact=$6 WHERE user_id=$7",
      [username, email, phoneNumber, address, zipCode, emergencyContact, userId]
    );

    if (updateUser.rowCount > 0) {
      res.status(200).json({ message: "User updated successfully" });
    } else {
      res.status(400).json({ message: "error updating the user" });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
