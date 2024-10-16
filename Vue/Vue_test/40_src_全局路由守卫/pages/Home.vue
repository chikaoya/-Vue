<template>
	<div>
		<h2>Home组件内容</h2>
		<div>
			<ul class="nav nav-tabs">
				<li>
					<router-link  class="list-group-item" active-class="active" to="/home/news">News</router-link>
				</li>
				<li>
					<router-link  class="list-group-item" active-class="active" to="/home/message">Message</router-link>
				</li>
			</ul>
			<!-- 保持活跃route跳转的时候不会销毁该组件，因此可以保留一些数据 -->
			<!-- include属性里面写的是组件名，组件名为大写则大写，小写则小写 -->
			<!-- <keep-alive include="News"> -->
				<!-- 如果需要保存的组件有多个则可以用以下方式 ,News和Message都被保存-->
			<keep-alive :include="['News','Message']">
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Home',
		/* beforeDestroy() {
			console.log('Home组件即将被销毁了')
		}, */
		/* mounted() {
			console.log('Home组件挂载完毕了',this)
			window.homeRoute = this.$route
			window.homeRouter = this.$router
		},  */
	}
</script>