/**
 * @description 注册全局过滤器
 */

import Vue from 'vue'

const filters = {
}

for (let key in filters) {
	Vue.filter(key, filters[key])
}
