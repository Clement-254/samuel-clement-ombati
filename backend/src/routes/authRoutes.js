import express from "express"
import bcrypt from "bcrypt"
import pool from "./db.js"

const router = express.Router()

// Contact route
router.post("/contacts", async (req, res) => {
    const { name, email, subject, message } = req.body

    try {
        await pool.query(
            "INSERT INTO contacts(name,email,subject,message) VALUES($1,$2,$3,$4)",
            [name, email, subject, message]
        )
        res.json({ success: true })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Database error" })
    }
})

/// Newsletter subscription route
router.post("/subscribe", async (req, res) => {
    const { name, email } = req.body;

    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }

    try {
        // Insert subscriber into the database
        const subscriber = await pool.query(
            "INSERT INTO newsletter_subscribers (name, email) VALUES ($1, $2) RETURNING *",
            [name || null, email]
        );

        res.json({ success: true, subscriber: subscriber.rows[0] });
    } catch (error) {
        console.error(error);

        // Handle duplicate email error (if you have a unique constraint)
        if (error.code === "23505") {
            return res.status(409).json({ error: "Email already subscribed" });
        }

        res.status(500).json({ error: "Database error" });
    }
});

export default router