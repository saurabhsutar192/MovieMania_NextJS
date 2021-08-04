import axios from "axios";

const API_KEY = "89440096b2b595752186edca36579ff1";
const baseImgURL = "https://image.tmdb.org/t/p/original";

const caller = axios.create({ baseURL: "https://api.themoviedb.org/3/" });

const endpoints = {
  searchMovie: `search/movie?api_key=${API_KEY}&query=`,
  searchTV: `search/tv?api_key=${API_KEY}&query=`,
  searchPeople: `search/person?api_key=${API_KEY}&query=`,
  fetchTrending: `trending/all/week?api_key=${API_KEY}`,
  fetchTV: `discover/tv?api_key=${API_KEY}`,
  fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentariesMovies: `discover/movie?api_key=${API_KEY}&with_genres=99&include_adult=false`,
};

export { endpoints, baseImgURL, caller };
