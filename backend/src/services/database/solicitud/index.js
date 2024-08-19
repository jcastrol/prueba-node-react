const prisma = require('../../../config/prisma/prisma');
const createSolicitud = async (data) => {
    return await prisma.solicitud.create({ data });
};

const findSolicitudesByEmpleadoId = async (id_empleado) => {
    return await prisma.solicitud.findMany({ where: {id_empleado} });
};

const deleteSolicitud = async (id) => {
    return await prisma.solicitud.findMany({ where: {id}});
};
module.exports = {
    createSolicitud,
    findSolicitudesByEmpleadoId,
    deleteSolicitud
};