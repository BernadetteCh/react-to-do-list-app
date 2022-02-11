import React from "react";
import Navigation from "./Navigation.js";

export default function ToDoList() {
  return (
    <div className="ToDoList">
      <h1>To-Do List</h1>
      <h2>Add Task</h2>
      <div className="input">
        <form>
          <input type="text" placeholder="Add to list"></input>
          <button>Create</button>
        </form>
      </div>
      <Navigation />
    </div>
  );
}
