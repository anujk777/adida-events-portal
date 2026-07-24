import jwt from 'jsonwebtoken';

// 1. Token Verify Karne ka Middleware
export const verifyToken = (req, res, next) => {
    // Header se token nikalna
    const authHeader = req.header('Authorization');

    if (!authHeader) {
        return res.status(401).json({ message: "Access Denied! No token provided." });
    }

    try {
        // Token ka format "Bearer <token>" hota hai, toh usko split karke actual token nikalte hain
        const token = authHeader.split(" ")[1];
        
        // Token ko verify karna
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        
        // Verified user details (id, role) req.user mein daal dena aage use karne ke liye
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid Token!" });
    }
};

// 2. Sirf Admin ko allow karne ka Middleware (RBAC)
export const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        return res.status(403).json({ message: "Access Denied! Admin rights required." });
    }
};