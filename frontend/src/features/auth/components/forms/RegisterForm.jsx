import React from "react";
import InputField from "../../../common/components/InputField";
import { Link } from "react-router-dom";
import SelectField from "../../../common/components/SelectField";
import { OPTIONUSER, useRegister } from "../../hooks/useRegister";


const RegisterForm = () => {
    const {
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
      } = useRegister()
  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className={"inputBox"}
      />
      {errors.email && <div className="errorLabel">{errors.email}</div>}

      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className={"inputBox"}
      />
      {errors.password && <div className="errorLabel">{errors.password}</div>}
      <InputField
        label="Confirm Password"
        type="password"
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
        placeholder="Password"
        className={"inputBox"}
      />
      {errors.repeatPassword && <div className="errorLabel">{errors.repeatPassword}</div>}
      <SelectField
        label="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        data={[
          { key: OPTIONUSER.USER, value: "User" },
          { key: OPTIONUSER.ADMIN, value: "Admin" },
        ]}
      />
      {errors.role && <div className="errorLabel">{errors.role}</div>}
      <p>
        Do have an account? <Link to="/login">Login here</Link>
      </p>
      {errors.other && <div className="errorLabel">{errors.other}</div>}
      <div className="buttonContainer">
        <button className="button" type="submit">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
