import React, {useState} from 'react'
import './App.css';

function App() {

  // state var to store tasks in array and initialised with empty array
  const [list, setList]=useState([]);

  // state var to take what we fill in input
  const[input, setInput]=useState("");


  // creating add todo function which takes in todo
  const addTodo = (todo) => {
    // having a newTodo object
    const newTodo = {
      // each having an id and the actual todo
      id: Math.random(),
      todo: todo,
    };

    // adding the todo to existing list
  setList([...list, newTodo]);

  // clearing input box
  setInput("");

  };

  // FOR DELETING TASKS
  const deleteTodo=(id)=> {
    // filter out todo with id
    // newList contains the tasks with id not equal to on we are deleting
    const newList=list.filter((todo) => todo.id!==id);
    setList(newList);
  };

  


  return (
    <div className='container'>
      <h1 className='heading'>Todo List</h1>
      <div className='task'>
      <input className='input'
       type="text"
       value={input}
       onChange={(e)=> setInput(e.target.value)}
      />
      <button className='addbtn' onClick={()=> addTodo(input)}>Add</button>
      </div>
      <ul>
      {/* taking all todos in array and mapping them */}
      {/* map each todo to list using key as the id */}
        {list.map((todo) =>(
          <li key={todo.id}>
          {/* diaply the actual toda as object todo. property todo */}
            {todo.todo}
            {/* the cross button tab with each item */}
            {/* for deleting, passes the id  property of todo obj */}
            <button className='delbtn' onClick={() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App