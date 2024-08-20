import { useState } from "react";
import { login } from "../../../services/auth";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Email and password are required.");
      return;
    }
    try {
      const data = await login({ email, password });
      if (data) {
       
        // Guardar tokens en localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("role", data.role);
      }
      navigate('/');
    } catch (err) {
      console.error("error", err);
      setError(err.message);
      return;
    }

    //   dispatch({ type: "SET_USER", payload: user });
    setError("");
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleSubmit,
  };
};
