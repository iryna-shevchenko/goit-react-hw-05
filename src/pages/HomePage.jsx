import MovieList from "../components/MovieList/MovieList";
import { fetchTrendingMovies } from "../Api";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import toast, { Toaster } from "react-hot-toast";

const HomePage = () => {
  // const list = getMovies();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {movies.length > 0 && (
        <MovieList movies={movies} title="Trending movies" />
      )}
      {isLoading && <Loader />}
      {error && toast.error("ERROR!")}
      <Toaster />
    </>
  );
};
export default HomePage;
