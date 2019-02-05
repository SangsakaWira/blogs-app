const express = require("express")
const ejs = require("ejs")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const app = express()
let port = process.env.PORT || 3000

app.set("view engine","ejs")
app.use(express.static(__dirname+"/views"))
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({extended:true}))

let blog = require("./models/blogs")

app.get("/blogs",function(req,res){
    blog.find(function (err, data) {
        if (err) {
            res.send("Something went wrong")
        } else {
            res.send(data)
        }
    })
})

app.post("/blogs",function(req,res){
    blog.create(req.body,function(err,data){
        if(err){
            res.send("Something went wrong")
        }else{
            res.send("A blog is saved")
        }
    })
})

app.listen(port,function(){
    console.log("Server is running")
})