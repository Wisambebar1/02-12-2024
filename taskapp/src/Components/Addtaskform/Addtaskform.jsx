const Addtaskform=()=>{
    return(
        <div>
            <form /*onSubmit=""*/>
                <div>
                    <label htmlFor="Title">Title:</label>
                    <input type="text" name="Title" required/>
                </div>
                <div>
                    <label htmlFor="Description">Description:</label>
                    <textarea name="Description" required/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Addtaskform