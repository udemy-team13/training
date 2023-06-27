import {React, useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movielisting from "../components/movies";
import Movieinfo from "../components/movieinfo";

function App() {
  const [moviedat, setMoviedat] = useState([]);

  //: 데이터 가져오기
  useEffect(()=>{
    //8.8점 이상 + 연도별로 정렬
    const API_KEY = 'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
    fetch(API_KEY)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        //데이터 저장
        const moviesJson = json.data.movies;
        console.log(moviesJson)
        setMoviedat(moviesJson);
    })
},[])

  return (
    <Router>
      <section className="products">
        <div className="title">
          <h2>our products</h2>
          <div className="title-underline"></div>
        </div>
            <Movielisting moviedat={moviedat}></Movielisting>
      </section>
      <Routes>
        <Route path="/" element={<Movielisting />}></Route>
        <Route path="/movies/:id" element={<Movieinfo />}></Route>
      </Routes>
    </Router>
  );
}

export default App;