import React, { useState } from 'react';
import './App.css';

// A MovieList component (main component)
const App = () => {
  // An array of movie objects
  const initialMovies = [
    { id: 1, title: "Inception", genre: "Science Fiction", releaseYear: 2010 },
    { id: 2, title: "The Shawshank Redemption", genre: "Drama", releaseYear: 1994 },
    { id: 3, title: "The Dark Knight", genre: "Action", releaseYear: 2008 },
    { id: 4, title: "12 Angry Men", genre: "Drama", releaseYear: 1957 },
    { id: 5, title: "The Lord of the Rings: The Return of the King", genre: "Fantasy", releaseYear: 2003 },
    { id: 6, title: "Pulp Fiction", genre: "Drama", releaseYear: 1994 },
  ];

  // Stateful components to manage the selected genre
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  // Unique genres for the dropdown
  const genres = ["All Genres", ...new Set(initialMovies.map((m) => m.genre))];

  // Filter logic
  const filteredMovies = selectedGenre === "All Genres" 
    ? initialMovies 
    : initialMovies.filter(movie => movie.genre === selectedGenre);

  // Handle user event
  const handleMovieClick = (title) => {
    alert(`You clicked on: ${title}`);
  };

  return (
    <div className="container">
      {/* JSX syntax for markup */}
      <h1 className="main-title">Movie List</h1>

      {/* Dropdown select element */}
      <div className="filter-section">
        <select 
          id="genre-select"
          value={selectedGenre} 
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>

      {/* Render the list of movies as separate cards */}
      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <div 
            key={movie.id} 
            className="movie-card" 
            onClick={() => handleMovieClick(movie.title)}
          >
            <h3>{movie.title}</h3>
            {/* Display title, genre, and release year */}
            <p className="movie-genre">{movie.genre}</p>
            <p className="movie-release">Released: {movie.releaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;