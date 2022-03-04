import React, { useState } from "react";
import Output from "./Output.js";
import "./ToDoList.css";

export default function ToDoList() {
  const [input, setInput] = useState(""); //dieses State sorgt dafür, dass was im input eingegeben wird dann als Todo erscheint
  const [todos, setTodos] = useState([]);
  const [loaded, setLoaded] = useState(null); //dieses State sorgt dafür, dass beim Laden der Seite erstmal nur die Hauptform gezeigt wird, erst
  //indem ich setLoaded auf true setze in der function handleSubmit, erscheint erst bei Eingabebestätigung die eingegeben Todo.

  function handleChange(event) {
    event.preventDefault();
    setInput(event.target.value);
    console.log(event.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: input, completed: false, id: Math.random() * 1000 },
    ]); //...todos  damit sog i dem PC:wenn ich schon todos habe füge die neue Eingabe einfach hinzu
    setLoaded(true);
    setInput(""); //input soll leer sein sobald man eine Todo submitted hat
  };

  if (loaded) {
    return (
      <div className="ToDoList">
        <h1>To-Do List</h1>
        <h2>Add Task</h2>
        <div className="input">
          <form onSubmit={handleSubmit}>
            <input
            value={input}
              type="text"
              placeholder="Add to list"
              className="input"
              onChange={handleChange}
            ></input>
            <button>Create</button>
          </form>
          <ul>
            <li>
              <button>Todos</button>
            </li>
            <li>
              <button>Done</button>
            </li>
            <li>
              <button>All</button>
            </li>
          </ul>
        </div>

        <Output todos={todos} setTodos={setTodos} />
      </div>
    );
  } else {
    return (
      <div className="ToDoList">
        <h1>To-Do List</h1>
        <h2>Add Task</h2>
        <div className="input">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Add to list"
              className="input"
              onChange={handleChange}
            ></input>
            <button>Create</button>
          </form>
        </div>
        <ul>
          <li>
            <button>Todos</button>
          </li>
          <li>
            <button>Done</button>
          </li>
          <li>
            <button>All</button>
          </li>
        </ul>
      </div>
    );
  }
}
