<template>
	<div id="app">
		<!-- {{ getName }}
		<button @click="changeName" >更名</button> -->
		<count></count>
	</div>
</template>

<script>
	import count from './components/count'
export default {
	name: 'App',
	components: {
		count
	},
	// computed: {
	// 	getName() {
	// 		// $store 拿到store 调用里面的属性或方法
	// 		return this.$store.state.name
	// 	},
	// },
	// methods: {
	// 	changeName() {
	// 		this.$store.commit('updateName')
	// 	},
	// },
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
