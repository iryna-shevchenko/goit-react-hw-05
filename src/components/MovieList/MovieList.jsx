import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
const MovieList = ({ movies, title = "Trending movies" }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={css.list}>
        <p className={css.title}>{title}</p>
        {movies.map(({ title, id }) => (
          <li key={id} className={css.link}>
            <Link to={`/movies/${id}`} state={location}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
