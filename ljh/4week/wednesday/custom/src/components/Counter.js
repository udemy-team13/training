import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <p>카운트 : {count}</p>
      <button onClick={handleCount}> 증가 </button>
    </div>
  );
}
