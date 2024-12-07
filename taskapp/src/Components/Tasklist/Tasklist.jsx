import Task from "../Task/Task"
import { useState,useEffect } from "react"
const Tasklist=({tasks})=>{
    let [newTasks,setNewTasks]=useState([])
    let [loading,setLoading]=useState(true);
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
            finally{
                setLoading(false)
            }
        }
        fet()
    },[tasks])
    return(
        <div>
            {loading?(<p>Loading...</p>):(
                <>
            {newTasks.map((item,index)=>{
                return(
                <Task Task={item} key={index}/>
                )
            })}
            </>)} 
        </div>
    )
}
export default Tasklist