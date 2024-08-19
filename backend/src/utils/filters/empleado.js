const createFilterObject = (filters) => {
    const { id, fecha_ingreso_min, fecha_ingreso_max, nombre, salario_min, salario_max } = filters;

   
    const filter = {
        ...(id && { id: parseInt(id) }), 
        ...(nombre && { nombre }), 
        ...(fecha_ingreso_min || fecha_ingreso_max) && { 
          fecha_ingreso: { 
            ...(fecha_ingreso_min && { gte: new Date(fecha_ingreso_min) }),
            ...(fecha_ingreso_max && { lte: new Date(fecha_ingreso_max) })
          }
        },
        ...(salario_min || salario_max) && { 
          salario: { 
            ...(salario_min && { gte: parseFloat(salario_min) }),
            ...(salario_max && { lte: parseFloat(salario_max) })
          }
        },
    };

    return filter;
};
module.exports = {
    createFilterObject
}