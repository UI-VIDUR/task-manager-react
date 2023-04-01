import React from 'react'
import TodoList from '../components/TodoList'

const Home = () =>{
    let todos = [
        {
            title: "title 1",
            task: "task 1"
        },
        {
            title: "title 2",
            task: "task 2"
        },
        {
            title: "title 3",
            task: "task 3"
        },
    ]
    return(
        <>
        {/* {todos.map((val) => {
            return <h1>{val.title}</h1>
        })} */}
        <TodoList todos={todos} />
            {/* <div className="container">
                <div className="wrapper">
                    <div className="col_left">
                        <h2 className="main_title gradient_text">Add tasks</h2>
                        <div className="form_wrap">
                            <form id="form">
                                <input type="text" placeholder="Add Title" id="title" />
                                <textarea name="task-details" id="task" cols="30" rows="7" placeholder="Add your task here"></textarea>
                                <button className="primary_btn" id="submit-task" type="submit">Add Task</button>
                                {successMsg ? 
                                    <span className="success_msg" id="success">{successMsg}</span>
                                : "" }
                                {errorMsg ? <span className="error_msg" id="error">{errorMsg}</span> : ""}
                            </form>
                        </div>
                    </div>

                    <div className="col_right">
                        <h2 className="main_title gradient_text">manage tasks</h2>
                        <div className="tasks_wrapper d-flex flex-wrap" id="added-tasks">
                            
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Home;