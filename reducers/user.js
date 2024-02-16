import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { userId: null, firstname: null, username: null },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.userId = action.payload.userId;
      state.value.username = action.payload.username;
      state.value.firstname = action.payload.firstname;
    },
    logout: (state) => {
      state.value.userId = null;
      state.value.username = null;
      state.value.firstname = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
