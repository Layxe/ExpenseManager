// Imports
// #####################################################################################################################
const { app, BrowserWindow } = require('electron')

// Variablen
// #####################################################################################################################

/**
 * Höhe und Breite des Fensters
 */

const width  = 800,
      height = 650

/**
 * Globale Referenz auf das Fenster
 */

let win

// Funktionen
// #####################################################################################################################

function createWindow () {

  // Erstelle das Browser Fenster
  win = new BrowserWindow({

    width: width,
    height: height,
    webPreferences: {
      nodeIntegration: true
    }

  })

  // Lade die Startseite
  win.loadFile('index.html')

  //win.webContents.openDevTools()

  // Fenster wurde geschlossen
  win.on('closed', () => {
    win = null
  })

}

// Events
// #####################################################################################################################

// Erstelle das Fenster
app.on('ready', createWindow)

// Beende die App, falls alle Fenster geschlossen wurden
app.on('window-all-closed', () => {

  if (process.platform !== 'darwin') {
    app.quit()
  }

})

// Starte die App für MacOS
app.on('activate', () => {

  if (win === null) {
    createWindow()
  }

})