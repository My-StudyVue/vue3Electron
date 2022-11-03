import { app, BrowserWindow } from 'electron'

const createWindow = () => {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true, //node的集成
      contextIsolation: false,
    }
  })

  console.log(process.env);


  //VITE_DEV_SERVER_HOST 如果是undefined 换成  VITE_DEV_SERVER_HOSTNAME
  win.loadURL(`http://${process.env['VITE_DEV_SERVER_HOSTNAME']}:${process.env['VITE_DEV_SERVER_PORT']}`)

}

// app初始化
app.whenReady().then(createWindow)