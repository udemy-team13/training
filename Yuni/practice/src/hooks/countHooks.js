import React, { useState } from "react";

function UseCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };
  return { count, increment };
}

export default UseCounter;
