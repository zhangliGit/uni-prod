import uniRequest from 'uni-request'
import qs from 'qs'
// 请求拦截
uniRequest.interceptors.request.use(
  request => {
    return request;
  },
  err => {
    return Promise.reject(err);
  });

// 响应拦截
uniRequest.interceptors.response.use(function (response) {
  return Promise.resolve(response);
}, function (error) {
  return Promise.reject(error);
});

const showToast = (tip = '努力加载中.') => {
  uni.showLoading({
    title: tip
  });
}

function responseRes(res, obj) {
  // 清除加载
  uni.hideLoading()
  return new Promise((resolve, reject) => {
    if (res.code === 200 || res.status === true) {
      resolve(res)
    } else if (res.code === 401) {} else {
      uni.showToast({
        title: res.message || '请求服务失败~',
        icon: 'none'
      });
      reject()
      sendError(obj)
    }
  })
}
/**
 * @des 收集请求信息
 */
const sendError = obj => {
}
// postJSON请求
const post = (obj) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: obj.url,
      data: JSON.stringify(obj.params),
      header: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      success: (data) => {
        const res = data.data
        if (res.code === 200) {
          resolve(res)
        } else {
          responseRes(res, obj)
        }
      },
    })
  })
}
// putJSON请求
const putJson = (obj) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: obj.url,
      data: JSON.stringify(obj.params),
      header: {
        'Content-Type': 'application/json',
      },
      method: 'put',
      success: (data) => {
        const res = data.data
        if (res.code === 200) {
          resolve(res)
        } else {
          responseRes(res, obj)
        }
      },
    })
  })
}
// deleteJSON请求
const deleteJSON = (obj) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: obj.url,
      method: 'delete',
      data: obj.params,
      headers: {
        'Content-Type': 'application/json'
      },
      success: (data) => {
        const res = data.data
        if (res.code === 200) {
          resolve(res)
        } else {
          responseRes(res, obj)
        }
      },
    })
  })
}
const errMsg = {
  code: -1,
  message: '服务器异常'
}

const $ajax = {
  async get(obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await uniRequest.get(obj.url, {
        params: obj.params || ''
      })
      res = res.data
      return responseRes(res, obj)
    } catch (err) {
      return responseRes(errMsg, obj)
    }
  },
  async getUrl(obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await uniRequest.get(obj.url)
      res = res.data
      return responseRes(res, obj)
    } catch (err) {
      return responseRes(errMsg, obj)
    }
  },
  async postForm(obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await uniRequest.post(obj.url, obj.params)
      res = res.data
      return responseRes(res, obj)
    } catch (err) {
      return responseRes(errMsg, obj)
    }
  },
  async postQuery(obj, tag = true) {
    if (tag) showToast()
    let url = obj.url + '?'
    for (const key in obj.params) {
      url += key + '=' + obj.params[key] + '&'
    }
    try {
      let res = await uniRequest.post(url)
      res = res.data
      return responseRes(res, obj)
    } catch (err) {
      return responseRes(errMsg, obj)
    }
  },
  async post(obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await post(obj)
      return responseRes(res)
    } catch (err) {
      return responseRes(errMsg, obj)
    }
  },
  async del(obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await uniRequest.delete(obj.url, {})
      res = res.data
      return responseRes(res, obj)
    } catch (err) {
      return responseRes(errMsg, obj)
    }
  },
  async putUrl(obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await uniRequest.put(obj.url)
      res = res.data
      return responseRes(res, obj)
    } catch (err) {
      return responseRes(errMsg, obj)
    }
  },
  async put(obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await uniRequest.put(obj.url, qs.stringify(obj.params))
      res = res.data
      return responseRes(res, obj)
    } catch (err) {
      return responseRes(errMsg, obj)
    }
  },
  async putJson(obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await putJson(obj)
      return responseRes(res)
    } catch (err) {
      return responseRes(errMsg, obj)
    }
  },
  async getWithPara(obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await axios({
        url: obj.url + obj.params,
        method: 'get'
      })
      res = res.data
      return responseRes(res, obj)
    } catch (err) {
      return responseRes(errMsg, obj)
    }
  },
  async delQuery(obj, tag = true) {
    if (tag) showToast()
    let url = obj.url + '?'
    for (const key in obj.params) {
      url += key + '=' + obj.params[key] + '&'
    }
    try {
      let res = await uniRequest.delete(url, {})
      res = res.data
      return responseRes(res, obj)
    } catch (err) {
      return responseRes(errMsg, obj)
    }
  },
  async get(obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await uniRequest.get(obj.url, {
        params: obj.params || ''
      })
      res = res.data
      return responseRes(res, obj)
    } catch (err) {
      return responseRes(errMsg, obj)
    }
  },
  async getUrl(obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await uniRequest.get(obj.url)
      res = res.data
      return responseRes(res, obj)
    } catch (err) {
      return responseRes(errMsg, obj)
    }
  },
  async postForm(obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await uniRequest.post(obj.url, obj.params)
      res = res.data
      return responseRes(res, obj)
    } catch (err) {
      return responseRes(errMsg, obj)
    }
  },
  async postQuery(obj, tag = true) {
    if (tag) showToast()
    let url = obj.url + '?'
    for (const key in obj.params) {
      url += key + '=' + obj.params[key] + '&'
    }
    try {
      let res = await uniRequest.post(url)
      res = res.data
      return responseRes(res, obj)
    } catch (err) {
      return responseRes(errMsg, obj)
    }
  },
  async post(obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await post(obj)
      return responseRes(res)
    } catch (err) {
      return responseRes(errMsg, obj)
    }
  },
  async postWithQuery(obj, tag = true) {
    if (tag) showToast()
    let url = obj.url + '/' + obj.params.query + '?'
    for (const key in obj.params) {
      url += key + '=' + obj.params[key] + '&'
    }
    try {
      let res = await uniRequest.post(url, qs.stringify({}))
      res = res.data
      return responseRes(res, obj)
    } catch (err) {
      return responseRes(err.response.data, obj)
    }
  },
  async del(obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await uniRequest.delete(obj.url, {})
      res = res.data
      return responseRes(res, obj)
    } catch (err) {
      return responseRes(errMsg, obj)
    }
  },
  async putUrl(obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await uniRequest.put(obj.url)
      res = res.data
      return responseRes(res, obj)
    } catch (err) {
      return responseRes(errMsg, obj)
    }
  },
  async put(obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await uniRequest.put(obj.url, qs.stringify(obj.params))
      res = res.data
      return responseRes(res, obj)
    } catch (err) {
      return responseRes(errMsg, obj)
    }
  },
  async putJson(obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await putJson(obj)
      return responseRes(res)
    } catch (err) {
      return responseRes(errMsg, obj)
    }
  },
  async delele(obj, tag = true) {
    if (tag) showToast()
    try {
      let res = await deleteJSON(obj)
      return responseRes(res)
    } catch (err) {
      return responseRes(errMsg, obj)
    }
  },
  async delQuery(obj, tag = true) {
    if (tag) showToast()
    let url = obj.url + '?'
    for (const key in obj.params) {
      url += key + '=' + obj.params[key] + '&'
    }
    try {
      let res = await uniRequest.delete(url, {})
      res = res.data
      return responseRes(res, obj)
    } catch (err) {
      return responseRes(errMsg, obj)
    }
  }
}

export default $ajax