import { useEffect, useState } from "react"

export default function HideTimer() {
  let [toggle, setToggle] = useState(true);
  const [seconds, setSeconds] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000)
    return() => {
      clearInterval(timer);
    }
  }, [])

  function toggleTimer(reset) {
    if(reset) {
      setToggle(false);
      setSeconds(0);
    } else {
      setToggle(true);
    }    
  }
  

  return (
    <div>
      {
        toggle
        ? <div>
            <h3>{seconds}</h3>
            <button onClick={() => { toggleTimer(true) }}>Hide Timer</button>
          </div>
        : <button onClick={() => { toggleTimer(false) }}>Show Timer</button>
      }
    </div>
  )
}