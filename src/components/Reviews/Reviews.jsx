import { useParams } from 'react-router-dom';
import { getMovieReview } from 'services/moviesAPI';
import { useState, useEffect } from 'react';
import { ReviewItem } from 'components/ReviewItem/ReviewItem';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    const loadMovieReviews = async query => {
      const responseData = await getMovieReview(query);
      setReviews(responseData);
    };

    loadMovieReviews(movieId);
  }, []);

  if (!reviews) {
    return;
  }

  if (reviews.results.length === 0) {
    return <div>We don't have any reviews for this movie.</div>;
  }

  const { results } = reviews;
  return (
    <div>
      {results.map(({ author, content, id }) => {
        return <ReviewItem key={id} author={author} content={content} />;
      })}
    </div>
  );
};
