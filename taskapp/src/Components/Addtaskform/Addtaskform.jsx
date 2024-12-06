import { useState,useEffect } from "react"
import Tasklist from "../Tasklist/Tasklist"
const Addtaskform=()=>{
    let [title,setTitle]=useState("");
    let [description,setDescription]=useState("");
    let [tasks,setTasks]=useState([]);
    let [newtask,setNewTask]=useState(null)
    useEffect(()=>{
        const pos=async()=>{
            try{
                const res=await fetch("https://675041e669dc1669ec1a55ad.mockapi.io/tasks"
                    ,{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
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
    },[newtask])
    const handleTitle=(e)=>{
        setTitle(e.target.value);
    }
    const handleDescription=(e)=>{
        setDescription(e.target.value);
    }
    const handleTask=(e)=>{
         setNewTask({title,description})
        e.preventDefault()
        setTasks((prev)=>[...prev,newtask])
        setTitle("")
        setDescription("")
    }
    return(
        <div>
            <form onSubmit={handleTask}>
                <div>
                    <label htmlFor="Title">Title:</label>
                    <input value={title} onChange={handleTitle} type="text" name="Title" required/>
                </div>
                <div>
                    <label htmlFor="Description">Description:</label>
                    <textarea value={description} onChange={handleDescription} name="Description" required/>
                </div>
                <button type="submit">Submit</button>
            </form>
            <Tasklist tasks={tasks}/>
        </div> 
    )
}
export default Addtaskform