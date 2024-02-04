const User = require('../model/userModel');

const createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({user});
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (user) {
      res.status(200).json({user});
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
};

module.exports = { createUser, loginUser };
