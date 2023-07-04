<template>
	<view class="goal animation-fade margin100">
		<!-- 顶部 -->
		<!-- <cu-custom bgColor="bg-white" :isBack="false">
			<block slot="backText"></block>
			<block slot="content">设置目标</block>
		</cu-custom> -->
		
		<scroll-view scroll-y class="page">
			<view class="RangeWalk margin100">
				<!-- 步数 -->
				<view class="flex">
					<view class="flex-sub">
						<view class="title">运动</view>
					</view>
					<view class="flex-sub">
						<view class="text-right">
							<text class="title">{{ rangeValues[1] }}</text>步
						</view>
					</view>
				</view>
				<view class="flex">
					<view class="RangeWalk-page rowBox">
						<RangeSlider
							:width="slideWidth"
							:height="slideHeight"
							:blockSize="slideBlockSize"
							:barHeight="barheight"
							:activeColor="backgroundColor"
							:min="slideMin"
							:max="slideMax"
							:values="rangeValues"
							:step="50"
							@rangechange="onRangeChange"
						>
							<!-- <view slot="minBlock" class="range-slider-block"></view> -->
							<!-- 左边滑块的内容 -->
							<view slot="maxBlock" class="range-slider-block"></view>
							<!-- 右边滑块的内容 -->
						</RangeSlider>
						
					</view>
					
				</view>
				<view class="flex justify-center margin50">
					<button class="cu-btn bg-black lg" @tap="setWalk">建议10000步</button>
				</view>
				
			</view>
			
			
			<view class="RangeWeight margin100">
				<!-- 体重 -->
				<view class="flex">
					<view class="flex-sub">
						<view class="title">体重</view>
					</view>
					<view class="flex-sub">
						<view class="text-right">
							<text class="title">{{ rangeValues2[1] }}</text>公斤
						</view>
					</view>
				</view>
				<view class="flex rowBox">
					<RangeSlider
						:width="slideWidth"
						:height="slideHeight"
						:blockSize="slideBlockSize"
						:barHeight="barheight"
						:activeColor="backgroundColor"
						:min="slideMin"
						:max="slideMax2"
						:values="rangeValues2"
						:step="0.5"
						@rangechange="onRangeChange2">
						<!-- <view slot="minBlock" class="range-slider-block"></view> -->
						<!-- 左边滑块的内容 -->
						<view slot="maxBlock" class="range-slider-block"></view>
						<!-- 右边滑块的内容 -->
					</RangeSlider>
				</view>
				<view class="flex margin50">
					<text class="text-grey"><text class="cuIcon-info"></text> 建议体重在55-65公斤</text>
				</view>
				
			</view>
			
			
		</scroll-view>
		
		
		
	
	</view>
</template>

<script>
	import RangeSlider from '../../lib/range-slider/range-slider.vue';
	import {
		getisLogin,
	} from '../../service/api/login.js' //登录api
	export default{
	data() {
		return {
			// rangeValues: [2, 5], //当前区间值
			// slideWidth: 350, //宽度
			// slideHeight: 80,  //高度
			// slideBlockSize: 56, //圆形按钮大小
			// slideMin: 0,  //slider最小值
			// slideMax: 12,  //slider最大值
			
			backgroundColor: 'rgba(35,35,35,.8)', //条颜色
			slideMin: 0, //最小值
			slideMax: 30000, //最大运动
			rangeValues: [0, 10000],//[0, 10] 运动默认
			
			slideMax2: 200, //最大体重
			rangeValues2: [0, 50.5],//[0, 10] 体重默认
			
			slideWidth: 676, //宽
			slideHeight: 100, //高
			slideBlockSize: 64, //圆形按钮大小
			barheight: 20, 
			
			
			
		};
	},
	components: {
		RangeSlider
	},
	mounted() {
		getisLogin() //是否登录
	},
	methods: {
		pad: function(num, n) {
			return Array(n - ('' + num).length + 1).join(0) + num;
		},
		onRangeChange: function(e) {
			//赋值运动
			// this.rangeValues = [e.minValue, e.maxValue];
			this.rangeValues =  [0,e.maxValue];
			//console.log(e);
		},
		setWalk: function() {
			//运动建议值
			this.rangeValues = [0,10000];
		},
		onRangeChange2: function(e) {
			//赋值体重
			this.rangeValues2 =  [0,e.maxValue];
		},
		setWeight: function() {
			//体重建议值
			this.rangeValues2 = [0,55];
		},
		
	}
}
</script>

<style lang="scss" scoped>
	@import "../../style/color/color.scss";
	
	.page{
		padding: 0 30upx;
		flex-direction: column;
	}
	.margin50{
		margin-top:50upx;
	}
	.margin100{
		margin-top:100upx;
	}
	.text-right {
		justify-content: right;
	}
	.title{
		font-size: 48upx;
		font-weight: 700;
	}
	.rowBox {
	 	flex-direction: row;
	 	align-items: center;
	 	justify-content: center;
	 }
	.bg-black{
		background: $blackColor;
	}
</style>
