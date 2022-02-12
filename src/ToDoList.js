import React, { useState } from "react";
import Navigation from "./Navigation.js";
import Output from "./Output.js";

export default function ToDoList() {
  const [todolist, setTodolist] = useState(""); //mit diesem state zeig i das value was beim input eingegeben wird
  const [list, setList] = useState("");//dieses state sorgt dafür, dass das eingegebene erst erscheint sobald man auf enter drückt 

  function handleChange(event) {
    event.preventDefault();
  setTodolist(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setList(todolist);
  }

  return (
    <div className="ToDoList">
      <h1>To-Do List</h1>
      <h2>Add Task</h2>
      <div className="input">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add to list"
            onChange={handleChange}
          ></input>
          <button>Create</button>
        </form>
      </div>
      <Navigation />
      <Output output={list} />
    </div>
  );
}
