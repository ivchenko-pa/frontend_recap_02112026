type TaskProps = {
    id?: string,
    description: string,
    status: string,
    setReloadTrigger:(flag:number)=>void
}

export default function TaskComponent(props: Readonly<TaskProps>) {
    return (

        <section className="task">
            <p>ID: {props.id}</p>
            <p>Status: {props.status}</p>
            <p>Description: {props.description}</p>

            {props.status === "OPEN" && <input type="button" value="To in progress"/>}
            {props.status === "IN_PROGRESS" && <>   <input type="button" value="To open"/>
                                                    <input type="button" value="To done"/>
                                                </>}
            {props.status === "DONE" && <>   <input type="button" value="To in progress"/>
                <input type="button" value="Delete"/>
            </>}
        </section>

    )

    
}