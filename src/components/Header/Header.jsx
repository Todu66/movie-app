import React, { useState } from "react";
import "./Header.css";

const API_URL = "http://www.omdbapi.com?apikey=8efd7670";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    }
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
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <img src={movie.Poster} alt={movie.Title} />
          <p>Year: {movie.Year}</p>
        </div>
      ))}
    </div>
  );
};

export default Header;
