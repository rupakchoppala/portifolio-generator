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
app.get("/api/user/:userId", async (req, res) => {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user); // No authentication needed
  });
  
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});