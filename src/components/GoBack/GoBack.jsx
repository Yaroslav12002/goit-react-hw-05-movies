import PropTypes from 'prop-types';
import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from './GoBack.styled';

export const GoBack = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft />
      {children}
    </StyledLink>
  );
};

GoBack.propTypes = {
  to: PropTypes.object,
  children: PropTypes.string,
};
