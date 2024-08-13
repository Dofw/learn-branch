const adapter = require('./adapter-rem')
const route = require('../routes/index')

const initInstall = () =>{
  adapter.computedRem()
  route.installRouteBuilder()
}

module.exports = {
  initInstall,
  adapter
}