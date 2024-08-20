import api from "../../config/api";

export const login = async (credentials) => {
  if (!credentials.email || !credentials.password) {
    throw new Error("Email and password are required.");
  }
  try {
    const response = await api.post("auth/login", {
      email: credentials.email,
      password: credentials.password,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error.response.data.error || "An error occurred during login."
      );
    } else {
      throw new Error("An error occurred during login.");
    }
  }
};

export const register = async (data) => {
  if (!data.role || !data.email || !data.password) {
    throw new Error("All fields are required.");
  }
  try {
    const response = await api.post("auth/register", data);
    return response.data;
  } catch (error) {
    if (error.response) {
      const transformedErrors = transformErrors(error.response.data.error);
      throw transformedErrors;
    } else {
      throw new Error("An error occurred during registration.");
    }
  }
};

const transformErrors = (errors) => {
  // Verifica si el error es un array y lo transforma en un objeto de errores
  if (Array.isArray(errors)) {
    const formattedErrors = {};
    errors.forEach(err => {
      if (err.path && err.path[0]) {
        formattedErrors[err.path[0]] = err.message;
      }
    });
    return formattedErrors;
  } 
  return { other: "An unexpected error occurred." };
};