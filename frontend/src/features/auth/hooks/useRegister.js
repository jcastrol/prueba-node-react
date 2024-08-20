import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../../services/auth";

export const OPTIONUSER = {
  USER: "USER",
  ADMIN: "ADMIN",
};
const initError = {
  role: "",
  email: "",
  password: "",
  repeatPassword: "",
  other: "",
};
export const useRegister = () => {
  const [role, setRole] = useState(OPTIONUSER.USER);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState(initError);
  const navigate = useNavigate();

  const validateFields = () => {
    const newErrors = { ...initError };
    let isValid = true;

    if (!role) {
      newErrors.role = "Role is required.";
      isValid = false;
    }
    if (!email) {
      newErrors.email = "Email is required.";
      isValid = false;
    }
    if (!password) {
      newErrors.password = "Password is required.";
      isValid = false;
    }
    if (!repeatPassword) {
      newErrors.repeatPassword = "Repeat Password is required.";
      isValid = false;
    }
    if (password && repeatPassword && password !== repeatPassword) {
      newErrors.password = "Passwords do not match.";
      newErrors.repeatPassword = "Passwords do not match.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFields()) {
      return;
    }
    try {
      await register({ email, password, role });
      
      setErrors({ ...initError });
      alert("User created successfully!"); 
      navigate("/login");
    } catch (err) {
      if (err?.message) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          other: err.message || "There was an error",
        }));
      }
      if (typeof err === "object") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ...err,
        }));
      } 
    }
  };

  return {
    role,
    email,
    password,
    repeatPassword,
    errors,
    setRole,
    setEmail,
    setPassword,
    setRepeatPassword,
    handleSubmit,
  };
};
