import React, { useContext, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { UpdateTodoContext } from "../context/TodoContext";
import "./Input.css";

function Input() {
  const [text, setText] = useState("");
  const updateTodo = useContext(UpdateTodoContext);
  return (
    <div className="input-area center">
      <div className="input">
        <input
          type="text"
          name="todo"
          className="neuphormism"
          id="add-todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add New Task"
        />
        <span className="add-btn" onClick={() => {updateTodo(text); setText("")}}>
          <AiOutlinePlus />
        </span>
      </div>
    </div>
  );
}

export default Input;
