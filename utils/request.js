const Mock = require('../miniprogram_npm/mockjs/index')

/**
 * wx.request 二次封装
 * 1. 构造成promise风格、同时方便使用async、await
 * 2. 请求配置
 *    提合并、基础配置、独立配置
 * 3. 响应数据处理
 *    状态码、
 *    数据格式约定、
 *    错误处理、
 *    token失效激活逻辑（后序完善）
 * @param {*} options 
 */
const baseConf = {
  baseUrl: 'https://localhost:80',
  timeout: 60000,
}
function Http(option) {
  return new Promise((resolve, reject) => {
    const conf = mergeConf(baseConf, option)
    if(typeof Mock._mocked[conf.url] !== 'undefined'){
      const temp = Mock._mocked[conf.url].template
      const response = Mock.mock(temp)
      resolve(response)
      return
    }
 
    wx.request({
      ...conf,
      success(res) {
        const {code} = res
        if(code === 200) {
          resolve(res.data)
          return 
        }
        // code 状态码
        handlerCodeStatus(option, res, resolve, reject)
      },
      fail(err){
        wx.showToast({
          title: 'fail: 接口失败',
          icon: 'error',
        })
        reject(err)
      }
    })
  })
}

function handlerCodeStatus(option, res, resolve, reject) {
  const {code} = res
  switch(code) {
    case 401:
      resolve(new Promise((reso, reje) => {
        handlerCode401(option, res, reso, reje)
      }))
      break;
    case 500:
      reject('后台的报错信息')
      break;
    default:
      break;
  }
}
/**
 * 刷新token
 * 1. token失效时，搜集所有失效期间的 url 及 option
 * 2. 设置刷新次数
 * 3. 刷新成功后，恢复所有的url
 */
const resetUrlArr = []
const maxNum = 5
let curNum = 0
let isRefresh = false

async function handlerCode401(option, res, reso, reje) {
  if(curNum >= maxNum) {
    // 提醒操作，不在刷新处理。
    return 
  }

  if(!isRefresh) {
    isRefresh = true //一次刷新开始
    try {
      const newToken = await refreshApi()
      localStorage.setItem('auth', newToken)
      //恢复urls
      callHttp([...resetUrlArr, {option, resolve: reso, reject:reje}], newToken)
      // callHttp同步调用后reset
      resetGlobalRefrenceVar()
    } catch (error) {
      resetUrlArr.push({option, resolve: reso, reject:reje}) // 刷新失败, 并且吧本次option加入。
    } finally {
      curNum ++
      isRefresh = false // 一次刷新完成
    }
  }else{
    resetUrlArr.push({option, resolve: reso, reject:reje})
  }
}

function resetGlobalRefrenceVar() {
  curNum = 0
  isRefresh = false
  resetUrlArr = []
}

function callHttp(arr, token) {
  const tokenArrs = arr.map(item => {
    return {
      ...item,
      option: {
        ...item.option,
        auth: token
      },
    }
  })

  // 关键点在 401 处 resolve(promise), 将状态传递新的promise上。达到和业务刷新后关联作用。
  for (let i = 0; i < tokenArrs.length; i++) {
    const item = tokenArrs[i];
    (async () => {
      try {
        const res = await Http(item.option)
        item.resolve(res)
      } catch (error) {
        item.reject(error)
      }
    })()
  }
}

function mergeConf(baseConf, option) {
  const noMergeUrl = /^(((ht|f)tps?):\/\/)/g.test(option.url)
  const url = noMergeUrl ? option.url : urlJoin(baseConf.baseUrl, option.url)

  return {
    ...baseConf,
    ...option,
    url
  }
}

function urlJoin(preUrl, nextUrl) {
  return preUrl + nextUrl
}

module.exports = {
  Http
}