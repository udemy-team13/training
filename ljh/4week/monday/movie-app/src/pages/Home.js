import { useEffect, useState } from "react";
import Loader from "../components/loader/Loader";
import MovieList from "../components/home/MovieList";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await (
        await fetch(
          "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
        )
      ).json();
      setLoading((prev) => !prev);
      setMovie(data);
    })();
  }, []);

  return <>{loading ? <Loader /> : <MovieList rawData={movie} />}</>;
}
