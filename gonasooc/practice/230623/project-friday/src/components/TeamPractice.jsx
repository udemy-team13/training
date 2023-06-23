import { React, useState } from 'react';
import img01 from 'assets/img/img_detail_01.jpg';
import img02 from 'assets/img/img_detail_02.jpg';
import img03 from 'assets/img/img_detail_03.jpg';

function Auth() {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const checkAuth = () => {
    if(userId === 'admin' && userPw === 'password') {
      alert('로그인 성공!')
    } else {
      alert('로그인 실패!')
    }
  }
  
  return (
    <div>
      <input type="text" value={userId} onChange={(e) => {
        setUserId(e.target.value);
      }} />
      <input type="password" value={userPw} onChange={(e) => {
        setUserPw(e.target.value);
      }} />
      <button onClick={checkAuth}>로그인</button>
    </div>
  )
}

function TodoList() {
  const [todo, setTodo] = useState([]);
  // const [newTodo, setNewTodo] = useState('');
  const [newTodo, setNewTodo] = useState({});
  // function createTodo() {
  //   if(newTodo) {
  //     let copy = [...todo];
  //     copy.push(newTodo);
  //     setTodo(copy);
  //     setNewTodo('');
  //   } else {
  //     alert('할일을 입력하거라');
  //   }
  // }
  function createTodo() {
    let copy = [...todo];
    copy.push(newTodo);
    setTodo(copy);
    setNewTodo({});
  }

  function delTodo(id) {
    let copy = [...todo];
    copy = copy.filter((item) => {
      return item.id !== id;
    })
    setTodo(copy);
  }

  return (
    <div>
      <input type="text" value={newTodo.txt || ''} onChange={(e) => {
        setNewTodo({id: todo.length + 1, txt: e.target.value});
      }} />
      <button onClick={() => {
        createTodo();
      }}>할일추가</button>
      <ul>
        {
          todo.map((item) => {
            return (
              <li key={item.id}>{item.txt}
                <button type="button" onClick={() => { delTodo(item.id);}}>삭제</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

function RandomGen() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);

  function getRandomNumber(min, max){
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(number);
  }

  return (
    <div>
      <input type="text" placeholder='최소값' onChange={(e) => {
        setMin(Number(e.target.value));
      }} />
      <input type="text" placeholder='최대값' onChange={(e) => {
        setMax(Number(e.target.value));

      }} />
      <button type="button" onClick={() => {
        getRandomNumber(min, max);
      }}>숫자랜덤생성</button>
      <p>{randomNumber}</p>
    </div>
  )
}

function ImageSlide() {
  const images = [img01, img02, img03];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  function prevSlide() {
    if(currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 1);
    }
  }

  function nextSlide() {
    if(currentIndex !== images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }


  return (
    <div>
      <button onClick={() => {
        prevSlide();
      }}>이전</button>
      <img src={images[currentIndex]} alt="" width="300" height="300" />
      <button onClick={() => {
        nextSlide();
      }}>다음</button>
    </div>
  )
}

export { Auth, TodoList, RandomGen, ImageSlide };