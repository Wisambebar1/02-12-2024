import Task from "../Task/Task"
const Tasklist=({tasks})=>{
    return(
        <div>
            {tasks.map((item,index)=>{
                return(
                <Task Task={item} key={index}/>
                )
            })}
        </div>
    )
}
export default Tasklist