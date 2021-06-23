class HttpError extends Error {
  constructor(errorMessage, errorCode) {
    super(errorMessage);
    this.errorCode = errorCode;
  }
}

module.exports = HttpError;