import React from "react";
import '../css/bootstrap.css';
import './Todo.css';

const Form =(props)=>{
    const inpTextHandler = (e)=>{
        console.log(e.target.value);
        props.setInpText(e.target.value);
    }
    const submitTodoHandler =(e)=>{
        e.preventDefault();
        props.setTodos([
            ...props.todos, {text:props.inputText, completed:false, id:Math.random()*1000}
        ]);
        console.log(props.todos);
        props.setInpText('');
    }
    const statusHandler=(e)=>{
        props.setStatus(e.target.value);
    }
    return(
        <form className="form center">
            {/* <button type="button" className="btn btn-warning" onClick={disForm()}>Create Todo</button>             */}
            {/* <h2 className="colorBlue center">Create your TODO</h2> */}
            <div className="form-inline " id="createTodoform">
                <input type="text" id="todoInp" value={props.inputText} onChange={inpTextHandler} 
                className="form-control" placeholder="Enter your todo"/> 
                <button type="submit" className="form-control" onClick={submitTodoHandler}>
                    <i className="fa fa-arrow-right"></i></button>
            </div>
            <div id="yourTodo" className="form-inline center">
                <span className="form-inline center">My TODOs</span>
                <select name="todos" className="form-control center" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
        </form>
    );
};
export default Form;