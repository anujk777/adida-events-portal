// controllers/authController.js
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// 1. REGISTER (Signup)
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check agar user pehle se exist karta hai
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists!" });

    // Naya user create karo (Role automatically 'user' set hoga)
    const newUser = await User.create({ name, email, password });
    
    res.status(201).json({ message: "User registered successfully!", user: { id: newUser._id, name: newUser.name, role: newUser.role } });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong in register", error: error.message });
  }
};

// 2. LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // User find karo
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found!" });

    // Password compare karo
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials!" });

    // JWT Token generate karo (Isme ID aur Role store karenge)
    const token = jwt.sign(
      { id: user._id, role: user.role }, 
      process.env.JWT_SECRET || 'supersecretkey', // .env file mein ise set karenge
      { expiresIn: '1d' }
    );

    res.status(200).json({ message: "Login successful", token, role: user.role });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong in login", error: error.message });
  }
};