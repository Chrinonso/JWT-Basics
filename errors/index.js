const CustomAPIError = require('./custom-error')
const badRequestError = require('./bad-request')
const unauthenticatedError = require('./unauthenticated')

module.exports = {
    CustomAPIError,
    badRequestError,
    unauthenticatedError,
}