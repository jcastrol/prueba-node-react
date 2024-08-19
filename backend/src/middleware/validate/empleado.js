const { validateCreateEmpleado, validateFilterEmpleado } = require("../../services/validate/empledoValidate");

const createEmpleadoMiddleware = (req, res, next) => {
    try {
        validateCreateEmpleado(req.body);
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
};
const validateFilterMiddleware=(req, res, next) => {
    try {
        validateFilterEmpleado(req.body);
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
};

module.exports = {
    createEmpleadoMiddleware,
    validateFilterMiddleware
};