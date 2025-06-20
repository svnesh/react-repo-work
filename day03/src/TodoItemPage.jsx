const TodoItemPage = ({todo, removetodo, completedtodo}) => {
  const handleRemoveTodo = (idx) => {
    removetodo(idx);
  }
  const handleTodoComplete = (idx) => {
    completedtodo(idx);
  }

  return (
    <div className="todoBody">
      <ul>
        {
          todo && todo.map((item, idx) => (
            <li key={idx} style={{textDecoration: item?.strike ? 'line-through' : 'none'} }>
              <span>{idx + 1}. {item.todotext} <button onClick={() => handleRemoveTodo(idx)}>❌</button> <button onClick={() => handleTodoComplete(idx)}>✅</button></span>
            </li>
          ))
        }
      </ul>
      </div>
  )
}

export default TodoItemPage