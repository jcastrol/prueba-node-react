import React, { useState } from "react";

const RenderEmpleado = ({ empleado, children }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <section className="accordion">
      <input
        type="checkbox"
        name={`collapse${empleado.id}`}
        id={`handle${empleado.id}`}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <h2 className="handle">
        <label htmlFor={`handle${empleado.id}`}>
          {`Nombre: ${empleado.nombre} - Salario: ${empleado.salario} - Fecha de ingreso: ${empleado.fecha_ingreso}`}
        </label>
      </h2>
      {isChecked && (
        <div className="content">{children({ id_empleado: empleado.id })}</div>
      )}
    </section>
  );
};

export default RenderEmpleado;
