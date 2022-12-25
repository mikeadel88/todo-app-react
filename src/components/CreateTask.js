import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const CreateTask = ({modal,toggle,save}) => {
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
  const handelSave=(e)=>{
    e.preventDefault();
    let taskObj={}
    taskObj["Name"]=taskName
    taskObj["Description"]=description
    save(taskObj)
    
  }
  return (
    <div>
       <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
          <Button color="primary" onClick={handelSave} >
            Create
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default CreateTask
