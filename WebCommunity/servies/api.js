// 班级信息接口管理
import $http from './request.js'

// 查询班级列表
export const getClassList = ({pageSize, pageNum}) => {
	return $http.request({
		url: '/wechat/class/list',
		method: 'POST',
		header: {
			"Content-Type": "application/json"
		},
		data: {
			pageSize,
			pageNum
		}
	})
}

// 查询班级信息-名人堂
export const excellentList = ({pageSize, pageNum}) => {
	return $http.request({
		url: '/wechat/excellent/list',
		method: 'POST',
		header: {
			"Content-Type": "application/json"
		},
		data: {
			pageSize,
			pageNum
		}
	})
}

// 公告 
export const noticeList = ({pageSize, pageNum}) => {
	return $http.request({
		url: '/wechat/notice/list',
		method: 'POST',
		header: {
			"Content-Type": "application/json"
		},
		data: {
			pageSize,
			pageNum
		}
	})
}

// 咨询帮助数据
export const helpList = ({pageSize, pageNum}) => {
	return $http.request({
		url: '/wechat/help/list',
		method: 'POST',
		header: {
			"Content-Type": "application/json"
		},
		data: {
			pageSize,
			pageNum
		}
	})
}

// 面试题分类列表
export const questionsTypeList = ({pageSize, pageNum}) => {
	return $http.request({
		url: '/wechat/questions/typeList',
		method: 'POST',
		header: {
			"Content-Type": "application/json"
		},
		data: {
			pageSize,
			pageNum
		}
	})
}

// 面试题列表
export const questionsList = ({pageSize, pageNum, typeId}) => {
	return $http.request({
		url: '/wechat/questions/list',
		method: 'POST',
		header: {
			"Content-Type": "application/json"
		},
		data: {
			pageSize,
			pageNum,
			typeId
		}
	})
}

// 获取面试题总数据
export const selQuestionNum = ({typeId}) => {
	return $http.request({
		url: '/wechat/questions/selQuestionNum/'+typeId,
		method: 'GET'
	})
}

// 面试流程列表
export const processList = ({pageSize, pageNum}) => {
	return $http.request({
		url: '/wechat/process/list',
		method: 'POST',
		header: {
			"Content-Type": "application/json"
		},
		data: {
			pageSize,
			pageNum
		}
	})
}

// 登录
export const authLogin = ({code}) => {
	return $http.request({
		url: '/wechat/user/auth/login',
		method: 'POST',
		header: {
			"Content-Type": "application/json"
		},
		data: {
			code
		}
	})
}



// 入学信息详情
export const stuInfo = () => {
	return $http.request({
		url: '/wechat/student/info',
		method: 'GET',
		header: {
			'token': uni.getStorageSync('token')
		}
	})
}

// 签署协议
// 查询已签署协议（当前班级）
export const stuCurrent = () => {
	return $http.request({
		url: '/wechat/stuProtocol/current',
		method: 'GET',
		header: {
			'token': uni.getStorageSync('token')
		}
	})
}

// 查询班级协议
export const protocolInfo = ({classId}) => {
  return $http.request({
    url:'/wechat/protocol/info/'+classId,
    method: 'GET',
    header:{
      "token": uni.getStorageSync('token')
    }
  })
}

// 签署班级协议
// /wechat/stuProtocol/signClassProtocol
export const signClassProtocol = (data) => {
  return $http.request({
    url:'/wechat/stuProtocol/signClassProtocol',
    method: 'POST',
    header:{
      "Content-Type": "multipart/form-data",
      "token": uni.getStorageSync('token')
    },
    data: {
      ...data
    }
  })
}

// 查询已签署的班级协议 
export const stuProtocolInfo = ({classId}) => {
  return $http.request({
    url:'/wechat/stuProtocol/info/'+classId,
    method: 'GET',
    header:{
      "token": uni.getStorageSync('token')
    }
  })
}