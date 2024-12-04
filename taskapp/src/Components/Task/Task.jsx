import {useState} from "react"
const Task=({Task})=>{
    let [task,settask]=useState(Task)
    let [isCompleted,setIsCompleted]=useState("false")
    const handleClick=()=>{
        if(isCompleted===true){
            setIsCompleted("false")
        }
        else{
            setIsCompleted("true")
        }
    }
    const handleDelete=()=>{
        settask([])
        setIsCompleted("")
    }
    return(
        <div>
            <h1>{task.title}</h1>
            <p>{task.Description}</p>
            <button onClick={handleClick}>{isCompleted}</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}
export default Task