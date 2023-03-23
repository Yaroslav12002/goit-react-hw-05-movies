import PropTypes from 'prop-types';

export const ReviewItem = ({ author, content }) => {
  return (
    <div>
      <h2>author: {author}</h2>
      <p>{content}</p>
    </div>
  );
};

ReviewItem.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};
