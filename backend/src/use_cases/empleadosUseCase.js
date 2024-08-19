const empleadoService =require('../services/database/empleado')

const createEmpleado = (data) => empleadoService.createEmpleado(data);

const getAllEmpleados = (page, pageSize,filter  ) => {
    const skip = (page - 1) * pageSize;
    const take = parseInt(pageSize);
    return empleadoService.findEmpleados(skip, take, filter );
};

module.exports = { createEmpleado, getAllEmpleados };