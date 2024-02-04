const express = require('express');
const router = express.Router();
const postsController = require('../controller/postsController');

router.get('/', postsController.getAllPosts);
router.post('/create', postsController.createPost);
router.get('/:postId', postsController.getPostById);

module.exports = router;
