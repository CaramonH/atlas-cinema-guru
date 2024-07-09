import React, { useState, useEffect } from 'react';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import axios from 'axios';

const Favorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/titles/favorite/');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div>
      <h1>Movies you like</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
