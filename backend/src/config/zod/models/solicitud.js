const { z } = require("zod");

const solicitudSchema = z.object({
  id: z.number().int().optional(),
  codigo: z.string().max(50),
  descripcion: z.string().max(50),
  resumen: z.string().max(50),
  id_empleado: z.number().int(),
});

const deleteSolicitudSchema = z.object({
  id: z.number().int(),
});

const solicitudByempleadoIdSchema = z.object({
  id_empleado: z.string().refine(val => !isNaN(parseInt(val)), {
    message: "ID must be a valid integer",
  })
  .transform(val => parseInt(val))
});



module.exports = {
  solicitudSchema,
  deleteSolicitudSchema,
  solicitudByempleadoIdSchema
};
