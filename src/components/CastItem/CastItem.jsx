import placeholder from '../../images/no-image-placeholder.png';

export const CastItem = ({ name, url, character }) => {
  return (
    <div>
      <img
        src={url}
        alt={name}
        width="100px"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = placeholder;
        }}
      ></img>
      <p>{name}</p>
      <p>character: {character}</p>
    </div>
  );
};
