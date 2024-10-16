<template>
  <div>
     <li>
          <label>
            <input type="checkbox" :checked='todo.done' @change='handleCheck(todo.id)'/> 
            	<!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
			<!-- <input type="checkbox" v-model="todo.done"/> -->
            <span  v-show="!todo.isEdit">{{todo.title}}</span>
            <input 
            type="text" 
            v-show="todo.isEdit" 
            @blur='handleBlur(todo,$event)'
            :value='todo.title'
            ref='inputTitle'>
          </label>
          <button class="btn btn-danger" @click='handleDelete(todo.id)'>删除</button>
          <button v-show='!todo.isEdit' class="btn btn-edit" @click='handleEdit(todo)'>编辑</button>
        </li>
        
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
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
         pubsub.publish('deleteTodo',id)
        // 父传子传孙写法
        // this.deleteTodo(id)
        // 全局事件总线写法
     
      }
    },
    // 编辑
    handleEdit(todo){
      if(todo.hasOwnProperty('isEdit')){
        todo.isEdit=true
      }else{
        this.$set(todo,'isEdit',true)
      }
      // 由于执行机制是方法全执行完毕，此时input框还没渲染出来所以获取不到焦点
      // this.$refs.inputTitle.focus()

      // 解决方法，加一个定时器，变成异步任务，然后就能够顺利获取焦点
      /* setTimeout(()=>{
        this.$refs.inputTitle.focus()
      },0) */

      // nextTic 在下一次DOM更新结束后执行其指定的回调
      this.$nextTick(function(){
        this.$refs.inputTitle.focus()
      })
    },
    // 失去焦点回调（真正执行修改逻辑)
    handleBlur(todo,e){ 
      todo.isEdit = false
      // console.log('updateTodo',todo.id,e.target.value);
      if(!e.target.value.trim())return alert("输入不能为空")
      this.$bus.$emit('updateTodo',todo.id,e.target.value)
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