import React, { useState } from "react";

export default function Couter() {
  const [count, setCount] = useState(0);

  const handleCountUp = () => {
    setCount(count + 1);
  };

  const handleCountDown = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <div>카운트: {count}</div>
      <button onClick={handleCountUp}>+</button>
      <button onClick={handleCountDown}>-</button>
    </div>
  );
}
