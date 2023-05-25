const CustomAPIError = require('./custom-error')
const { StatusCodes } = require('http-status-codes')

class unauthenticatedError extends CustomAPIError {
    // constructor that takes in all the properties and methods of the built in Javascript ERROR
    
    constructor(message) {
      super(message)
      this.statusCode = StatusCodes.UNAUTHORIZED
    }
  }
  
  module.exports = unauthenticatedError