import React, { useEffect, useState } from "react"
import io from 'socket.io-client'

const socket = io("http://localhost:3001")

export default function Chat() {
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    socket.on('message', handleMessage);
    return () => {
      socket.off('message', handleMessage);
    }
  }, [])

  const handleMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  }


  const handleMessageSubmit = () => {
    if(inputValue.trim() !== '') {
      const currentTime = new Date().toLocaleDateString();
      socket.emit('message', {
        username,
        content: inputValue,
        time: currentTime,
      })
      setInputValue('');
    }
  }

  return (
    <div>
      <h1>실시간 채팅</h1>
      <input type="text"
        value={username}
        placeholder="사용자 이름을 입력하세요."
        onChange={(e) => {
          setUsername(e.target.value)
        }} />
      <h2>채팅</h2>
      <div>
        {
          messages.map((item, index) => {
            return (
              <p key={index}>
                {item.username} : {item.content} : {item.time}
              </p>
            )
          })
        }
      </div>
      <input type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
      />
      <button onClick={() => {
        handleMessageSubmit()
      }}>전송</button>
    </div>
  )
}