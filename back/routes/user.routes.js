const router = require('express').Router();
const userController = require('../controllers/user.controller');

// user DB 
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);

module.exports = router;
