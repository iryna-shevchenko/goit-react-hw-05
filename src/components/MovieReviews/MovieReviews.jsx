import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../Api";
import css from "./MovieReviews.module.css";
import Loader from "../Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import { BsChatRightDots } from "react-icons/bs";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoader(true);
        setError(null);
        const reviewsData = await fetchMovieReviews(movieId);
        setReviews(reviewsData.results);
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

  return (
    <div>
      {loader && <Loader />}
      {error && toast.error("ERROR!")}
      <Toaster />
      <ul className={css.reviewsList}>
        {reviews.map((result) => (
          <li className={css.reviewsListItem} key={result.id}>
            <BsChatRightDots color="blue" size="50px" />
            {result.author} - {result.content}
            <br></br>
            {result.updated_at}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
