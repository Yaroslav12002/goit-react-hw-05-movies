import { useState, useEffect } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviestList';
import { getMoviesByQuery } from 'services/moviesAPI';
import { truncMoviesProperties } from 'services/truncMovieProperties';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    const loadMoviesByQuery = async query => {
      const responseData = await getMoviesByQuery(query);
      setSearchMovies(truncMoviesProperties(responseData.results));
    };

    loadMoviesByQuery(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <SearchBar onSubmit={setSearchQuery} />
      <MoviesList moviesList={searchMovies} />
    </>
  );
};
