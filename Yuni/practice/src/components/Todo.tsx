import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  const handleTodo = (event) => {
    setTodo(event.target.value);
    console.log(event.target.value);
  };

  const handleButton = (event) => {
    event.preventDefault();

    const newItem = todo;

    if (todo !== "") {
      setList([...list, newItem]);
    }

    setTodo(" ");
  };

  return (
    <>
      <h2>Todo List 🌷</h2>

      <input
        value={todo}
        type="text"
        placeholder="What is your plan?"
        onChange={handleTodo}
      ></input>
      <button type="submit" onClick={handleButton}>
        ADD
      </button>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default Todo;
