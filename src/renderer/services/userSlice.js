import { createSlice } from '@reduxjs/toolkit';

// import { LoginForm } from "pages/login";

import { logout } from '../thunks/userThunk';

export const initialState = {
  jwt: '',
  username: '',
  email: '',
  requestState: '',
  error: undefined,
};

export const selectUser = ({ user }) => user;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    /**Clear the state on logout */
    builder.addCase(logout.fulfilled, () => initialState);

    builder
      .addMatcher(
        (action) => /\/(login|registration|me)\/fulfilled$/.test(action.type),
        (state, { payload }) => {
          console.log('payload :>> ', payload);
          state.requestState = 'fulfilled';
          state.jwt = payload?.jwt;
          state.username = payload?.user?.username;
          state.email = payload?.user?.email;
          state.error = undefined;
        }
      )

      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.requestState = 'pending';
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.error = payload?.error;
          state.requestState = 'rejected';
        }
      );
  },
});

export const { actions, reducer } = userSlice;
