import React from "react";

export default function () {
  return (
    <div className="displaybar d-flex justify-content-around">
      <div className="Todo">
        <span>icon</span>
        <p>ToDo(0)</p>
      </div>
      <div className="all">
        <span>icon</span>
        <p>All(3)</p>
      </div>
    </div>
  );
}
