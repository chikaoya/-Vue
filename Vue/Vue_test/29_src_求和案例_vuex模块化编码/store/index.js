// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 引入person
import personOptions from'./person'
import countOptions from'./count'
// 引入count
// 应用Vuex插件
Vue.use(Vuex)





// 创建并暴露store
export default new Vuex.Store({
  modules:{
    countAbout:countOptions,
    personAbout:personOptions
  }
})
