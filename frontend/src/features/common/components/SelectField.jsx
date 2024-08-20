import React from "react";

const SelectField = ({ label, value, onChange, data=[] }) => (
   
  <div className={"inputContainer"}>
    <label className={"label"}>{label}</label>
    <select value={value} onChange={onChange} className={"inputBox"}>
      {data.length &&
        data.map((item) => <option key={item.key} value={item.key}>{item.value}</option>)}
    </select>
  </div>
);

export default SelectField;
