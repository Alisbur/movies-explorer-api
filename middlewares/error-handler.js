const { DEFAULT_SERVER_ERROR_MESSAGE, DEFAULT_SERVER_ERROR_CODE } = require('../utils/error-messages');

module.exports = (err, req, res, next) => {
  const { statusCode = DEFAULT_SERVER_ERROR_CODE, message } = err;
  res
    .status(statusCode)
    .send({
      message: statusCode === DEFAULT_SERVER_ERROR_CODE
        ? DEFAULT_SERVER_ERROR_MESSAGE
        : message,
    });
  next();
};
