import express from 'express';
import fileUpload from "express-fileupload";
import cors from "cors";
const app=express();
//app.use(express.json());
app.use(
    cors({
      origin: ["http://localhost:5173", "https://portifolio-generator-z83b.vercel.app/"],
      credentials: true, // Allow cookies and auth headers
      methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    })
  );
app.use(fileUpload({ useTempFiles: true }));
app.use(express.json({ limit: "50mb" })); // Increase payload size limit
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
import authRoutes from './controllers/authController.js';
import userRoutes from  './controllers/portifolioController.js';
app.use('/api/auth',authRoutes);
//app.use("/uploads", express.static("uploads"));
app.use('/api/user',userRoutes);
export default app;