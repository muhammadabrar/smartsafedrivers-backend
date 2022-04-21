const { app, BrowserWindow } = require("electron");

const server = require("./index");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 700,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL("http://localhost:5000");
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("resize", function (e, x, y) {
  mainWindow.setSize(x, y);
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});