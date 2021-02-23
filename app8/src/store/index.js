// 引入vue 和 vuex
import Vue from 'vue'
import Vuex from 'vuex'

// 这里需要use一下,固定写法,记住即可
Vue.use(Vuex)

// 直接导出 一个 Store 的实例
export default new Vuex.Store({
	// 类似 vue 的 data

	// state: {
	// 	// 用来存放组件之间共享的数据
	// 	name: 'oldName',
	// },
	// // 类似 vue 里的 mothods(同步方法)
	// mutations: {
	// 	updateName(state) {
	// 		state.name = 'newName'
	// 	},
	// },
	// // 异步操作
	// actions:{

	// }
	state: {
		count: 0,
	},
	mutations: {
		increament(state) {
			state.count++
		},
		declement(state) {
			state.count--
		},
	},
	actions: {
		incret({ commit }) {
			//commit固定写法
			commit('increament')
		},
		decreat({ commit }) {
			commit('declement')
		},
		increaElement({ commit, state }) {
			if (state.count % 2 === 0) {
				commit('increament')
			}
		},
		increamentAsy({ commit }) {
			setTimeout(() => {
				commit('increament')
			}, 1000)
		},
	},
	getters:{
		isEvenOder(state){
			return state.count%2===0?"偶数":"奇数"
		}
	}
})
