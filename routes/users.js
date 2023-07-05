const usersRouter = require('express').Router();
const userController = require('../controllers/user');
const { validateUpdateMyProfile } = require('../middlewares/validations');

usersRouter.get('/me', userController.getCurrentUser);
usersRouter.patch('/me', validateUpdateMyProfile, userController.updateProfile);

module.exports = usersRouter;
