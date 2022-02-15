import React, {useState} from "react";



export default function Todo(props){
 
    const[todo, setTodo]=useState("Hello from ToDo");

    function displayTodo(event){
        event.preventDefault();
        setTodo("So much todo!")
    }

    
    return (
      <div className="todo">
        <button onClick={displayTodo}>Todo(0)</button>
        <div>{todo}</div>
   
      </div>
    );
}