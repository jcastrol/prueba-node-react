import React, { useState } from 'react';
import { createSolicitud } from '../../../../services/solicitud';
import InputField from '../../../common/components/InputField';


const CreateSolicitudForm = ({ empleadoId}) => {
  const [codigo, setCodigo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [resumen, setResumen] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newSolicitud = { codigo, descripcion, resumen, id_empleado: empleadoId };
      await createSolicitud(newSolicitud);
      setCodigo('');
      setDescripcion('');
      setResumen('');
    } catch (err) {
      setError('Failed to create solicitud');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Solicitud</h2>
      {error && <p>{error}</p>}
      <div  style={{flexDirection:'row', width: '500px'}}>
      <InputField
        label="Código"
        type="text"
        value={codigo} onChange={(e) => setCodigo(e.target.value)}
        required
        placeholder="Nombre"
       className={'inputBox'}
        
      />
      <InputField
        label="Descripción"
        type="text"
        value={descripcion} onChange={(e) => setDescripcion(e.target.value)}
        required
        placeholder="Nombre"
       // className={'inputBox'}
        
      />
      <InputField
        label="Código"
        type="text"
        value={resumen} onChange={(e) => setResumen(e.target.value)}
        required
        placeholder="Resumen"
       // className={'inputBox'}
        
      />
      </div>
     
      <button className="button" type="submit">Create Solicitud</button>
    </form>
  );
};

export default CreateSolicitudForm;