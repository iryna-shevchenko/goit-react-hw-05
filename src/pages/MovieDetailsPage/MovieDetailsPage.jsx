import MovieInfo from "../../components/MoviInfo/MoviInfo";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchMovie } from "../../Api";
import css from "./MovieDetailsPage.module.css";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import Loader from "../../components/Loader/Loader";
import clsx from "clsx";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const goBack = useRef(location?.state ?? "/");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        setError(null);
        const movieData = await fetchMovie(movieId);
        setMovie(movieData);
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };
    if (movieId) {
      fetchData();
    } else return;
  }, [movieId]);

  return (
    <>
      <GoBackBtn path={goBack.current}>Go back to list</GoBackBtn>
      {loader && <Loader />}
      {movie && <MovieInfo {...movie} />}
      {error && toast.error("ERROR!")}
      <Toaster />
      <ul className={css.castrew}>
        <li>
          <NavLink
            to="cast"
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
          >
            Movie cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to="reviews"
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
          >
            Movie reviews
          </NavLink>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </>
  );
};
export default MovieDetailsPage;
