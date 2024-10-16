<template>
  <div>
     <li>
          <label>
            <input type="checkbox" :checked='todo.done' @change='handleCheck(todo.id)'/> 
            	<!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
			<!-- <input type="checkbox" v-model="todo.done"/> -->
            <span>{{todo.title}}</span>
          </label>
          <button class="btn btn-danger" @click='handleDelete(todo.id)'>删除</button>
        </li>
        
  </div>
</template>

<script>
export default {
  name:'TestItem',
  // 声明接收todo对象
  props:['todo'],
  methods:{
    handleCheck(id){
      // 通知App组件将对应的todo对象的done值取反
        // 父传子传孙写法
      // this.checkTodo(id)
        // 全局事件总线写法
      this.$bus.$emit('checkTodo',id)
    },
    // 删除
    handleDelete(id){
      // console.log(id);
      if(confirm("您确定要删除吗？")){
        // 父传子传孙写法
        // this.deleteTodo(id)
        // 全局事件总线写法
      this.$bus.$emit('deleteTodo',id)

      }
      
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: block;
}
li:hover{
  background-color: #ddd;
}
li:hover button{
  display: block;
}
</style>