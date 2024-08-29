import css from "./MoviInfo.module.css";

const MovieInfo = ({
  genres,
  release_date,
  original_language,
  overview,
  popularity,
  poster_path,
  title,
}) => {
  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";
  return (
    <div className={css.wrapper}>
      <div className={css.imgBox}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          width="250px"
          alt="poster"
        />
        <p className={css.title}>{title}</p>
      </div>
      <ul className={css.infoList}>
        <li className={css.infoListItem}>
          <span className={css.span}>Overview:</span> {overview}
        </li>
        <li className={css.infoListItem}>
          <span className={css.span}>Popularity:</span> {popularity}
        </li>
        <li className={css.infoListItem}>
          <span className={css.span}>Genres:</span>{" "}
          {genres?.map((genre) => genre.name).join(", ")}
        </li>
        <li className={css.infoListItem}>
          <span className={css.span}>Original language:</span>{" "}
          {original_language}
        </li>
        <li className={css.infoListItem}>
          <span className={css.span}>Release date:</span> {release_date}
        </li>
        \
      </ul>
    </div>
  );
};
export default MovieInfo;
