<template>

	<view class="my-card">
		<view class="my-header">
			<!-- 自定义头部 -->
			<my-header :isBack="false" hasBgc="transparent" title="我的名片" color='#ffffff'></my-header>
			<view class="header-main">
				<view class="main-content">
					<image class="main-img" :src="avatarUrl" mode=""></image>
					<view class="main">

						<view class="login" v-if="isLogin" style="position:relative;z-index: 999;">
							<view @tap="goLogin" class="header-name">点击登录</view>
						</view>
						<view v-else class="header-name">{{nickName}}</view>
					</view>

				</view>

			</view>

		</view>
		<!-- 内容快 -->
		<view class="card-content">

			<view class="card-item" @tap="goCard" :myInfo="myInfo">
				<image class="item-img" src="/static/imgs/my-card.png" mode=""></image>
				<view class="item-card">名片</view>
			</view>
			<view class="card-item" @tap="goMess">
				<image class="item-img1" src="/static/imgs/news.png" mode=""></image>
				<view class="item-card">消息</view>
			</view>
			<view class="card-item" @tap="goHelp">
				<image class=" item-img2" src="/static/imgs/customer.png" mode=""></image>
				<view class="item-card">客服及帮助</view>
			</view>
		</view>
		<my-tabbar :selected="selected"></my-tabbar>
		<view class='mask' v-if="isLogin"></view>
	</view>


</template>

<script>
	import MyTabbar from '@/common/tabbar/tabBar.vue'
	import MyHeader from '@/common/myheader/myHeader.vue'
	import {authLogin, stuCurrent, stuInfo} from '@/servies/api.js'
	import {mapActions,mapState} from 'vuex'
	export default {
		data() {
			return {
				selected: 4,
				myInfo: null,
				params: {},
				isLogin: true,
				avatarUrl: '/static/imgs/weidenglu.png',
				nickName: "请登录"
			}
		},
		components: {
			MyTabbar,
			MyHeader
		},
		mounted() {

		},
		onShow() {
			// 获取学员信息
			this.getStu()
			console.log(this.params)
		},
		computed: {
			...mapState({
				signInfo: state => state.sign.signInfo,
				userList: state => state.user.userList,
				student: state => state.user.student
			}),
		},
		methods: {
			...mapActions(['changeStatusActions', 'changeOpenIdActions', 'addSignInfoActions', 'changeStudentActions']),
			getUser() {
				if (wx.getUserProfile) {
					wx.getUserProfile({
						desc: '用于获取名片展示用户头像和昵称',
						lang: 'zh_CN',
						success: userData => {
							// console.log(userData, '用于获取名片展示用户头像和昵称')
							this.nickName = userData.userInfo.nickName
							this.avatarUrl = userData.userInfo.avatarUrl
							this.params.avatarUrl = userData.userInfo.avatarUrl
							this.params.nickName = userData.userInfo.nickName
							this.login()
						},
						fail: err => {
							this.isLogin = true
						}
					})
				} else {
					wx.getUserInfo({
						success: res => {
							this.params.avatarUrl = res.userInfo.avatarUrl
							this.params.nickName = res.userInfo.nickName
							this.nickName = res.userInfo.nickName
							this.avatarUrl = res.userInfo.avatarUrl
							this.login()
						}
					})
				}
			},
			login() {
				uni.login({
					provider: 'weixin',
					success: loginRes => {
						authLogin({
							code: loginRes.code
						}).then(res => {
							this.params.openId = res.openId
							// 获取用户的信息
							// 将 获取的到的openid 保存到 vuex中
							console.log(this.params)
							this.changeOpenIdActions(this.params)
							// 将token存储到本地 
							uni.setStorageSync('token', res.token);
							//获取学生信息
							this.getStu()
							// 获取用户协议信息
							stuCurrent().then(res => {
								if (res.resultCode === 1020) return;
								res.classProtocolPath = res.classProtocolPath
								res.signProtocolPath = 'https://fawn.xuexiluxian.cn/api' + res.signProtocolPath
								this.addSignInfoActions(res)
								// 改变状态
								this.changeStatusActions({
									status: 1
								})
							}).catch(err => {
								console.log(err)
							})
							uni.showToast({
								title: "登录成功",
								icon: "none"
							})
						})
					},
					fail() {
						uni.showToast({
							title: '自动登录失败，请手动登录'
						})
					}
				})
			},
			goLogin() {
				if (this.isLogin) {
					this.getUser()
					this.isLogin = false
				}

			},
			getStu() {
				if (uni.getStorageSync('token')) {
					// 获取入学的学生信息
					stuInfo().then(res => {
						if (!res.name) return
						this.myInfo = res
						this.changeStudentActions(res)
					}).catch(err => {
						console.log(err)
					})
				}
			},
			goCard() {
				if (this.myInfo) {
					uni.navigateTo({
						url: '../my/my'
					})
				} else {
					uni.showToast({
						title: '请先入学',
						icon: 'none'
					})
				}
			},
			goMess() {
				uni.showToast({
					title: '暂无开放此功能',
					icon: 'none'
				})
			},
			goHelp() {
				uni.navigateTo({
					url: '/pages/consultingHelp/consultingHelp'
				})
			}
		}
	}
</script>

<style scoped>
	.my-card {
		width: 100vw;
		height: 100vh;
		background-color: #F3F4F6;
		overflow: hidden;
	}

	.my-header {
		background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/header-bg.png') no-repeat center center;
		width: 100vw;
		height: 400rpx;
	}

	/* 头部 */

	.header-main {
		width: 750rpx;
		height: 100%;
		padding: 0 50rpx;
		height: 162rpx;
		position: absolute;
		top: 154rpx;
		box-sizing: border-box;
	}

	.main-content {
		display: flex;
		align-items: center;
	}

	.main-img {
		width: 162rpx;
		height: 162rpx;
		border-radius: 50%;
	}

	.main {
		padding-left: 40rpx;
	}

	.header-name {
		height: 40rpx;
		font-size: 42rpx;
		font-family: SourceHanSansCN;
		font-weight: 400;
		color: #FFFFFF;
		padding-bottom: 40rpx;
	}

	.header-phone {
		padding: 5rpx 30rpx;
		background-color: #000;
		opacity: 0.2;
		border-radius: 20rpx;
		font-size: 22rpx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: #FFFFFF;
		text-align: center;
	}

	/* 内容快 */
	.card-content {
		width: 750rpx;
		height: 100%;
		position: relative;
		top: -60rpx;
		padding: 0 40rpx;
		box-sizing: border-box;
	}

	.card-item {
		height: 110rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		margin-bottom: 30rpx;
		display: flex;
		align-items: center;
		padding-left: 37rpx;
		box-sizing: border-box;
	}

	.item-img {
		width: 36rpx;
		height: 29rpx;
	}

	.item-img1 {
		width: 31rpx;
		height: 36rpx;
	}

	.item-img2 {
		width: 28rpx;
		height: 36rpx;
	}

	.item-card {
		font-size: 28rpx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: #464646;
		padding-left: 10rpx;
	}

	.finger {
		width: 50rpx;
		height: 50rpx;
		animation: fingerHandle 1s ease infinite both;
		transform: rotate(90deg);
		/* position: absolute;
		left: 300rpx;
		top: 76rpx; */

	}

	.login {
		display: flex;
		width: 400rpx;

	}

	@keyframes fingerHandle {
		0% {
			transform: none;
		}

		70% {
			transform: scale3d(.8, .8, .8);
		}

		100% {
			transform: none;
		}
	}

	.mask {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 998;
		height: 100%;
		width: 100%;
		opacity: 0.7;
		background-color: #000;
		filter: alpha(opacity=70%);
	}
</style>
