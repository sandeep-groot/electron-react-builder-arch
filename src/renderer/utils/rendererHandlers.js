import { channels } from '../constants/electron';

export const setTitle = (title) => {
  window?.api?.setTitle(title);
};

export const quitApp = (cb) => {
  return window?.api?.handleQuitApp((event, value) => {
    cb();
    event.sender.send(channels?.QUIT_APP, value);
  });
};

export const filePathRenderer = async () => {
  return await window?.api?.openFile();
};

export const settingsRenderer = (cb) => {
  return window?.api?.handleSetting((event, value) => {
    cb();

    // It will call back the main process
    event.sender.send(channels?.SETTINGS, value);
  });
};

/**
 * @returns node version
 */
export const getNodeVersion = () => window.api.node();

/**
 * @returns chrome version
 */

export const getChromeVersion = () => window.api.chrome();

/**
 *
 * @returns electron version
 */

export const getElectronVersion = () => window.api.electron();
