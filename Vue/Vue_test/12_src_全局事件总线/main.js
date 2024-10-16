//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false

/* 这种创建方法很一般 不巧妙
const Demo=Vue.extend()
const d = new Demo() 
Vue.prototype.x = d*/


//创建vm
new Vue({
	el: '#app',
	render: h => h(App),
	// 将全局事件总线挂载在创建生命周期之前
	beforeCreate(){
		// 这里的this指的就是VM
		Vue.prototype.$bus=this//安装全局事件总线
	}
})