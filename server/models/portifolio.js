import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    profilePic:{type:String,required:false},
   name: { type: String, required: true },
  role: { type: String, required: true },
  description: { type: String },
  about: { type: String },
  techStack: { type: String },
  experiences: [
    {
      company: { type: String },
      position: { type: String},
      duration: { type: String }, // e.g., "Jan 2022 - Dec 2023"
      description: { type: String ,required:true},
    },
  ],
  projects: [
    {
      title: { type: String, required: true },
      description: { type: String },
      link: { type: String },
      image:{type:String,default: ""}
    },
  ],
  contact: {
    email: { type: String },
    phone: { type: String },
  },
  socialLinks: {
    github: { type: String },
    linkedin: { type: String },
    twitter: { type: String },
    instagram: { type: String },
  },
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);
export default Portfolio;
