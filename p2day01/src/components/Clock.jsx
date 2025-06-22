import { useEffect, useState } from "react";

const Clock = () => {

  const [time, setTime] = useState(new Date());
  const [showTime, setShowTime] = useState(true);

  const buttonClick = () => {
    setShowTime(!showTime);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 2000)

    return () => clearInterval(interval);
  }, [])

  return (
    <div className="clock">
      <div style={{ display: 'flex', gap: '3px' }}>
        <button onClick={buttonClick}>{ showTime ? "Hide Clock" : "Show Clock" }</button>
      </div>

      <div>
        {
          (time && showTime) && 
          ( 
            <span>{time.toLocaleTimeString()}</span>
          )
        }
      </div>

    </div>
  )
}

export default Clock