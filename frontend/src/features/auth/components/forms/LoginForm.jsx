import React from "react";
import InputField from "../../../common/components/InputField";
import { useLogin } from "../../hooks/useLogin";
import { Link } from "react-router-dom";


const LoginForm = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleSubmit
  }=useLogin();

  return (
    <form onSubmit={handleSubmit} style={{width:"100%"}}>
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className={'inputBox'}
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className={'inputBox'}
      />
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
      {error && <div className="errorLabel">{error}</div>}
      
      <div className="buttonContainer">
        <button className="button" type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
