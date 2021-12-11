const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (req, res) => {
    const blogs = await Blog.find({})
    res.json(blogs.map(blog => blog.toJSON()))
})

blogsRouter.get('/:id', async (req, res) => {
    const blog = await Blog.findById(req.params.id)
    if (blog) {
        res.json(blog)
    }
    else {
        res.status(400).end()
    }
})

blogsRouter.delete('/:id', async (req, res) => {
    await Blog.findByIdAndRemove(req.params.id)
    res.status(204).end()
})

blogsRouter.post('/', async (req, res) => {
    const body = req.body

    const blog = new Blog({
        author: body.author,
        title: body.title,
        url: body.url,
        likes: "likes" in body ? body.likes : 0,
        date: new Date()
    })

    const savedBlog = await blog.save()
    res.json(savedBlog.toJSON())
})

blogsRouter.put('/:id', async (req, res) => {
    const body = req.body

    const blog = {
        author: body.author,
        title: body.title,
        url: body.url,
        likes: body.likes
    }

    const savedBlog = await Blog.findByIdAndUpdate(req.params.id, blog, { new: true })
    res.json(savedBlog.toJSON())
})

module.exports = blogsRouter