import type {Task} from "../Task.ts";
import TaskComponent from "./TaskComponent.tsx";

type DoneTasksProps = {
    tasks:Task[],
    reloadTrigger:boolean,
    setReloadTrigger:(flag:boolean)=>void
}

export default function DoneTasksComponent(props:Readonly<DoneTasksProps>){

    const tasks = props.tasks.map(
        (task)=> (<TaskComponent key={task.id} id={task.id} status={task.status} description={task.description} reloadTrigger={props.reloadTrigger} setReloadTrigger={props.setReloadTrigger}/>)
    )
    return (

        <section className="board-column">
            <h2>Done</h2>
            {tasks}
        </section>
    )
}