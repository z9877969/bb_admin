import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: false,
  reducers: {
    setIsLoadingAction(_, { payload }) {
      return payload;
    },
  },
  extraReducers: (b) =>
    b
      .addMatcher(
        ({ type }) => type.endsWith('pending'),
        () => true
      )
      .addMatcher(
        ({ type }) => type.endsWith('fulfilled') || type.endsWith('rejected'),
        () => false
      ),
});

export const { setIsLoadingAction } = loadingSlice.actions;
export default loadingSlice.reducer;
