<template>
  <div>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <input type="text" v-fbind:value='name'>
  </div>
</template>

<script>
// import {mixin} from'../mixin'
export default {
  name: "student",
  data() {
    return {
      name:'张三',
      sex:'男'
    };
  },
  
  // mixins:[mixin]

};

</script>

<style>
.demo {
  background-color: orange;
}
</style>