<template>
  <ul class="todo-main">
       <TestItem 
       v-for="todoObj in todos" 
       :key='todoObj.id' 
       :todo='todoObj'
       
       />
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