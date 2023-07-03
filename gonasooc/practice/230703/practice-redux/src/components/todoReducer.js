import React, { useReducer, useState } from "react";

const initialState = [];

const reducer = (state, action) => {
  if (action.type === "ADD") {
    return [...state, action.payload];
  } else if (action.type === "DELETE") {
    return state.filter();
  }
};

export default function Todo() {
  const [todo, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: inputValue,
    };

    if (inputValue.trim() !== "") {
      dispatch({ type: "ADD", payload: newTodo });
      setInputValue("");
      console.log(todo);
    }
  };

  // const delTodo = () => {
  //   const delTodo = () =>{
  //     if()
  //   }
  // }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodo();
        }}
      >
        추가
      </button>
      <div>
        <ul>
          {todo.map((item) => {
            return (
              <li key={item.id}>
                <span>{item.text}</span>
                <button>삭제</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
