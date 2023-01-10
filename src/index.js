var express=require("express");
var app=express();
var hbs=require("hbs");
var path=require("path");
const collection = require("./mongodb");

const templatePath=path.join(__dirname,"../templates");

app.use(express.json())
app.use(express.static('public'));
app.use("/images", express.static(path.join(__dirname, "/public/images")));
app.set("view engine","hbs");
app.set("views",templatePath)
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
     res.render("registration");
})
app.get("/home",(req,res)=>{
    res.render("home");
})

app.post("/registration",async (req,res)=>{
    const data={
        name:req.body.name,
        lname:req.body.lname,
        mail:req.body.mail,
        phone:req.body.phone,
        college:req.body.college,
        gender:req.body.gender,
        age:req.body.age,
    }
    await collection.insertMany([data]);
    res.render("home");
})


app.listen(3000,()=>{
    console.log("Port connected");
})