const express = require("express")
const bodyParser= require("body-parser")
const mongoose = require("mongoose")

const app= express();
app.use(express.static("css"));

app.get("/" , function(req , res){
   res.sendFile( __dirname + "/index.html");
})

app.listen(3000  , function(req , res){
    console.log("server sucessfully started in 3000")
})
