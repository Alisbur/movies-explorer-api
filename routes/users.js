const usersRouter = require('express').Router();
const userController = require('../controllers/user');
const { validateGetUserData, validateUpdateMyProfile, validateUpdateMyAvatar } = require('../middlewares/validations');

usersRouter.get('/', userController.getAllUsers);
usersRouter.get('/me', userController.getCurrentUser);
usersRouter.get('/:id', validateGetUserData, userController.getUserById);
usersRouter.patch('/me', validateUpdateMyProfile, userController.updateProfile);
usersRouter.patch('/me/avatar', validateUpdateMyAvatar, userController.updateAvatar);

module.exports = usersRouter;
