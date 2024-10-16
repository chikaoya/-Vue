<template>
  <div>
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
import {mixin} from '../mixin'
export default {
  name: "student",
  data() {
    return {
      name:'张三',
      address:'北京'
    }
  },
  mixins:[mixin],
  
  // 简单声明 开发中常用的也是这种形式
  // props:['name','age','sex']

};

</script>

<style>
.demo {
  background-color: orange;
}
</style>