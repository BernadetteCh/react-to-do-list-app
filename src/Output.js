import React from "react";
import "./Output.css";
import List from "./List.js";

export default function Output({ todos, setTodos, filteredtodos }) {
  //hier habe ich ein neues component (<List />) erstellt, damit ich durch loopen kann, weil jedes mal wenn
  //i a Todo eintippe soll diese dann im output erscheinen als eigenes List component

  return (
    <div>
      {filteredtodos.map(function (todo, index) {
        return (
          <ul key={index}>
            <List
              text={todo.text}
              setTodos={setTodos}
              todo={todo}
              todos={todos}
            />
          </ul>
        );
      })}
    </div>
  );
}
