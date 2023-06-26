import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movie);
      });
  }, []);
  console.log(movies);
  return (
    <>
      <div>
        <img src={movies.large_cover_image} alt="imgDetail" />
      </div>
      <div>{movies.title}</div>
      <div>{movies.description_full}</div>
    </>
  );
}

export default Detail;
