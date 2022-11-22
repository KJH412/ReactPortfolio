import { Component } from 'react';
import TodoListTemplate from '../component/TodoListTemplate';
import Form from '../component/Form';
import TodoItemList from '../component/TodoItemList';


class Todo extends Component{
  //1. 변수,배열,오브젝트 선언
  id=3; 
  state={        
    uinput:"",   
    todos:[
      {id:0, text:"메모를 추가 할 수 있습니다.",checked:false},
      {id:1, text:"메모를 삭제하세요.", checked:false},
      {id:2, text:"리액트 공부하기",checked:false}
    ]
  }
  //2.메서드
  //form input에 입력
  handleInput=(e)=>{
    // console.log("Input");
    this.setState({
      uinput:e.target.value
    })
  }
  //데이터추가
  handleAdd = () =>{
    // console.log("add");
    //배열과 데이터 합치기
    this.setState({
      uinput:"",  //입력한글자 추가한 후에 input창에서 사라지도록.
      todos:this.state.todos.concat({
      id:this.id++,
      text:this.state.uinput,
      checked:false
      })
    })
  }

  handleToggle= (id) => {
    //console.log("toggle");
    const {todos}=this.state;
    //매개변수로 받은 id가 몇번째 요소인지 순서 찾기
    //findIndex는 조건에 맞는 첫번째 요소의 위치값을 반환한다.
    const index = todos.findIndex(todo => todo.id===id);
    //console.log(index); //클릭하면 순서대로 인덱스012찍힘
    const selectTodo = todos[index];
    //console.log(selectTodo);
    //배열복사하기
    const copyTodos = [...todos];
    //console.log(copyTodos);
    copyTodos[index]={...selectTodo,
    checked:!selectTodo.checked
    }
    //console.log(copyTodos); //선택한게 checked:true로 바뀜.
    this.setState({
      todos:copyTodos
    })
  }

  handleRemove=(id)=>{
    //console.log("remove");
    this.setState({
      todos:this.state.todos.filter(todo => todo.id !== id)
    })
  }
  //3.붙일내용
  render(){
    const {uinput, todos} = this.state;
    return(
      <div className='innerBox'>
        <div className='titleBox'>
            <span>오늘의 스케줄을 입력하세요</span>
            <h2>Todo</h2>
        </div>
        
        <TodoListTemplate sendform={<Form uValue={uinput} 
        addInput={this.handleInput}
        addTodo={this.handleAdd}/>}>
          <TodoItemList todosend={todos} 
          onToggle={this.handleToggle}
          onRemove={this.handleRemove} /> 
        </TodoListTemplate>
      </div>
    )
  }
}

export default Todo;