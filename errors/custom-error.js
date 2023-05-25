class CustomAPIError extends Error {
  // constructor that takes in all the properties and methods of the built in Javascript ERROR
  
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}

module.exports = CustomAPIError



