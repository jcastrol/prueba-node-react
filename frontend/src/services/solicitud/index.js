import api from "../../config/api";

export const getSolicitudesByEmpleado = async (empleadoId) => {
    const response = await api.get(`/solicitud?id_empleado=${empleadoId}`); // Cambia el endpoint según tu ruta
    return response.data;
  };

  export const createSolicitud = async (data) => {
    const response = await api.post('/solicitud', data); // Cambia el endpoint según tu ruta
    return response.data;
  };