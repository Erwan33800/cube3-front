const router = require('express').Router();
const userController = require('../controllers/user.controller');

// user DB 
router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUserById);
// router.post('/', userController.createUser);
// router.put('/:id', userController.updateUser);
// router.delete('/:id', userController.deleteUser);

module.exports = router;
