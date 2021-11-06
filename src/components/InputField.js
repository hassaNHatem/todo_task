import '../App.css';
import React from 'react';
import { useState } from 'react'; 
function InputField({addTodo}) {
  const [inputval , changeinputval] = useState('')
 const trackinputval = (e)=>{
    changeinputval(e.target.value)
    
 }
  return (<div className="input_container"><input className="input_field" value={inputval} onChange={(e)=>trackinputval(e)} placeholder='enter a new todo'></input><span className="add_sign" onClick={()=>{addTodo(inputval)
  changeinputval('')
  }}>+</span></div>);
}
 
export default InputField;