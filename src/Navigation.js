import React from "react";
import "./Navigation.css";
import Done from "./Done.js";


export default function Navigation () {
  return (
    <div className="Navigationbar">
      <div className="displaybar d-flex justify-content-around">
        <div className="todo">
          <span>icon</span>
          <p>ToDo(0)</p>
        </div>
        <div className="all">
          <span>icon</span>
          <p><Done /></p>
        </div>
      </div>
     </div>
  );
}
