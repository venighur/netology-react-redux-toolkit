import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movie: null,
  loading: false,
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovie(state, action) {
      state.movie = action.payload
    },
    setLoading(state, action) {
      state.loading = action.payload
    }
  }
});

export const { setMovie, setLoading } = movieSlice.actions;
export default movieSlice.reducer;
