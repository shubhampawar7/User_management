const express=require("express");

const User=require("../models/LoginUser")


//Fetch user data
const Getdata=async(req,res)=>{
    try {
        const data= await User.find();
        res.json(data)
        
    } catch (error) {
        console.log(error)
        
    }
}

//Add new user post
const Adduser=async (req,res)=>{
    const newuser=new User({
        name:req.body.name,
        username:req.body.username,
        password:req.body.password
    });
    try {
        const user= await newuser.save()
        res.json(user)
        
    } catch (error) {
        console.log(error)
        
    }
}

//find user byid
const FindUser=async(req,res)=>{
    try {
        const SingleUser=await User.findById(req.params.id)
        res.json(SingleUser)
    } catch (error) {
        console.log(error)
    }
}


//update user byid
const UpdateUser=async(req,res)=>{
    try {
        const UpdateUser=await User.findById(req.params.id)
        UpdateUser.name=req.body.name
        UpdateUser.username=req.body.username
        UpdateUser.password=req.body.password

        const newdata=await UpdateUser.save()
        res.json(newdata)
       
    } catch (error) {
        console.log(error)
    }
}

module.exports={Getdata,Adduser,FindUser,UpdateUser}

