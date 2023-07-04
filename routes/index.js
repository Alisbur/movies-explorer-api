const router = require('express').Router();
const auth = require('../middlewares/auth');
const { validateSignIn, validateSignUp } = require('../middlewares/validations');
const { login, createUser } = require('../controllers/user');
const NotFoundError = require('../errors/not-found-error');

router.post('/signin', validateSignIn, login);
router.post('/signup', validateSignUp, createUser);

router.use(auth);

router.use('/users', require('./users'));
router.use('/cards', require('./cards'));

router.use('/', (req, res, next) => next(new NotFoundError('Страница не найдена')));

module.exports = router;
