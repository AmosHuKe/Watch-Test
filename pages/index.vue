<template>
	<view>
		<view class="mainIndex">
			<home v-if="PageCur=='home'"></home> <!-- 首页 -->
			<motion v-if="PageCur=='motion'"></motion> <!-- 运动 -->
			<ble v-if="PageCur=='ble'"></ble> <!-- 设备蓝牙 -->
			<goal v-if="PageCur=='goal'"></goal> <!-- 目标 -->
			<mine v-if="PageCur=='mine'"></mine> <!-- 我的 -->
		</view>
		
		<view class="cu-bar tabbar bg-white shadow foot mainCD" :style="{zIndex:isTop?'999999':'99'}" >
			<view class="action" :class="PageCur=='home'?'text-black':'text-gray'" @click="NavChange" data-cur="home">
				<view class="cuIcon-homefill"></view> 首页
			</view>
			<view class="action" :class="PageCur=='motion'?'text-black':'text-gray'" @click="NavChange" data-cur="motion">
				<view class="cuIcon-footprint"></view> 运动
			</view>
			<view class="action text-gray add-action" @click="NavChange" data-cur="ble">
				<button class="cu-btn cuIcon-add bg-black shadow" @click="NavChange" data-cur="ble"></button>
				设备
			</view>
			<view class="action" :class="PageCur=='goal'?'text-black':'text-gray'" @click="NavChange" data-cur="goal">
				<view class="cuIcon-remind">
					<view class="cu-tag badge">2</view>
				</view>
				目标
			</view>
			<view class="action" :class="PageCur=='mine'?'text-black':'text-gray'" @click="NavChange" data-cur="mine">
				<view class="cuIcon-my">
					<view class="cu-tag badge"></view>
				</view>
				我的
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				PageCur: 'home', //切换菜单
				toPageCur: '', //上次切换的菜单
				isTop:false, //底部菜单是否在最顶层
			}
		},
		methods: {
			NavChange: function(e) {
				//底部菜单切换
				this.PageCur = e.currentTarget.dataset.cur
			}
		},
		watch:{
			//监听菜单变化
			'PageCur': function(newVal){
				
				var _this=this
				if(newVal=="ble"){
					//如果切换的蓝牙 就把底部菜单设为最顶层 避免蓝牙处弹出提示不方便切换菜单
					_this.isTop=true
				}else{
					_this.isTop=false
				}
				
				//如果上一次切换的菜单是蓝牙，但是本次切换不是蓝牙，就关闭蓝牙搜索
				if(newVal!="ble" && _this.toPageCur=="ble"){
					uni.stopBluetoothDevicesDiscovery({
					  success(res) {
						console.log("关闭蓝牙搜索"+res)
					  }
					})
				}
				_this.toPageCur=newVal //赋值上一次切换的菜单
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import "../style/color/color.scss";
	
	.mainIndex{
		padding-bottom:128upx;
	}
	.text-black{
		color: $blackColor !important;
	}
	.bg-black{
		background: $blackColor !important;
	}
	
	.cu-bar.tabbar.shadow {
		-webkit-box-shadow: 0 0.5px 36px 0 rgba(43,86,112,.2) !important;
		box-shadow: 0 0.5px 36px 0 rgba(43,86,112,.2) !important;
	}
</style>
