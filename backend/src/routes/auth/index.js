const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController'); 
const {refreshTokenMiddleware, loginMiddleware, registerMiddleware} = require('../../middleware/validate/auth')

router.post('/register', registerMiddleware, authController.register);
router.post('/login', loginMiddleware, authController.login);
router.post('/refresh-token', refreshTokenMiddleware, authController.refreshAccessToken);
router.post('/logout', refreshTokenMiddleware, authController.logout);

module.exports = router;