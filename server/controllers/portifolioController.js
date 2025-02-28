import express from "express";
import Portfolio from "../models/portifolio.js";
import authMiddleWare from "../middlewares/authMiddleware.js";
import User from "../models/user.js";
import mongoose from "mongoose";
import cloudinary from "../cloudinary.js";
const router=express.Router();
router.post('/create-portifolio',authMiddleWare,async(req,res)=>{
    try{
    const createPortifolio=new Portfolio(req.body);
    const savedData=await createPortifolio.save();
    return res.status(200).send({
        message:"portifolio created successfully",
        success:true
    })
}
catch(err){
    console.log(err);
    return res.status(401).send({
        
        message:"Error in creating the portifolio",
        success:false
    })
}

}

);
router.post('/upload-profile-pic', authMiddleWare, async (req, res) => {
    try {
        // console.log("Request Headers:", req.headers);
        // console.log("Raw Request Body:", req.body);
        // console.log("Files:", req.files);

        if (!req.files || !req.files.image) {
            throw new Error("Image file is missing in the request");
        }

        const image = req.files.image.tempFilePath;
        const userId = req.body.userId;
        
        if (!userId) throw new Error("User ID is missing in the request body");

        // Upload to Cloudinary
        const UploadImage = await cloudinary.uploader.upload(image, { folder: 'real-time-chat' });

        // Update user profile
        const user = await Portfolio.findOneAndUpdate(
            { userId: new mongoose.Types.ObjectId(userId) },
            { profilePic: UploadImage.secure_url },
            { new: true }
        );

        res.send({ message: 'Profile pic updated successfully', success: true, data: user });

    } catch (err) {
        //console.error("Error:", err.message);
        res.status(400).send({ message: err.message, success: false });
    }
});


export default router;