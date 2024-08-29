import axios from "axios";

export const fetchTrendingMovies = async () => {
  const apiKey = "7ad9bf3dee8402edfe9cc8b88bcdfb72";
  const timeWindow = "week";
  const url = `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=${apiKey}`;
  const response = await axios.get(url);
  return response.data.results;
};

export const fetchMovie = async (id) => {
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWQ5YmYzZGVlODQwMmVkZmU5Y2M4Yjg4YmNkZmI3MiIsIm5iZiI6MTcyNDAxMzYxNS4wMTEyNzksInN1YiI6IjY2YmZhNjIyYTEyOTE1ODJhYjQ4OWJmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PbPsw_13JfDnc9iqxanVt_k-oz8dKwlsqV2MGGjx6fc",
    },
  };
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const response = await axios.get(url, options);
  return response.data;
};

export const fetchMovieCast = async (id) => {
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWQ5YmYzZGVlODQwMmVkZmU5Y2M4Yjg4YmNkZmI3MiIsIm5iZiI6MTcyNDAxMzYxNS4wMTEyNzksInN1YiI6IjY2YmZhNjIyYTEyOTE1ODJhYjQ4OWJmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PbPsw_13JfDnc9iqxanVt_k-oz8dKwlsqV2MGGjx6fc",
    },
  };
  const url = `https://api.themoviedb.org/3/movie/${id}/credits`;
  const response = await axios.get(url, options);
  return response.data;
};

export const fetchMovieReviews = async (id) => {
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWQ5YmYzZGVlODQwMmVkZmU5Y2M4Yjg4YmNkZmI3MiIsIm5iZiI6MTcyNDAxMzYxNS4wMTEyNzksInN1YiI6IjY2YmZhNjIyYTEyOTE1ODJhYjQ4OWJmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PbPsw_13JfDnc9iqxanVt_k-oz8dKwlsqV2MGGjx6fc",
    },
  };
  const url = `https://api.themoviedb.org/3/movie/ ${id}} /reviews`;
  const response = await axios.get(url, options);
  return response.data;
};

export const fetchMovieSearch = async (query) => {
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWQ5YmYzZGVlODQwMmVkZmU5Y2M4Yjg4YmNkZmI3MiIsIm5iZiI6MTcyNDAxMzYxNS4wMTEyNzksInN1YiI6IjY2YmZhNjIyYTEyOTE1ODJhYjQ4OWJmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PbPsw_13JfDnc9iqxanVt_k-oz8dKwlsqV2MGGjx6fc",
    },
  };
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}`;
  const response = await axios.get(url, options);
  return response.data;
};
