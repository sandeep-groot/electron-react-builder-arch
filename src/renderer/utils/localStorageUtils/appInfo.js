import {
  getChromeVersion,
  getElectronVersion,
  getNodeVersion,
} from '../rendererHandlers';

export const setupAppInfoToLocalStorage = (result) => {
  const electronInfo = {
    node: getNodeVersion(),
    chrome: getChromeVersion(),
    electron: getElectronVersion(),
  };

  localStorage.setItem('electron-app', JSON?.stringify(electronInfo));
};

export const clearAppInfoFromLocalStorage = () => {
  localStorage.clear();
};
