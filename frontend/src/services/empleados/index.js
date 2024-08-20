import api from "../../config/api";

export const getEmpleados = async () => {
    const response = await api.get('empleado/');
    return response.data;
  };

  export const createEmpleado = async (data) => {
    const response = await api.post('empleado/', data);
    return response.data;
  };