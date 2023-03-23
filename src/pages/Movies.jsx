import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviestList';
import { getMoviesByQuery } from 'services/moviesAPI';
import { truncMoviesProperties } from 'services/truncMovieProperties';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(() => {
    return searchParams.get('search') ?? '';
  });
  const location = useLocation();

  useEffect(() => {
    const loadMoviesByQuery = async query => {
      const responseData = await getMoviesByQuery(query);
      const movies = responseData.results;
      if (movies.length === 0) {
        Notify.warning(`No movies found for ${query}`);
      }
      setSearchMovies(truncMoviesProperties(movies));
    };

    if (searchQuery !== '') {
      loadMoviesByQuery(searchQuery);
    }
    const nextParams = searchQuery !== '' ? { search: searchQuery } : {};
    setSearchParams(nextParams);
  }, [searchQuery, setSearchParams]);

  return (
    <>
      <SearchBar onSubmit={setSearchQuery} />
      <MoviesList moviesList={searchMovies} state={{ from: location }} />
    </>
  );
};

export default Movies;
