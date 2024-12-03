import { useState } from "react"
import Tasklist from "../Tasklist/Tasklist"
const Addtaskform=()=>{
    let [title,setTitle]=useState("");
    let [Description,setDescription]=useState("");
    let [tasks,setTasks]=useState([]);
    const handleTitle=(e)=>{
        setTitle(e.target.value);
    }
    const handleDescription=(e)=>{
        setDescription(e.target.value);
    }
    const handleTask=()=>{
        setTasks([...tasks,{title,Description}])
    }
    return(
        <div>
            <form /*onSubmit=""*/>
                <div>
                    <label htmlFor="Title">Title:</label>
                    <input onChange={handleTitle} type="text" name="Title" required/>
                </div>
                <div>
                    <label htmlFor="Description">Description:</label>
                    <textarea onChange={handleDescription} name="Description" required/>
                </div>
                <button onClick={handleTask} type="submit">Submit</button>
            </form>
            <Tasklist title={title} Description={Description}/>
        </div> 
    )
}
export default Addtaskform