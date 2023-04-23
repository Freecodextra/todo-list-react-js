import React, { useContext, useRef } from "react";
import { CompletedTodoContext, TodoContext } from "../context/TodoContext";
import { ThemeContext } from "../theme/Theme";
import "./Complete.css";

function Complete() {
  const theme = useContext(ThemeContext);
  const [, setTodos] = useContext(TodoContext);
  const { completedTodos, setCompletedTodos } = useContext(CompletedTodoContext);
  const listRef = useRef(null);

  function handleChange(e) {
    const id = e.target.id;
    const newTask = {};
    completedTodos.forEach((completedTodo) => {
      if (completedTodo.id == id) {
        Object.assign(newTask, completedTodo);
      }
    });
    setTodos(prev => [...prev, newTask])
    setCompletedTodos((prev) => {
      return prev.filter((p) => p.id != id);
    });
  }
  function handleDblClick(e) {
    const id = e.target.childNodes[0].id;
    setCompletedTodos((prev) => {
      return prev.filter((p) => p.id != id);
    });
  }
  function handleDragStart(e) {
    setTimeout(()=> e.target.classList.add("dragging"),0)
  }
  function handleDragEnd(e) {
    e.target.classList.remove("dragging");
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
  return (
    <div className="complete">
      {completedTodos.length > 0 && <p className="text">Completed</p>}
      <div className="done-lists" ref={listRef} onDragOver={handleDragOver}>
        {completedTodos.map((completedTodo) => {
          return(
            <div className="neuphormism-inset list" key={completedTodo.id} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDoubleClick={handleDblClick}>
              <input type="radio"  id={completedTodo.id} onChange={handleChange} onClick={handleChange} checked />
              <label htmlFor={completedTodo.id}>{completedTodo.task}</label>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Complete;
