const mongoose = require("mongoose")

const Blog = mongoose.model("Blogs", new mongoose.Schema({

    image: String,
    name: String,
    pofsi: String


}))
module.exports = { Blog }