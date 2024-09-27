// 入口js文件
// 引入app组件
import App from './App.vue'

// 只有App才能new Vue
new Vue({
  el:'#root',
  // 该处引用App组件，html页面就可以不用写app
  template:`<App></App>`,
  // 注册组件
  components:{App}
})