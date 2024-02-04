// userRoute.js
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/signup', userController.createUser);
router.post('/login', userController.loginUser);
router.put('/:postId', userController.addSavedPost); // Add a new route for the PUT request
router.get('/:userId', userController.getUserWithSavedPosts); // New route for retrieving user with saved posts
router.delete('/:userId/:postId', userController.deleteSavedPost);

module.exports = router;


module.exports = router;
