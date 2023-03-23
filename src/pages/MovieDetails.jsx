import { useParams, NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from 'services/moviesAPI';
import { Wrapper, PosterMovieDetails } from './MovieDetails.styled';

const genre = genres => {
  if (!genres) {
    return;
  }
  const onlyNameFromGenres = genres.map(({ name }) => {
    return name;
  });

  return onlyNameFromGenres.join(', ');
};

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovieById = async query => {
      const responseData = await getMovieById(query);
      setMovie(responseData);
    };

    loadMovieById(movieId);
  }, [movieId]);

  if (!movie) {
    return;
  }

  const { title, overview, genres, poster_path, id } = movie;
  const url = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <>
      <Wrapper>
        <PosterMovieDetails src={url} />
        <div>
          <h1>{title}</h1>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genre(genres)}</p>
        </div>
      </Wrapper>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="cast" id={id}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" id={id}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};
