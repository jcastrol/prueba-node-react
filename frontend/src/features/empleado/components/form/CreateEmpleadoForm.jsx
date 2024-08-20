import React, { useState } from 'react';
import { createEmpleado } from '../../../../services/empleados';
import InputField from '../../../common/components/InputField';

const CreateEmpleadoForm = () => {
  const [nombre, setNombre] = useState('');
  const [salario, setSalario] = useState('');
  const [fechaIngreso, setFechaIngreso] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newEmpleado = { nombre, salario: parseFloat(salario), fecha_ingreso: new Date(fechaIngreso) };
      await createEmpleado(newEmpleado);
      setNombre('');
      setSalario('');
      setFechaIngreso('');
    } catch (err) {
      setError('Failed to create empleado');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{padding:"20px 20px" }}>
      <h2>Crear Empleado</h2>
      {error && <p>{error}</p>}
      <div  style={{flexDirection:'row', width: '500px'}}>
      <InputField
        label="Nombre"
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
        placeholder="Nombre"
       // className={'inputBox'}
        
      />
      <InputField
        label="Salario"
        type="text"
        value={salario} onChange={(e) => setSalario(e.target.value)}
        required
        step="0.01" 
        placeholder="Salario"
       // className={'inputBox'}
        
      />
      <InputField
        label="Fecha de Ingreso"
        type="date"
        value={fechaIngreso}
        onChange={(e) => setFechaIngreso(e.target.value)}
        required
        
       // className={'inputBox'}
        
      />
      </div>
      
     
      <button className="button" type="submit">Create Empleado</button>
    </form>
  );
};

export default CreateEmpleadoForm;
