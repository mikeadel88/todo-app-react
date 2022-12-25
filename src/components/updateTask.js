import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const UpdateTask = ({modal,toggle,update,tasks}) => {
  const [taskName,setTaskName]=useState("")
  const [description,setDescription]=useState("")
  const handelChange=(e)=>{
    const {name,value}=e.target
    if(name==="taskName"){
      setTaskName(value)
    }
    else{
      setDescription(value)
    }
  }
  useEffect(()=>{
    setTaskName(tasks.Name)
    setDescription(tasks.Description)
  },[])
  const handelUpdate=(e)=>{
    e.preventDefault();
    let taskObj={}
    taskObj["Name"]=taskName
    taskObj["Description"]=description
    update(taskObj)
    
  }
  return (
    <div>
       <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Task</ModalHeader>
        <ModalBody>
          <form >
            <div className='form-group'>
                <label>Task Name</label>
                <input type="text" className='form-control' value={taskName} onChange={handelChange} name='taskName'/>
            </div>
            <div className='form-group'>
            <label>Task Decription</label>
                <textarea type="text" rows="5" className='form-control' value={description} onChange={handelChange} name="description"/>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handelUpdate} >
            Update
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default UpdateTask
