import { useState } from "react"

export default function Count() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => { setCount(count + 1) }}>+</button>
      <button onClick={() => { setCount(count - 1) }}>-</button>
    </div>
  )
}