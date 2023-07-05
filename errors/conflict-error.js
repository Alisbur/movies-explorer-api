const { DEFAULT_CONFLICT_ERROR_MESSAGE, DEFAULT_CONFLICT_ERROR_CODE } = require('../utils/error-messages');

class ConflictError extends Error {
  constructor(message = DEFAULT_CONFLICT_ERROR_MESSAGE) {
    super(message);
    this.statusCode = DEFAULT_CONFLICT_ERROR_CODE;
  }
}

module.exports = ConflictError;
