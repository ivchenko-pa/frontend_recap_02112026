import {useEffect, useState} from "react";
import axios from "axios";
import type {Task} from "../type/Task.ts";
import {useNavigate} from "react-router-dom";
import TasksColumnComponent from "./TasksColumnComponent.tsx";

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
                console.log(err);
            });
    }, [reloadTrigger])


    return (
        <>
            <div className="new-task-button-container">
                <input type="button" onClick={() => nav("/newTask")} value="Place new task"/>
            </div>
            <section className="board-section">

                <TasksColumnComponent colName="Open" tasks={openTasks}
                                    reloadTrigger={reloadTrigger}
                                    setReloadTrigger={setReloadTrigger}/>

                <TasksColumnComponent colName="In Progress" tasks={inProgressTasks}
                                      reloadTrigger={reloadTrigger}
                                      setReloadTrigger={setReloadTrigger}/>

                <TasksColumnComponent colName="Open" tasks={doneTasks}
                                      reloadTrigger={reloadTrigger}
                                      setReloadTrigger={setReloadTrigger}/>
            </section>
        </>
    )

}