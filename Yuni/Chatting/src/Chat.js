import React, { useEffect, useState } from "react";
import io from "socket.io-client";

export default function Chat() {
  const socket = io("http://localhost:3001");
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    socket.on("message", handleMessage);
    return () => {
      socket.off("message", handleMessage);
    };
  }, []);

  const handleMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleMessageSubmit = () => {
    if (inputValue.trim() !== "") {
      const currentTime = new Date().toLocaleTimeString();
      socket.emit("message", {
        username,
        content: inputValue,
        time: currentTime,
      });
      setInputValue("");
    }
    console.log(inputValue);
  };
  return (
    <div>
      <h1>실시간 채팅</h1>
      <input
        type="text"
        value={username}
        onChange={handleUsernameChange}
      ></input>
      <h1>채팅</h1>
      <div>
        {messages.map((message, index) => (
          <p key={index}>
            {message.name}: {message.content} - {message.time}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={handleMessageSubmit}>전송하기</button>
    </div>
  );
}
