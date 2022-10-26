const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyToken = require('../middleware/verifyToken');



router.post('/user/signup', userController.signup);
router.use(verifyToken);
router.post('/user/login', userController.login);
router.get('/user/me', userController.getMe);


module.exports = router;