import { createSlice } from '@reduxjs/toolkit';
import { onAppStart } from '../thunks/appThunk';

export const initialState = {
  appInfo: {},
  themeContext: '',
  requestState: '',
  error: undefined,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    /**
     * Omiting reducer case because of using createAsyncThunk as a middleware
     */
    // onAppStart(state, action) {
    //   // ✅ This "mutating" code is okay inside of createSlice!
    //   state.requestState = "fulfilled";
    // },
  },

  extraReducers: (builder) => {
    builder.addCase(onAppStart.fulfilled, (state, { payload }) => {
      // state.appInfo = { ...payload };
      state.requestState = 'fulfilled';
    });
    builder.addCase(onAppStart.pending, (state, { payload }) => {
      state.requestState = 'pending';
    });
    builder.addCase(onAppStart.rejected, (state, { payload }) => {
      state.requestState = 'rejected';
    });
  },
});

// export const { appStart } = appSlice?.actions;
// export default appSlice?.reducer;
