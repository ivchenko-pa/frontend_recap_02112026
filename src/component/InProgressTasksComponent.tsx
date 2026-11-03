import type {Task} from "../type/Task.ts";
import TaskComponent from "./TaskComponent.tsx";

type InProgressTasksProps = {
    tasks:Task[],
    reloadTrigger:boolean,
    setReloadTrigger:(flag:boolean)=>void
}

export default function InProgressTasksComponent(props:Readonly<InProgressTasksProps>){

    const tasks = props.tasks.map(
        (task)=> (<TaskComponent key={task.id} id={task.id} status={task.status} description={task.description} reloadTrigger={props.reloadTrigger} setReloadTrigger={props.setReloadTrigger}/>)
    )
    return (

        <section className="board-column">
            <h2>In progress</h2>
            {tasks}
        </section>
    )
}