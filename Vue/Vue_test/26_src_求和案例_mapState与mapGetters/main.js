/* 
	该文件是整个项目的入口文件
*/
//引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//引入插件
import VueResource from 'vue-resource'
// 引入Store
import store from './store'

// 使用插件
Vue.use(VueResource)

//关闭vue的生产提示
Vue.config.productionTip = false



//创建Vue实例对象---vm
new Vue({
	el:'#app',
	//render函数完成了这个功能：将App组件放入容器中
  render: h => h(App),
	store,
	beforeCreate(){
		Vue.prototype.$bus=this
	}
})