import { useEffect, useState } from "react"
import TodoItem from "../compenent/TodoItem";

const TodoPage = () => {

  const [todoList, setTodoList] = useState(() => {
    const saved = localStorage.getItem("todoList");
    return saved ? JSON.parse(saved) : [];
  });
  const [todoText, setTodoText] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList])

  const addTodo = () => {
    if(todoText.trim() !== ""){
      setTodoList(() => (
        [...todoList, {
          id: Date.now(),
          text: todoText,
          completed: false
        }]
      ))
      setTodoText('');
    }
  }

  const completeTodo = (todoId) => {
    let updTodoList = [];
    for (const t of todoList){
      if (t.id === todoId && !t.completed){
        t.completed = true;
      }
      updTodoList.push(t);
    }
    setTodoList(updTodoList);
  }

  const deleteTodo = (todoId) => {
    const updTodoList = todoList.filter((item) => item.id !== todoId);
    setTodoList(updTodoList);
  }

  const filteredTodos = todoList.filter(todo => {
    if (filter === 'open') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const deleteAll = () => {
    setTodoList([]);
  }

  return (
    <div className="flex flex-col mt-20 ml-10 mr-10 mb-20 gap-5">
      <h2 className="text-3xl font-bold text-center mb-10">My Todo List</h2>
      <div className="flex flex-row gap-5">
        <input type="text" className="outline-solid rounded-2xl focus:outline-gray-300 outline-gray-100 p-2 w-full" placeholder="Enter todo here" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
        <button className="bg-blue-600 text-white font-medium pl-3 pr-3 pt-2 pb-2 rounded-2xl cursor-pointer" onClick={addTodo}>Submit</button>
      </div>
      <div className="flex flex-row gap-5">
        <div>
          <label htmlFor="filteredTodo">Filter Todo: </label>
          <select name="todoFilter" className="bg-blue-200 p-2 font-medium rounded-2xl" id="todoFilter" onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="open">Pending</option>
          </select>
        </div>
        <button className="bg-red-300 hover:bg-red-600 text-white font-medium pl-3 pr-3 pt-2 pb-2 rounded-2xl cursor-pointer" onClick={deleteAll}>Delete All</button>
      </div>

      <TodoItem todoItems={filteredTodos} completetodo={completeTodo} deletetodo={deleteTodo}/>
    </div>
  )
}

export default TodoPage