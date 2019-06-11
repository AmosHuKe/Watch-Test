<template>
	<view>
		<!--轮播图 -->
		<swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3" indicator-active-color="#0081ff">
			<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
				</view>
			</swiper-item>
		</swiper>
		
		<!-- 统计图 -->
		<view class="flex ring">
			<view class="bg-white">
				<view class="qiun-columns">
					<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
						<view class="qiun-title-dot-light run_logo" ></view><view class="today_run">今日运动{{hour}}小时{{minute}}分，{{kilometer}}公里</view>
					</view>
					<view class="qiun-charts" >
						<canvas canvas-id="canvasRing" id="canvasRing" class="charts" @touchstart="touchRing"></canvas>
					</view>
				</view>
			</view>
		</view>
	
	</view>
</template>

<script>
	import uCharts from '../../lib/u-charts/u-charts.js'; 
	var _self;
	var canvaRing=null;
   
	export default {
		data() {
			return {
				//环状统计初始化数据
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				serverData:'',
				hour: 1,
				minute: 20,
				kilometer: 26,
				//轮播
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
				dotStyle: false,
				towerStart: 0,
				direction: ''
			}
		},
		mounted() {
			_self = this;
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			this.getServerData();
		},
		methods: {
			getServerData(){
				uni.request({
					url: 'https://www.easy-mock.com/mock/5cc586b64fc5576cba3d647b/uni-wx-charts/chartsdata2',
					data:{
					},
					success: function(res) {
						console.log(res.data.data)
						// let Ring={series:[]};
						let Ring= {
						  "series": [{
							"name": "跑步",
							"data": 50
						  }, {
							"name": "骑行",
							"data": 30
						  }, {
							"name": "健走",
							"data": 10
						  }, {
							"name": "登山",
							"data": 5
						  }, {
							"name": "滑雪",
							"data": 5
						  }]
						};
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						// Ring.series=res.data.data.Ring.series;
						_self.showRing("canvasRing",Ring);
					},
					fail: () => {
						_self.tips="网络错误，小程序端请检查合法域名";
					},
				});
			},
			showRing(canvasId,chartData){
				canvaRing=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'ring',
					fontSize:11,
					legend:true,
					// title: {
					// 	name: '',
					// 	color: '#7cb5ec',
					// 	fontSize: 25*_self.pixelRatio,
					// 	offsetY:-20*_self.pixelRatio,
					// },
					subtitle: {
						name: '运动量',
						color: '#666666',
						fontSize: 15*_self.pixelRatio,
						offsetY:6*_self.pixelRatio,
					},
					extra: {
						pie: {
						  offsetAngle: -45,
						  ringWidth: 40*_self.pixelRatio,
						  lableWidth:15
						}
					},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					disablePieStroke: true,
					dataLabel: true,
				});
			},
			touchRing(e){
				canvaRing.showToolTip(e, {
					format: function (item) {
						return item.name + ':' + item.data 
					}
				});
			},
		}
	}
</script>

<style scoped>
	
	
/*uCharts start*/
page{background:#F2F2F2;width: 750upx;overflow-x: hidden;}
.qiun-padding{padding:2%; width:96%;}
.qiun-wrap{display:flex; flex-wrap:wrap;}
.qiun-rows{display:flex; flex-direction:row !important;}
.qiun-columns{display:flex; flex-direction:column !important;}
.qiun-common-mt{margin-top:10upx;}
.qiun-bg-white{background:#FFFFFF;}
.qiun-title-bar{width:96%; padding:10upx 2%; flex-wrap:nowrap;}
.qiun-title-dot-light{border-left: 10upx solid #0ea391; padding-left: 10upx; font-size: 32upx;color: #000000}
.qiun-charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
.charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
/*uCharts end*/
.run_logo{
	width: 40upx;
	height: 40upx;
	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTU5OTY4Mzc1ODcwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijk3NSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTY4LjkwNSAzMTkuNDg4YTQ1LjUyNCA0NS40ODggMCAxIDAgOTEuMDQ4IDAgNDUuNTI0IDQ1LjQ4OCAwIDEgMC05MS4wNDggMFoiIGZpbGw9IiM5Qjk3QUQiIHAtaWQ9Ijk3NiI+PC9wYXRoPjxwYXRoIGQ9Ik0zOTUuOTIgNDQ4LjUyMmMyMy4yMDItMjguNTYgNDIuMzktNDIuODM5IDU3LjU2NS00Mi44MzloNjEuOTc2Yy0yMS43NiA1OC4yOTMtNDEuODExIDk3Ljc3Mi02MC4xNTMgMTE4LjQzNy0yNy41MTEgMzAuOTk4LTQxLjQwOCA0NS40ODktODYuOTMyIDQ1LjQ4OS0zMC4zNDkgMC01Ni45MDUtMTUuMTYzLTc5LjY2Ni00NS40ODlMMjczIDU0Ni4zNjJjMzQuNDM2IDQxLjQyIDY4Ljk0NSA2NC45NiAxMDMuNTI2IDcwLjYyMiA1Ny40NDQgOS40MDQgODguNjEzLTE1LjcxNCAxMTcuMDQtMzYuMDAzIDIyLjc2MyAxMS4zNzIgODkuNjA4IDMyLjg5IDgzLjkwOCA3OC4wNjctMy44IDMwLjExOC0xNC40NjYgNjQuNzQ2LTMxLjk5NyAxMDMuODg2aDM5LjEzN2MyMC41ODUtMzEuNDA4IDM0LjY3LTY5Ljg1NiA0Mi4yNTgtMTE1LjM0NCA3LjU4Ny00NS40ODktMjEuODY3LTg1LjM2LTg4LjM2NC0xMTkuNjE1bDQzLjE2LTU0LjQ0NmMxMy41MSAzNi4zNCAzMS42NDYgNTguMzAyIDU0LjQwNyA2NS44ODMgMjIuNzYyIDcuNTgyIDU4LjcyLTEuMzA2IDEwNy44NzMtMjYuNjY0bC0xMS4zODEtMjIuNzQ0Yy0zOC45MTggOS43Ny02NS45NjUgMTAuODY1LTgxLjE0IDMuMjg0LTIyLjc2MS0xMS4zNzMtMTYuOTktNDAuODgyLTM0LjMwOC03MC43ODQtMTkuMTIyLTMzLjAxNi0zMi41MDUtNDUuOTE3LTUzLjI1My01OC4yNDctMjAuNzUtMTIuMzMxLTEwMi43NTctMTguMDU1LTEzNy4wMTQgNS45NDEtMjIuODM4IDE1Ljk5OC00MC4yMzcgMzguNTQ2LTUyLjE5NiA2Ny42NDVsMjEuMjY0IDEwLjY4eiIgZmlsbD0iIzlCOTdBRCIgcC1pZD0iOTc3Ij48L3BhdGg+PC9zdmc+);
}
.today_run{
	position: relative;
    left: 30px;
    top: -20px;
}

</style>