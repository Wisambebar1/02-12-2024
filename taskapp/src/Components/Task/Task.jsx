import {useState} from "react"
const Task=({Task})=>{
    let [isCompleted,setIsCompleted]=useState("false")
    const handleClick=()=>{
        if(isCompleted===true){
            setIsCompleted("false")
        }
        else{
            setIsCompleted("true")
        }
    }
    return(
        <div>
            <h1>{Task.title}</h1>
            <p>{Task.Description}</p>
            <button onClick={handleClick}>{isCompleted}</button>
        </div>
    )
}
export default Task