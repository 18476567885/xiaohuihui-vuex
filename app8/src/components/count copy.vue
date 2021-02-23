<template>
	<div>
		<p>{{ count }}  count是{{eveoder}}</p>
		<button @click="Incratment">增加</button>
		<button @click="Decretment">减少</button>
		<button @click="decretment">是偶数才有效</button>
		<button @click="yibu">异步操作</button>
	</div>
</template>
<script>
export default {
	computed: {
		
        count(){
             return this.$store.state.count
          },
     eveoder(){
        return this.$store.getters.isEvenOder
     }
	},
	methods: {
		Incratment() {
			//   this.$store.commit("increament")  // 同步操作
			this.$store.dispatch('incret') //异步操作
		},
		Decretment() {
			// this.$store.commit("declement")
			this.$store.dispatch('decreat') // 异步操作
		},
		decretment() {
			this.$store.dispatch('increaElement')
		},
		yibu() {
			this.$store.dispatch('increamentAsy')
		},
	},

}
</script>
