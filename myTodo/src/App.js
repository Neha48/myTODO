import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';
import Form from './components/TodoForm';
import List from './components/TodoList';

function App() {
  const [inpText, setinpText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodo, setfiltodo] = useState([]);
  useEffect(()=>{getlocal()},[])
  useEffect(()=>{filterHandler();savetolocal()},[todos,status])
  const filterHandler=()=>{
    switch(status){
      case 'completed':
        setfiltodo(todos.filter(todo=>todo.completed==true));
        break;
      case 'incomplete':
        setfiltodo(todos.filter(todo=>todo.completed==false));
        break;
      default:
        setfiltodo(todos);
        break;    
    }
  }
  const savetolocal =()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  };
  const getlocal =()=>{
    if(localStorage.getItem("todos")===null)
      localStorage.getItem("todos",JSON.stringify([]));
    else{
      let local= JSON.parse(localStorage.getItem("todos"));
      setTodos(local);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        My TODO
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      
      <Form setInpText={setinpText} todos={todos} setTodos={setTodos} inputText={inpText} setStatus={setStatus} />
      <List setInpText={inpText} todos={todos} setTodos={setTodos} setfiltodo={setfiltodo} filteredTodo={filteredTodo}/>
    </div>
  );
}

export default App;
