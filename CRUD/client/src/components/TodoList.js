import React from 'react';
import './Todo.css';
import Todo from './Todo';
const List = (props)=>{
    return (
        <div className="todo-container center">
             <div className="todos" type="none">
                {props.filteredTodo.map(todo=>(
                    <Todo key={todo.id} text={todo.text} todos={props.todos} todo={todo} setTodos={props.setTodos}/>
                ))}
            </div>
        </div>
    )
}

export default List;