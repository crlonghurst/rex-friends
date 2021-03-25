const express = require('express');
const { check, body } = require('express-validator')

const postController = require('../controller/posts');

const router = express.Router();

router.get('/getPosts', authController.getPosts);


module.exports = router;