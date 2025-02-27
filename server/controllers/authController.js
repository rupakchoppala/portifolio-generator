import express from 'express';
const router=express.Router();
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from '../models/user.js';
 //post request for the signin functionality
 router.post('/signup',async(req,res)=>{
    try{
        const {firstname,lastname,email,password}=req.body;
        //validate the input
        if(!firstname||!lastname||!email||!password){
           return res.send({ message:"All field are required:name ,email,password.",
            success:false
        });
        }
        //2.check if the user exists are not
        const existingUser=await User.findOne({email})
        if(existingUser){
            return res.send({
                message:"user is already existed",
                success:false
            })
        }
        //3.Hash  the password
        const hashPassword=await bcrypt.hash(password,10);
        //4.creating the new user
        const newUser=new User({
            firstname,
            lastname,
            email,
            password:hashPassword
        })
        //5.save the user
        await newUser.save();
        return res.send({
            message:"user registerd successfully",
            success:true
        })

    }
    catch(err){
        console.error('Error during signup:', err); // Log the error for debugging
        return res.send({
            message: 'An error occurred during signup. Please try again later.',
            success: false,
        });

    }
 })
 export default router;