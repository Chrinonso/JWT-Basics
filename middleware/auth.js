const jwt = require ('jsonwebtoken')
const { unauthenticatedError } = require('../errors')


const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new unauthenticatedError('No token provided')
    } 

    // getting the token nmber from the authHeader, split at the space and take the second element

    const token = authHeader.split(' ') [1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {id, username } = decoded
        req.user = {id, username }
        next()
       
    } catch (error) {
        throw new unauthenticatedError('Not authorized to access this route')
    }

    
}

module.exports = authenticationMiddleware