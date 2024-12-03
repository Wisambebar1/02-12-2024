const Task=({Task})=>{
    return(
        <div>
            <h1>{Task.title}</h1>
            <p>{Task.description}</p>
            <p>{Task.isCompleted}</p>
        </div>
    )
}
export default Task