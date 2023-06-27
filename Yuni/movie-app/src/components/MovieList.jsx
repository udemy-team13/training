import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./MovieList.module.css";
import Loading from "./Loading";
import defaultImg from "../assets/defaultImg.png";

function MovieList() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const handleImgError = (e) => {
    e.target.src = defaultImg;
  };

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json`)
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setMovies(json.data.movies);
      });
  }, []);
  console.log(movies);

  return (
    <>
      <div>
        <h1 className={styles.title}>Movie Gallery 🍯</h1>
        {loading ? (
          <Loading />
        ) : (
          <div className={styles.wrapper}>
            {movies.map((movie) => (
              <div className={styles.movieItem} key={movie.id}>
                <Link to={`/detail/${movie.id}`}>
                  <img
                    className={styles.imageCard}
                    src={movie.medium_cover_image}
                    alt="img"
                    onError={handleImgError}
                  />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default MovieList;
