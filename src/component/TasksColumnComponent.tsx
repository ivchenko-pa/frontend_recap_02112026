import type {Task} from "../type/Task.ts";
import TaskComponent from "./TaskComponent.tsx";

type TasksColumnComponentProps = {
    colName:string
    tasks:Task[],
    reloadTrigger:boolean,
    setReloadTrigger:(flag:boolean)=>void
}

export default function TasksColumnComponent(props:Readonly<TasksColumnComponentProps>){

    const tasks = props.tasks.map(
        (task)=> (<TaskComponent key={task.id} id={task.id} status={task.status} description={task.description} reloadTrigger={props.reloadTrigger} setReloadTrigger={props.setReloadTrigger}/>)
    )
    return (

        <section className="board-column">
            <h2>{props.colName}</h2>
            {tasks}
        </section>
    )
}