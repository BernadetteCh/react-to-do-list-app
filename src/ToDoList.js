import React, { useState, useEffect } from "react";
import Output from "./Output.js";
import "./ToDoList.css";

export default function ToDoList() {
  const [input, setInput] = useState(""); //dieses State sorgt dafür, dass was im input eingegeben wird dann als Todo erscheint
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredtodos, setFilteredTodos] = useState([]); //ein zweites state mit todos wird erstellt, weil i brauch in solides array mit todos das net verändert werden soll
  //und eines wo ich die todos "herumschieben " kann

  //useEffect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true)); //ursprüngliche state mit den todos wird gefiltert und wenn des todo vom map true is setz es completed
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos); //hier sollen alle todos gezeigt werden
        break;
    }
  };

  function handleStatus(e) {
    e.preventDefault();
    setStatus(e.target.value);
  }

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
    setInput(""); //input soll leer sein sobald man eine Todo submitted hat
  }

  return (
    <div className="ToDoList">
      <h1>To-Do-List App</h1>
      <h2>Add Task</h2>
      <div className="input">
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            placeholder="Add to list"
            className="input form-control form-control-lg w-50"
            onChange={handleChange}
          ></input>
          <button className="setToDo">Create</button>
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
        </form>
      </div>

      <Output todos={todos} setTodos={setTodos} filteredtodos={filteredtodos} />
    </div>
  );
}
