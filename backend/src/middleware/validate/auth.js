const authValidate= require('../../services/validate/authValidate');

const registerMiddleware = (req, res, next) => {
    try {
        authValidate.validateRegister(req.body);
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
};

const loginMiddleware = (req, res, next) => {
    try {
        authValidate.validateLogin(req.body);
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
};

const refreshTokenMiddleware = (req, res, next) => {
    try {
        authValidate.validateRefreshToken(req.body);
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
};

module.exports = {
    registerMiddleware,
    loginMiddleware,
    refreshTokenMiddleware
};