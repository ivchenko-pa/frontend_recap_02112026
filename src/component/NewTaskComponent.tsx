import {useNavigate} from "react-router-dom";
import type {SubmitEvent} from "react";
import axios from "axios";

export default function NewTaskComponent() {

    const nav = useNavigate()

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
        console.log(data.description)
        if (!data.description) {
            alert("Description can not be empty!");
            return;
        }
        axios.post("/api/todo", {description: data.description, status: "OPEN"})
            .then(() => {
                event.target.reset();
                nav("/");
            })


    }

    return (


        <form onSubmit={handleSubmit} className="new-task-form">
            <h2>Place new task</h2>
            <label>
                <textarea name="description" placeholder="Task description..."/>
            </label>
            <div className="new-task-buttons-panel">
                <input type="button" value="Cancel" onClick={() => nav("/")}/>
                <input type="submit" value="Create"/>
            </div>
        </form>


    );
}