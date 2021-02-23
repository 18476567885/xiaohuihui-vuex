<template>
	<div>
		<p>{{ count }} count是{{ isEvenOder }}</p>
		<button @click="incret">增加</button>
		<button @click="decreat">减少</button>
		<button @click="increaElement">是偶数才有效</button>
		<button @click="increamentAsy">异步操作</button>
	</div>
</template>
<script>
    // 引入map+用到的核心（首字母大写）
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
	computed: {
		...mapState(['count']), // 展开，注意格式，需要用到的属性写进去

		...mapGetters(['isEvenOder']),
	},
	methods: { // 当前组件可以直接调用这些方法
		...mapActions(['incret', 'decreat', 'increaElement', 'increamentAsy']),
	},
}
</script>
