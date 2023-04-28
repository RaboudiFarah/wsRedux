
import React from "react";
import { useSelector } from "react-redux";
import Tasks from './Tasks'

const ListTask =()=>{
    const listtask = useSelector((state)=>state.task.listTask)
    console.log(listtask)

   return (
    <div>
    {listtask.map(
        (el) => (
        <Tasks task ={el} key ={el.id} />
    ))}
    </div>
   );
};
export default ListTask ;