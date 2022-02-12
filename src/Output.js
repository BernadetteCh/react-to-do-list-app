import React from "react";
import "./Output.css";

export default function Output(props){
    return (
      <div className="output">
        <form>
          <fieldset>
            <input type="checkbox"  />
            <label>{props.output}</label>
            <span>🙉</span>
           <br />
            <input type="checkbox" value="Eier kaufen" />
            <label></label>
            <span>🙉</span>
          </fieldset>
        </form>
      </div>
    );
}