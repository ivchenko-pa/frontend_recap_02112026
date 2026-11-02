import {useEffect, useState} from "react";
import axios from "axios";
import type {Task} from "../Task.ts";
import OpenTasksComponent from "./OpenTasksComponent.tsx";
import InProgressTasksComponent from "./InProgressTasksComponent.tsx";
import DoneTasksComponent from "./DoneTasksComponent.tsx";

export default function TodoBoardComponent() {

    const [reloadTrigger, setReloadTrigger] = useState<number>(0)
    const [openTasks, setOpenTasks] = useState<Task[]>([])
    const [doneTasks, setDoneTasks] = useState<Task[]>([])
    const [inProgressTasks, setInProgressTasks] = useState<Task[]>([])


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
        <section className="board-section">
            <OpenTasksComponent tasks={openTasks} setReloadTrigger={setReloadTrigger}/>
            <InProgressTasksComponent tasks={inProgressTasks} setReloadTrigger={setReloadTrigger}/>
            <DoneTasksComponent tasks={doneTasks} setReloadTrigger={setReloadTrigger}/>
        </section>
    )

}