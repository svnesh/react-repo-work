import { useEffect, useRef, useState } from "react"

const Timer = () => {

  const [seconds, setSeconds] = useState(0);
  const internalRef = useRef();

  useEffect(() => {
    internalRef.current = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000)

    return () => clearInterval(internalRef.current);
  }, []);

  const stopTimer = () => {
    clearInterval(internalRef.current);
  }

  return (
    <div>
      <h1>Seconds: {seconds}s</h1>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  )
}

export default Timer