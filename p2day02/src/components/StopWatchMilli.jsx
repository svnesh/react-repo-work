import { useEffect, useRef, useState } from "react"

const StopWatchMilli = () => {

  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(0);

  useEffect(() => {

    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10);

    return () => clearInterval(intervalRef.current);

  }, [isRunning])

  const pauseWatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  }

  const resetWatch = () => {
    setTime(0);
    clearInterval(intervalRef.current);
    setIsRunning(false);
  }

  return (
    <div>
      <h1>Stop watch in milliseconds:- {time}ms</h1>
      <div style={{ display: 'flex', gap: '3px'}}>
        <button style={{ background: "#82eb76", color: "white", padding:"5px", borderRadius: "2px" }} onClick={() => setIsRunning(true)}>Start</button>
        <button style={{ background: "#7676eb", color: "white", padding:"5px", borderRadius: "2px" }} onClick={pauseWatch}>Pause</button>
        <button style={{ background: "#eb7676", color: "white", padding:"5px", borderRadius: "2px" }} onClick={resetWatch}>Reset</button>
      </div>
    </div>
  )
}

export default StopWatchMilli