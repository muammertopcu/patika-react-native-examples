import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const {job} = action.payload;
      const index = state.favorites.findIndex(item => item.id === job.id);
      if (index >= 0) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(job);
      }
    },
  },
});

export const {toggleFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;
