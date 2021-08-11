import Vue from 'vue'
import App from './App'
// 导入网络请求包
import { $http } from '@escook/request-miniprogram'

uni.$http = $http
// 配置请求根路径
uni.$http = $http
// 请求的根路径
// #ifdef H5
$http.baseUrl = '/api'
// #endif
// #ifndef H5
$http.baseUrl = 'https://www.uinav.com'
// #endif

$http.beforeRequest = function(options){
	uni.showLoading({
		title:"正在努力加载..."
	})
}
// 封装的展示消息提示的方法
uni.$showMsg = function (title = '数据加载失败！', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none',
  })
}
$http.afterRequest = function () {
  uni.hideLoading()
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
