import React from "react";
import "./Navigation.css";
import Done from "./Done.js";
import Todo from "./Todo.js";


export default function Navigation (props) {


  return (
    <div className="Navigationbar">
      <div className="displaybar d-flex justify-content-around">
        <div className="todo">
          <span>icon</span>
          <Todo />
        </div>
        <div className="all">
          <span>icon</span>
          <Done />
        </div>
      </div>
     </div>
  );
}
