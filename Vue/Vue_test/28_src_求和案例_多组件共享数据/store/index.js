// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 应用Vuex插件
Vue.use(Vuex)

// 准备actios-用于响应组件中的动作
const actions={
  // actions里面的都是小写
  // actions得到俩个数据之后，用commit提交到mutations里
  jiaOdd(context,value){
		console.log('jiaOdd');
    if(context.state.sum%2){
      context.commit('JIA',value)
    }
	},
  jiaWait(context,value){
		console.log('jiaWait');
   setTimeout(() => {
    context.commit('JIA',value)
   }, 1000)
	}
}
// 准备mutations-用于操作数据(state)
const mutations={
  // mutations里面的都是大写
  JIA(state,value){
    // mutations里收到actions的数据，然后进行数据操作，此处是加减操作
    console.log('mutations中的JIA被调用了');
    state.sum+=value
  },
  JIAN(state,value){
    console.log('mutations中的JIAN被调用了');
    state.sum-=value
  },
  ADD_PERSON(state,value){
    console.log('mutations中的,ADD_PERSON被调用了');
    state.personList.unshift(value)
    
  }
}

// 准备state-用于存储数据
const state={
  sum:0,
  school:'周国威',
  subject:'Vue',
  personList:[
    {id:'001',name:'张三'}
  ]
}

// 准备state-用于将state中的数据进行加工
const getters={
  bigSum(state){
    return state.sum*10
  }
}
// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
