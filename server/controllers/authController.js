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
 //login route
 router.post('/login',async(req,res)=>{
    console.log(req.body);
    try{
        const {email,password}=req.body;
        //1>validate user requset
        if(!email ||! password){
            return res.send({
                message:"Email and password required",
                success:false
            });

        }
        //2.check if the user exist
        const user=await User.findOne({email}).select('+password');
        if(!user){
            return res.send({
                message:"user not found",
                success:false
            })
        }
        //3.check the password is valid or not
        if(!user.password){
            return res.send({
                message:"user apssword is misssing",
                success:false
            })
        }
       const isMatch=await bcrypt.compare(password,user.password);
       if(!isMatch){
        return res.send({
            message:"Invalid credentials",
            success:false
        })
       }
       //generate token
       const token=jwt.sign({userId:user._id},process.env.SECRET_KEY,{expiresIn:'1d'});
       return res.send({
        message:"Login successful for the user",
        success:true,
        token
       });

    }
    catch(err){
        return res.send({
            message:"server error",
            success:false,
           });
    }
 })
 export default router;