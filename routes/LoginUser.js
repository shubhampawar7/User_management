const express=require("express");
const router=express.Router();
const User=require("../models/LoginUser")


// Routers
const UserController=require("../controllers/UserController")


//----------------------------

//Get request 
router.get("/",UserController.Getdata)

//New User Post
router.post("/newuser",UserController.Adduser)

//find byid
router.get("/:id",UserController.FindUser)

//Update user info
router.put('/update/:id',UserController.UpdateUser)

//----------------------------



module.exports=router