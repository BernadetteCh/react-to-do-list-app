import React from "react";

export default function List({ list, text, output, setTodos }) {
  function handleDelete() {
   setTodos(output.filter((el) => el.id !== list.id));
    //output.filter : geht durch alle todos die man bei der Eingabe erstellt. 
    //el => el.id !== list.id : if el (element). id does not match the id of the list it gets rid of it. 
    //ich filtere das state in meinem fall heißt es output aus und vergleiche es mit dem was ich angeklickt habe, das ist list.id
    //und wenn es übereinstimmt wird es gelöscht
  }

  /*  const[checked, setChecked]=useState(props.list.text);
  

  function handleCheck(event) {
    event.preventDefault();
    setChecked(false);*/

  return (
    <div className="list">
      <fieldset>
        <input type="checkbox" />
        <label>{text}</label>
        <span>
          <button onClick={handleDelete}>🙉</button>
        </span>
        <br />
      </fieldset>
    </div>
  );
}
