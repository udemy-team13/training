import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/loader/Loader";
import DetailMovie from "../components/detail/DetailMovie";

export default function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const {
        data: { movie },
      } = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setLoading((prev) => !prev);
      setDetail(movie);
      console.log(movie);
    })();
  }, []);

  return <>{loading ? <Loader /> : <DetailMovie sortData={detail} />}</>;
}
