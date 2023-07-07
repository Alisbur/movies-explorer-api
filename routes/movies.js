const moviesRouter = require('express').Router();
const movieController = require('../controllers/movie');
const { validateDeleteMovie, validateAddMovie } = require('../middlewares/validations');

moviesRouter.get('/', movieController.getAllMovies);
moviesRouter.delete('/:movieId', validateDeleteMovie, movieController.deleteMovieById);
moviesRouter.post('/', validateAddMovie, movieController.createMovie);

module.exports = moviesRouter;
