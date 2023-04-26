import React, { useState, useEffect } from "react";
import "./Header.css";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=8efd7670";
const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const fetchDefaultMovies = async () => {
      const searchTerms = [
        "action",
        "comedy",
        "drama",
        "thriller",
        "horror",
        "romance",
      ];
      const randomIndex = Math.floor(Math.random() * searchTerms.length);
      const searchTerm = searchTerms[randomIndex];

      const response = await fetch(`${API_URL}&s=${searchTerm}`);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search.slice(0, 10));
        setSearched(true);
      } else {
        setMovies([]);
        setSearched(false);
      }
    };
    fetchDefaultMovies();
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${AP}&s=${title}`);
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
    setSearched(true);
    console.log(data);
  };

  return (
    <div>
      <input
        placeholder="Search for movies or TV series"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            searchMovies(searchTerm);
          }
        }}
      />

      {searched && movies?.length > 0 ? (
        <div className="returned_data">
          {movies.map((movie) => (
            <div className="card_data" key={movie.imdbID}>
              <MovieCard
                name={movie.Title}
                year={movie.Year}
                type={movie.Type}
                image={movie.Poster}
              />
            </div>
          ))}
        </div>
      ) : searched && movies?.length === 0 ? (
        <div className="movie_not_found">
          <h2>No movies found</h2>
        </div>
      ) : null}
    </div>
  );
};



export default Header;
