/**
 * @description 公共函数模块
 */
import wx from 'weixin-js-sdk'
import $ajax from '@u/request.js';
import hostEnv from '../config/index.js';
function resultBack (res) {
  return new Promise(resolve => {
    resolve(res)
  })
}
const tools = {
	// 路由跳转
	navTo({
		url,
		title = '首页'
	}) {
		uni.navigateTo({
			url
		})
		setTimeout(() => {
			document.title = title.split('-')[0] || '首页'
		})
	},
	// 路由跳转关闭当前页面
	redirectTo({
		url,
		title = '首页'
	} = params) {
		uni.redirectTo({
			url
		})
		setTimeout(() => {
			document.title = title.split('-')[0] || '首页'
		})
	},
	// 路由返回
	goBack(delta = 1) {
		uni.navigateBack({
			delta
		});
	},
	// 获取url传到参数
	getQuery() {
		const url = window.location.href
		const params = url.substr(url.lastIndexOf('?')).replace('#/', '')
		return new URLSearchParams(params)
	},
	// 延迟执行
	goNext: fn => {
		setTimeout(() => {
			fn()
		}, 1200)
	},
	// 时间转化
	getDateTime(t = new Date().getTime(), type = 'dateTime') {
		let d = new Date(t)
		const date =
			d.getFullYear() +
			'-' +
			(d.getMonth() + 1 > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1)) +
			'-' +
			(d.getDate() > 9 ? d.getDate() : '0' + d.getDate()) +
			' ' +
			(d.getHours() > 9 ? d.getHours() : '0' + d.getHours()) +
			':' +
			(d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes()) +
			':' +
			(d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds())

		if (type === 'dateTime') {
			return date
		} else if (type === 'date') {
			return date.substring(0, 10)
		} else if (type === 'time') {
			return date.substring(11, 16)
		}
	},
	// 弹出确认框
	confirm(content, cb, isCancle = true) {
		uni.showModal({
			title: '温馨提示',
			content: content,
			showCancel: isCancle,
			success: function(res) {
				if (res.confirm) {
					if (cb) cb()
				}
			}
		});
	},
	// 轻提示
	toast(title, cb = 'none') {
		uni.showToast({
			title: title,
			icon: cb
		});
	},
	// 底部弹出菜单
	actionsheet(arr, cb) {
		if (arr.length === 0) return
		let newArr
		if (typeof arr[0] === 'object') {
			newArr = arr.map(item => {
				return item.label
			})
		} else {
			newArr = arr
		}
		uni.showActionSheet({
			itemList: newArr,
			success: function(res) {
				if (typeof arr[0] === 'object') {
					cb(arr[res.tapIndex])
				} else {
					cb(res.tapIndex)
				}
			},
			fail: function(res) {}
		});
	},
	/**
	 * 判断微信还是普通浏览器
	 */
	isWx () {
		var ua = navigator.userAgent.toLowerCase();
		var isWeixin = ua.indexOf('micromessenger') != -1;
		if (isWeixin) {
		    return true;
		}else{
		    return false;
		}
	},
	 /*判断客户端*/
	getClient() {
		let client = '';
		if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {  //判断iPhone|iPad|iPod|iOS
			client = 'IOS';
		} else if (/(Android)/i.test(navigator.userAgent)) {  //判断Android
			client = 'Android';
		} else {
			client = 'PC';
		}
		return client;
	},
	// 微信api上次图片
	wxPhoto (cb) {
		let isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
		const _self = this
		wx.chooseImage({
			count: 1, // 默认9
			sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
			sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
			success: res => {
				var localId = res.localIds[0]
				wx.getLocalImgData({
					localId: localId, // 图片的localID
					success: function(res) {
						let localData = res.localData // localData是图片的base64数据，可以用img标签显示
						if (!isiOS) {
							localData = 'data:image/jpeg;base64,' + localData
						}
						_self.checkUserPhoto(localData, cb)
					}
				})
			}
		})
	},
	// 选择照片
	choosePhoto(cb) {
		if (this.isWx()) {
			this.wxPhoto(cb)
			return
		}
		uni.chooseImage({
			success: chooseImageRes => {
				for (let i = 0; i < chooseImageRes.tempFilePaths.length; i++) {
					const file = chooseImageRes.tempFilePaths[i];
					const img = new Image();
					img.src = file;
					const _self = this
					img.onload = function() {
						if (_self.getClient() === 'IOS') {
							EXIF.getData(img, function() {
								// 获取图片旋转标志位
								var orientation = parseInt(EXIF.getTag(this, "Orientation"))
								// 根据旋转角度，在画布上对图片进行旋转
								if (orientation === 3 || orientation === 6 || orientation === 8) {
									const canvas = document.createElement("canvas");
									const ctx = canvas.getContext("2d");
									if (img.width > 800 || img.height > 800) {
										if (img.width > img.height) {
											img.width = parseInt(700 * (img.height / img.width))
										} else {
											img.width = parseInt(700 * (img.width / img.height))
										}
										img.height = 700
									}
									canvas.width = img.width;
									canvas.height = 700;
									switch (orientation) {
										case 3: // 旋转180°
											ctx.rotate((180 * Math.PI) / 180);
											ctx.drawImage(img, -img.width, -img.height, img.width, img.height);
											break;
										case 6: // 旋转90°
											ctx.rotate((90 * Math.PI) / 180);
											ctx.drawImage(img, 0, -img.width, img.height, img.width);
											break;
										case 8: // 旋转-90°
											ctx.rotate((-90 * Math.PI) / 180);
											ctx.drawImage(img, -img.height, 0, img.height, img.width);
											break;
									}
									const base64 = canvas.toDataURL('image/jpeg')
									_self.checkUserPhoto(base64, cb)
								} else {
									_self.compressImg(img, cb)
								}
							});
						} else {
							_self.compressImg(img, cb)
						}
					};
				}
			}
		}); 
	},
	// 压缩图片
	compressImg (img, cb) {
		const canvas = document.createElement('canvas')
		if (img.height > 800 || img.width > 800) {
				if (img.width > img.height) {
					canvas.width = parseInt(700 * (img.height / img.width))
				} else {
					canvas.width = parseInt(700 * (img.width / img.height))
				}
				canvas.height = 700
		} else {
			canvas.width = img.width
			canvas.height = img.height
		}
		const context = canvas.getContext('2d');
		context.drawImage(img, 0, 0, img.width, img.height, 0 ,0, canvas.width, canvas.height)
		const base64 = canvas.toDataURL('image/jpeg')
		this.checkUserPhoto(base64, cb)
	}
}

export default tools
