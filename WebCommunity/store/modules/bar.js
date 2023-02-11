// WX自定义头部
export default {
	state: {
		barHeight: {},
		moreStepBack: true
	},
	getters: {},
	mutations: {
		CHANGEHEIGHT(state, barHeight) {
			state.barHeight = barHeight
		},
		CHANGEBACK(state, moreStepBack) {
			state.moreStepBack = moreStepBack
		}
	},
	actions: {}
}