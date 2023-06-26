import styles from "./detailmovie.module.css";
import { useState } from "react";
export default function DetailMovie({ sortData }) {
  const [text, setText] = useState(150);
  const [toggle, setToggle] = useState(false);
  const {
    background_image,
    genres,
    language,
    large_cover_image,
    rating,
    title_long,
    runtime,
    description_full,
  } = sortData;

  // 텍스트 길이 수정 코드
  const handleText = () => {
    if (toggle === false) {
      setText(description_full.length);
      setToggle((prev) => !prev);
    } else {
      setText(150);
      setToggle((prev) => !prev);
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${background_image})` }}
      className={styles.wrapper}
    >
      <img className={styles.poster} src={large_cover_image} alt="" />
      <h3 className={styles.title}>{title_long}</h3>
      <h4 className={styles.title}>장르 : {genres}</h4>
      <h4 className={styles.title}>평점 : {rating}</h4>
      <h4 className={styles.title}>언어 : {language}</h4>
      <h4 style={{ marginBottom: "5rem" }} className={styles.title}>
        상영시간 : {runtime} minutes
      </h4>
      <div>
        <h4 style={{ fontSize: "1.5rem", margin: "1rem" }}> 줄거리 :</h4>
        <p
          style={{ cursor: "pointer" }}
          className={styles.summary}
          onClick={handleText}
        >
          {description_full.length > 150
            ? `${description_full.slice(0, text)} ${toggle ? "" : "...펼치기"}`
            : description_full}
        </p>
      </div>
    </div>
  );
}
