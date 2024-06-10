import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import moviesReducer from './slices/moviesSlice';
import movieReducer from './slices/movieSlice';
import favoritesReducer from './slices/favoritesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movie: movieReducer,
    favorites: favoritesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
