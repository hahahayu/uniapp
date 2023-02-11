import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// WX自定义头部
import bar from '@/store/modules/bar.js'

// 用户个人信息
import user from '@/store/modules/user.js'

// 班级信息
import classes from '@/store/modules/classes.js'

// 协议信息
import sign from '@/store/modules/sign.js'

// 公告信息
import notice from '@/store/modules/notice.js'

export default new Vuex.Store({
	modules: {
		bar,
		user,
		classes,
		sign,
		notice
	}
})