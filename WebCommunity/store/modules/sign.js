// 协议信息
export default {
	state: {
		signInfo: null
	},
	getters: {},
	mutations: {
		ADDSIGNINFO(state, option) {
			state.signInfo = option
		}
	},
	actions: {
		addSignInfoActions({commit}, option) {
			commit('ADDSIGNINFO', option)
		}
	}
}