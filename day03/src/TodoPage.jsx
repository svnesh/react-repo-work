import { useState } from "react"
import TodoItemPage from "./TodoItemPage";



const TodoPage = () => {

  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState('');
  const [todoCount, setTodoCount] = useState(0);

  const handleChange = (e) => {
    setTodoText(e.target.value);
  }

  const addTodo = () => {
    if (todoText !== ''){
      setTodoList(() => ([...todoList, {'todotext': todoText}]))
      setTodoText('');
      setTodoCount(todoList.length + 1);
    }
  }
  const removeTodo = (idNum) => {
    const filterdTodo = todoList.filter((item, idx) => idNum !== idx)
    setTodoList([...filterdTodo]);
  }
  const completedTodo = (idNum) => {
    for (const d in todoList){
      if (d == idNum){
        todoList[d].strike = true;
      }
    }
    setTodoList([...todoList]);
    let todoPending = todoList.filter((item) => !item?.strike);
    setTodoCount(todoPending.length);
  }

  return (
    <div className="todo">
      <h2>Todo list :- | TodoCount: {todoCount}</h2>
      <div className="todoInput">
        <input type="text" placeholder="Enter todo here" value={todoText} onChange={handleChange} />
        <button onClick={addTodo}>Submit</button>
      </div>
      <div className="todoList">
        <TodoItemPage todo={todoList} removetodo={removeTodo} completedtodo={completedTodo} />
      </div>
    </div>
  )
}

export default TodoPage