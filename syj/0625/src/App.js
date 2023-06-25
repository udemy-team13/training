import React from 'react';
import {useEffect, useState, useRef} from 'react';
import {Background, Timming} from './01';
import './App.css';

function App() {
  const [stat, setState] = useState(0);
  const [data, setData] = useState(new Date());
  const url = useRef(1);
  useEffect(()=>{
    setInterval(()=>{
      const c = Math.random();
      setState(c);
    },1000)
  },[setState]);

  // 10초 간격일 경우 url 교체
  useEffect(()=>{
        const d = new Date();
        if (d.getSeconds() % 10 ===0){
          //시간
          const [day, max,min] = [new Date(),7,1]
          const randint = Math.floor(Math.random() * (max - min)) + min
          setData(day);
          url.current = randint;
          console.log(url.current);
        }
        else{
          const day = new Date()
          setData(day);
        }
  },[stat, url]);
  return (
    <>
      <div className="wrapper"><Background rand={url.current}/></div>
      <div className="content">
          <div className="intro">안녕하세요!</div>
          <div className="clock">
              <Timming time={data}/>
          </div>
      </div>
    </>
  );
}

export default App;
