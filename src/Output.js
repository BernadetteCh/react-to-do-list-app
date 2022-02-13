import React from "react";
import "./Output.css";
import List from "./List.js";

export default function Output(props) {
  console.log(props.output);
//hier habe ich ein neues component (<List />) erstellt, damit ich durch loopen kann, weil jedes mal wenn 
//i a Todo eintippe soll diese dann im output erscheinen als eigenes List component
return (
  <div className="output">
    <form>
      {props.output.map(function (list, index) {
        return (
          <div key={index}>
            <List list={list}/>
          </div>
        );
      })}
    </form>
  </div>
);

}
