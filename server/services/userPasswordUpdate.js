import express from "express";
import { authenticateToken } from "../middlewares/authorization.js";
import { pool } from "../db.js";
import bcrypt from "bcryptjs";

const router = express.Router();

//update userpassword
router.put("/", authenticateToken, async (req, res) => {
  const userId = req.userId.id;
  const { currentPassword, newPassword, confirmNewPassword } = req.body;

  try {
    const getUserDetail = await pool.query(
      "SELECT * FROM user_details WHERE user_id = $1",
      [userId],
    );

    const user = getUserDetail.rows[0];
    const checkIfPasswordIsCorrect = await bcrypt.compare(
      currentPassword,
      user.user_password,
    );

    if (!checkIfPasswordIsCorrect) {
      return res
        .status(400)
        .json({ message: "Your current password is incorrect" });
    }

    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({
        message: "New password and confirmation password do not match",
      });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
    const updatePassword = await pool.query(
      "UPDATE user_details SET user_password = $1 WHERE user_id = $2",
      [hashedPassword, userId],
    );

    const months = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ];

    const date = new Date();
    const currentMonth = date.getMonth();
    const month = months[currentMonth];
    const dayOfMonth = date.getDate();
    const passwordUpdateDay = `${dayOfMonth} ${month}`;

    const insertPasswordUpdateDay = pool.query(
      "UPDATE user_details SET password_update_date=$1 where user_id=$2",
      [passwordUpdateDay, userId],
    );

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

//delete userpassword
router.delete("/", authenticateToken, async (req, res) => {
  const userId = req.userId.id;
  const { currentPassword } = req.body;

  console.log(userId);
  try {
    const getUser = await pool.query(
      "SELECT * from user_details where user_id=$1",
      [userId],
    );

    const user = getUser.rows[0];

    const checkPassword = await bcrypt.compare(
      currentPassword,
      user.user_password,
    );

    if (!checkPassword) {
      return res.status(400).json({
        message: "Your password is incorrect",
      });
    }

    const deleteUser = await pool.query(
      "DELETE from user_details where user_id=$1",
      [userId],
    );

    res.status(200).json({
      message: "Your account is deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

//get password update day
router.get("/", authenticateToken, async (req, res) => {
  const userId = req.userId.id;
  try {
    const getUser = await pool.query(
      "SELECT * from user_details where user_id=$1",
      [userId],
    );
    const user = getUser.rows[0];
    const passwordUpdateDate = user.password_update_date;
    return res.status(200).json({ message: passwordUpdateDate });
  } catch (error) {
    consle.error(error.message);
  }
});

export default router;
