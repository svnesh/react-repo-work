import { useReducer } from "react"

const initialState = {
    count: 0,
    step: 1
  }


  function reducerFn(state, action){
    switch (action.type){
      case 'increment':
        return {...state, count: state.count + state.step};
      case 'decrement':
        return {...state, count: state.count - state.step};
      case 'setStep':
        return { ...state, step: action.payload }
      case 'reset':
        return initialState
      default:
        return state;
    }
  }

const CounterReducer = () => {
  
  const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <div className="p-4 border rounded shadow max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Counter Reducer: </h2>
      <div className="text-2xl mb-4">Count: {state.count}</div>
      <div className="flex gap-2 mb-4">
        <button className="bg-green-500 px-4 py-1 text-white rounded" onClick={() => dispatch({type: 'increment'})}>+</button>
        <button className="bg-red-500 px-4 py-1 text-white rounded" onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button className="bg-gray-500 px-4 py-1 text-white rounded" onClick={() => dispatch({type: 'reset'})}>%</button>
      </div>

      <div className="mb-4">
        <label htmlFor="step-size" className="block mb-1 text-sm">Step Size</label>
        <input type="number" className="border px-2 py-1 w-full" value={state.step} onChange={(e) => dispatch({type: 'setStep', payload: parseInt(e.target.value)})} />
      </div>

      <pre className="text-sm bg-gray-100 p-2 rounded">{JSON.stringify(state, null, 2)}</pre>
    </div>    
  )
}

export default CounterReducer