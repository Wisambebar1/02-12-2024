import Task from "../Task/Task"
import { useState,useEffect } from "react"
const Tasklist=({tasks,newtask})=>{
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
    useEffect(()=>{
        const pos=async()=>{
            try{
                const res=await fetch("https://675041e669dc1669ec1a55ad.mockapi.io/tasks"
                    ,{
                        method:"POST",
                        header:{"content-Type":"application/json"},
                        body:JSON.stringify(newtask)
                    }
                );
                if(!res.ok){
                    throw new Error("Network res was not ok")
                }
                const data=await res.json()
                console.log(data)
            }
            catch(error){
                console.error(error)
            }
        }
        pos()
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