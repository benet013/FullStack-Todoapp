function UpdateForm({taskId,taskList,task,setTask,setPopUp,editTask}) {
    const handleSubmit = () => {
        editTask(taskId, task);
        taskList.map((item) => {
            if (item.id === taskId){
                item.task = task;
            }
        })
        setPopUp(false);
        setTask("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={task} onChange={(e) => setTask(e.target.value)} type="text" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default UpdateForm;