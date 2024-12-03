import Task from "../Task/Task"
const Tasklist=({Tasks})=>{
    return(
        <div>
            {Tasks.map((item,index)=>{
                return(
                <Task Task={item} key={index}/>
                )
            })}
        </div>
    )
}
export default Tasklist