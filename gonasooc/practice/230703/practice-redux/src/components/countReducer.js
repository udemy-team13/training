import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export default function Counter() {
  // dispatch는 action을 발생시키는 함수
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>숫자 카운트</div>
      <p>숫자: {count}</p>
      <button
        onClick={() => {
          dispatch({ type: "INCREASE" });
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREASE" });
        }}
      >
        감소
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        리셋
      </button>
    </div>
  );
}
