import React from 'react'

const TaskForm = ({description, setDescription, btnText, onClick}) => {
  
  return <div className='row'>
    <div className="mb-3 col-10">
      <input type="text" className="form-control" placeholder='Add ToDo' value={description} onChange={(event)=>setDescription(event.target.value)} />
    </div>
    <div className='col-2'>
      <button className="btn btn-primary" onClick={()=>{onClick(description)}}>{btnText}</button>
    </div>
  </div>
}

export default TaskForm