import {useEffect, useState} from "react";
import axios from "axios";
import type {Task} from "../Task.ts";
import OpenTasksComponent from "./OpenTasksComponent.tsx";
import InProgressTasksComponent from "./InProgressTasksComponent.tsx";
import DoneTasksComponent from "./DoneTasksComponent.tsx";
import {useNavigate} from "react-router-dom";

export default function TodoBoardComponent() {

    const [reloadTrigger, setReloadTrigger] = useState<boolean>(false)
    const [openTasks, setOpenTasks] = useState<Task[]>([])
    const [doneTasks, setDoneTasks] = useState<Task[]>([])
    const [inProgressTasks, setInProgressTasks] = useState<Task[]>([])

    const nav = useNavigate()

    useEffect(() => {
        axios.get("/api/todo")
            .then((response) => {
                const tasks: Task[] = response.data;

                setOpenTasks(
                    tasks.filter(task => task.status === "OPEN")
                );

                setInProgressTasks(
                    tasks.filter(task => task.status === "IN_PROGRESS")
                );

                setDoneTasks(
                    tasks.filter(task => task.status === "DONE")
                );

            })
            .catch((err) => {
                console.log("Error block Begin");
                console.log(err);
                console.log("Error block End")
            });
    }, [reloadTrigger])


    return (
        <>
            <div className="new-task-button-container">
                <input type="button" value="Place new task"
                    onClick={() => nav("/newTask")}
                />
            </div>
            <section className="board-section">
                <OpenTasksComponent tasks={openTasks} reloadTrigger={reloadTrigger}
                                    setReloadTrigger={setReloadTrigger}/>
                <InProgressTasksComponent tasks={inProgressTasks} reloadTrigger={reloadTrigger}
                                          setReloadTrigger={setReloadTrigger}/>
                <DoneTasksComponent tasks={doneTasks} reloadTrigger={reloadTrigger}
                                    setReloadTrigger={setReloadTrigger}/>
            </section>
        </>
    )

}