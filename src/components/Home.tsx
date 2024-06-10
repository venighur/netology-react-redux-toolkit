import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {setError, setMovies, setStatus} from '../app/slices/moviesSlice';
import { MovieData } from '../types';
import ListItem from './ListItem';
import {Link} from 'react-router-dom';
import Col from 'react-bootstrap/Col';

function Home() {
  const dispatch = useAppDispatch();
  const { movies, status, error } = useAppSelector((state) => state.movies);
  const { favorites } = useAppSelector((state) => state.favorites);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setStatus('loading'));
    dispatch(setMovies([]))
    const url = `https://www.omdbapi.com/?apikey=9713c5e7&s=${e.target.value}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.Response === 'False') {
          dispatch(setStatus('error'));
          dispatch(setError(data.Error));
          return;
        }
        dispatch(setMovies(data.Search));
        dispatch(setStatus(''));
      })
  }

  return (
    <div className="container py-3">
      <Row >
        <Col lg={8}>
          <Form className="d-flex mb-4">
            <Form.Control
              type="text"
              name="search"
              className="me-2"
              placeholder="Search"
              onChange={searchHandler}/>
            <Button variant="primary" type="submit">Search</Button>
          </Form>
        </Col>
        <Col>
          <Link to="/favorites" className="float-end">
            <Button variant="warning">Favorites ({favorites.length})</Button>
          </Link>
        </Col>
      </Row>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <Alert variant="secondary">{error}</Alert>}
      {movies && (
        <ul className="p-0 d-flex flex-wrap justify-content-between">
          {movies.map((movie: MovieData) => <ListItem key={movie.imdbID} movie={movie} />)}
        </ul>
      )}
    </div>
  );
}

export default Home;
