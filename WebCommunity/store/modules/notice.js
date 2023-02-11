// 公告信息
export default {
	state: {
		noticeInfo: null
	},
	getters: {},
	mutations: {
		ADDNOTICEINFO(state, option) {
			state.noticeInfo = option
		}
	},
	actions: {
		addNoticeInfoActions({commit}, option) {
			commit('ADDNOTICEINFO', option)
		}
	}
}