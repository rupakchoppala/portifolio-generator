import dotenv from "dotenv";
dotenv.config({path:"./config.env"});
import app from './app.js';
import  db  from './dbconfig.js';
import User from "./models/user.js";
const port =process.env.PORT_NUMBER;
if (!port) {
    console.error("Port number not found in environment variables!");
    process.exit(1);
}
app.get('/api/user/:id', async (req, res) => {
    try {
        const user = await User.findOne({ userId: req.params.id }); // Correct query format
        if (!user) return res.status(404).json({ message: 'User not found' });
        return res.status(200).send({
            message:"portifolio fetched  successfully for you",
            success:true,
            user
        })
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


  
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});