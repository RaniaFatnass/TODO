import React from 'react';
import './App.css';
import {useState} from 'react';


function App() {
  const [todos, setTodos] = useState([
    {id:1,  text: "action1" },
    { id:2, text: "todo2" },
  ]);
  const [todo,setTodo]=useState('');

  const removeTodo = todoId => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    console.log(todo.id);
    console.log(todoId);
    setTodos(updatedTodos);
  };
  return (
    <>
     <ul>
    {
    todos.map(item=>
    <li>
      {item.text}
      <button onClick={() => removeTodo(item.id)}>
          x   
     </button>
      </li>)
    }  
    </ul>
    <input type='text' value={todo} onChange={(e)=>{setTodo(e.target.value)}}></input>
    <button onClick={()=>{setTodos([...todos, {id:3, text : todo}]) 
    setTodo('')
  }}>ADD</button>
 
    </>
  );
}

export default App;
