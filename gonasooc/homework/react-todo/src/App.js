
import { useState, useEffect } from 'react';
import './App.css';
import bg01 from 'assets/images/bg01.avif';
import bg02 from 'assets/images/bg02.avif';
import bg03 from 'assets/images/bg03.avif';

function App() {
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState(date.getHours());
  const [min, setMin] = useState(date.getMinutes());
  const [sec, setSec] = useState(date.getSeconds());
  const [name, setName] = useState('');
  const [bg] = useState([bg01, bg02, bg03]);
  const [randomNumber, setRandomNumber] = useState(0);

    
  useEffect(() => {
    const timer = setInterval(() => {
      getDate();
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  })

  function getDate() { // 시간 가져오기
    setDate(new Date());
    setHour(date.getHours());
    setMin(date.getMinutes());
    setSec(date.getSeconds());
  }

  function generateRandom() { // 랜덤 숫자 생성
    const number = Math.floor(Math.random() * bg.length);
    setRandomNumber(number);
  }
  

  function inputName(e) {
    if(e.keyCode === 13) {
      if(e.target.value) {
        setName(e.target.value);
      } else {
        alert('이름을 입력해주세요')
      }
    }
  }

  return (
    <div>
      <h2>{ `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}` }</h2>
      <div style={{'marginBottom': '100px'}}>
        <span>HI,</span>
        {
          name
          ? <span>{ name }</span>
          : <input type="text" onKeyDown={(e) => {
            inputName(e);
          }} />
        }
      </div>
      <div style={{'width': '100vw'}}>
        <p>이미지 클릭하면 이미지가 바뀌는 마법</p>
        <img onClick={() => { generateRandom() }} style={{'width': '100%', 'objectFit': 'cover'}} src={bg[randomNumber]} alt="" />
      </div>
    </div>
  );
}

export default App;
