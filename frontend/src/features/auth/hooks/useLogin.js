import { useState } from "react";
import { login } from "../../../services/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {setAuthData}=useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Email and password are required.");
      return;
    }
    try {
      const data = await login({ email, password });
      if (data) {
        setAuthData(data)
        // Guardar tokens en localStorage
        await localStorage.setItem("token", data.token);
        await localStorage.setItem("refreshToken", data.refreshToken);
        await localStorage.setItem("role", data.role);
        await localStorage.setItem("email", data.email);
        navigate('/');
      }
      
    } catch (err) {
      console.error("error", err);
      setError(err.message);
      return;
    }

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
