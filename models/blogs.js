const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/blogs",{ useNewUrlParser: true })

let blogsSchema = {
    title:String,
    img:String,
    body:String
}

var blog = mongoose.model("blog",blogsSchema)

module.exports = blog