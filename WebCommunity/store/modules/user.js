// 用户个人信息
export default {
	state: {
		userList: {
			name: 'xxx',
			tel: '000',
			// 0 未签协议， 1 已签协议
			status: 0,
			selectedPath: '',
			oprenId: 0,
			avatarUrl: '/static/imgs/weidenglu.png',
			nickName: 'nickName',
			classId: null
		},
		student: {}
	},
	getters: {},
	mutations: {
		CHANGEUSERSTATUS(state, option) {
			state.userList.status = option.status
		},
		CHANGEOPENID(state, option) {
			state.userList.oprenId = option.oprenId
			state.userList.avatarUrl = option.avatarUrl
			state.userList.nickName = option.nickName
		},
		CHANGECLASSID(state, option) {
			state.userList.classId = option.classId
		},
		CHANGESTUDENT(state, option) {
			state.userList.student = option.student
		}
	},
	actions: {
		changeStatusActions({commit}, option) {
			commit('CHANGEUSERSTATUS', option)
		},
		changeOpenIdActions({commit}, option) {
			commit('CHANGEOPENID', option)
		},
		changeClassIdActions({commit}, option) {
			commit('CHANGECLASSID', option)
		},
		changeStudentActions({commit}, option) {
			commit('CHANGESTUDENT', option)
		}
	}
}