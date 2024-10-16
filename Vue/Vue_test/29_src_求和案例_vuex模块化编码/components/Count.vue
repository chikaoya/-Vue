<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h2>当前求和放大10倍为:{{ bigSum }}</h2>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
    <h3 style="color:red">下方组件的总人数是:{{personList.length}}</h3>
    <!-- number强制类型转换 -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="jiaOdd(n)">当前求和为奇数再加</button>
    <button @click="jiaWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: "Count",
  data() {
    return {
      n: 1,
      
    };
  },
  computed: {
    
    
    //借助mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState('countAbout',['sum','school','subject']),
    ...mapState('personAbout',['personList']),

    
    ...mapGetters('countAbout',['bigSum']),
    
  },
  methods: {
    
    //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
			...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),


    //借助mapActions生成对应的方法，方法中会调用dispatch去联系mapActions(数组写法)
    ...mapActions('countAbout',['jiaOdd','jiaWait']),
  },
  mounted() {
    // console.log('count',this);
    const x=mapState({he:'sum',xuexiao:'school',xueke:'subject'})
    console.log(x);
    
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>