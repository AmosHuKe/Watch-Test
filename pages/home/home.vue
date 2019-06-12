<template>
	<view class="home">
		<scroll-view scroll-y class="page">
			<!--轮播图 -->
			<swiper class="card-swiper swiperbox" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3" indicator-active-color="#0081ff">
				<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
					<view class="swiper-item">
						<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
						<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
					</view>
				</swiper-item>
			</swiper>
			
			<!-- 统计图 -->
			<view class="ring">
				<view class="cu-card article">
					<view class="cu-item bar-shadown">
						<view class="title">
							<view class="text-cut">
								<text class="cuIcon-title text-black"></text> 今日运动{{hour}}小时{{minute}}分，{{kilometer}}公里
							</view>
						</view>
						<view class="content">
							<view class="flex">
								<view class="flex-sub">
									<canvas canvas-id="canvasRing" id="canvasRing" class="charts" @touchstart="touchRing"></canvas>
								</view>
								<view class="flex-sub">
									<view class="tagb-content" >
										<view class="flex">
											<text class="cuIcon-title text-blue tagb"></text>跑步
										</view>
										<view class="flex">
											<text class="tagb"></text>00:46:32，2公里
										</view>
									</view>
									
									<view class="tagb-content" >
										<view class="flex">
											<text class="cuIcon-title text-green tagb"></text>骑行
										</view>
										<view class="flex">
											<text class="tagb"></text>01:20:12，12公里
										</view>
									</view>
									
									<view class="tagb-content" >
										<view class="flex">
											<text class="cuIcon-title text-yellow tagb"></text>健走
										</view>
										<view class="flex">
											<text class="tagb"></text>00:52:02，1公里
										</view>
									</view>
									
									<view class="tagb-content" >
										<view class="flex">
											<text class="cuIcon-title text-red tagb"></text>登山
										</view>
										<view class="flex">
											<text class="tagb"></text>03:01:00，4公里
										</view>
									</view>
									
									<view class="tagb-content" >
										<view class="flex">
											<text class="cuIcon-title text-purple tagb"></text>滑雪
										</view>
										<view class="flex">
											<text class="tagb"></text>00:01:00，1公里
										</view>
									</view>
									
								</view>
							</view>
						</view>
					</view>
				</view>
				
				
			</view>
			
		</scroll-view>
	
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
				hour: 5,
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
				dotStyle: true,
				towerStart: 0,
				direction: ''
			}
		},
		mounted() {
			_self = this;
			this.cWidth=uni.upx2px(400);
			this.cHeight=uni.upx2px(400);
			this.getServerData();
		},
		methods: {
			getServerData(){
				let Ring= {
				  "series": [{
					"name": "跑步",
					"data": 2
				  }, {
					"name": "骑行",
					"data": 12
				  }, {
					"name": "健走",
					"data": 1
				  }, {
					"name": "登山",
					"data": 4
				  }, {
					"name": "滑雪",
					"data": 1
				  }]
				};
				_self.showRing("canvasRing",Ring);
				
				// uni.request({
				// 	url: 'https://www.easy-mock.com/mock/5cc586b64fc5576cba3d647b/uni-wx-charts/chartsdata2',
				// 	data:{
				// 	},
				// 	success: function(res) {
				// 		console.log(res.data.data)
				// 		// let Ring={series:[]};
				// 		let Ring= {
				// 		  "series": [{
				// 			"name": "跑步",
				// 			"data": 2
				// 		  }, {
				// 			"name": "骑行",
				// 			"data": 12
				// 		  }, {
				// 			"name": "健走",
				// 			"data": 1
				// 		  }, {
				// 			"name": "登山",
				// 			"data": 4
				// 		  }, {
				// 			"name": "滑雪",
				// 			"data": 1
				// 		  }]
				// 		};
				// 		//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				// 		// Ring.series=res.data.data.Ring.series;
				// 		_self.showRing("canvasRing",Ring);
				// 	},
				// 	fail: () => {
				// 		_self.tips="网络错误，小程序端请检查合法域名";
				// 	},
				// });
			},
			showRing(canvasId,chartData){
				canvaRing=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'ring',
					fontSize:11,
					legend:false, //底部tag
					// title: {
					// 	name: '',
					// 	color: '#7cb5ec',
					// 	fontSize: 25*_self.pixelRatio,
					// 	offsetY:-20*_self.pixelRatio,
					// },
					subtitle: {
						name: '',
						color: '#666666',
						fontSize: 1*_self.pixelRatio,
						offsetY:2*_self.pixelRatio,
					},
					extra: {
						pie: {
						  offsetAngle: -45,
						  ringWidth: 5*_self.pixelRatio,
						  lableWidth: 15,
						}
					},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					disablePieStroke: false,
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
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// towerSwiper
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			},
			
			// towerSwiper触摸开始
			TowerStart(e) {
				this.towerStart = e.touches[0].pageX
			},
			
			// towerSwiper计算方向
			TowerMove(e) {
				this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
			},
			
			// towerSwiper计算滚动
			TowerEnd(e) {
				let direction = this.direction;
				let list = this.swiperList;
				if (direction == 'right') {
					let mLeft = list[0].mLeft;
					let zIndex = list[0].zIndex;
					for (let i = 1; i < this.swiperList.length; i++) {
						this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft
						this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex
					}
					this.swiperList[list.length - 1].mLeft = mLeft;
					this.swiperList[list.length - 1].zIndex = zIndex;
				} else {
					let mLeft = list[list.length - 1].mLeft;
					let zIndex = list[list.length - 1].zIndex;
					for (let i = this.swiperList.length - 1; i > 0; i--) {
						this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft
						this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex
					}
					this.swiperList[0].mLeft = mLeft;
					this.swiperList[0].zIndex = zIndex;
				}
				this.direction = ""
				this.swiperList = this.swiperList
			},
		}
	}
</script>

<style scoped>
.home{
	margin-top: 100upx;
}
.swiperbox{
	margin-bottom: 32upx;
}
.tagb-content{
	font-size: 24upx; 
	margin-bottom: 10upx;
}

.tagb{
	font-size: 40upx;
	width: 40upx;
}
	
/*uCharts start*/
.charts{
	width: 400upx; 
	height:400upx;
	background-color:transparent;
	margin-top: 36upx;
}
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