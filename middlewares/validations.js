const { celebrate, Joi } = require('celebrate');
const { REGEXP_URL, REGEXP_EMAIL } = require('../utils/regex');

const validateSignIn = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().regex(REGEXP_EMAIL),
    password: Joi.string().required(),
  }),
});

const validateSignUp = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().regex(REGEXP_EMAIL),
    password: Joi.string().required(),
  }),
});

const validateUpdateMyProfile = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().regex(REGEXP_EMAIL),
  }),
});

const validateDeleteMovie = celebrate({
  params: Joi.object().keys({
    movieId: Joi.number().required(),
  }),
});

const validateAddMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().regex(REGEXP_URL),
    trailerLink: Joi.string().required().regex(REGEXP_URL),
    thumbnail: Joi.string().required().regex(REGEXP_URL),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

module.exports = {
  validateSignIn,
  validateSignUp,
  validateUpdateMyProfile,
  validateDeleteMovie,
  validateAddMovie,
};
