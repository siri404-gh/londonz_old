const { app, BrowserWindow } = require('electron')
const express = require('express'); //your express app

app.on('ready', function () {
  express();
  const mainWindow = new BrowserWindow({
    width: 375,
    height: 667,
    autoHideMenuBar: true,
    useContentSize: true,
    resizable: false,
  });
  mainWindow.loadURL('https://www.sreeram.app');
  mainWindow.focus();
  mainWindow.webContents.openDevTools();
});