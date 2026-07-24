// server/controllers/contactController.js
import Contact from '../models/Contact.js';

export const submitContactForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Create and save the new message
        const newContact = new Contact({ name, email, message });
        await newContact.save();

        res.status(201).json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error("Contact Form Error:", error);
        res.status(500).json({ message: "Failed to send message. Please try again later." });
    }
};
