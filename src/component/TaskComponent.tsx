import axios from "axios";

type TaskProps = {
    id: string,
    description: string,
    status: string,
    reloadTrigger: boolean,
    setReloadTrigger: (flag: boolean) => void
}

export default function TaskComponent(props: Readonly<TaskProps>) {

    function deleteTask() {

        axios.delete("/api/todo/" + props.id)
            .then(r => {
                console.log(r.data);
                props.setReloadTrigger(!props.reloadTrigger)
            })
    }

    function updateTask(toStatus: string) {

        axios.put("/api/todo/" + props.id, {
            "id": props.id,
            "description": props.description,
            "status": toStatus
        })
            .then(r => {
                console.log(r.data);
                props.setReloadTrigger(!props.reloadTrigger)
            })
    }

    function toOpen() {
        updateTask("OPEN")
    }

    function toInProgress() {
        updateTask("IN_PROGRESS")
    }

    function toDone() {
        updateTask("DONE")
    }

    return (

        <section className="task">
            <p>ID: {props.id}</p>
            <p>Status: {props.status}</p>
            <p>Description: {props.description}</p>
            <div className={`task-buttons ${props.status === "OPEN" ? "task-buttons-right" : ""}`}>            {
                props.status === "OPEN" && <>
                    <input type="button" value="To in progress" onClick={toInProgress}/>
                </>
            }
            {
                props.status === "IN_PROGRESS" && <>
                    <input type="button" value="To open" onClick={toOpen}/>
                    <input type="button" value="To done" onClick={toDone}/>
                </>
            }
            {
                props.status === "DONE" && <>
                    <input type="button" value="To in progress" onClick={toInProgress}/>
                    <input type="button" value="Delete" onClick={deleteTask}/>
                </>
            }
            </div>
        </section>

    )
}