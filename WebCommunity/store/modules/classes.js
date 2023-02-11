// 班级信息
export default {
	state: {
		classInfo: null
	},
	getters: {},
	mutations: {
		ADDCLASSINFO(state, option) {
			state.classInfo = option
		}
	},
	actions: {
		addClassInfoActions({commit}, option) {
			commit('ADDCLASSINFO', option)
		}
	}
}