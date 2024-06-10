import React from 'react';
import { useAppSelector } from '../app/hooks';
import { MovieData } from '../types';
import ListItem from './ListItem';
import { Link } from 'react-router-dom';

function Favorites() {
  const { favorites } = useAppSelector((state) => state.favorites);

  return (
    <div className="container py-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Favorites</h2>
        <Link to="/">Back to Movies' List</Link>
      </div>
      <ul className="p-0 d-flex flex-wrap justify-content-between">
        {favorites.map((movie: MovieData) => <ListItem key={movie.imdbID} movie={movie} />)}
      </ul>
    </div>
  );
}

export default Favorites;
