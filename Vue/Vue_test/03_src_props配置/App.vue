<template>
  <div id="app">
		<Student name='张三' sex='男' :age='18'/>
  </div>
</template>

<script>
//引入组件
	import Student from './components/Student'

export default {
		name:'App',
		components:{
			Student,
		},
		data(){
			return {
			}
		},
}
</script>

<style>
</style>
