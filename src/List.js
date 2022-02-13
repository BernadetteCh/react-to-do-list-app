import React from "react";

export default function List(props){
    return (
      <div>
        <fieldset>
          <input type="checkbox" />
          <label>{props.list.text}</label>
          <span>🙉</span>
          <br />
        </fieldset>
      </div>
    );
}