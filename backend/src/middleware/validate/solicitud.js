const { validateCreateSolicitud,validateDeleteSolicitud, validateGetSolicitudesByEmpleadoId } = require("../../services/validate/solicitudValidate");

const createSolicitudMiddleware = (req, res, next) => {
    try {
        validateCreateSolicitud(req.body);
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
};
const getSolicitudesByEmpleadoMiddelware =(req, res, next) => {
    
    try {
        validateGetSolicitudesByEmpleadoId(req.query);
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
};

const deleteSolicitudMiddleware = (req, res, next) => {
    try {
        validateDeleteSolicitud(req.body);
        next();
    } catch (error) {
        res.status(400).json({ error: error.errors });
    }
};


module.exports = {
    createSolicitudMiddleware,
    deleteSolicitudMiddleware,
    getSolicitudesByEmpleadoMiddelware
};