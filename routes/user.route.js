const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');


router.post('/user/signup', userController.signup);
router.post('/user/login', userController.login);


module.exports = router;