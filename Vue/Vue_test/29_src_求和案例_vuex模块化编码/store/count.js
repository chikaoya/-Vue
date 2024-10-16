// 求和相关的配置
export default {
  namespaced:true,
  actions:{
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
  },
  mutations:{
    
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
  },
  state:{
    sum:0,
  school:'周国威',
  subject:'Vue',
  },
  getters:{
    bigSum(state){
      return state.sum*10
    }
  }
}