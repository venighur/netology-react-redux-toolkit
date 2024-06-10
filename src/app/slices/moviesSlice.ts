import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  status: '',
  error: '',
}

const moviesSlice = createSlice({
  name: 'moviesList',
  initialState,
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    }
  },
});

export const { setMovies, setStatus, setError } = moviesSlice.actions;
export default moviesSlice.reducer;
