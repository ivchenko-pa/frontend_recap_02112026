import type {Task} from "../Task.ts";
import TaskComponent from "./TaskComponent.tsx";

type OpenTasksProps = {
    tasks:Task[],
    reloadTrigger: boolean,
    setReloadTrigger:(flag:boolean)=>void
}

export default function OpenTasksComponent(props:Readonly<OpenTasksProps>){

    const tasks = props.tasks.map(
        (task)=> (<TaskComponent key={task.id} id={task.id} status={task.status} description={task.description} reloadTrigger={props.reloadTrigger} setReloadTrigger={props.setReloadTrigger}/>)
    )
    return (

        <section>
            <h2>Open</h2>
            {tasks}
        </section>
    )
}