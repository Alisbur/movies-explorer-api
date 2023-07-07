const { DEFAULT_AUTH_ERROR_MESSAGE, DEFAULT_AUTH_ERROR_CODE } = require('../utils/error-messages');

class AuthError extends Error {
  constructor(message = DEFAULT_AUTH_ERROR_MESSAGE) {
    super(message);
    this.statusCode = DEFAULT_AUTH_ERROR_CODE;
  }
}

module.exports = AuthError;
