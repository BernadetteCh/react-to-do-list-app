import React from "react";
import "./Output.css";
import List from "./List.js";


export default function Output({output,setTodos}) {
 
//hier habe ich ein neues component (<List />) erstellt, damit ich durch loopen kann, weil jedes mal wenn 
//i a Todo eintippe soll diese dann im output erscheinen als eigenes List component
return (
  <div className="output">
    <form>
      {output.map(function (list) {
        return (
          <div key={list.id}>
            <List list={list} text={list.text} setTodos={setTodos} output={output} />
          </div>
        );
      })}
    </form>
  </div>
);

}
