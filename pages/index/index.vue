<template>
	<view>
		<view class="mainIndex">
			<home v-if="PageCur=='home'"></home>
			<motion v-if="PageCur=='motion'"></motion>
			<ble v-if="PageCur=='ble'"></ble>
			<goal v-if="PageCur=='goal'"></goal>
			<mine v-if="PageCur=='mine'"></mine>
		</view>
		
		<view class="cu-bar tabbar bg-white shadow foot">
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
					<view class="cu-tag badge">99</view>
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
				
			},
		}
	}
</script>

<style>
	.mainIndex{
		padding-top: 64upx;
		padding-bottom:128upx;
	}
</style>
