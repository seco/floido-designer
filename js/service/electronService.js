electangular.service("electron", ['$q', 'electron_core', function($q, core) {
  var remote = core.remote;
  return {
    Accelerator: remote.Accelerator,
    app: remote.app,
    autoUpdater: remote.autoUpdater,
    BrowserWindow: remote.BrowserWindow,
    contentTracing: remote.contentTracing, //TODO Promise
    dialog: {
      showErrorBox: remote.dialog.showErrorBox,
      showOpenDialog: function(bw, options) {
        if (!options) {
          options = bw;
          bw = remote.BrowserWindow.getFocusedWindow();
        }
        var deferred = $q.defer();
        remote.dialog.showOpenDialog(bw, options, (result) => {
          if (!result) {
            deferred.reject();
          } else {
            deferred.resolve(result);
          }
        })
        return deferred.promise;
      },
      showSaveDialog: function(bw, options) {
        if (!options) {
          options = bw;
          bw = remote.BrowserWindow.getFocusedWindow();
        }
        var deferred = $q.defer();
        remote.dialog.showSaveDialog(bw, options, (result) => {
          if (!result) {
            deferred.reject();
          } else {
            deferred.resolve(result);
          }
        });
        return deferred.promise;
      },
      showMessageBox: function(bw, options) {
        if (!options) {
          options = bw
          bw = remote.BrowserWindow.getFocusedWindow();
        }
        var deferred = $q.defer();
        remote.dialog.showMessageBox(bw, options, (result) => {
          if (!result) {
            deferred.reject();
          } else {
            deferred.resolve(result);
          }
        });
        return deferred.promise;
      }
    },
    globalShortcut: remote.globalShortcut,
    Menu: remote.Menu,
    MenuItem: remote.MenuItem,
    powerMonitor: remote.powerMonitor,
    powerSaveBlocker: remote.powerSaveBlocker,
    protocol: remote.protocol,
    session: remote.session,
    systemPreferences: remote.systemPreferences,
    Tray: remote.Tray,
    desktopCapturer: core.desktopCapturer,
    webFrame: core.webFrame,
    clipboard: core.clipboard,
    crashReporter: core.crashReporter,
    nativeImage: core.nativeImage,
    process: core.process,
    screen: core.screen,
    shell: core.shell,
    ipcRenderer: core.ipcRenderer
  }
}]);