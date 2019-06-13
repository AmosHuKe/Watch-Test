<template>
	<view class="goal">
		<!-- 顶部 -->
		<cu-custom bgColor="bg-white" :isBack="false">
			<block slot="backText"></block>
			<block slot="content">目标</block>
		</cu-custom>
		
		<view class="part1 mrg50T">
			<view class="title">运动：</view>
			<view class="rowBox mrg50T">
				<view class="sliderBox">
					<RangeSlider
						:width="slideWidth"
						:height="slideHeight"
						:blockSize="slideBlockSize"
						:barHeight="barheight"
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
		
				<view class="text-center">
					<text>步数：</text>
					<text>{{ rangeValues[1] }}步</text>
				</view>
			</view>
		
			<button @tap="test" class="testBtn">建议8000步</button>
		</view>
		<view class="part2 mrg50T">
			<view class="title">体重：</view>
			<view class="text-center mrg50T">
				<RangeSlider
					:width="slideWidth"
					:height="slideHeight"
					:blockSize="slideBlockSize"
					:barHeight="barheight"
					:min="slideMin"
					:max="slideMax2"
					:values="rangeValues2"
					@rangechange="onRangeChange2"
				>
					<!-- <view slot="minBlock" class="range-slider-block"></view> -->
					<!-- 左边滑块的内容 -->
					<view slot="maxBlock" class="range-slider-block"></view>
					<!-- 右边滑块的内容 -->
				</RangeSlider> 
			</view>
			<view class="text-center">
				<text>重量：</text>
				<text>{{ rangeValues2[1] }}公斤</text>
			</view>
		</view>
		<button @tap="bodyWeight" class="bodyWeightbtn">建议60公斤</button>
	</view>
</template>

<script>
	import RangeSlider from '../../lib/range-slider/range-slider.vue';
	export default{
	data() {
		return {
			// rangeValues: [2, 5], //当前区间值
			// slideWidth: 350, //宽度
			// slideHeight: 80,  //高度
			// slideBlockSize: 56, //圆形按钮大小
			// slideMin: 0,  //slider最小值
			// slideMax: 12,  //slider最大值

			minValue: 0,
			maxValue: 10000,
			rangeValues: [0, 10000],//[0, 10]
			slideWidth: 700,
			slideHeight: 100,
			slideBlockSize: 50,
			barheight: 20,
			slideMin: 0,
			slideMax: 10000,
			//
			rangeValues2: [0, 100],//[0, 10]
			maxValue2: 100,
			slideMax2: 100,
		};
	},
	components: {
		RangeSlider
	},
	onLoad() {
		console.log('index onload');
	},
	methods: {
		pad: function(num, n) {
			return Array(n - ('' + num).length + 1).join(0) + num;
		},
		onRangeChange: function(e) {
			// this.rangeValues = [e.minValue, e.maxValue];
			this.rangeValues =  [0,e.maxValue];
			//console.log(e);
		},
		test: function() {
			this.rangeValues = [0,8000];
		},
		onRangeChange2: function(e) {
			this.rangeValues2 =  [0,e.maxValue];
		},
		bodyWeight: function() {
			this.rangeValues2 = [0,60];
		},
		
	}
}
</script>

<style scoped>
	 .content {
	 	justify-content: center;
	 	flex-direction: column;
	 }
	 
	 .sliderBox {
	 	justify-content: center;
	 	margin-right: 50upx;
	 }
	 
	 .text-center {
	 	justify-content: center;
	 }
	 
	 .rowBox {
	 	flex-direction: row;
	 	align-items: center;
	 	justify-content: center;
	 }
	 
	 .mrg50T {
	 	margin-top: 50upx;
	 }
	 
	 .tips {
	 	color: #999;
	 	font-size: 24upx;
	 	text-align: center;
	 	margin-top: 100upx;
	 }
	 
	 .testBtn,.bodyWeightbtn {
	 	margin-top: 50upx;
		border-radius: 50upx;
		width: 240upx;
		background-color: #09BB07;
	 }
	 
	 .part1,
	 .part2 {
	 	flex-direction: column;
	 	justify-content: center;
	 	border-top: 1upx solid #ccc;
	 	padding-top: 50upx;
		padding: 0 24upx;
	 	.title {
	 		font-size: 32upx;
	 		padding: 0 30upx;
	 	}
		
	 }
	 
	 .part2 {
	 	margin-top: 27px;
	 }
	 
</style>
