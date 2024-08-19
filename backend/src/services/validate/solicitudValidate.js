const {
  solicitudSchema,
  solicitudByempleadoIdSchema,
  deleteSolicitudSchema,
} = require("../../config/zod/models/solicitud");

const validateCreateSolicitud = (body) => {
  return solicitudSchema.parse(body);
};
const validateDeleteSolicitud = (body) => {
  return deleteSolicitudSchema.parse(body);
};
const validateGetSolicitudesByEmpleadoId = (body) => {
  return solicitudByempleadoIdSchema.parse(body);
};

module.exports = {
  validateCreateSolicitud,
  validateGetSolicitudesByEmpleadoId,
  validateDeleteSolicitud,
};
