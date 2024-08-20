
import React from 'react';
import AuthTemplate from '../components/templates/AuthTemplate';
import RegisterForm from '../components/forms/RegisterForm';
import "../styles/auth.css";
import 'react-toastify/dist/ReactToastify.css';

const Register= () => (
  <AuthTemplate title={"Register"}>
    <RegisterForm />
  </AuthTemplate>
);

export default Register;