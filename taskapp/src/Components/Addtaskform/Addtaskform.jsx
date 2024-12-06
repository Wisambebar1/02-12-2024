import { useState,useEffect } from "react"
import Tasklist from "../Tasklist/Tasklist"
const Addtaskform=()=>{
    let [title,setTitle]=useState("");
    let [description,setDescription]=useState("");
    let [tasks,setTasks]=useState([]);
    const fetc=async ()=>{
        try{
            const response=await fetch("https://675041e669dc1669ec1a55ad.mockapi.io/tasks")
            const datas=await response.json();
            setTasks(datas)
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetc()
    },[])
        const pos=async(newtask)=>{
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
            }
            catch(error){
                console.error(error)
            }
        }
    const handleTitle=(e)=>{
        setTitle(e.target.value);
    }
    const handleDescription=(e)=>{
        setDescription(e.target.value);
    }
    const handleTask=(e)=>{
        if(title&&description){
         let newtask={title,description}
        e.preventDefault()
        setTasks((prev)=>[...prev,newtask])
        setTitle("")
        setDescription("")
        pos(newtask)
        fetc()
        }  
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