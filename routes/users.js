const express = require('express');
const { check, body } = require('express-validator')

const userController = require('../controller/users');

const router = express.Router();

router.post('/deleteUserPost', userController.postDeleteUserPost);

router.put('/updateUser', userController.updateUser);


module.exports = router;