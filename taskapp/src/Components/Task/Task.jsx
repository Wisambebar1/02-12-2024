const Task=({Tasks})=>{
    return(
        <div>
            <h1>{Tasks.title}</h1>
            <p>{Tasks.description}</p>
            <p>{Tasks.isCompleted}</p>
        </div>
    )
}
export default Task