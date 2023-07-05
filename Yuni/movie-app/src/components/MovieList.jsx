import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./MovieList.module.css";
import Loading from "./Loading";
import { BiHeart } from "react-icons/bi";
import defaultImg from "../assets/defaultImg.png";

function MovieList() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const handleClick = (movieId) => {
    setMovies((prevMovies) => {
      return prevMovies.map((movie) => {
        if (movie.id === movieId) {
          return {
            ...movie,
            isFavorite: !movie.isFavorite,
          };
        }
        return movie;
      });
    });
    alert("나의 즐겨찾기 목록에 추가되었습니다.");
  };

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
        <h1 className={styles.main_title}>Movie Gallery 🍯</h1>
        {loading ? (
          <Loading />
        ) : (
          <div className={styles.wrapper}>
            {movies.map((movie) => (
              <>
                <div className={styles.movieItem} key={movie.id}>
                  <Link to={`/detail/${movie.id}`}>
                    <img
                      className={styles.imageCard}
                      src={movie.medium_cover_image}
                      alt="img"
                      onError={handleImgError}
                    />
                  </Link>
                  <div className={styles.title}>{movie.title}</div>
                  <div className={styles.genres}>{movie.genres}</div>
                  <button
                    className={styles.like_btn}
                    onClick={() => handleClick(movie.id)}
                  >
                    <BiHeart
                      size="20px"
                      color={movie.isFavorite ? "red" : "black"}
                    />
                  </button>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default MovieList;
