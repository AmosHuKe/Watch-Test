<template>
	<view>
		<view class="cu-custom" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar fixed" :style="style" :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor,isShadown?' cu-bar-shadown':'']">
				<view class="action" @tap="BackPage" v-if="isBack">
					<text class="cuIcon-back"></text>
					<slot name="backText"></slot>
				</view>
				<view class="content" :style="[{top:StatusBar + 'px'}]">
					<slot name="content"></slot>
				</view>
				<slot name="right" ></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar
			};
		},
		name: 'cu-custom',
		computed: {
			style() {
				var StatusBar= this.StatusBar;
				var CustomBar= this.CustomBar;
				var bgImage = this.bgImage;
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
				if (this.bgImage) {
					style = `${style}background:${bgImage};`;
				}
				return style
			}
		},
		props: {
			bgColor: {
				type: String,
				default: ''
			},
			isBack: {
				type: [Boolean, String],
				default: false
			},
			bgImage: {
				type: String,
				default: ''
			},
			isShadown:{
				type: [Boolean, String],
				default: true
			}
		},
		methods: {
			BackPage() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../style/color/color.scss"; //颜色
	/* 运动颜色 数据库取出 */
	.yd-red{
		background: $redColor-linear;
		color: #FFF;
	}
	.yd-blue{
		background: $blueColor-linear;
		color: #FFF;
	}
	.yd-purple{
		background: $purpleColor-linear;
		color: #FFF;
	}
	.yd-black{
		background: $blackColor-linear;
		color: #FFF;
	}
	.yd-cyan{
		background: $cyanColor-linear;
		color: #FFF;
	}
	
	.cu-bar-shadown{
		-webkit-box-shadow: 0 0 30px 0 rgba(43,86,112,.1) !important;
		box-shadow: 0 0 30px 0 rgba(43,86,112,.1) !important;
	}
</style>
