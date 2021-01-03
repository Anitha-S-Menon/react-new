import React from "react"

function TodoItem(props){
    console.log(props)
    return(
        <div className="todo-item">
            
            <input Type ="checkbox" checked={props.product.completed}
            onChange={()=>props.handleChange(props.product.id)}/>
            <span>{props.product.text}</span>
            
        </div>
    )
}
export default TodoItem