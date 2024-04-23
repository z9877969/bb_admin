import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
  },
  reducers: {
    toggleAuth(state, { payload = null }) {
      state.token = payload;
    },
  },
});

export const { toggleAuth } = authSlice.actions;
export default authSlice.reducer;
