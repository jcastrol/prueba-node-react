import React, { useEffect, useState } from "react";
import { getSolicitudesByEmpleado } from "../../../../services/solicitud";

const SolicitudesList = ({ id_empleado }) => {
  const [solicitudes, setSolicitudes] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchSolicitudes = async () => {
      if (id_empleado) {
        try {
            
          const data = await getSolicitudesByEmpleado(id_empleado);
          setSolicitudes(data);
        } catch (err) {
         // console.log(err);
          setError("Failed to fetch solicitudes");
        }
      }
    };

    fetchSolicitudes();
  }, [id_empleado]);
  return (
    <>
      {error && <p>{error}</p>}
      {solicitudes.length > 0 ? (
        <ul>
          {solicitudes.map((solicitud) => (
            <li key={solicitud.id}>
              {solicitud.codigo} - {solicitud.descripcion} - {solicitud.resumen}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay solicitudes para este empleado.</p>
      )}
    </>
  );
};
export default  SolicitudesList