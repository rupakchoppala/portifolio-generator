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
app.get("/user/:username", async (req, res) => {
    const { username } = req.params;
    const user = await User.findOne({ username }); // Fetch user data from DB
  
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
  
    res.json(user);
  });
  
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});