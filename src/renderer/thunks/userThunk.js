import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  httpRegisterUser,
  httpLoginUser,
  httpMeUser,
} from '../httpRequests/userRequests';

import {
  clearUserInfoFromLocalStorage,
  setupUserInfoToLocalStorage,
} from '../utils/localStorageUtils/userInfo';

/**Creating Login Thunk */

const createRequest = async (jwt, loginData) => {
  if (jwt && !(loginData?.identifier && loginData?.password)) {
    return await httpMeUser(jwt);
  }
  if (loginData?.identifier && loginData?.password) {
    return await httpLoginUser(loginData);
  }

  throw Error('Invalid login request!');
};

export const login = createAsyncThunk(
  'user/login',
  async (loginData, { rejectWithValue }) => {
    const jwt = localStorage?.getItem('jwt');

    try {
      const response = await createRequest(jwt, loginData);

      if (response.status < 200 || response.status >= 300) {
        clearUserInfoFromLocalStorage();
        return rejectWithValue(response?.data);
      }

      const result = jwt
        ? {
            jwt,
            user: {
              ...response?.data?.user,
            },
          }
        : response?.data;

      setupUserInfoToLocalStorage(result);

      return result;
    } catch (error) {
      clearUserInfoFromLocalStorage();
      return rejectWithValue(error);
    }
  }
);

export const me = createAsyncThunk(
  'user/me',
  async (data, { rejectWithValue }) => {
    const jwt = localStorage?.getItem('jwt');

    try {
      const response = await createRequest(jwt, data);

      if (response.status < 200 || response.status >= 300) {
        clearUserInfoFromLocalStorage();
        return rejectWithValue(response?.data);
      }

      const result = jwt
        ? {
            jwt,
            user: {
              ...response?.data,
            },
          }
        : response?.data;

      setupUserInfoToLocalStorage(result);

      return result;
    } catch (error) {
      clearUserInfoFromLocalStorage();
      return rejectWithValue(error);
    }
  }
);

// Creating a thunk
export const registration = createAsyncThunk(
  'user/registration',
  async (data, { rejectWithValue }) => {
    // return { user: "new user" };
    try {
      const response = await httpRegisterUser(data);
      if (response.status < 200 || response.status >= 300) {
        clearUserInfoFromLocalStorage();
        return rejectWithValue(data);
      }
      setupUserInfoToLocalStorage(response?.data);
      return response?.data;
    } catch (error) {
      clearUserInfoFromLocalStorage();
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk('user/logout', async () =>
  clearUserInfoFromLocalStorage()
);
