import React, { useState } from 'react';

function useCount(initialCount) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  }
  return { count, increment };

}

export default useCount;