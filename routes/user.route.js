const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyToken = require('../middleware/verifyToken');


// router.use(verifyToken);

router.post('/user/signup', userController.signup);
router.post('/user/login', userController.login);
router.get('/user/me', verifyToken, userController.getMe);


module.exports = router;