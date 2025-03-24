import express from 'express';
import fileUpload from "express-fileupload";
import cors from "cors";
const app=express();
//app.use(express.json());
app.use(
  cors({
    origin: [
      "https://portifolio-generator-4.onrender.com", 
      "https://portifolio-generator-4.onrender.com/user/:id"
    ], // ✅ Use an array for multiple origins
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


// OR - Allow all origins temporarily (Not recommended for production)
app.use(cors());;
  
app.use(fileUpload({ useTempFiles: true }));
app.use(express.json({ limit: "50mb" })); // Increase payload size limit
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
import authRoutes from './controllers/authController.js';
import userRoutes from  './controllers/portifolioController.js';
app.use('/api/auth',authRoutes);
//app.use("/uploads", express.static("uploads"));
app.use('/api/user',userRoutes);

export default app;