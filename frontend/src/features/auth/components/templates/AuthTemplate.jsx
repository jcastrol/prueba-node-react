import React from "react";

const AuthTemplate = ({ title = "",children }) => (
  <div
    className="mainContainer"
  >
    <div className="cardContainer">
      <h1 className={"titleContainer"}>{title}</h1>
      <div  className={"resultContainer"}>{children}</div>
      
    </div>
  </div>
);

export default AuthTemplate;
