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

  exports.getPostById = async (req, res, next) => {
    try {
      const { postId } = req.params;
  
      const post = await Post.findById(postId);
  
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      res.json(post);
    } catch (error) {
      console.error("Error fetching post by ID:", error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  