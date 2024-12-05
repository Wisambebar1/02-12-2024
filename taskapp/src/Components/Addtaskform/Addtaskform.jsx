import { useState } from "react"
import Tasklist from "../Tasklist/Tasklist"
const Addtaskform=()=>{
    let [title,setTitle]=useState("");
    let [description,setDescription]=useState("");
    let newtask={title,description}
    let [tasks,setTasks]=useState([]);
    const handleTitle=(e)=>{
        setTitle(e.target.value);
    }
    const handleDescription=(e)=>{
        setDescription(e.target.value);
    }
    const handleTask=(e)=>{
        e.preventDefault()
        setTasks(prev=>[...prev,newtask])
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
            <Tasklist tasks={tasks} newtask={newtask}/>
        </div> 
    )
}
export default Addtaskform