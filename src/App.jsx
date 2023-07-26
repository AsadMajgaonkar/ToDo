import { useEffect, useState } from 'react'
import './App.css'
import TaskList from './component/TaskList'
import axios from 'axios'
import TaskForm from './component/TaskForm'

let update_id='';

function App() {
  const [tasks, setTasks] = useState([])
  const [isUpdating, setIsUpdating] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(()=>{
    axios.get('http://localhost:3000/api/tasks')
        .then((res)=>setTasks(res.data))
        .catch((err)=>console.log(err.message))
  },[])

  function handleAdd(description){

    if(isUpdating){
      axios.post('http://localhost:3000/api/tasks/' + update_id, {description:description})
        .then(()=>setTasks(tasks.map( task => task._id==update_id? {_id:update_id, description:description}: task)))
        .catch((err)=>console.log(err.message))
      setIsUpdating(false)  
    }
    else{
      axios.post('http://localhost:3000/api/tasks', {description:description})
      .then((res)=>setTasks([...tasks, {_id:res.data._id, description:res.data.description}]))
      .catch((err)=>console.log(err.message))
    }
    setDescription('')
  }

  function handleUpdate(_id){
    update_id=_id;
    setIsUpdating(true)
    const result = tasks.find(task => task._id==update_id)
    setDescription(result.description)
  }

  function handleDelete(_id){
    axios.delete('http://localhost:3000/api/tasks/'+_id)
      .then(()=>setTasks(tasks.filter(task => task._id!=_id)))
  }

  function handleReset(){
    setReset(!reset);
  }
  
  return <>
    <TaskForm description={description} setDescription={setDescription} btnText={isUpdating?'Update':'Submit'} onClick={handleAdd}/>
    <TaskList tasks={tasks} onDelete={handleDelete} onUpdate={handleUpdate}/>
    <button className="btn btn-primary" onClick={handleReset}>reset</button>
  </>
}

export default App
