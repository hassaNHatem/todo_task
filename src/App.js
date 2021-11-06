import './App.css';
import react, { Component } from 'react'
import Main from './components/Main';
import * as  uuid from 'uuid'
class App extends Component{
  state={
    todos : []
  }

  delTodo = (id)=>{
    let newtodos = this.state.todos.filter(todo=>{
      return todo.id!==id
    })
    this.setState({
      todos:newtodos
    })
  }

  addTodo = (inputval)=>{
    if(inputval!==''){
     const newtodo = {
       id:uuid.v4(),
       content:inputval,
       checked: false
     }
     this.setState({
       todos : [...this.state.todos,newtodo]
     })
  }else{
    alert('enter a todo in the input field')
  }

}
 
  render(){
    console.log(this.state.todos)
    return(<div className="container"><Main delTodo={this.delTodo} todos={this.state.todos} addTodo={this.addTodo}></Main></div>)
   
  }
}
export default App;
