// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Middleware
app.use(bodyParser.json());

// MongoDB setup (use MongoDB Atlas or local instance)
mongoose.connect('mongodb://localhost:27017/blogApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Schema and Model for Blog Post
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);

// Create a new blog post (POST /posts)
app.post('/posts', async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).send('Title and content are required');
    }

    const newPost = new Post({ title, content });
    await newPost.save();
    res.status(201).send(newPost);
});

// Get all blog posts (GET /posts)
app.get('/posts', async (req, res) => {
    const posts = await Post.find();
    res.status(200).send(posts);
});

// Get a single blog post by ID (GET /posts/:id)
app.get('/posts/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) {
        return res.status(404).send('Post not found');
    }
    res.status(200).send(post);
});

// Update a blog post (PUT /posts/:id)
app.put('/posts/:id', async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).send('Title and content are required');
    }

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    if (!updatedPost) {
        return res.status(404).send('Post not found');
    }

    res.status(200).send(updatedPost);
});

// Delete a blog post (DELETE /posts/:id)
app.delete('/posts/:id', async (req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
        return res.status(404).send('Post not found');
    }
    res.status(204).send();
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
