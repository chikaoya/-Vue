<template>
  <div class="app">
    <h1>{{ msg }}，学生的姓名是：{{studentName}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现，子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />
    <!-- 通过父组件给子组件绑定一个自定义事件实现，子给父传递数据 (第一种写法使用@或者v-on)-->
    <!-- <Student @atguigu='getStudentName' @demo='m1'/> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现，子给父传递数据 (第二种写法，使用ref)-->
    <!-- <Student ref="student"  @click='show'/> //直接在组件上写click不行，会被认为自定义事件 -->
		
    <!-- <Student ref="student"  @click='show'/> 实现方法就是在接收的组件里面emit这个click事件名 -->
		
		<!-- 给click添加native，就能实现在Student组件最外层实现点击就弹窗 -->
    <Student ref="student"  @click.native='show'/>

  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";

export default {
  name: "App",
  components: { School, Student },
  data() {
    return {
      msg: "你好啊！",
			studentName:''
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("App收到了学校名", name);
    },
    getStudentName(name,...params) {
      console.log("App收到了学生名", name,params);
			this.studentName=name
    },
		m1(){
			console.log('demo事件被触发了');
			
		},
		show(){
			alert(111)
			// console.log('demo事件被触发了'); 
		}
  },
  mounted() {
    // setTimeout(() => {
      // this.$refs.student.$on("atguigu", this.getStudentName);
      // this.$refs.student.$once("atguigu", this.getStudentName);
    // });

		// 第一种写法配合ref，运用getStudentName获取到的值赋给data里的studentName
      this.$refs.student.$on("atguigu", this.getStudentName);

		// 第一种写法配合ref
  },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
