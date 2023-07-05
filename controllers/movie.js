const Movie = require('../models/movie');
const ValidationError = require('../errors/validation-error');
const NotFoundError = require('../errors/not-found-error');
const ForbiddenError = require('../errors/forbidden-error');
const ConflictError = require('../errors/conflict-error');

const getAllMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((data) => res.send({ data }))
    .catch(next);
};

const deleteMovieById = (req, res, next) => {
  Movie.findOne({ movieId: req.params.movieId })
    .orFail(() => {
      throw new NotFoundError('фильм не найден');
    })
    .then((movie) => movie.owner.equals(req.user._id))
    .then((match) => {
      if (!match) {
        throw new ForbiddenError('только владелец фильма может его удалить');
      }
      return Movie.findOneAndRemove({ movieId: req.params.movieId });
    })
    .then((movie) => res.send({ data: movie }))
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new ValidationError('переданы некорректные данные фильма'));
      } else {
        next(err);
      }
    });
};

const createMovie = (req, res, next) => {
  const body = { ...req.body, owner: req.user._id };
  Movie.create(body)
    .then((movie) => res.status(201).send({ data: movie }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new ValidationError('переданы некорректные данные фильма'));
      } else if (err.code === 11000) {
        next(new ConflictError('Id фильма уже используется'));
      } else {
        next(err);
      }
    });
};

module.exports = { getAllMovies, deleteMovieById, createMovie };
