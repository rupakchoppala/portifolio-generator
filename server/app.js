import express from 'express';
import cors from "cors";
const app=express();
app.use(express.json());
app.use(cors());
import authRoutes from './controllers/authController.js';
app.use('/api/auth',authRoutes);
export default app;