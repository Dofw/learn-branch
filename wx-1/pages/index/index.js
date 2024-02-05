// index.js
const adapter = require('../../behaviors/adapter-page-meta.js')
const {testApi} = require('../../service/index')

Component({
  behaviors: [adapter],
  pageLifetimes: {
   async show() {
      let tabbar
      typeof this.getTabBar === 'function' && (tabbar = this.getTabBar())
      tabbar?.init()
    },
  },
  data: {
    headerData: ['我们', "你们"]
  },
  methods: {
    async jumpUser() {
      const res = await testApi()
      console.log(res)
    }
  }
})
