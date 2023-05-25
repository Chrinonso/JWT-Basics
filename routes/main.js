const express = require('express');
const router = express.Router();

const { login, dashboard } = require('../controllers/main')

// use this autheentication middleware whenever you want to access the dashboard
const authMiddleware = require('../middleware/auth')


router.route('/dashboard').get(authMiddleware, dashboard)
router.route('/login').post(login)





module.exports = router;