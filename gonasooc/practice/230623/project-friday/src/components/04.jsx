import { React, useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('clearInterval');
    };
  }, [])

  return (
    <p>{count}</p>
  )
}


const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  }

  return (
    <button onClick={handleClick}>{ isOn ? '켜짐' : '꺼짐'}</button>
  )
}

function TodoList(props) {
  const todos = props.todos;

  return (
    <ul>
      { todos.map((item) => {
        return <li key={item.id}>{item.text}</li>
      })}
    </ul>
  )
}

function Practice04() {
  const todos = [
    { id: 1, text: '할 일 목록 1'},
    { id: 2, text: '할 일 목록 2'},
    { id: 3, text: '할 일 목록 3'},
    { id: 4, text: '할 일 목록 4'},
  ]

  return (
    <div>
      <Toggle />
      <TodoList todos={todos} />
      <Timer />
    </div>
  )
}

export default Practice04;