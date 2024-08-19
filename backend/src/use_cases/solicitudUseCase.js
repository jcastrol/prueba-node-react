const solicitudService = require('../services/database/solicitud');

const createSolicitud = (data) => solicitudService.createSolicitud(data);

const getSolicitudesByEmpleado = (id_empleado) => solicitudService.findSolicitudesByEmpleadoId(parseInt(id_empleado));

const deleteSolicitudById = (id) => solicitudService.deleteSolicitud(id);

module.exports = { createSolicitud, getSolicitudesByEmpleado, deleteSolicitudById };