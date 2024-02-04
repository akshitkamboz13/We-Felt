const Post = require('../model/postsModel');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createPost = async (req, res, next) => {
    try {
      const { name, title, context } = req.body;
  
      const newPost = new Post({
        name,
        title,
        context,
      });
  
      await newPost.save();
  
      res.status(201).json({ message: 'Post created successfully' });
    } catch (error) {
      next(error);
    }
  };