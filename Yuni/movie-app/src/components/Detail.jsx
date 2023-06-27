import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import Loading from "./Loading";
import defaultImg from "../assets/defaultImg.jpg";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const handleImgError = (e) => {
    e.target.src = defaultImg;
  };

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setMovies(json.data.movie);
      });
  }, []);
  console.log(movies);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.wrapper}>
          <img
            src={movies.large_cover_image}
            alt="imgDetail"
            className={styles.img}
            onError={handleImgError}
          />
          <div>
            <div className={styles.title}>{movies.title}</div>
            <div className={styles.rating}>⭐️ {movies.rating}</div>
            <div className={styles.info}>{movies.description_full}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Detail;
