import { createSlice } from '@reduxjs/toolkit';
import { MovieData } from '../../types';

type FavoritesState = {
  favorites: MovieData[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action) {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavorite(state, action: {payload: MovieData}) {
      state.favorites = state.favorites.filter((movie) => movie.imdbID !== action.payload.imdbID);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
