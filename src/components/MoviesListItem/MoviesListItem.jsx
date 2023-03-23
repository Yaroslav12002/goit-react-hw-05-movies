import PropTypes from 'prop-types';
import { ItemLink } from './MoviesListItem.styled';

export const MoviesListItem = ({ movie, state }) => {
  return (
    <ItemLink to={`/movies/${movie.id}`} state={state}>
      {movie.title}
    </ItemLink>
  );
};

MoviesListItem.propTypes = {
  movie: PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    overview: PropTypes.string.isRequired,
  }),
  state: PropTypes.object,
};
