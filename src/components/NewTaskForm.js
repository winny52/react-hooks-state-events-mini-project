import React, {useState} from "react";

function NewTaskForm({data, onTaskFormSubmit}) {
  const [formData, setFormData] = useState({
    text: "",
    category: "",
  })

function newForm(event){
  event.preventDefault()
  onTaskFormSubmit(formData)
  setFormData({
    text: "",
    category: "",
  })
}
  return (
    <form onSubmit={newForm} className="new-task-form">
      <label>
        Details
        <input 
        type="text" 
        name="text"
        value={formData.text} 
        onChange={(e) => setFormData({ ...formData, text: e.target.value})} 
        />
      </label>
      <label>
        Category
        <select 
        name="category"
        value={formData.category} 
        onChange={(e) => setFormData({ ...formData, category: e.target.value})}
        >
          {data.map((item) => {
            return <option key={item}>{item}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;