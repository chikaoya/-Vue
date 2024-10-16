<template>
  <div>
    <button @click='isShow=!isShow'>显示/隐藏</button>
    <transition-group appear> <!-- 如果给transition起名，则样式里的v-开头变成你起名开头 -->
      <h1 v-show="!isShow" class="come" key='1'>你好啊！</h1>
      <h1 v-show="isShow" class="come" key='2'>你好啊！</h1>
    </transition-group >
  </div>
</template>

<script>
export default {
  name:'Test2',
  data(){
    return{
      isShow:true
    }
  }
}
</script>

<style>
  h1{
    background-color: orange;
  }
  /* 进入的起点 ,离开的终点*/
  .v-enter,v-leave-to{
    transform: translateX(-100%);
  }
  .v-enter-active,.v-leave-active{
    transition: 0.5s linear;
  }
  /* 进入的终点 ,离开的起点*/
  .v-enter-to,v-leave{
    transform: translateX(-0);
  }
</style>