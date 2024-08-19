const { z } = require("zod");

const empleadoSchema = z.object({
  id: z.number().int().optional(),
  fecha_ingreso: z.string().datetime(),
  nombre: z.string().max(50),
  salario: z.number(),
  solicitudes: z.array(z.any()).optional(),
});

const empleadoFilterSchema = z.object({
    id: z.string().optional().transform(val => {
      const num = parseInt(val);
      return isNaN(num) ? undefined : num;
    }).refine(val => val === undefined || Number.isInteger(val), {
      message: "ID must be a valid integer",
    }),
    fecha_ingreso_min: z.string().optional().transform(val => {
      const date = new Date(val);
      return isNaN(date.getTime()) ? undefined : date;
    }).refine(val => val === undefined || !isNaN(val.getTime()), {
      message: "Minimum date must be a valid date",
    }),
    fecha_ingreso_max: z.string().optional().transform(val => {
      const date = new Date(val);
      return isNaN(date.getTime()) ? undefined : date;
    }).refine(val => val === undefined || !isNaN(val.getTime()), {
      message: "Maximum date must be a valid date",
    }),
    nombre: z.string().max(50).optional(),
    salario_min: z.string().optional().transform(val => {
      const num = parseFloat(val);
      return isNaN(num) ? undefined : num;
    }).refine(val => val === undefined || !isNaN(val), {
      message: "Minimum salary must be a valid number",
    }),
    salario_max: z.string().optional().transform(val => {
      const num = parseFloat(val);
      return isNaN(num) ? undefined : num;
    }).refine(val => val === undefined || !isNaN(val), {
      message: "Maximum salary must be a valid number",
    }),
  });

module.exports = {
  empleadoSchema,
  empleadoFilterSchema
};
