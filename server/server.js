// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

// .env file load karna
dotenv.config();

const app = express();

// Middlewares
app.use(express.json()); // JSON data parse karne ke liye
app.use(cors()); // Frontend (React) ko backend se connect karne dene ke liye

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

// Add this below your existing app.use() route declarations
app.get('/', (req, res) => {
  res.send('✅ Adida Events API is running smoothly!');
});

// Optional: Catch-all route for undefined endpoints
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// MongoDB Connection & Server Start
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Connected Successfully!');
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB Connection Error:', error.message);
  });