import React, { useEffect } from "react";
import AuthTemplate from "../components/templates/AuthTemplate";
import LoginForm from "../components/forms/LoginForm";
import "../styles/auth.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { authState } = useAuth();
  const navigate = useNavigate();
  const token = authState.token;

  useEffect(() => {
    if (token) {
      navigate('/'); 
    }
  }, [token, navigate]);
  return (
    <AuthTemplate title={"Login"}>
      <LoginForm />
    </AuthTemplate>
  );
};

export default Login;
