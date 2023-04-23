import React from 'react'
import './List.css'

function List({id, text, handleClick, handleDblClick}) {
  function handleDragStart(e) {
    setTimeout(()=> e.target.classList.add("dragging"),0)
  }
  function handleDragEnd(e) {
    e.target.classList.remove("dragging");
  }
  return (
    <div className="neuphormism list" draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDoubleClick={handleDblClick}>
        <input onClick={handleClick} type="radio" id={id} />
        <label htmlFor={id}>{text}</label>
    </div>
  )
}


export default List