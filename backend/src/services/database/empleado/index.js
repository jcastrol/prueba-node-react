const prisma = require('../../../config/prisma/prisma');
const createEmpleado = async (data) => {
    return await prisma.empleado.create({ data });
};

const findEmpleados = async (skip, take,filter) => {
    return await prisma.empleado.findMany({ where: filter, skip, take });
};
module.exports = {
    createEmpleado,
    findEmpleados,

};