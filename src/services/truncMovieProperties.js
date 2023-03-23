export const truncMoviesProperties = movies => {
  const truncatedMovies = movies.map(({ id, title, poster_path, overview }) => {
    return { id, title, poster_path, overview };
  });
  return truncatedMovies;
};
