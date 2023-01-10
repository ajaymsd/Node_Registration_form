const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/workshopRegistration").then(()=>{
    console.log("Mongo DB Connected");
}).catch(()=>{
    console.log("Error in connectivity");
})

const registerSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        path:'name'
    },
    lname:{
        type:String,
        required:true,
        path:'lname'
    },
    mail:{
        type:String,
        required:true,
        path:'mail'
    },
    phone:{
        type:String,
        required:true,
        path:'phone'
    },
    college:{
        type:String,
        required:true,
        path:'college'
    },
    gender:{
        type:String,
        required:true,
        path:'gender'
    },
    age:{
        type:String,
        required:true,
        path:'age'
    },
   
})

const collection=new mongoose.model("collection2",registerSchema)
module.exports=collection;