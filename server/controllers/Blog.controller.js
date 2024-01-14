
const { Blog } = require("../models/Blog.model")
const BlogsController = {


    getAll: async (req, res) => {
        try {
            const blogs = await Blog.find({})
            res.status(200).send(blogs)

        } catch (error) {
            res.status(404).send(error)
        }

    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const target = await Blog.findById(id)
            res.status(200).send(target)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    add: async (req, res) => {
        try {
            const { image, name, pofsi } = req.body
            const newBolg = new Blog({ image, name, pofsi })
            await newBolg.save()
            res.send("item add")
        } catch (error) {
            res.status(404).send(error)
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            await Blog.findByIdAndUpdate(id, { ...req.body })
            res.send("itme edit")


        } catch (error) {
            res.status(404).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await Blog.findByIdAndDelete(id)
            const blogs =await Blog.find({})
            res.send(blogs)
        } catch (error) {
            res.send(error)
        }

    }
}

module.exports = { BlogsController }