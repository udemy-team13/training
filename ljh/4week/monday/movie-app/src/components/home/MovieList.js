import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./movielist.module.css";

export default function MovieList({ rawData }) {
  const { movies } = rawData;
  const [movieList, setMovieList] = useState(movies);
  const [selected, setSelected] = useState("");

  const handleSelect = (e) => {
    if (e.target.value === "year") {
      const copyMovieList = [...movieList].sort((a, b) => a.year - b.year);
      setMovieList(copyMovieList);
      setSelected("year");
    } else if (e.target.value === "rating") {
      const copyMovieList = [...movieList].sort((a, b) => a.rating - b.rating);
      setMovieList(copyMovieList);
      setSelected("rating");
    } else if (e.target.value === "sort") {
      const copyMovieList = [...movies];
      setMovieList(copyMovieList);
      setSelected("");
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <select
          className={styles.select}
          value={selected}
          onChange={handleSelect}
        >
          <option key="sort" value="sort">
            -- 분류 --
          </option>
          <option key="year" value="year">
            년도 &darr;
          </option>
          <option key="rating" value="rating">
            평점 &uarr;
          </option>
        </select>
      </div>
      <ul className={styles.listwrapper}>
        {movieList?.map((movie) => {
          return (
            <li className={styles.poster} key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.medium_cover_image} alt="이미지 없음" />
                <h3>{movie.title_long}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
