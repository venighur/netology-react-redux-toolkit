import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setLoading, setMovie } from '../app/slices/movieSlice';

function MovieCard() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { movie, loading } = useAppSelector((state) => state.movie);

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(setMovie(null))
    const url = `https://www.omdbapi.com/?apikey=9713c5e7&i=${id}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch(setMovie(data));
        dispatch(setLoading(false));
      });

  }, []);

  return (
    <div className="container py-3">
      {loading && <p>Loading...</p>}
      {movie && (
        <>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2>{movie['Title']} ({movie['Year']})</h2>
            <Link to="/">Back to Movies' List</Link>
          </div>
          <div className="d-flex">
            <img src={movie['Poster']} alt={movie['Title']} className="me-5" />
            <div className="d-flex fs-5">
              <div className="me-3 fw-lighter">
                <p>Director:</p>
                <p>Genre:</p>
                <p>Runtime:</p>
                <p>Actors:</p>
                <p>IMBD Rating:</p>
              </div>
              <div>
                <p>{movie['Director']}</p>
                <p>{movie['Genre']}</p>
                <p>{movie['Runtime']}</p>
                <p>{movie['Actors']}</p>
                <p>{movie['imdbRating']}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieCard;
