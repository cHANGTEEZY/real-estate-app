import { pool } from "../db.js";
import express from "express";
import { authenticateToken } from "../middlewares/authorization.js";

const router = express.Router();

router.get("/", authenticateToken, async (req, res) => {
    try {
        const userId = req.userId.id;

        const result = await pool.query("SELECT * FROM user_details WHERE user_id = $1", [userId]);

        if (result.rows.length > 0) {
            const userName = result.rows[0].user_name;
            const userEmail = result.rows[0].user_email;
            const userPhoneNumber = result.rows[0].user_phone_number;
            const userAddress = result.rows[0].user_address;
            const userZipCode = result.rows[0].address_zip_code;

            res.status(200).json({
                username: userName,
                email: userEmail,
                phoneNumber: userPhoneNumber,
                address: userAddress,
                zipCode: userZipCode
            });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});



export default router;
