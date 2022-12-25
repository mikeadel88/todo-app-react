import React, { useState } from 'react'
import UpdateTask from './updateTask'
const Card = ({tasks,index,deleteTask,updateArryTask}) => {
    const [modal,setModal]=useState(false)
    const toggle=()=>{
        setModal(!modal)
    }
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]
    const handelDelete=()=>{
        deleteTask(index)
    }
    const update=(obj)=>{
        updateArryTask(obj,index)
    }
  return (
    <div class = "card-wrapper ms-5">
            <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px"}}>{tasks.Name}</span>
                <p className = "mt-3">{tasks.Description}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i class = "far fa-edit m-1" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}}onClick={()=>{setModal(true)}}></i>
                    <i class="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick={handelDelete}></i>
                </div>
        </div>
        <UpdateTask modal={modal} toggle={toggle} update={update} tasks={tasks}/>
        </div>
  )
}

export default Card
