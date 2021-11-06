import '../App.css';
import React from 'react';
import Todo from './Todo';
 
function Todos({todos,delTodo}) {
  
 
  return (<div className="todos_container">
      <Todo todos={todos} delTodo={delTodo}></Todo>
  </div>);
}
 
export default Todos;