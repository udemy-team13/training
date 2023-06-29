import React, { useState } from 'react';
import useCount from "../hooks/useCountHook";

function UseCount() {
  // const [value, setValue] = useState(useCounter(10));
  const { count, increment } = useCount(100);

  return (
    <div>
      <p>카운트:{count}</p>
      <button onClick={increment}>증가</button>
    </div>
  )
}

export default UseCount;