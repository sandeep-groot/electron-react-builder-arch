import { createAsyncThunk } from '@reduxjs/toolkit';
import { setupAppInfoToLocalStorage } from '../utils/localStorageUtils/appInfo';
import { isElectron } from '../utils/elctronHelpers';

export const onAppStart = createAsyncThunk('app/onAppStart', async () => {
  const _isElectron = isElectron();
  _isElectron && setupAppInfoToLocalStorage();

  return {
    appInfo: 'any app info',
  };
});
