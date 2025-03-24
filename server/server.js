import dotenv from "dotenv";
dotenv.config({path:"./config.env"});
import app from './app.js';
import  db  from './dbconfig.js';
import User from "./models/user.js";
import mongoose from "mongoose";
import Portfolio from "./models/portifolio.js";
const port =process.env.PORT_NUMBER;
if (!port) {
    console.error("Port number not found in environment variables!");
    process.exit(1);
}


app.get('/api/user/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        console.log("🟡 Received userId:", userId);

        // Validate if userId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: '❌ Invalid user ID format' });
        }

        // 🔹 Convert `userId` to ObjectId for searching
        const user = await Portfolio.findOne({ userId: userId });
        console.log("🔵 Fetched user:", user);

        if (!user) return res.status(404).json({ message: '❌ User not found' });

        return res.status(200).json({
            message: "✅ Portfolio fetched successfully",
            success: true,
            user
        });
    } catch (error) {
        console.error("❌ Error fetching user:", error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});




  
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});