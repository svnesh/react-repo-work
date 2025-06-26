import useLocalStorage from "./hooks/useLocalStorage"

const LocalStorageCompnent = () => {

  const [count, setCount] = useLocalStorage('count', 0);

  return (
    <div className="flex flex-col items-center h-screen mt-20">
      <h1 className="text-2xl">Local storage component</h1>
      <div className="flex flex-row gap-3 mt-5">
        <button className="bg-green-600 font-bold pt-1 pl-2 pr-2 pb-1 items-center text-white" onClick={() => setCount(prev => prev + 1)}>+</button>
        <button className="text-black font-medium text-2xl">{count}</button>
        <button className="bg-blue-600 font-bold pt-1 pl-2 pr-2 pb-1 items-center text-white" onClick={() => setCount(prev => prev - 1)}>-</button>
      </div>
    </div>
  )
}

export default LocalStorageCompnent