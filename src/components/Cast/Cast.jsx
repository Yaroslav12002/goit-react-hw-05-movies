import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from 'services/moviesAPI';
import { CastItem } from 'components/CastItem/CastItem';
import placeholder from '../../images/no-image-placeholder.png';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const loadMovieCast = async query => {
      const responseData = await getMovieCast(query);
      setCast(responseData);
    };

    loadMovieCast(movieId);
  }, [movieId]);

  if (!cast?.cast) {
    return;
  }

  if (cast?.cast.length === 0) {
    return <div>No cast 😥</div>;
  }
  return (
    <div>
      {cast.cast.map(({ id, profile_path, name, character }) => {
        const imgUrl = profile_path
          ? `https://image.tmdb.org/t/p/w500${profile_path}`
          : placeholder;

        return (
          <CastItem key={id} name={name} url={imgUrl} character={character} />
        );
      })}
    </div>
  );
};
