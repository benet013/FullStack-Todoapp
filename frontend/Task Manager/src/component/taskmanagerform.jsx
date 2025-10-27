import { useEffect, useState } from "react";
import TaskList from "./tasklist";
import UpdateForm from "./updateForm";
import api from "../api";

function TaskManagerForm() {
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState("");
    const [popup, setPopUp] = useState(false);
    const [taskId, setTaskId] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await api.get('/api/task/');
                setTaskList(response.data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        }

        fetchTasks();
    }, []);

    const createTask = async (task) => {
        try {
            const response = await api.post('/api/task/', { task: task });
            console.log("Created task:", response.data);
            setTaskList(prev => [...prev, response.data])
        } catch (error) {
            console.error("Error creating task:", error);
        }
    }

    const editTask = async (id, updatedTask) => {
        try {
            const response = await api.put(`/api/task/${id}/`, { task: updatedTask }); 
            console.log("Edited task:", response.data);
        } catch (error) {
            console.error("Error editing task:", error);
        }     
    }

    const deleteTask = async (id) => {
        try {
            const response = await api.delete(`/api/task/${id}/`);
            console.log("Deleted task:", response.data);
        }
        catch (error) {
            console.error("Error deleting task:", error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() === "") return;
        createTask(task);
        setTask("");
    }

    const handleDelete = (id) => {
        deleteTask(id);
        const updatedTaskList = taskList.filter((item) => item.id !== id)
        setTaskList(updatedTaskList);
    }

    const handleEdit = (id, task) => {
        setTaskId(id);
        setPopUp(true);
        setTask(task);
    }

    return (
        <>
            {popup ? <UpdateForm taskId={taskId} taskList={taskList} task={task} setTask={setTask} setPopUp={setPopUp} editTask={editTask}/> :
                <>
                    <form onSubmit={handleSubmit}>
                        <input value={task} onChange={(e) => setTask(e.target.value)} type="text" />
                        <button type="submit">Submit</button>
                    </form>
                    <div className="task-list">
                        {taskList.map((task) => (
                            <TaskList key={task.id} task={task.task} id={task.id} handleDelete={handleDelete} handleEdit={handleEdit} />
                        ))}
                    </div>
                </>
            }
        </>
    );
}

export default TaskManagerForm;