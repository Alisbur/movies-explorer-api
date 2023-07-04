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
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().regex(REGEXP_URL),
    email: Joi.string().required().regex(REGEXP_EMAIL),
    password: Joi.string().required(),
  }),
});

const validateGetUserData = celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().hex().length(24),
  }),
});

const validateUpdateMyProfile = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
  }),
});

const validateUpdateMyAvatar = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().pattern(REGEXP_URL),
  }),
});

const validateDeleteCard = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().hex().length(24),
  }),
});

const validateAddCard = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().pattern(REGEXP_URL),
  }),
});

const validateAddLike = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().hex().length(24),
  }),
});

const validateDeleteLike = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().hex().length(24),
  }),
});

module.exports = {
  validateSignIn,
  validateSignUp,
  validateGetUserData,
  validateUpdateMyProfile,
  validateUpdateMyAvatar,
  validateDeleteCard,
  validateAddCard,
  validateAddLike,
  validateDeleteLike,
};
