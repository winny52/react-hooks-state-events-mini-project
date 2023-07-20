import React from "react";
import Task from "./Task"

function TaskList({taskData, dataInState}) {
  
  function deleteTask(idNo){
    const data = taskData.filter((item, index) => {
     return index !== Number(idNo);
    })
      dataInState(data)
  }

  const taskComponent = taskData.map((task, index) => {
         return <Task id={index} key={index} cat={task.category} text={task.text} onChange={deleteTask}/>
  })
  return (
    <div className="tasks">
      {taskComponent}
    </div>
  );
}

export default TaskList;