<template>
<!-- 因为是template该结构不会影响页面 -->
<!-- 最外层需要div包裹，否则组件不能使用 -->
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
// 引入组件 es6模块化语法
import School from './School.vue'
import Student from './Student.vue'
// 暴露App组件给html网页使用
export default {
  name:'App',
  components:{
    School,
    Student
  }
}
</script>

<style>

</style>