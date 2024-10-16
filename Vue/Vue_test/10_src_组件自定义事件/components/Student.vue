<template>
  <div class="Student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
		<h2>当前求和为{{number}}</h2>
		<button @click='add'>点我nubmer++</button>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁当前Student组件的实例（vc）</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
			number:0
    };
  },
  methods: {
		add(){
			console.log('回调被调用了');
			this.nubmer++
			
		},
    sendStudentName() {
      // 触发Student组件实例身上的atguigu事件
      this.$emit("atguigu", this.name, 66, 88, 99);
      // this.$emit("demo");
			this.$emit('click')
    },
    unbind() {
			this.$off('atguigu')//解绑一个自定义事件
			// this.$off(['atguigu','demo'])//解绑多个自定义事件
			// this.$off([])//解绑所有的自定义事件	
		},
		death(){
			// 销毁vc，因为自定义事件是绑定在vc上的所以销毁vc事件也没了
			this.$destroy()//销毁了当前的Student组件的实例，所有的自定义事件都不能用了
		}
  },
};
</script>

<style scoped>
.Student {
  background-color: pink;
  padding: 5px;
  margin-top: 30px;
}
</style>
