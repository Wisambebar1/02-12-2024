import {useState} from "react"
const Task=({Task})=>{
    let [task,settask]=useState(Task)
    let [isCompleted,setIsCompleted]=useState("false")
    const completeUpdate=async (isCompleted)=>{
        try{
            const resp=await fetch(`https://675041e669dc1669ec1a55ad.mockapi.io/tasks/${task.id}`
                ,{method:"PUT",
                  headers:{"Content-Type":"application/json"},
                  body:JSON.stringify({isCompleted:isCompleted})
                }
            )
            if(!resp.ok){
                throw new Error("failed to update the status of the task")
            }
        }
        catch(error){
            console.log(error)
        }
    }
    const handleClick=()=>{
        if(isCompleted==="true"){
              Task.isCompleted="false";
             setIsCompleted(Task.isCompleted)
            completeUpdate(Task.isCompleted)
        }
        else{
             Task.isCompleted="true";
             setIsCompleted(Task.isCompleted)
            completeUpdate(Task.isCompleted)
        }
        
    }
    const handleDelete=()=>{
        settask(null)
    }
    return(
        <div>
            {task && (<>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <button onClick={handleClick}>{isCompleted}</button>
            <button onClick={handleDelete}>Delete</button>
            </>)}
        </div>
    )
}
export default Task