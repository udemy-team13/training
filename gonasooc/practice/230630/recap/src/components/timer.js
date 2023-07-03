import React, {useState, useEffect} from 'react'

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000)
    return() => {
      clearInterval(timer);
    }
  }, [])

  return (
    <h3>{seconds}</h3>
  )
}