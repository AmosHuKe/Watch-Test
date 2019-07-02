<template>
	<view class="motion_ydData">
		<!-- 顶部 -->
		<cu-custom :bgColor="datas.bgcolor" :isBack="true" :isShadown="false">
			<block slot="backText"></block>
			<block slot="content">{{ datas.title }}</block>
		</cu-custom>
		
		<scroll-view scroll-y class="page">
			<view :class="['main-data shadow',datas.bgcolor]" >
				<view class="flex justify-center padding align-end">
					<view class=" margin-xs data-title">{{ datas.content_total_0 }}</view>
					<view class=" margin-xs data-d">{{ datas.title_total_0 }}</view>
				</view>
				<view class="flex data-content">
					<view class="flex-sub">
						<view class="flex">
							<view class=" margin-xs data-ct">{{ datas.title_total_1 }}</view>
						</view>
						<view class="flex">
							<view class=" margin-xs data-cd">{{ datas.content_total_1 }}</view>
						</view>
					</view>
					<view class="flex-sub">
						<view class="flex">
							<view class=" margin-xs data-ct">{{ datas.title_total_2 }}</view>
						</view>
						<view class="flex">
							<view class=" margin-xs data-cd">{{ datas.content_total_2 }}</view>
						</view>
					</view>
					
				</view>
			</view>
			
			<!-- 运动历程 -->
			<view class="flex">
				<view class="cu-timeline list-data" >
					<view class="cu-time">2019.06.10</view>
					<view class="cu-item">
						<view class="content">
							{{ datas.content_total_0 }}
							{{ datas.title_total_0 }}
						</view>
					</view>
					
					<view class="cu-time">开始</view>
				</view>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				datas:{},//运动数据
			}
		},
		onLoad(option){
			this.datas = JSON.parse(option.datas); //传输的内容数组
		}
	}
</script>

<style lang="less" scoped>
	@import "../../../style/color/color.less"; //颜色
	
	/* 运动颜色 数据库取出 */
	.yd-red{
		background: @redColor-linear;
	}
	.yd-blue{
		background: @blueColor-linear;
	}
	.yd-purple{
		background: @purpleColor-linear;
	}
	.yd-black{
		background: @blackColor-linear;
	}
	.yd-cyan{
		background: @cyanColor-linear;
	}
	.shadow{
		-webkit-box-shadow: 0 0 30px 0 rgba(43,86,112,.1) !important;
		box-shadow: 0 0 30px 0 rgba(43,86,112,.1) !important;
	}
	.main-data{
		width: 100%;
		height: 540upx;
		color: #FFFFFF;
	}
	.data-title{
		font-size: 76upx;
		font-weight: 900;
		font-style: italic;
		margin-top: 180upx;
	}
	.data-d{
		font-style: italic;
	}
	.data-content{
		margin-left: 128upx;
		margin-top: 40upx;
		font-size: 32upx;
		color: rgba(255,255,255,0.7);
	}
	.data-ct{
		font-size: 24upx;
	}
	.data-cd{
		font-weight: 700;
	}
	.list-data{
		margin-top: 0upx;
		width: 100%;
	}
</style>
