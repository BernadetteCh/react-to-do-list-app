import React from "react";
import "./List.css";

export default function List({ list, text, output, setTodos }) {
  function handleDelete() {
    setTodos(output.filter((el) => el.id !== list.id));
    //output.filter : geht durch alle todos die man bei der Eingabe erstellt.
    //el => el.id !== list.id : if el (element). id does not match the id of the list it gets rid of it.
    //ich filtere das state in meinem fall heißt es output aus und vergleiche es mit dem was ich angeklickt habe, das ist list.id
    //und wenn es net übereinstimmt wird es gelöscht
  }

function handleCheck() {
  setTodos(
    output.map(function (element) {
      if (element.id === list.id) {
        return { 
          ...element,
          completed: !element.completed,
        };
      }
      return { element };
    })
  );
}
  /*
  man könnte es auch als arrow function schreiben
  const handleCheck = () => {
    setTodos(
      output.map((element) => {
        if (element.id === list.id) {
          return {
            ...element,
            completed: !element.completed,
          };
        }
        return { element };
      })
    );
  };
*/
  // basierend von dem State mappe ich durch jedes todo(was bei mir output bezeichnet wird), um Zugang zu jeden element zu haben.
  //if ( also wenn ) von diesem die id mit der id von dem todo, welches ich gerade klicke (in diesem Fall trägt es den Namen list ), übereinstimmt
  //gib alle elemente(meine todos) wieder und setze das completed (welches im Array als false deklariert wurde) ins Gegenteil also zu true.
  //im Grunde vergleiche ich wieder die id und gebe es als Objekt mit properties zurück
  return (
    <div className="list">
      <fieldset>
        <input type="checkbox" onClick={handleCheck} />
        <label className={`todos ${list.completed ? "completed" : ""}`}>
          {text}
        </label>
        <span>
          <button onClick={handleDelete}>🙉</button>
        </span>
        <br />
      </fieldset>
    </div>
  );
  //todos ist der ursprüngliche className. ich verwende `` um Javascript zu schreiben.
  //also wenn das  todo, in diesem fall list.completed angeklickt wird, dann füge einen neuen calssName hinzu nämlich: completed
  //ansonsten wird nichts hinzugefügt.
  //? bedeutet if its ture und : bedeutet if not
  //auf dem state basierend toggle ich mit diesem code completed, welches ich im CSS style
}
