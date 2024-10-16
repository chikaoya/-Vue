<template>
  <div>
    <h2>学校名称：{{name | mySlice}}</h2>
    <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
// import {mixin} from '../mixin'
export default {
  name: "School",
  data() {
    return {
      name:'尚硅谷atguigu',
      address:'北京'
    }
  },
  // mixins:[mixin],
  
};

</script>

<style>
.demo {
  background-color: orange;
}
</style>