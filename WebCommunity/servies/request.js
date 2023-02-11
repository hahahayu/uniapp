export default {
	common: {
		baseUrl: 'https://fawnuat.xuexiluxian.cn/',
		data: {},
		header: {
			"Content-Type": "application/json",
			"Content-Type": "application/x-www-from-urlencoded",
		},
		method: 'GET',
		dataType: 'json'
	},
	request(options = {}) {
		options.url = this.common.baseUrl + options.url
		options.data = options.data || this.common.data
		options.header = options.header || this.common.header
		options.dataType = options.dataType || this.common.dataType
		options.method = options.method || this.common.method
		return new Promise((resolve, reject) => {
			uni.showLoading({
				title: '加载中...'
			})
			uni.request({
				...options,
				success: (result) => {
					if(result.data.resultCode !== 200) {
						setTimeout(function() {
							uni.hideLoading()
						}, 300)
					}
					setTimeout(function() {
						uni.hideLoading()
					}, 300)
					let data = result.data.data
					if(data) {
						resolve(data)
					} else {
						resolve(result.data)
					}
				}
			})
		})
	}
}