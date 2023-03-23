import { MoviesList } from 'components/MoviesList/MoviestList';
import { useEffect, useState } from 'react';
import { getMoviesTrends } from 'services/moviesAPI';
import { truncMoviesProperties } from 'services/truncMovieProperties';

const Home = () => {
  const [moviesTrends, setmoviesTrends] = useState([]);

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
      <MoviesList moviesList={moviesTrends} />
    </>
  );
};

export default Home;
