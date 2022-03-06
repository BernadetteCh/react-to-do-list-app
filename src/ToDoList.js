import React, { useState, useEffect } from "react";
import Output from "./Output.js";
import "./ToDoList.css";

export default function ToDoList() {
  const [input, setInput] = useState(""); //dieses State sorgt dafür, dass was im input eingegeben wird dann als Todo erscheint
  const [todos, setTodos] = useState([]);
  const [loaded, setLoaded] = useState(null); //dieses State sorgt dafür, dass beim Laden der Seite erstmal nur die Hauptform gezeigt wird, erst
  //indem ich setLoaded auf true setze in der function handleSubmit, erscheint erst bei Eingabebestätigung die eingegeben Todo.
  const [status, setStatus] = useState("all");
  const [filteredtodos, setFilteredTodos] = useState([]);
  //useEffect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  function handleChange(event) {
    event.preventDefault();
    setInput(event.target.value);
   
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
          <ul onClick={handleStatus}>
            <li>
              <button value="uncompleted">Todos</button>
            </li>
            <li>
              <button value="completed">Done</button>
            </li>
            <li>
              <button value="all">All</button>
            </li>
          </ul>
        </div>

        <Output todos={todos} setTodos={setTodos} filteredtodos={filteredtodos}/>
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
