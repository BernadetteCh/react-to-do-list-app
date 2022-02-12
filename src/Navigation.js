import React from "react";
import "./Navigation.css";


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
          <p>All(3)</p>
        </div>
      </div>
     </div>
  );
}
