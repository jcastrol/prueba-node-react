const {
  registerSchema,
  loginSchema,
  refreshTokenSchema,
} = require("../../config/zod/models/auth");

const validateRegister = (body) => {
  return registerSchema.parse(body);
};

const validateLogin = (body) => {
  return loginSchema.parse(body);
};

const validateRefreshToken = (body) => {
  return refreshTokenSchema.parse(body);
};

module.exports = {
  validateRegister,
  validateLogin,
  validateRefreshToken,
};
