const express = require("express")
const app = express()
const BlogsRouter= require("./routes/Blog.routes")
const cors = require("cors")
const mongoose = require("mongoose")
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://sahibibadov:123sahib123@sahib.dxzkrwt.mongodb.net/").then(res=>{
    console.log("database connected")
})
app.use("/blogs",BlogsRouter)
app.listen(8000,()=>{
    console.log("server start")
})