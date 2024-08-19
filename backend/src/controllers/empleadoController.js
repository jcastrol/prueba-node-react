const empleadoUseCase = require("../use_cases/empleadosUseCase");
const { createFilterObject } = require("../utils/filters/empleado");

const getAllEmpleados = async (req, res) => {
  const { page = 1, pageSize = 10, ...filterParams } = req.query;
  try {
    const filters = createFilterObject(filterParams);
    const empleados = await empleadoUseCase.getAllEmpleados(
      page,
      pageSize,
      filters
    );
    res.json(empleados);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Invalid filter parameters", details: error.errors });
  }
};

const createEmpleado = async (req, res) => {
  const { nombre, fecha_ingreso, salario } = req.body;
  try {
    const empleado = await empleadoUseCase.createEmpleado({
      nombre,
      fecha_ingreso: new Date(fecha_ingreso),
      salario,
    });
    res.status(201).json(empleado);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Internal error", details: error.errors });
  }
};

module.exports = { getAllEmpleados, createEmpleado };
