import express from 'express';
import { register, login } from '../controllers/authController.js';
import { verifyToken, isAdmin } from '../middleware/authMiddleware.js'; // Ensure this matches your actual folder structure

const router = express.Router();

// ==========================================
// Public Authentication Routes
// ==========================================
router.post('/register', register);
router.post('/login', login);

// ==========================================
// Protected Admin Routes
// ==========================================
// Naya Admin Test Route (Jo add karna reh gaya tha)
router.get('/admin-test', verifyToken, isAdmin, (req, res) => {
    res.status(200).json({ 
        success: true,
        message: "Welcome to the Admin Zone!", 
        user: req.user 
    });
});

export default router;