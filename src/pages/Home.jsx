import { MoviesList } from 'components/MoviesList/MoviestList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMoviesTrends } from 'services/moviesAPI';
import { truncMoviesProperties } from 'services/truncMovieProperties';

const Home = () => {
  const [moviesTrends, setmoviesTrends] = useState([]);
  const location = useLocation();

  useEffect(() => {
    loadMoviesTrends();
  }, []);

  const loadMoviesTrends = async () => {
    const responseData = await getMoviesTrends();
    setmoviesTrends(truncMoviesProperties(responseData.results));
  };

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList moviesList={moviesTrends} state={{ from: location }} />
    </>
  );
};

export default Home;
