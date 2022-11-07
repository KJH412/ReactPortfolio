import { Component } from "react";
import TodoItem from "./TodoItem";


class TodoItemList extends Component{
    render(){
        const {todosend,onToggle,onRemove} = this.props;
        const todoList = todosend.map(({id,text,checked}) => ( //오브젝트
            <TodoItem id={id} text={text} 
            checked={checked} lineToggle={onToggle}
            removeTodo={onRemove} />
        ))
        return(
            <div>
                {/* <TodoItem /> */}
                {todoList}
            </div>
        )
    }
}

export default TodoItemList;