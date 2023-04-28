import React from "react";
import {Form} from "react-bootstrap"
import Edit from "./Edit"

const Task = ({task}) => {
  console.log("task : ", task)
    return(
        <div>
        <h3>{task.Text}</h3>
        <Edit task ={task}/>
        </div>
    )
}
export default Task