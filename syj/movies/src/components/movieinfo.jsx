import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import Movielisting from "./movies";
import {BrowserRouter as Link, Navigate} from 'react-router-dom'

function Movieinfo(){

    //: 파라미터(id) 가져오기 
    const movie_id = useParams().id;
    const [movieinfodat, setMovieinfodat] = useState([]);

    useEffect(()=>{
        //8.8점 이상 + 연도별로 정렬
        const API_KEY = 'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
        fetch(API_KEY)
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            //데이터 저장
            const moviesJson = json.data.movies[movie_id];
            console.log(moviesJson)
            setMovieinfodat(moviesJson);})
        },[])
    //: 뒤로가기 기능도 구현
return(
        <div className="info">
            <section className="product">
                <div className="product-wrapper">
                    <img src={movieinfodat.medium_cover_image} className="img" alt="error"/>
                    <div className="product-info">
                        <h3>{movieinfodat.title_long}</h3>
                        <h5>{movieinfodat.rating}</h5>
                        <p>
                        {movieinfodat.description_full}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Movieinfo;