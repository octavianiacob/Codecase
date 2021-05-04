import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasErrors: false,
  user: null
}

// A slice for user with 3 reducers
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: state => {
      state.loading = true
    },
    getUserSuccess: (state, { payload }) => {
      state.user = payload
      state.loading = false
      state.hasErrors = false
    },
    getUserFailure: state => {
      state.loading = false
      state.hasErrors = true
    },
  },
});

// Three actions generated from the slice
export const { getUser, getUserSuccess, getUserFailure } = userSlice.actions;

// A selector
export const userSelector = state => state.user;

// The reducer
export default userSlice.reducer;

// Asynchronous thunk action
export function fetchUser() {
  return async dispatch => {
    dispatch(getUser());

    try {
      const response = await fetch('/api/current_user');
      const data = await response.json();
      dispatch(getUserSuccess(data));
    } catch (error) {
      dispatch(getUserFailure());
    }
  }
}