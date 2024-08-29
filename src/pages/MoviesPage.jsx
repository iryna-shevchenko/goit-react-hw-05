import { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import Loader from "../components/Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import { fetchMovieSearch } from "../Api";
import MovieList from "../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useSearchParams();
  const query = searchParam.get("query");

  useEffect(() => {
    const fetchData = async () => {
      if (!query || query.trim() === "") {
        toast.error("Enter search term");
        return;
      }
      setError(null);
      try {
        setLoader(true);
        const data = await fetchMovieSearch(query);
        const getMovieData = data.results;
        if (getMovieData.length > 0) {
          setMovies(getMovieData);
        } else {
          setError("No found movie");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, [query]);

  const handleSubmit = (value) => {
    setSearchParam({ query: value });
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {movies && <MovieList movies={movies} title="Search results" />}
      {loader && <Loader />}
      {error && toast.error(error)}
      <Toaster />
    </div>
  );
};

export default MoviesPage;
