import '../App.css';
import React from 'react';
import {FaTrash} from 'react-icons/fa'
import { useState } from 'react';
 
function Todo({todos,delTodo}) {
    const [change , setchange] = useState(false)
 const togglechecked = (id)=>{
     todos.map(el=>{
        if(el.id===id){
            el.checked=!el.checked
        }
        
     })
     setchange(!change)

    }
    
  return (
  todos.map((todo,key)=>{
return <div  onDoubleClick={()=>{
    togglechecked(todo.id)
    } } className="todo" key={key}>
<span className={!todo.checked?'check_mark':'checked_mark'}></span>
<p className="todo_content">{todo.content}</p>
<span onClick={()=>{delTodo(todo.id)}} className="delete_btn"><FaTrash/></span>
</div>
  })   
      
 );
}
 
export default Todo;