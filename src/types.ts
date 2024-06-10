export type MovieData = {
  Poster: string,
  Title: string,
  Year: string,
  Actors: string,
  Director: string,
  Genre: string,
  Runtime: string,
  imdbRating: string,
  imdbID: string,
};

export type SearchData = {
  Search: MovieData[],
  totalResults: string,
  Response: string,
  Error: string,
}