const solicitudUseCase = require("../use_cases/solicitudUseCase");

const getSolicitudes = async (req, res) => {
  const { id_empleado } = req.query;
  try {
    const solicitudes = await solicitudUseCase.getSolicitudesByEmpleado(
      id_empleado
    );
    res.json(solicitudes);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Invalid id_empleado format", details: error.errors });
  }
};

const createSolicitud = async (req, res) => {
  const { codigo, descripcion, resumen, id_empleado } = req.body;
  try {
    const solicitud = await solicitudUseCase.createSolicitud({
      codigo,
      descripcion,
      resumen,
      id_empleado,
    });
    res.status(201).json(solicitud);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create solicitud", details: error.message });
  }
};

const deleteSolicitud = async (req, res) => {
  try {
    await solicitudUseCase.deleteSolicitudById(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to delete solicitud", details: error.message });
  }
};

module.exports = { getSolicitudes, createSolicitud, deleteSolicitud };
