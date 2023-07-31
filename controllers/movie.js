const Movie = require('../models/movie');
const ValidationError = require('../errors/validation-error');
const NotFoundError = require('../errors/not-found-error');

const getAllMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((data) => res.send({ data }))
    .catch(next);
};

const deleteMovieById = (req, res, next) => {
  Movie.findOneAndRemove({ movieId: req.params.movieId, owner: req.user._id })
    .orFail(() => {
      throw new NotFoundError('фильм не найден');
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
      } else {
        next(err);
      }
    });
};

module.exports = { getAllMovies, deleteMovieById, createMovie };
