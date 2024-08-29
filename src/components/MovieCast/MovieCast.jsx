import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../Api";
import css from "./MovieCast.module.css";
import Loader from "../Loader/Loader";
import toast, { Toaster } from "react-hot-toast";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoader(true);
        setError(null);
        const castData = await fetchMovieCast(movieId);
        setCast(castData.cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };
    if (movieId) {
      fetchCast();
    } else return;
  }, [movieId]);
  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";
  return (
    <div>
      {loader && <Loader />}
      {error && toast.error("ERROR!")}
      <Toaster />
      <ul className={css.castList}>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : defaultImg
              }
              width="100px"
              alt="poster"
            />
            {actor.name} — {actor.character}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
