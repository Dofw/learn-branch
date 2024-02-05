const {initInstall, adapter} = require('./init/index')
const data = require('./mock/index')
// app.js
App({
  onLaunch() {
    initInstall()
  },
  globalData: {
    userInfo: null
  },
  rem2px: adapter.rem2px
})
