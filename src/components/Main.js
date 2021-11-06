import '../App.css';
import react, { Component } from 'react'
import Title from './Title';
import InputField from './InputField';
import Todos from './Todos';
class Main extends Component{
 
  render(){
   
    return(<div className="main">
                <Title title = {'Todo App'}></Title>
                <InputField addTodo={this.props.addTodo}></InputField>
                <Todos delTodo = {this.props.delTodo} todos = {this.props.todos}></Todos>
            </div>)
  }
}
export default Main;
