import React, { useContext, useRef } from "react";
import { TodoContext, CompletedTodoContext } from "../context/TodoContext";
import List from "./list/List";
import "./Lists.css";

function Lists() {
  const [todos, setTodos] = useContext(TodoContext);
  const { completedTodos, setCompletedTodos } =
    useContext(CompletedTodoContext);
    const listRef = useRef(null);
  function handleChange(e) {
    const id = e.target.id;

    const newTask = {};
    todos.forEach((todo) => {
      if (todo.id == id) {
        Object.assign(newTask, todo);
      }
    });
    setCompletedTodos((prev) => [newTask, ...prev]);
    setTodos((prev) => {
      return prev.filter((p) => p.id != id);
    });
  }
  function handleDragOver(e) {
    e.preventDefault();
    const otherEles = [...listRef.current.querySelectorAll(".list:not(.dragging)")];
    const draggingEle = listRef.current.querySelector(".dragging");
    const hover = otherEles.find((otherEle) => {
      return e.clientY <= otherEle.offsetTop + otherEle.offsetHeight /2;
    })
    listRef.current.insertBefore(draggingEle,hover);
  }
  function handleClick(e) {
    const id = e.target.childNodes[0].id;
    setTodos((prev) => {
      return prev.filter((p) => p.id != id);
    });
  }
  return (
    <div className="lists" ref={listRef} onDragOver={handleDragOver}>
      {todos.map((todo) => (
        <List
          key={todo.id}
          id={todo.id}
          text={todo.task}
          handleClick={handleChange}
          handleDblClick={handleClick}
        />
      ))}
    </div>
  );
}

export default Lists;
