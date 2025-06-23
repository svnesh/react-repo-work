import { useRef } from "react"

const FocusInput = () => {

  const inputRef = useRef();

  const focusField = () => {
    inputRef.current.focus();
  }

  return (
    <div>
      <input type="text" style={{ border: '2px' }} ref={inputRef} placeholder="Click button to focus" />
      <button onClick={focusField}>Focus Input</button>
    </div>
  )
}

export default FocusInput