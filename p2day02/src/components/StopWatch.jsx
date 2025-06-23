import { useRef, useState } from "react"

const StopWatch = () => {

  const [secs, setSecs] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(0);

  const startWatch = () => {

    if (isRunning) return;
    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setSecs((s) => s < 59 ? s + 1 : 0);
    }, 1000)

  }

  const pauseWatch = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  }

  const resetWatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setSecs(0)
  }


  return (
    <div>
      <h1>Stop watch: {secs}s</h1>
      <div style={{ display: 'flex', gap: '3px'}}>
        <button style={{ background: "#82eb76", color: "white", padding:"5px", borderRadius: "2px" }} onClick={startWatch}>Start</button>
        <button style={{ background: "#7676eb", color: "white", padding:"5px", borderRadius: "2px" }} onClick={pauseWatch}>Pause</button>
        <button style={{ background: "#eb7676", color: "white", padding:"5px", borderRadius: "2px" }} onClick={resetWatch}>Reset</button>
      </div>
    </div>
  )
}

export default StopWatch