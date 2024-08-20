import React from "react";

const InputField = ({ label, error, type, value, onChange, placeholder,...props }) => (
  <div className={"inputContainer"}>
    <label className={"label"}>{label}</label>
    <input
      className={"inputBox"}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  </div>
);

export default InputField;
