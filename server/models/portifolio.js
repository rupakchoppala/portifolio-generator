import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    profilePic: { type: String, required: false },
    aboutPic:{ type: String, required: false },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    role: { type: String, required: true },
    description: { type: String },
    about: { type: String },
    techStack: { type: [String] },
    experience: [
        {
            company: { type: String },
            position: { type: String },
            duration: { type: String }, // e.g., "Jan 2022 - Dec 2023"
            description: { type: String, required: false },
            technologies: { type: [String] }  // Added technologies array here
        }
    ],
    achievements: [
        {
            date: { type: String },
            title: { type: String },
            organization: { type: String }, // e.g., "Jan 2022 - Dec 2023"
            description: { type: String, required: false },
           // technologies: { type: [String] }  // Added technologies array here
        }
    ],
    projects: [
        {
            title: { type: String, required: false },
            description: { type: String },
            link: { type: String },
            image: { type: String, default: "" },
            technologies: { type: [String] }  // Added technologies array here
        }
    ],
    contact: {
        email: { type: String },
        phone: { type: String },
        git: { type: String },
        linkedin: { type: String },
        x: { type: String },
        insta: { type: String }
    },
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

export default Portfolio;
