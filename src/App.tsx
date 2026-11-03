import './App.css'
import TodoBoardComponent from "./component/TodoBoardComponent.tsx";
import {Route, Routes, useNavigate} from "react-router-dom";
import NewTaskComponent from "./component/NewTaskComponent.tsx";

function App() {


    return (
        <>
            <h1>ToDo-Frontend</h1>

            <Routes>
                <Route path={"/"} element={<TodoBoardComponent/>}/>
                <Route path={"/newTask"} element={<NewTaskComponent/>}/>
            </Routes>

        </>
    )
}

export default App
