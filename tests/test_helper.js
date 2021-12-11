const Blog = require('../models/blog')

const initialBlogPosts = [
    {
        author: "Vilhelm Toivonen",
        title: "How is this fun?",
        url: "google.com/iurl",
        likes: 1,
        date: new Date()
    },
    {
        author: "Vilhelm Toivonen",
        title: "How is this not fun by some people",
        url: "google.com/ölkj",
        likes: 2,
        date: new Date()
    },
    {
        author: "Eevert Toivonen",
        title: "Sport salary why so low",
        url: "google.com/hjl",
        likes: 1,
        date: new Date()
    },
    {
        author: "Alma Toivonen",
        title: "Child support in Sudan",
        url: "google.com/ohvb",
        likes: 1,
        date: new Date()
    }
]

const nonExistingId = async () => {
    const blog = new Note({
        author: "to be deleted soon",
        title: "where is this going",
        url: "google.com/aölfj",
        likes: 0,
        date: new Date()
    })
    await blog.save()
    await blog.remove()
  
    return blog._id.toString()
  }

const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
}

module.exports = {
    initialBlogPosts,
    nonExistingId,
    blogsInDb
}