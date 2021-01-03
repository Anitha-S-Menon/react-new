import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class MyApp1 extends React.Component{
    constructor(){
        super()
        this.state={
            todos:todosData
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(id){
        this.setState(prevState=>{
            const updatedTodos = prevState.todos.map(todo=>{ 
                if(todo.id==id){
                    todo.completed=!todo.completed
                }
                return todo 
            })
            return {todos:updatedTodos}
            
               
            
        })

    }

    render(){
    const todoItems=this.state.todos.map(item=> <TodoItem key={item.id} product={item} handleChange={this.handleChange}/>)
    return(
        <div>
        <div className="todo-list">
            <h1>To-do list</h1>
        </div>
           
            {todoItems}
        </div>
    )
}
}
export default MyApp1