import React from "react";
import "./List.css";

export default function List({ todo, text, todos, setTodos }) {
  function handleDelete() {
    setTodos(todos.filter((el) => el.id !== todo.id));
    //output.filter : geht durch alle todos die man bei der Eingabe erstellt.
    //el => el.id !== list.id : if el (element). id does not match the id of the list it gets rid of it.
    //ich filtere das state in meinem fall heißt es output aus und vergleiche es mit dem was ich angeklickt habe, das ist list.id
    //und wenn es net übereinstimmt wird es gelöscht
  }

  function handleCheck() {
    setTodos(
      todos.map(function (element) {
        if (element.id === todo.id) {
          return {
            ...element,
            completed: !element.completed,
          };
        }
        return (element);
      })
    );
  }

  // basierend von dem State mappe ich durch jedes todo, um Zugang zu jeden element zu haben.
  //if ( also wenn ) von diesem die id mit der id von dem todo, welches ich gerade klicke übereinstimmt
  //gib alle elemente(meine todos) wieder und setze das completed (welches im Array als false deklariert wurde) ins Gegenteil also zu true.
  //im Grunde vergleiche ich wieder die id und gebe es als Objekt mit properties zurück
  return (
    <div className="list">
     
        <li className={`todos ${todo.completed ? "completed" : ""}`}>
          {text}
        </li>
        <span>
          <button onClick={handleCheck}><img src="./checkbutton.png" alt="checkbutton"></img></button>
          <button onClick={handleDelete}><img src="./delete button.png" alt="deletebutton"></img></button>
        </span>
        <br />
    
    </div>
  );
  //todos ist der ursprüngliche className. ich verwende `` um Javascript zu schreiben.
  //also wenn das  todo, dann füge einen neuen calssName hinzu nämlich: completed
  //ansonsten wird nichts hinzugefügt.
  //? bedeutet if its true und : bedeutet if not
  //auf dem state basierend toggle ich mit diesem code completed, welches ich im CSS style
}
