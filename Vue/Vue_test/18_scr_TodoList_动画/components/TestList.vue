<template>

   <ul class="todo-main">
    <transition-group name='todo' appear>
       <TestItem 
       v-for="todoObj in todos" 
       :key='todoObj.id' 
       :todo='todoObj'
       />
       </transition-group>
      </ul>

 

</template>

<script>
import TestItem from '../components/TestItem.vue'

export default {
  name:'TestList',
  components:{TestItem},
  props:['todos']
}
</script>

<style scoped>
/* 动画 */
/* transition包裹之后，名字变成固定的，来：v-enter-active，走：v-leave-active */
  .todo-enter-active{
    animation:  atguigu 1s;
  }
  .todo-leave-active{
    animation: atguigu 1s reverse;
  }
  @keyframes atguigu {
    from{
      transform: translateX(100%);
    }
    to{
      transform: translateX(0);
      
    }
  }
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>