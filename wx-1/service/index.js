import {Http} from '../utils/request'

function testApi() {
  return Http({
    url: '/test'
  })
}

exports.testApi = testApi