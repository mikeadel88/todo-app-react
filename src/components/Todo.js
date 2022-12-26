import React,{useEffect, useState}from 'react'
import Card from './Card';
import CreateTask from './CreateTask'

const Todo = () => {
  const [modal, setModal] = useState(false);
  const [taskLists,setTasklLists]=useState([])
useEffect(()=>{
let arr=localStorage.getItem("taskLists")
if(arr){
  let obj=JSON.parse(arr)
  setTasklLists(obj)
}
},[])

  const saveTask=(taskObj)=>{
  let tempTask=taskLists
  tempTask.push(taskObj)
  setTasklLists(tempTask)
  localStorage.setItem("taskLists",JSON.stringify(tempTask) )
  setModal(false)
  }
  const deleteTask=(index)=>{
    let templist=taskLists
    templist.splice(index,1)
    localStorage.setItem("taskLists",JSON.stringify(templist) )
    setTasklLists(templist)
    window.location.reload()
  }
  const updateArryTask=(taskObj,index)=>{
    let templist=taskLists
    templist[index]=taskObj
    setTasklLists(templist)
    localStorage.setItem("taskLists",JSON.stringify(templist) )
    window.location.reload()
  }
  const toggle = () => setModal(!modal);
  return (
    <div>
      <div className='header text-center p-4'>
        <h2>Todo List</h2>
        <button className='btn btn-primary' onClick={()=>{setModal(true)}}>Create Task</button>
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask}/>

      <div className='tasks'>
       { taskLists && taskLists.map((task,index)=>
         <Card tasks={task} index={index} deleteTask={deleteTask} updateArryTask={updateArryTask}/>
        )}
      </div>
    </div>
  )
}

export default Todo
