const {
  empleadoSchema,
  empleadoFilterSchema,
} = require("../../config/zod/models/empleado");
const { createFilterObject } = require("../../utils/filters/empleado");

const validateCreateEmpleado = (body) => {
  return empleadoSchema.parse(body);
};
const validateFilterEmpleado = (filters) => {
  const filter =createFilterObject(filters)
  
  return empleadoFilterSchema.parse(filter);
};

module.exports = {
  validateCreateEmpleado,
  validateFilterEmpleado,
};
