export const ReviewItem = ({ author, content }) => {
  return (
    <div>
      <h2>author: {author}</h2>
      <p>{content}</p>
    </div>
  );
};
