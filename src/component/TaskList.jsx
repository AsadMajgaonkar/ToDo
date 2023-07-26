import React from 'react'

const TaskList = ({tasks, onDelete, onUpdate}) => {
    
  return <table className="table table-bordered mt-5">
  <thead>
    <tr>
      <th className="col-2">Index</th>
      <th className="col-6">Task Description</th>
      <th className="col-2"></th>
      <th className="col-2"></th>
    </tr>
  </thead>
  <tbody>
    {tasks.map( (task, index) => <tr key={index}>
      <th>{index+1}</th>
      <td>{task.description}</td>
      <td><button className="btn btn-outline-secondary" onClick={()=>onUpdate(task._id)}>Update</button></td>
      <td><button className="btn btn-outline-danger" onClick={()=>onDelete(task._id)}>Delete</button></td>
    </tr>)}
  </tbody>
</table>
}

export default TaskList