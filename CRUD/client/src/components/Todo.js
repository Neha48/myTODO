import React from 'react';
import './Todo.css';

const todo =({text,todos,todo,setTodos})=>{
    const deleteHandler =()=>{
        console.log(todo);
        setTodos(todos.filter((el)=>el.id!==todo.id));
    };
    const completeHandler=()=>{
        setTodos(todos.map((item)=>{
            if(item.id===todo.id)
                return{
                    ...item,completed:!item.completed,
                };
            return item;
        })
        );
    }
    return(
        <div className="todo form-inline">
            <span className={`todo-item ${todo.completed? "completed":"incomplete"}`}>{todo.text}</span>
            <button className={`btn-group ${todo.completed? "completed" :"incomplete com"}`} onClick={completeHandler}><i className="fa fa-check"/></button>
            <button className="btn-group incom" onClick={deleteHandler}><i className="fa fa-trash"/></button>
        </div>
    )
}
export default todo;