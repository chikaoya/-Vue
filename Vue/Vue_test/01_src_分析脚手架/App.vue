<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <School></School>
		<Student></Student>
  </div>
</template>

<script>
//引入组件
	import School from './components/School'
	import Student from './components/Student'

export default {
		name:'App',
		components:{
			School,
			Student
		}
	}
</script>

<style>
</style>
