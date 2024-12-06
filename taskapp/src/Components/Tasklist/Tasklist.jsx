import Task from "../Task/Task"
import { useState,useEffect } from "react"
const Tasklist=()=>{
    let [newTasks,setNewTasks]=useState([])
    useEffect(()=>{
         const fet=async()=>{
            try{
                const res=await fetch("https://675041e669dc1669ec1a55ad.mockapi.io/tasks")
                const dat=await res.json()
                setNewTasks(dat)
            } 
            catch(error){
                console.log(error)
            }
        }
        fet()
    },[])
    return(
        <div>
            {newTasks.map((item,index)=>{
                return(
                <Task Task={item} key={index}/>
                )
            })}
        </div>
    )
}
export default Tasklist