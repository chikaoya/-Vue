<template>
  <div>
    <h2 @click="showName">学生姓名：{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
  </div>
</template>

<script>
import {mixin} from'../mixin'
export default {
  name: "student",
  data() {
    return {
      name:'张三',
      sex:'男'
    };
  },
  
  // 简单声明 开发中常用的也是这种形式
  // props:['name','age','sex']
  mixins:[mixin]

};

</script>

<style>
.demo {
  background-color: orange;
}
</style>