const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authorization = require('../middleware/authorization');
const verifyToken = require('../middleware/verifyToken');



router.post('/user/signup', userController.signup);
router.post('/user/login', userController.login);
router.use(verifyToken);
router.get('/user/me', userController.getMe);

router.get('/user/candidates',  authorization('admin'), userController.getAllCandidates);
router.get('/user/managers',  authorization('admin'), userController.getAllManagers);


module.exports = router;