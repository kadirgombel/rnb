import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const init = createAsyncThunk('startup/init', async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
});

const startupSlice = createSlice({
  name: 'startup',
  initialState: {
    loading: true,
  },
  reducers: {},
  extraReducers: {
    [init.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [init.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default startupSlice;
