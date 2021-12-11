const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const helper = require('./test_helper')

beforeEach(async () => {
    await Blog.deleteMany({})
    await Blog.insertMany(helper.initialBlogPosts)
})


test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
})

test('all blog posts are returned', async () => {
    const res = await api.get('/api/blogs')
    expect(res.body).toHaveLength(helper.initialBlogPosts.length)
})

test('blog id key called id', async () => {
    const blogs = await helper.blogsInDb()
    for (const blog of blogs) {
        expect(blog.id).toBeDefined()
    }
})

test('if no value in like, it is defaulted to 0', async () => {
    const newBlog = {
        author: "Maöldfjk",
        title: "lösdfj",
        url: "hmmm.com/hm",
        date: new Date()
    }
    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(200)
        .expect('Content-Type', /application\/json/)
    
    const blogsAtEnd = await helper.blogsInDb()
    const blogInQuestion = blogsAtEnd.filter(n => n.url === newBlog.url)[0]
    expect(blogInQuestion.likes).toBe(0)
    
})

test('a specific blog post is within the returned blog posts', async () => {
    const res = await api.get('/api/blogs')
    const contents = res.body.map(r => r.title)

    expect(contents).toContain('Child support in Sudan')
})

test('a valid blog can be added', async () => {
    const newBlog = {
        author: "Maöldfjk",
        title: "lösdfj",
        url: "hmmm.com/hm",
        likes: 1,
        date: new Date()
    }
    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(200)
        .expect('Content-Type', /application\/json/)
    
    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogPosts.length + 1)

    const contents = blogsAtEnd.map(r => r.title)
    expect(contents).toContain('lösdfj')
})

test('blog without url is not added', async () => {
    const newBlog = {
        author: "Maöldfjk",
        title: "lösdfj",
        likes: 1,
        date: new Date()
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(400)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogPosts.length)
})
  
afterAll(async () => {
    mongoose.connection.close()
    await new Promise(resolve => setTimeout(() => resolve(), 500))
})