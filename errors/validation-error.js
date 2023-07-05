const { DEFAULT_VALIDATION_ERROR_MESSAGE, DEFAULT_VALIDATION_ERROR_CODE } = require('../utils/error-messages');

class ValidationError extends Error {
  constructor(message = DEFAULT_VALIDATION_ERROR_MESSAGE) {
    super(message);
    this.statusCode = DEFAULT_VALIDATION_ERROR_CODE;
  }
}

module.exports = ValidationError;
