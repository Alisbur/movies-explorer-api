const { DEFAULT_NOT_FOUND_ERROR_MESSAGE, DEFAULT_NOT_FOUND_ERROR_CODE } = require('../utils/error-messages');

class NotFoundError extends Error {
  constructor(message = DEFAULT_NOT_FOUND_ERROR_MESSAGE) {
    super(message);
    this.statusCode = DEFAULT_NOT_FOUND_ERROR_CODE;
  }
}

module.exports = NotFoundError;
