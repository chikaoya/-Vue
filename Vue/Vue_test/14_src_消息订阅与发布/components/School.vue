<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
import pubsub from 'pubsub-js'
	export default {
		name:'School',
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
			}
		},
		mounted() {
			// // console.log('School',this);
			// this.$bus.$on('hello',(data)=>{
			// 	console.log('我是school组件，我收到了数据',data);
			// })
			const pubId=pubsub.subscribe('hello',(msg,data) =>{
				console.log(this);//vc
				
				// console.log('有人发布了，hello消息回调执行了',msg,data)
				
			})
		},
		beforeDestroy() {
			// this.$bus.$off('hello')
			pubsub.unsubscribe(this.pubId)
		},
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>