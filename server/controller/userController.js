const User = require('../model/userModel');
const Post = require('../model/postsModel');

const createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    next(error);
  }
};

const addSavedPost = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const { userId } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the postId already exists in savedPosts
    if (user.savedPosts.some((post) => post.postId === postId)) {
      return res.json({ message: 'Post already saved' });
    }

    // Add the postId to savedPosts
    user.savedPosts.push({ postId });
    await user.save();

    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

const getUserWithSavedPosts = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    next(error);
  }
};
const deleteSavedPost = async (req, res, next) => {
    try {
      const { userId, postId } = req.params;
  
      // Find the user by userId and remove the postId from the savedPosts array
      const user = await User.findByIdAndUpdate(
        userId,
        { $pull: { savedPosts: { postId } } },
        { new: true }
      );
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
  

module.exports = { createUser, loginUser, addSavedPost, getUserWithSavedPosts, deleteSavedPost };
