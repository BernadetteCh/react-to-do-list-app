import React, {useState} from "react";

export default function List(props) {
  const[checked, setChecked]=useState(props.list.text);
  

  function handleCheck(event) {
    event.preventDefault();
    setChecked(false);
  }

if(checked){
  return (
    <div className="list">
      <fieldset>
        <input type="checkbox" onClick={handleCheck} />
        <label>{props.list.text}</label>
        <span>🙉</span>
        <br />
      </fieldset>
    </div>
  );
}else{
  return(
    null
  );
}

}
