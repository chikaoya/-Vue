<template>
  <div>
    <button @click='isShow=!isShow'>显示/隐藏</button>
    <transition appear> <!-- 如果给transition起名，则样式里的v-开头变成你起名开头 -->
      <h1 v-show="isShow" class="come">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name:'Test',
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
  /* transition包裹之后，名字变成固定的，来：v-enter-active，走：v-leave-active */
  .v-enter-active{
    animation:  atguigu 1s;
  }
  .v-leave-active{
    animation: atguigu 1s reverse;
  }
  @keyframes atguigu {
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px);
      
    }
  }
</style>