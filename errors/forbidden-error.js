const { DEFAULT_FORBIDDEN_ERROR_MESSAGE, DEFAULT_FORBIDDEN_ERROR_CODE } = require('../utils/error-messages');

class ForbiddenError extends Error {
  constructor(message = DEFAULT_FORBIDDEN_ERROR_MESSAGE) {
    super(message);
    this.statusCode = DEFAULT_FORBIDDEN_ERROR_CODE;
  }
}

module.exports = ForbiddenError;
