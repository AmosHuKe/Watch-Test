<template>
	<view>
		
		<view class="cu-load load-modal" v-if="loadModal">
			<!-- <view class="cuIcon-emojifill text-orange"></view> -->
			<!-- <view class="gray-text">加载中...</view> -->
		</view>
		
		<view class="cu-card case no-card" :style="[{animationDelay: (index + 1)*0.1 + 's'}]" v-for="(item,index) in listData" :key="index">
			<view class="cu-item shadow" @tap="jpUrl" :data-Url="item.post_id">
				<view class="image">
					<image :src="item.cover"></image>
					<view class="cu-tag bg-blue">{{item.from_id}} </view>
					<view class="cu-bar bg-shadeBottom"> <text class="text-cut">{{item.title}}</text></view>
				</view>
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" :style="'background-image:url('+item.author_avatar+')'"></view>
						<view class="content flex-sub">
							<view class="text-grey">{{item.author_name}}</view>
							<view class="text-gray text-sm flex justify-between">
								{{item.created_at}}
								<view class="text-gray text-sm">
									<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
									<text class="cuIcon-appreciatefill margin-lr-xs"></text> 20
									<text class="cuIcon-messagefill margin-lr-xs"></text> 30
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
			
		
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				listData:[], //新闻数据
				loadModal: true, //加载动画
			}
		},
		mounted(){
			this.getList();
		},
		methods: {
			getList(){
				var _this = this
				console.log("获取新闻数据");
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/api/news', 
					success: (res) => {
						console.log(res.data);
						_this.listData = res.data
						_this.loadModal = false
						uni.stopPullDownRefresh();
					}
				});
				
			},
			jpUrl(e){
				//跳转路径
				var urlId =e.currentTarget.dataset.url; //获取Id
				uni.navigateTo({
					url: '../../pages/home/children/list_data?urlid='+urlId,
					animationType: 'pop-in',
					animationDuration: 200
				});
			}
		}
	}
</script>

<style>
	
	
</style>
