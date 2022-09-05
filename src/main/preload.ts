import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-example';

contextBridge.exposeInMainWorld('api', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,

  quitApp: (args: any) => {
    return ipcRenderer.send('quit-app', args);
  },

  store: {
    get(val: any) {
      return ipcRenderer.sendSync('electron-store-get', val);
    },
    set(property: any, val: any) {
      ipcRenderer.send('electron-store-set', property, val);
    },
    // Other method you want to add like has(), reset(), etc.
  },

  /**
   * Send Method to set app title
   * @param {*} args some argument to be send by the renderer to the main
   * @returns null
   */

  setTitle: (args: any) => {
    return ipcRenderer.send('set-title', args);
  },

  /**
   * Invoke (promise based)Method used to send data from the frontend, process it with ipcMain.handle on the backend and return information to the frontend.
   * @param {*} args some argument to be send by the renderer to the main
   * @returns null
   */
  testInvoke: (args: any) => ipcRenderer.invoke('test-invoke', args),

  /**
   * Send Method used to send data from the frontend, process it with ipcMain.on on the backend and return information to the frontend when it is processed.
   * @param {*} args some argument to be send by the renderer to the main
   * @returns null
   */

  testSend: (args: any) => ipcRenderer.send('test-send', args),

  /**
   * Recieve Method used to recieve data from the backend event.sender and process that with the help of a callback function.
   * @param callback some argument to be send by the renderer to the main
   * @returns null
   */
  testReceive: (callback: any) =>
    ipcRenderer.on('test-receive', (event: any, data: any) => {
      callback(data);
    }),

  getProfileInfo: (args: any) =>
    ipcRenderer.invoke('get-profile-details', args),

  openFile: () => ipcRenderer.invoke('dialog-openFile'),

  handleSetting: (callback: any) => ipcRenderer.on('settings', callback),
  handleQuitApp: (callback: any) => ipcRenderer.on('handle-quit-app', callback),
});
