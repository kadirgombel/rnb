import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const init = createAsyncThunk('startup/init', async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
});

const startupSlice = createSlice({
  name: 'startup',
  initialState: {
    loaded: false,
  },
  reducers: {},
  extraReducers: {
    [init.fulfilled]: (state, action) => {
      state.loaded = true;
    },
    [init.rejected]: (state, action) => {
      state.loaded = false;
    },
  },
});

export default startupSlice;
