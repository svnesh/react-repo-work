const TodoItem = ({ todoItems, completetodo, deletetodo }) => {
  console.log("todoItem=>", todoItems);
  return (
    <div className="flex">
      <ul className="flex flex-col gap-2">
        {todoItems &&
          todoItems.map((item, idx) => (
            <li
              key={item.id}
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              <div className="flex gap-3 items-center">
                <div>
                  <span>✅</span>
                  <span>{item.text}</span>
                </div>
                <div className="flex gap-3">
                  <button
                    className="bg-gray-100 hover:bg-gray-200 outline-1 outline-gray-300 text-white font-medium p-1 rounded-2xl cursor-pointer"
                    onClick={() => deletetodo(item.id)}
                  >
                    ❌
                  </button>
                  <button
                    className="bg-gray-100 hover:bg-gray-200 text-white outline-1 outline-gray-300 font-medium p-1 rounded-2xl cursor-pointer"
                    onClick={() => completetodo(item.id)}
                  >
                    👍
                  </button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoItem;
