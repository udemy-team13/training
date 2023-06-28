import React, { useState } from "react";

export const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  return { count, incrementCount };
};
