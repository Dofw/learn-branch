const Mock = require('../miniprogram_npm/mockjs/index')

const data = Mock.mock('localhost:80/test',{
    'list|1-10': [{
        'id|+1': 1
    }]
})

exports.data = data