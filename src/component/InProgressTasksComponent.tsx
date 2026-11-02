import type {Task} from "../Task.ts";
import TaskComponent from "./TaskComponent.tsx";

type InProgressTasksProps = {
    tasks:Task[]
    setReloadTrigger:(flag:number)=>void
}

export default function InProgressTasksComponent(props:Readonly<InProgressTasksProps>){

    const tasks = props.tasks.map(
        (task)=> (<TaskComponent key={task.id} id={task.id} status={task.status} description={task.description} setReloadTrigger={props.setReloadTrigger}/>)
    )
    return (

        <section>
            <h2>In progress</h2>
            {tasks}
        </section>
    )
}