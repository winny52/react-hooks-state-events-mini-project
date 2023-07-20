import React from "react";

function Task({cat, text, onChange, id}) {

  function btnClick(e){
    onChange(e.target.id);
  }
  return (
    <div className="task">
      <div className="label">{cat}</div>
      <div className="text">{text}</div>
      <button id={id} onClick={btnClick} className="delete">X</button>
    </div>
  );
}

export default Task;