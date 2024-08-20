import React, { useEffect } from "react";
import AuthTemplate from "../components/templates/AuthTemplate";
import RegisterForm from "../components/forms/RegisterForm";
import "../styles/auth.css";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { authState } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authState.token) {
      navigate("/");
    }
  }, [authState, navigate]);
  return (
    <AuthTemplate title={"Register"}>
      <RegisterForm />
    </AuthTemplate>
  );
};

export default Register;
