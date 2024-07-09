import React, { useState, useEffect } from 'react';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';
import Button from '../../components/general/Button';
import axios from 'axios';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState('');
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    loadMovies(page);
  }, [minYear, maxYear, genres, sort, title, page]);

  const loadMovies = async (pageNum) => {
    try {
      const response = await axios.get('http://localhost:8000/api/titles/advancedsearch', {
        params: {
          minYear: minYear,
          maxYear: maxYear,
          genres: genres.join(','),
          title: title,
          sort: sort,
          page: pageNum,
        }
      });
      setMovies(prevMovies => [...prevMovies, ...response.data.titles]);
    } catch (error) {
      console.error('Failed to load movies:', error);
    }
  };

// Fetch movies from API when any of the filtering or pagination criteria change
  useEffect(() => {
    loadMovies(page);
  }, [minYear, maxYear, genres, sort, title, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="home-page">
      <Filter
        minYear={minYear} setMinYear={setMinYear}
        maxYear={maxYear} setMaxYear={setMaxYear}
        genres={genres} setGenres={setGenres}
        sort={sort} setSort={setSort}
        title={title} setTitle={setTitle}
      />
      <ul className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </ul>
      <Button label="Load More.." onClick={() => setPage(prevPage => prevPage + 1)} />
    </div>
  );
}

export default HomePage
