<template>
  <div>
    <div id="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <TestHeader @addTodo="addTodo" />
          <TestList
            :todos="todos"
            :checkTodo="checkTodo"
            :deleteTodo="deleteTodo"
          />
          <TestFooter
            :todos="todos"
            @checkAllTodo="checkAllTodo"
            @clearAllTodo="clearAllTodo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//引入组件
import TestFooter from "./components/TestFooter";
import TestHeader from "./components/TestHeader";
import TestList from "./components/TestList";

export default {
  name: "App",
  components: { TestFooter, TestHeader, TestList },
  data() {
    return {
      /* todos:[
      {id:'001',title:'抽烟',done:true},
      {id:'002',title:'喝酒',done:false},
      {id:'003',title:'上学',done:true}
    ] */
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    // 勾选or取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    // 删除一个todo
    deleteTodo(id) {
      // 生成的新数组重新赋值给原数组
      // this.todos = this.todos.filter( todo => todo.id !== id )
      this.todos = this.todos.filter((todo) => {
        // 过滤选中的id
        return todo.id !== id;
      });
    },
    // 全选or取消全选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        // 遍历数组把todo下面的done全变成点击的
        todo.done = done;
      });
    },
    // 清除所有已经完成的Todo
    clearAllTodo() {
      // 过滤器
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
  watch: {
    // 监视的完整写法，不记得了回去复习一下
    todos: {
      // 开启深度监视
      deep: true,
      handler(value) {
        // 本地存储四个API不记得了回去复习一下
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
