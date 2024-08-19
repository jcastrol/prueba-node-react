const express = require("express");
const router = express.Router();
const {
  getSolicitudes,
  createSolicitud,
  deleteSolicitud,
} = require("../../controllers/solicitudController");
const {
  authenticateToken,
  authorizeRoles,
} = require("../../middleware/authenticate");
const {
  deleteSolicitudMiddleware,
  createSolicitudMiddleware,
  getSolicitudesByEmpleadoMiddelware,
} = require("../../middleware/validate/solicitud");

router.get(
  "/",
  authenticateToken,
  getSolicitudesByEmpleadoMiddelware,
  getSolicitudes
);
router.post(
  "/",
  authenticateToken,
  authorizeRoles("ADMIN"),
  createSolicitudMiddleware,
  createSolicitud
);
router.delete(
  "/:id",
  authenticateToken,
  authorizeRoles("ADMIN"),
  deleteSolicitudMiddleware,
  deleteSolicitud
);

module.exports = router;
