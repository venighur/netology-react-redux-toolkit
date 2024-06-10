import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MovieData } from '../types';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { removeFavorite, addFavorite } from '../app/slices/favoritesSlice';

type ListItemProps = {
  movie: MovieData;
}

function ListItem({ movie }: ListItemProps) {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector(state => state.favorites);

  const addToFavorites = () => {
    dispatch(addFavorite(movie));
  }

  const removeFromFavorites = () => {
    dispatch(removeFavorite(movie));
  }

  const isInFavorites = () => {
    return favorites.includes(movie);
  }

  return (
    <li className="d-flex list-item mb-3">
      <Card className="w-100">
        <Card.Body>
          <Row style={{ height: '150px' }}>
            <Col lg={4}>
              <Card.Img
                className="me-3 list-poster"
                src={movie.Poster}
                alt={movie.Title}
              />
            </Col>
            <Col className="d-flex flex-column justify-content-between" lg={8}>
              <div>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Year}</Card.Text>
              </div>
              <div className="w-100 d-flex justify-content-between align-items-center">
                {isInFavorites()
                  ? <span className="material-icons favorites" onClick={removeFromFavorites}>favorite</span>
                  : <span className="material-icons favorites" onClick={addToFavorites}>favorite_border</span>}
                <Link className="me-2" to={`/movies/${movie.imdbID}`}>
                  View Details
                </Link>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </li>
  );
}

export default ListItem;