const express = require("express")
const bodyParser= require("body-parser")
const mongoose = require("mongoose");
const { redirect } = require("express/lib/response");
const ejs = require("ejs")



const app= express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine' , 'ejs');
app.use(express.static("css"));

mongoose.connect("mongodb://localhost:27017/websiteDB")

const userSchema = new mongoose.Schema({
    email : String,
    password : String,
})

const User = mongoose.model("User" , userSchema);

app.get("/" , function(req , res){
   res.render("index");
})

app.get("/joinus" , function(req , res){
    res.render("joinus")
} )
app.post("/" ,function(req , res){
    const emailU=req.body.email;
    const passU= req.body.pass;
    // console.log(email)
    // console.log(pass)
    const newuser= new User({
        email : emailU,
        password : passU,
    })
    newuser.save(function(err){
        if(err){
            console.log(err);
        }else{
            res.render("thankyou")
        }
    });

    // res.redirect("/");
})
app.listen(3000  , function(req , res){
    console.log("server sucessfully started in 3000")
})
