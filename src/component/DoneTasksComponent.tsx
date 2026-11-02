import type {Task} from "../Task.ts";
import TaskComponent from "./TaskComponent.tsx";

type DoneTasksProps = {
    tasks:Task[]
    setReloadTrigger:(flag:number)=>void
}

export default function DoneTasksComponent(props:Readonly<DoneTasksProps>){

    const tasks = props.tasks.map(
        (task)=> (<TaskComponent key={task.id} id={task.id} status={task.status} description={task.description} setReloadTrigger={props.setReloadTrigger}/>)
    )
    return (

        <section>
            <h2>Done</h2>
            {tasks}
        </section>
    )
}