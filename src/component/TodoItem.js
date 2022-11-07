import { Component } from "react";
import './TodoItem.css';

class TodoItem extends Component{
    render(){
        const {id,text,checked,lineToggle,removeTodo} = this.props;
        return(
            <div className="todoItem">
                {/* 누구를 클릭했는지 알 수 있게 (id)값을 넘겨줌. */}
                <span className="remove" onClick={()=>removeTodo(id)}>X</span>
                <div className={checked? "checked" : ""} 
                onClick={()=>{lineToggle(id)}}>{text}</div>
            </div>
        )
    }
}

export default TodoItem;
// TodoItem을 묶어줄 TodoItemList.js에 붙임.