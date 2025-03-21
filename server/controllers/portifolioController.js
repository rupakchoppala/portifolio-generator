import express from "express";
import Portfolio from "../models/portifolio.js";
import authMiddleWare from "../middlewares/authMiddleware.js";
import User from "../models/user.js";
import mongoose from "mongoose";
import cloudinary from "../cloudinary.js";
const router=express.Router();
router.post('/update-portfolio', authMiddleWare, async (req, res) => {
    try {
        const userId = req.body.userId; // Assuming `authMiddleware` sets `req.user.userId`

        // Exclude `_id` from the update data to prevent modification attempts
        const { _id, ...updateData } = req.body;

        const updatedPortfolio = await Portfolio.findOneAndUpdate(
            { userId },             // Filter by `userId`
            { $set: updateData },   // Only update non-immutable fields
            { new: true, upsert: true } // Return updated doc & create if not exists
        );
        return res.status(200).send({
            message: "Portfolio updated successfully",
            success: true,
            data: updatedPortfolio
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            message: "Error in creating/updating portfolio",
            success: false
        });
    }
});
router.post('/create-portifolio',authMiddleWare,async(req,res)=>{
    try{
    const createPortifolio=new Portfolio(req.body);
    const savedData=await createPortifolio.save();
    const portfolioUrl = `https://portifolio-generator-4.onrender.com//user/${firstName}`;
    return res.status(200).send({
        message:"portifolio created successfully",
        success:true,
        portfolioUrl

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
        const UploadImage = await cloudinary.uploader.upload(image, { folder: 'portifolio' });

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


router.post('/upload-about-pic', authMiddleWare, async (req, res) => {
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
        const UploadImage = await cloudinary.uploader.upload(image, { folder: 'portifolio' });

        // Update user profile
        const user = await Portfolio.findOneAndUpdate(
            { userId: new mongoose.Types.ObjectId(userId) },
            { aboutPic: UploadImage.secure_url },
            { new: true }
        );

        res.send({ message: 'about pic updated successfully', success: true, data: user });
    } catch (err) {
        //console.error("Error:", err.message);
        res.status(400).send({ message: err.message, success: false });
    }
});

router.post('/upload-project-pic', authMiddleWare, async (req, res) => {
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
        const UploadImage = await cloudinary.uploader.upload(image, { folder: 'portifolio' });

        // Update user profile
        const user = await Portfolio.findOneAndUpdate(
            { 
                userId: new mongoose.Types.ObjectId(userId), 
                "projects._id": projectId  // Target the specific project by its ID
            },
            { 
                $set: { "projects.$.image": UploadImage.secure_url }  // Update the `image` field
            },
            { new: true }
        );

        res.send({ message: 'Project pic updated successfully', success: true, data: user });
    } catch (err) {
        //console.error("Error:", err.message);
        res.status(400).send({ message: err.message, success: false });
    }
});
//get the logged in user
router.get('/get-logged-user', authMiddleWare, async (req, res) => {
    try {
        const userId = req.body.userId; // User ID attached by authMiddleware
        const user = await User.findOne({ _id: userId });

        if (!user) {
            return res.status(404).send(
                { message: 'User not found',
                     success: false });
        }

        return res.status(200).send({
            message: 'User fetched successfully',
            success: true,
            data: user
        });
    } catch (error) {
        return res.status(500).send({ 
            message: error.message || 
            'Internal server error', success: false });
    }
});
router.get('/get-all-user', authMiddleWare, async (req, res) => {
    try {
        const userId = req.body.userId; // User ID attached by authMiddleware
        const all_user = await User.findOne({ _id: {$ne:userId} });

        // if (!user) {
        //     return res.status(404).send(
        //         { message: 'User not found',
        //              success: false });
        // }

        return res.status(200).send({
            message: 'All User fetched successfully',
            success: true,
            data: all_user
        });
    } catch (error) {
        return res.status(500).send({ 
            message: error.message || 
            'Internal server error', success: false });
    }
});

router.get('/get-portfolio/:id', authMiddleWare, async (req, res) => {
    try {
        const userId = req.params.id; // Use req.params for URL parameters

        const user_data = await Portfolio.findOne({ userId });

        if (!user_data) {
            return res.status(404).send({
                message: 'Portfolio not found',
                success: false
            });
        }

        return res.status(200).send({
            message: 'Portfolio fetched successfully',
            success: true,
            data: user_data
        });
    } catch (error) {
        return res.status(500).send({
            message: error.message || 'Internal server error',
            success: false
        });
    }
});



export default router;