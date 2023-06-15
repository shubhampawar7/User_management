const express=require("express");
const mongoose=require("mongoose")
const url="mongodb://localhost:27017/User";
const app=express();

//DB CONNECTIVITY START
const connect=mongoose.connect(url,{useNewUrlParser:"true"})
.then(()=>{
    console.log("db connected ")
},
(err)=>{
    console.log("error while connecting ",err)

})
//DB CONNECTIVITY END

app.use(express.json())

//ROUTERS START
const UserRoute=require("./routes/LoginUser")
//ROUTERS END


//------------------
app.use("/",UserRoute)
//------------------


app.listen(7000,()=>{
    console.log("server started on port 7000")
})



