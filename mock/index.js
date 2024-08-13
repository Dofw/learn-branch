const Mock = require('../miniprogram_npm/mockjs/index')

const data = Mock.mock('https://localhost:80/test',{
  code: 200,
  'list|1-10': [{
      'id|+1': 1
  }]
})

exports.data = data