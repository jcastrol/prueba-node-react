import React, { useEffect, useState } from "react";
import { getEmpleados } from "../../../../services/empleados";
import RenderEmpleado from "./EmpleadoRender";

const EmpleadosList = ({ children }) => {
  const [empleados, setEmpleados] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getEmpleadosfc = async () => {
      try {
        const data = await getEmpleados();
        setEmpleados(data);
      } catch (err) {
       // console.log(err);
        setError("Failed to fetch empleados");
      }
    };

    getEmpleadosfc();
  }, []);
  return (
    <div style={{ padding: "20px 20px" }}>
      <h1>Empleados</h1>
      {error && <p>{error}</p>}
      {empleados.length > 0 &&
        empleados.map((empleado) => (
          <RenderEmpleado key={empleado.id} empleado={empleado}>
            {children}
          </RenderEmpleado>
        ))}
    </div>
  );
};

// const EmpleadosList = ({ children }) => {
//   const [empleados, setEmpleados] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const getEmpleadosfc = async () => {
//       try {
//         const data = await getEmpleados();
//         setEmpleados(data);
//       } catch (err) {
//         console.log(err);
//         setError("Failed to fetch empleados");
//       }
//     };

//     getEmpleadosfc();
//   }, []);

//   return (
//     <div>
//       <h1>Empleados</h1>
//       {error && <p>{error}</p>}
//       {empleados.length >0 && empleados.map((empleado) => (
//       <section key={empleado.id} className="accordion">
//         <input type="checkbox" name={`collapse${empleado.id}`} id={`handle${empleado.id}`}  />
//         <h2 className="handle">
//           <label htmlFor={`handle${empleado.id}`}>{empleado.nombre} - salario: {empleado.salario} - fecha ingreso: {empleado.fecha_ingreso}</label>
//         </h2>
//         <div className="content">
//             {children({ id_empleado:empleado.id })}
//         </div>
//       </section>
//     ))}
//     </div>
//   );
// };

export default EmpleadosList;
