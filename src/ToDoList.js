import React, { useState } from "react";
import Navigation from "./Navigation.js";
import Output from "./Output.js";

export default function ToDoList() {
  const [todolist, setTodolist] = useState("");
  const [list, setList] = useState("");

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

/*
  return (
    <div className="ToDoList">
      <h1>To-Do List</h1>
      <h2>Add Task</h2>
      <div className="input">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Add to list" onChange={handleChange}></input>
          <button>Create</button>
        </form>
      </div>
      <Navigation />
      <Output output={todo} />
    </div>
  );*/
