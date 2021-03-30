const express = require('express');
const { check, body } = require('express-validator')

const userController = require('../controller/users');

const router = express.Router();

router.get('/getUsers', authController.getUsers);


module.exports = router;