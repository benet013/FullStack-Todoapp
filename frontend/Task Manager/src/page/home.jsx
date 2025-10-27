import TaskManagerForm from "../component/taskmanagerform";
import Logout from "./logout";


function Home() {
    return (
        <>
            <Logout />
            <div className="app">
                <h1 className="app-title">Task Manager</h1>
                <TaskManagerForm />
            </div>
        </>

    );
}

export default Home;