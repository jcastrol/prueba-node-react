const express = require('express');
const router = express.Router();
const { getAllEmpleados ,createEmpleado } = require('../../controllers/empleadoController'); 
const { authenticateToken, authorizeRoles } = require('../../middleware/authenticate');
const { createEmpleadoMiddleware, validateFilterMiddleware } = require('../../middleware/validate/empleado');


router.get('/', authenticateToken,validateFilterMiddleware, getAllEmpleados);
router.post('/', authenticateToken, authorizeRoles('ADMIN'),createEmpleadoMiddleware, createEmpleado);

module.exports = router;