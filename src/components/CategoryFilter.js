import React, {useState} from "react";

function CategoryFilter({data, filter, taskDataIn}) {

  const [clickedId, setClickedId] = useState(null)
  const [task, setTask] = useState(taskDataIn)

  function btnClick(event){
     setClickedId(Number(event.target.id));
     const name = event.target.textContent;
     const newData = task.filter((item) => {
      if (name === "All") {
        return true
      } else {
        return item.category.includes(name)
      }
      // return item.category.includes(name);
      
    })
    setTask(newData);
    filter(task);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        data.map((item, index) => {
          return <button id={index} onClick={btnClick} className={clickedId === index ? "selected" : null } key={item}>{item}</button>
        })
      }
    </div>
  );
}

export default CategoryFilter;