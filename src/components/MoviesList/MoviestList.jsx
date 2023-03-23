import PropTypes from 'prop-types';
import { MoviesListItem } from 'components/MoviesListItem/MoviesListItem';
import { MoviesListSection, MovieList } from './MoviesList.styled';

export const MoviesList = ({ moviesList, state }) => {
  if (!moviesList) {
    return;
  }
  // console.log(moviesList);

  return (
    <>
      <MoviesListSection>
        <MovieList>
          {moviesList.map(movie => {
            return (
              <MoviesListItem key={movie.id} movie={movie} state={state} />
            );
          })}
        </MovieList>
      </MoviesListSection>
    </>
  );
};

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      overview: PropTypes.string.isRequired,
    })
  ),
  state: PropTypes.object,
};
