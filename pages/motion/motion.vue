<template>
	<view class="motion">
		<!-- 顶部 -->
		<!-- <cu-custom bgColor="bg-white" :isBack="false">
			<block slot="backText"></block>
			<block slot="content">运动</block>
		</cu-custom> -->
		
		<scroll-view scroll-y class="page">
			<!-- 顶部数据图 -->
			<view class="bg-img padding-bottom-xl motion_top">
				
				<view class="m-time heart1" >
					<view class="flex">
						<view class="cu-tag cu-tag-top round line-blue shadow"><text class="text-blue">100%</text></view>
						<view class="flex-sub page-m">
							<view class="t-title">12</view>
							<view class="t-text"><text class="cuIcon-timefill"></text>12小时</view>
						</view>
					</view>
				</view>
				
				<view class="m-foot heart2">
					<view class="flex ">
						<view class="cu-tag cu-tag-top round line-cyan shadow"><text class="text-cyan">36%</text></view>
						<view class="flex-sub page-m">
							<view class="t-title">3600</view>
							<view class="t-text"><text class="cuIcon-usefullfill"></text>5000步</view>
						</view>
					</view>
				</view>
				
				<view class="m-kll heart3">
					<view class="flex">
						<view class="cu-tag cu-tag-top round line-red shadow"><text class="text-red">32%</text></view>
						<view class="flex-sub page-m">
							<view class="t-title">198</view>
							<view class="t-text"><text class="cuIcon-hotfill"></text>307千卡</view>
						</view>
					</view>
				</view>
				
			</view>
			
			<!-- 通知 -->
			<view class="content-notice" v-if="notice.contentmain==''?false:true " :style="[{ backgroundColor:'rgba(0,0,0,0.2)',color:'#FFFFFF'}]">
				<view class="flex">
					<view class="flex-treble">
						<text class="lg icon cuIcon-notice"></text>
						{{notice.contentmain}}
					</view>
					<view class="justify-start icon-close" @tap="noticeClose">
						<text class="lg cuIcon-close"></text>
					</view>
				</view>
			</view>
			
			<!-- 具体运动数据 -->
			<view class="tagTitle">运动</view>
			<scroll-view scroll-x="true" class="page_motion_tag">
				
				<view class="flex">
					<view class="flex-sub" v-for="(item,index) in ydList" :key="index">
						<view class="cu-card article " @tap="ydToUrl(index)">  <!--跳转到详情-->
							<view class="cu-item bg-img bg-img-yd shadow-warp " :style="[{backgroundImage:'url('+item.img+')'}]" >
								<view class="cu-yd" :style="[{background:item.bgcolor}]">
									<view class="cardTitle">
										<!-- 运动类型 -->
										<view class="flex">
											<view class="flex-sub yd-title">{{item.title}}</view>
										</view>
										<!-- 运动详情 -->
										<view class="flex yd-text">
											<view class="flex-sub">
												<view class="flex yd-text-title">{{item.title_0}}</view>
												<view class="flex yd-text-t">{{item.content_0}}</view>
											</view>
											<view class="flex-sub">
												<view class="flex yd-text-title">{{item.title_1}}</view>
												<view class="flex yd-text-t">{{item.content_1}}</view>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				
			</scroll-view>
			
			<!-- 具体健康数据 -->
			<view class="tagTitle">健康</view>
			<view class="jk">
				<view class="cu-card cu-card-jk article">
					<view class="cu-item bg-img shadow-warp">
						<view class="cardTitle-jk">
							<view class="flex">
								<scroll-view scroll-x class="bg-white nav text-center">
									<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(jk,index) in jkList" :key="index" @tap="tabSelect" :data-id="index">
										<view v-if="index=='sleep'">睡眠</view>
										<view v-if="index=='heartbeat'">心率</view>
										<view v-if="index=='pulse'">脉搏</view>
									</view>
								</scroll-view>
							</view>
							<!-- 健康详情 -->
							<!-- 睡眠 -->
							<view v-if="TabCur=='sleep'">
								<view class="flex animation-fade jk-text" v-for="(sleepD,index) in jkList.sleep[0].content" :key="index">
									<view class="cu-timeline" >
										<view class="cu-time" :style="[{color:sleepD.color}]">{{sleepD.time}}</view>
										<view class="cu-item" :style="[{color:sleepD.color}]" v-if="sleepD.content">
											<view class="content" :style="[{ backgroundColor:sleepD.color,color:'#FFFFFF'}]">
												{{sleepD.content}}
											</view>
										</view>
									</view>
								</view>
							</view>
							<!-- 心率 -->
							<view v-if="TabCur=='heartbeat'">
								<view class="flex animation-fade justify-center heartbeat">
									<view class="cu-tag cu-tag-top round line-red heartbeat-line shadow">
										<text class="line-red heartbeat-text">0</text>
									</view>
								</view>
								<view class="flex justify-center heartbeat-button ">
										<button class="cu-btn bg-red margin-tb-sm lg shadow">开始检测</button>
								</view>
							</view>
							<!-- 脉搏 -->
							<view v-if="TabCur=='pulse'">
								<view class="flex animation-fade justify-center pulse">
									<view class="cu-tag cu-tag-top round line-blue pulse-line shadow">
										<text class="line-blue pulse-text">0</text>
									</view>
								</view>
								<view class="flex justify-center pulse-button ">
										<button class="cu-btn bg-blue margin-tb-sm lg shadow">开始检测</button>
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
	const notice={
		contentmain:"请连接蓝牙进行操作",
		content:{
			0:'请连接蓝牙设备和打开位置服务进行操作',
			1:'坚持运动'
		}
	}
	
	const ydList=[{
		title: '跑步',
		//背景图
		img: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTU5OTY4Mzc1ODcwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijk3NSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTY4LjkwNSAzMTkuNDg4YTQ1LjUyNCA0NS40ODggMCAxIDAgOTEuMDQ4IDAgNDUuNTI0IDQ1LjQ4OCAwIDEgMC05MS4wNDggMFoiIGZpbGw9IiM5Qjk3QUQiIHAtaWQ9Ijk3NiI+PC9wYXRoPjxwYXRoIGQ9Ik0zOTUuOTIgNDQ4LjUyMmMyMy4yMDItMjguNTYgNDIuMzktNDIuODM5IDU3LjU2NS00Mi44MzloNjEuOTc2Yy0yMS43NiA1OC4yOTMtNDEuODExIDk3Ljc3Mi02MC4xNTMgMTE4LjQzNy0yNy41MTEgMzAuOTk4LTQxLjQwOCA0NS40ODktODYuOTMyIDQ1LjQ4OS0zMC4zNDkgMC01Ni45MDUtMTUuMTYzLTc5LjY2Ni00NS40ODlMMjczIDU0Ni4zNjJjMzQuNDM2IDQxLjQyIDY4Ljk0NSA2NC45NiAxMDMuNTI2IDcwLjYyMiA1Ny40NDQgOS40MDQgODguNjEzLTE1LjcxNCAxMTcuMDQtMzYuMDAzIDIyLjc2MyAxMS4zNzIgODkuNjA4IDMyLjg5IDgzLjkwOCA3OC4wNjctMy44IDMwLjExOC0xNC40NjYgNjQuNzQ2LTMxLjk5NyAxMDMuODg2aDM5LjEzN2MyMC41ODUtMzEuNDA4IDM0LjY3LTY5Ljg1NiA0Mi4yNTgtMTE1LjM0NCA3LjU4Ny00NS40ODktMjEuODY3LTg1LjM2LTg4LjM2NC0xMTkuNjE1bDQzLjE2LTU0LjQ0NmMxMy41MSAzNi4zNCAzMS42NDYgNTguMzAyIDU0LjQwNyA2NS44ODMgMjIuNzYyIDcuNTgyIDU4LjcyLTEuMzA2IDEwNy44NzMtMjYuNjY0bC0xMS4zODEtMjIuNzQ0Yy0zOC45MTggOS43Ny02NS45NjUgMTAuODY1LTgxLjE0IDMuMjg0LTIyLjc2MS0xMS4zNzMtMTYuOTktNDAuODgyLTM0LjMwOC03MC43ODQtMTkuMTIyLTMzLjAxNi0zMi41MDUtNDUuOTE3LTUzLjI1My01OC4yNDctMjAuNzUtMTIuMzMxLTEwMi43NTctMTguMDU1LTEzNy4wMTQgNS45NDEtMjIuODM4IDE1Ljk5OC00MC4yMzcgMzguNTQ2LTUyLjE5NiA2Ny42NDVsMjEuMjY0IDEwLjY4eiIgZmlsbD0iIzlCOTdBRCIgcC1pZD0iOTc3Ij48L3BhdGg+PC9zdmc+',
		url: ' ',
		//背景颜色
		bgcolor:'linear-gradient(to right, rgba(229,77,66,0.7), rgba(229,77,66,0.6))',
		title_0: '距离（公里）', //内容
		content_0: '3600',
		title_1: '时间',
		content_1: '12小时',
		//总运动
		title_total_0: '公里', 
		content_total_0: '3600',
		title_total_1: '总时间',
		content_total_1: '12:32:29',
		title_total_2: '总次数',
		content_total_2: '1',
	},
	{
		title: '健步走',
		img: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTU5OTY4Mzg1NzM4IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwOTMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ3Ny44NDcgMjk3LjUzMmE0NS41MzggNDUuNTMyIDAgMSAwIDkxLjA3NiAwIDQ1LjUzOCA0NS41MzIgMCAxIDAtOTEuMDc2IDBaIiBmaWxsPSIjOUI5N0FEIiBwLWlkPSIxMDk0Ij48L3BhdGg+PHBhdGggZD0iTTM3NS4wODYgNTU1Ljg4OWM3Ljk1OC01MS42MzMgMTYuNjg3LTg2LjIyNSAyNi4xODgtMTAzLjc3OSAzMS4wNDctNTcuMzU5IDYzLjIxOS04My4wNDUgNzIuOTg0LTg0LjI1OSAxOS42NjYtMi40NDUgNDMuMDY5LTIuOTM0IDU0LjgwNiAwIDEzLjYxNSAzLjQwMyAyMi45NTMgMTAuNTQ2IDI4LjAxMyAyMS40MjggNC43MDUgNDcuMjYzIDExLjgzIDc2Ljc1OCAyMS4zNzQgODguNDg1IDI2LjQyNyAzMi40NyA2Ni4wNyA0My4zMjggNzcuNDU1IDQzLjMyOCAwIDExLjM4My01Ljc2IDMwLjEwMS01Ljc2IDMwLjEwMS0xNi44ODYgMC03NC42NDkgMC0xMDUuOS01MC4yNjgtMS43NTctMi44MjYtNC4xNSAxMy45My03LjE3NiA1MC4yNjggNDAuNDkgMzkuMzAxIDY2LjY1NSA3MS4xOSA3OC40OTMgOTUuNjY1IDExLjgzOCAyNC40NzUgMTcuNzQ0IDcxLjE3NiAxNy43MTggMTQwLjEwM2gtMzkuNzYzYy0yLjc3Mi0zNy42NTctNy43OTQtNjYuNzE2LTE1LjA2Ny04Ny4xNzctNy4yNzMtMjAuNDYtMjguNjU2LTQ3LjIyNS02NC4xNS04MC4yOTMtMTMuNTYzIDMyLjE4LTI4Ljc0MyA2Mi41MzQtNDUuNTM4IDkxLjA2NC0xNi43OTYgMjguNTMtMzguMzg5IDUzLjk5OC02NC43NzggNzYuNDA2SDM2NGMzMy4xNjEtNDcuNDMgNTYuNjk3LTg0LjI4MiA3MC42MDktMTEwLjU1NSAxMy45MS0yNi4yNzMgMjMuODAxLTUyLjQyMyAyOS42Ny03OC40NDlWNDM4LjQwMmMtMTAuNDcgMy4xLTIwLjM2IDE0LjEzNy0yOS42NyAzMy4xMS01Ljc5MiAxMS44MDMtMTYgMzkuOTI4LTMwLjYyNCA4NC4zNzdoLTI4Ljg5OXoiIGZpbGw9IiM5Qjk3QUQiIHAtaWQ9IjEwOTUiPjwvcGF0aD48L3N2Zz4=',
		url: ' ',
		bgcolor:'linear-gradient(to right, rgba(0,129,255,0.7), rgba(0,129,255,0.6))',
		title_0: '距离（公里）', //内容
		content_0: '- -',
		title_1: '时间',
		content_1: '0小时',
		//总运动
		title_total_0: '公里', 
		content_total_0: '1234',
		title_total_1: '总时间',
		content_total_1: '6:32:29',
		title_total_2: '总次数',
		content_total_2: '1',
	},
	{
		title: '骑行',
		img: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTU5OTY4MzYwNjc4IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijg1NiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTQ2LjE0MyAzNTIuNTU2YTQ1LjUyNCA0NS41NTYgMCAxIDAgOTEuMDQ4IDAgNDUuNTI0IDQ1LjU1NiAwIDEgMC05MS4wNDggMFoiIGZpbGw9IiM5Qjk3QUQiIHAtaWQ9Ijg1NyI+PC9wYXRoPjxwYXRoIGQ9Ik02NTQuMjYyIDcxN2MtNTMuNDI3IDAtOTYuNzM4LTQzLjM0MS05Ni43MzgtOTYuODA2IDAtNTMuNDY0IDQzLjMxLTk2LjgwNSA5Ni43MzgtOTYuODA1IDUzLjQyNyAwIDk2LjczOCA0My4zNDEgOTYuNzM4IDk2LjgwNUM3NTEgNjczLjY2IDcwNy42ODkgNzE3IDY1NC4yNjIgNzE3eiBtMC0zNC4xNjdjMzQuNTcgMCA2Mi41OTUtMjguMDQ0IDYyLjU5NS02Mi42MzkgMC0zNC41OTQtMjguMDI1LTYyLjYzOC02Mi41OTUtNjIuNjM4cy02Mi41OTUgMjguMDQ0LTYyLjU5NSA2Mi42MzhjMCAzNC41OTUgMjguMDI1IDYyLjY0IDYyLjU5NSA2Mi42NHpNMzY5LjczOCA3MTdDMzE2LjMxMSA3MTcgMjczIDY3My42NTkgMjczIDYyMC4xOTRjMC01My40NjQgNDMuMzExLTk2LjgwNSA5Ni43MzgtOTYuODA1czk2LjczOCA0My4zNDEgOTYuNzM4IDk2LjgwNWMwIDUzLjQ2NS00My4zMSA5Ni44MDYtOTYuNzM4IDk2LjgwNnogbTAtMzQuMTY3YzM0LjU3IDAgNjIuNTk1LTI4LjA0NCA2Mi41OTUtNjIuNjM5IDAtMzQuNTk0LTI4LjAyNS02Mi42MzgtNjIuNTk1LTYyLjYzOHMtNjIuNTk1IDI4LjA0NC02Mi41OTUgNjIuNjM4YzAgMzQuNTk1IDI4LjAyNSA2Mi42NCA2Mi41OTUgNjIuNjR6IiBmaWxsPSIjOUI5N0FEIiBwLWlkPSI4NTgiPjwvcGF0aD48cGF0aCBkPSJNNTQwLjIwMyA0NDUuODE0bDQwLjk5IDQ1Ljk2NWg3OC45OGM5LjI1MS0yLjY1NSAxMy44NzctOC4zNjIgMTMuODc3LTE3LjEyIDAtOC43Ni00LjYyNi0xMy43NjYtMTMuODc3LTE1LjAyaC02My4xMzhsLTU2LjgzMi02NS41NDhjLTUuNjA4LTQuOTEyLTEwLjgwNS03LjM2OS0xNS41OTEtNy4zNjktNC43ODcgMC05LjMzMSAyLjQ1Ny0xMy42MzQgNy4zN2wtOTQuMjc2IDk3LjY4N2MtNC43NTQgNC4yNDEtNy4xMyA4Ljc2LTcuMTMgMTMuNTYgMCA0LjggMi4zNzYgOSA3LjEzIDEyLjYwMmw3Ni4xIDUzLjU0Ny00LjgzNCA4NC42ODFjMy4xIDExLjQ4NyA5Ljc0MiAxNy4yMyAxOS45MjUgMTcuMjNzMTYuNzM3LTQuOTYyIDE5LjY2My0xNC44ODVsNy4yOTItOTMuMTg3YzAuMzE3LTQuMTU4IDAuMzE3LTYuOTM5IDAtOC4zNDItMC4zMTgtMS40MDMtMS4zMzctMy4xMjMtMy4wNTctNS4xNmwtNTIuNTA5LTM5LjM0OSA2MC45Mi02Ni42NjJ6IiBmaWxsPSIjOUI5N0FEIiBwLWlkPSI4NTkiPjwvcGF0aD48L3N2Zz4=',
		url: ' ',
		bgcolor:'linear-gradient(to right, rgba(28,187,180,0.7), rgba(28,187,180,0.6))',
		title_0: '距离（公里）', //内容
		content_0: '23333',
		title_1: '次数',
		content_1: '1次',
		//总运动
		title_total_0: '公里', 
		content_total_0: '3234',
		title_total_1: '总时间',
		content_total_1: '4:32:29',
		title_total_2: '总次数',
		content_total_2: '1',
	},
	{
		title: '其他运动',
		img: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTU5OTY4NDA5NTM5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEzMzYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY2Mi41IDM3OS41bS00NS41IDBhNDUuNSA0NS41IDAgMSAwIDkxIDAgNDUuNSA0NS41IDAgMSAwLTkxIDBaIiBmaWxsPSIjOUI5N0FEIiBwLWlkPSIxMzM3Ij48L3BhdGg+PHBhdGggZD0iTTY0OS4wOTUgNTU4LjE4M2wtOC44MjktNjUuNjU2SDUzMi42NjNjLTExLjAwNy0xMS44MjMtMTMuNzU5LTIzLjI2OS04LjI1NS0zNC4zMzgtMTIuNTg1LTguNjEtNy40NjgtMzMuMTg5IDguMjU1LTMzLjE4OSAxMC40ODMgMCA0OS4yOTQgNS45ODggMTE2LjQzMiAxNy45NjVoMjAuNjJjMzIuNDI0LTEyLjEyIDUxLjE4Mi03LjA0NSA1Ni4yNzMgMTUuMjI0IDUuMDkxIDIyLjI2OCAxMy4yNjcgNjYuMTQ1IDI0LjUyNyAxMzEuNjMgNS42NDIgMTguNzc2LTQuNzkgMzEuMjM1LTMxLjI5MyAzNy4zNzctMjYuNTA0IDYuMTQyLTY0LjI3IDMuMDctMTEzLjI5Ni05LjIxM2wtNjQuODIyIDM3LjU5Yy0xNS42NDQgMS42NC0yNS4yOTUtMS40NDUtMjguOTU0LTkuMjUyLTMuNjYtNy44MDctMS44My0xNi4wMzMgNS40ODgtMjQuNjc3LTMuOTcyLTEuNDExLTcuNTIxLTUuNzI0LTEwLjY0Ny0xMi45MzktNC42ODktMTAuODIzLTAuMzMtMjAuOTQ4IDUuMTU5LTI2LjEzNCA1LjQ4OC01LjE4NiA5My43NzYtMzkuOTE3IDkzLjc3Ni0zOS45MTdsNDMuMTcgMTUuNTI5ek0yNjcgNjc0aDQ5MXYxN0gyNjd6IiBmaWxsPSIjOUI5N0FEIiBwLWlkPSIxMzM4Ij48L3BhdGg+PC9zdmc+',
		url: ' ',
		bgcolor:'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.6))',
		title_0: '时间（小时）', //内容
		content_0: '- -',
		title_1: '次数',
		content_1: '0次',
		//总运动
		title_total_0: '时间', 
		content_total_0: '2:12:29',
		title_total_1: '总时间',
		content_total_1: '2:12:29',
		title_total_2: '总次数',
		content_total_2: '1',
	}]
	
	const jkList= {
		'sleep':[{
			title: '睡眠',
			mode: 'sleep', //睡眠
			//背景图
			img: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTU5OTY4Mzc1ODcwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijk3NSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTY4LjkwNSAzMTkuNDg4YTQ1LjUyNCA0NS40ODggMCAxIDAgOTEuMDQ4IDAgNDUuNTI0IDQ1LjQ4OCAwIDEgMC05MS4wNDggMFoiIGZpbGw9IiM5Qjk3QUQiIHAtaWQ9Ijk3NiI+PC9wYXRoPjxwYXRoIGQ9Ik0zOTUuOTIgNDQ4LjUyMmMyMy4yMDItMjguNTYgNDIuMzktNDIuODM5IDU3LjU2NS00Mi44MzloNjEuOTc2Yy0yMS43NiA1OC4yOTMtNDEuODExIDk3Ljc3Mi02MC4xNTMgMTE4LjQzNy0yNy41MTEgMzAuOTk4LTQxLjQwOCA0NS40ODktODYuOTMyIDQ1LjQ4OS0zMC4zNDkgMC01Ni45MDUtMTUuMTYzLTc5LjY2Ni00NS40ODlMMjczIDU0Ni4zNjJjMzQuNDM2IDQxLjQyIDY4Ljk0NSA2NC45NiAxMDMuNTI2IDcwLjYyMiA1Ny40NDQgOS40MDQgODguNjEzLTE1LjcxNCAxMTcuMDQtMzYuMDAzIDIyLjc2MyAxMS4zNzIgODkuNjA4IDMyLjg5IDgzLjkwOCA3OC4wNjctMy44IDMwLjExOC0xNC40NjYgNjQuNzQ2LTMxLjk5NyAxMDMuODg2aDM5LjEzN2MyMC41ODUtMzEuNDA4IDM0LjY3LTY5Ljg1NiA0Mi4yNTgtMTE1LjM0NCA3LjU4Ny00NS40ODktMjEuODY3LTg1LjM2LTg4LjM2NC0xMTkuNjE1bDQzLjE2LTU0LjQ0NmMxMy41MSAzNi4zNCAzMS42NDYgNTguMzAyIDU0LjQwNyA2NS44ODMgMjIuNzYyIDcuNTgyIDU4LjcyLTEuMzA2IDEwNy44NzMtMjYuNjY0bC0xMS4zODEtMjIuNzQ0Yy0zOC45MTggOS43Ny02NS45NjUgMTAuODY1LTgxLjE0IDMuMjg0LTIyLjc2MS0xMS4zNzMtMTYuOTktNDAuODgyLTM0LjMwOC03MC43ODQtMTkuMTIyLTMzLjAxNi0zMi41MDUtNDUuOTE3LTUzLjI1My01OC4yNDctMjAuNzUtMTIuMzMxLTEwMi43NTctMTguMDU1LTEzNy4wMTQgNS45NDEtMjIuODM4IDE1Ljk5OC00MC4yMzcgMzguNTQ2LTUyLjE5NiA2Ny42NDVsMjEuMjY0IDEwLjY4eiIgZmlsbD0iIzlCOTdBRCIgcC1pZD0iOTc3Ij48L3BhdGg+PC9zdmc+',
			url: ' ',
			//背景颜色
			bgcolor:'rgba(229,77,66,0.7)',
			content: [{
					time:'昨日11:30',
					content:'开始睡眠',
					color:'rgba(0,0,0,0.7)'
				},
				{
					time:'昨日11:46',
					content:'浅度睡眠',
					color:'rgba(0,129,255,0.7)'
				},
				{
					time:'凌晨12:02',
					content:'深度睡眠',
					color:'rgba(229,77,66,0.7)'
				},
				{
					time:'结束06:09',
					color:'rgba(0,0,0,0.7)'
				},
			], //内容
		}],
		'heartbeat':[{
			title: '心跳',
			mode: 'heartbeat', 
			//背景图
			img: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTU5OTY4Mzc1ODcwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijk3NSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTY4LjkwNSAzMTkuNDg4YTQ1LjUyNCA0NS40ODggMCAxIDAgOTEuMDQ4IDAgNDUuNTI0IDQ1LjQ4OCAwIDEgMC05MS4wNDggMFoiIGZpbGw9IiM5Qjk3QUQiIHAtaWQ9Ijk3NiI+PC9wYXRoPjxwYXRoIGQ9Ik0zOTUuOTIgNDQ4LjUyMmMyMy4yMDItMjguNTYgNDIuMzktNDIuODM5IDU3LjU2NS00Mi44MzloNjEuOTc2Yy0yMS43NiA1OC4yOTMtNDEuODExIDk3Ljc3Mi02MC4xNTMgMTE4LjQzNy0yNy41MTEgMzAuOTk4LTQxLjQwOCA0NS40ODktODYuOTMyIDQ1LjQ4OS0zMC4zNDkgMC01Ni45MDUtMTUuMTYzLTc5LjY2Ni00NS40ODlMMjczIDU0Ni4zNjJjMzQuNDM2IDQxLjQyIDY4Ljk0NSA2NC45NiAxMDMuNTI2IDcwLjYyMiA1Ny40NDQgOS40MDQgODguNjEzLTE1LjcxNCAxMTcuMDQtMzYuMDAzIDIyLjc2MyAxMS4zNzIgODkuNjA4IDMyLjg5IDgzLjkwOCA3OC4wNjctMy44IDMwLjExOC0xNC40NjYgNjQuNzQ2LTMxLjk5NyAxMDMuODg2aDM5LjEzN2MyMC41ODUtMzEuNDA4IDM0LjY3LTY5Ljg1NiA0Mi4yNTgtMTE1LjM0NCA3LjU4Ny00NS40ODktMjEuODY3LTg1LjM2LTg4LjM2NC0xMTkuNjE1bDQzLjE2LTU0LjQ0NmMxMy41MSAzNi4zNCAzMS42NDYgNTguMzAyIDU0LjQwNyA2NS44ODMgMjIuNzYyIDcuNTgyIDU4LjcyLTEuMzA2IDEwNy44NzMtMjYuNjY0bC0xMS4zODEtMjIuNzQ0Yy0zOC45MTggOS43Ny02NS45NjUgMTAuODY1LTgxLjE0IDMuMjg0LTIyLjc2MS0xMS4zNzMtMTYuOTktNDAuODgyLTM0LjMwOC03MC43ODQtMTkuMTIyLTMzLjAxNi0zMi41MDUtNDUuOTE3LTUzLjI1My01OC4yNDctMjAuNzUtMTIuMzMxLTEwMi43NTctMTguMDU1LTEzNy4wMTQgNS45NDEtMjIuODM4IDE1Ljk5OC00MC4yMzcgMzguNTQ2LTUyLjE5NiA2Ny42NDVsMjEuMjY0IDEwLjY4eiIgZmlsbD0iIzlCOTdBRCIgcC1pZD0iOTc3Ij48L3BhdGg+PC9zdmc+',
			url: ' ',
			//背景颜色
			bgcolor:'rgba(229,77,66,0.7)',
			content: [{
					time:'昨日11:30',
					content:'开始睡眠',
					color:'rgba(0,0,0,0.7)'
				},
				{
					time:'昨日11:46',
					content:'浅度睡眠',
					color:'rgba(0,129,255,0.7)'
				},
				{
					time:'凌晨12:02',
					content:'深度睡眠',
					color:'rgba(229,77,66,0.7)'
				},
				{
					time:'结束06:09',
					color:'rgba(0,0,0,0.7)'
				},
			], //内容
		}],
		'pulse':[{
			title: '脉搏',
			mode: 'pulse', 
			//背景图
			img: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTU5OTY4Mzc1ODcwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijk3NSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTY4LjkwNSAzMTkuNDg4YTQ1LjUyNCA0NS40ODggMCAxIDAgOTEuMDQ4IDAgNDUuNTI0IDQ1LjQ4OCAwIDEgMC05MS4wNDggMFoiIGZpbGw9IiM5Qjk3QUQiIHAtaWQ9Ijk3NiI+PC9wYXRoPjxwYXRoIGQ9Ik0zOTUuOTIgNDQ4LjUyMmMyMy4yMDItMjguNTYgNDIuMzktNDIuODM5IDU3LjU2NS00Mi44MzloNjEuOTc2Yy0yMS43NiA1OC4yOTMtNDEuODExIDk3Ljc3Mi02MC4xNTMgMTE4LjQzNy0yNy41MTEgMzAuOTk4LTQxLjQwOCA0NS40ODktODYuOTMyIDQ1LjQ4OS0zMC4zNDkgMC01Ni45MDUtMTUuMTYzLTc5LjY2Ni00NS40ODlMMjczIDU0Ni4zNjJjMzQuNDM2IDQxLjQyIDY4Ljk0NSA2NC45NiAxMDMuNTI2IDcwLjYyMiA1Ny40NDQgOS40MDQgODguNjEzLTE1LjcxNCAxMTcuMDQtMzYuMDAzIDIyLjc2MyAxMS4zNzIgODkuNjA4IDMyLjg5IDgzLjkwOCA3OC4wNjctMy44IDMwLjExOC0xNC40NjYgNjQuNzQ2LTMxLjk5NyAxMDMuODg2aDM5LjEzN2MyMC41ODUtMzEuNDA4IDM0LjY3LTY5Ljg1NiA0Mi4yNTgtMTE1LjM0NCA3LjU4Ny00NS40ODktMjEuODY3LTg1LjM2LTg4LjM2NC0xMTkuNjE1bDQzLjE2LTU0LjQ0NmMxMy41MSAzNi4zNCAzMS42NDYgNTguMzAyIDU0LjQwNyA2NS44ODMgMjIuNzYyIDcuNTgyIDU4LjcyLTEuMzA2IDEwNy44NzMtMjYuNjY0bC0xMS4zODEtMjIuNzQ0Yy0zOC45MTggOS43Ny02NS45NjUgMTAuODY1LTgxLjE0IDMuMjg0LTIyLjc2MS0xMS4zNzMtMTYuOTktNDAuODgyLTM0LjMwOC03MC43ODQtMTkuMTIyLTMzLjAxNi0zMi41MDUtNDUuOTE3LTUzLjI1My01OC4yNDctMjAuNzUtMTIuMzMxLTEwMi43NTctMTguMDU1LTEzNy4wMTQgNS45NDEtMjIuODM4IDE1Ljk5OC00MC4yMzcgMzguNTQ2LTUyLjE5NiA2Ny42NDVsMjEuMjY0IDEwLjY4eiIgZmlsbD0iIzlCOTdBRCIgcC1pZD0iOTc3Ij48L3BhdGg+PC9zdmc+',
			url: ' ',
			//背景颜色
			bgcolor:'rgba(229,77,66,0.7)',
			content: [{
					time:'昨日11:30',
					content:'开始睡眠',
					color:'rgba(0,0,0,0.7)'
				},
				{
					time:'昨日11:46',
					content:'浅度睡眠',
					color:'rgba(0,129,255,0.7)'
				},
				{
					time:'凌晨12:02',
					content:'深度睡眠',
					color:'rgba(229,77,66,0.7)'
				},
				{
					time:'结束06:09',
					color:'rgba(0,0,0,0.7)'
				},
			], //内容
		}],
	}
	
	export default {
		data() {
			return {
				//通知
				notice: notice,
				//运动数据
				ydList: ydList,
				//健康数据
				jkList: jkList,
				//健康数据切换
				TabCur:'sleep'
			}
		},
		mounted(){
		},
		methods: {
			noticeClose(e){
				//关闭通知
				this.notice.contentmain=""
			},
			noticeRun(index){
				/**
				 * 通知轮询
				 * @param {index} 通知内容下标  
				 */
			},
			tabSelect(e){
				//健康切换
				this.TabCur = e.currentTarget.dataset.id
			},
			ydToUrl(e){
				//运动
				const item=ydList[e]
				
				const datas= JSON.stringify({
					'title':item.title,
					'bgcolor':item.bgcolor,
					'title_total_0':item.title_total_0,
					'content_total_0':item.content_total_0,
					'title_total_1':item.title_total_1,
					'content_total_1':item.content_total_1,
					'title_total_2':item.title_total_2,
					'content_total_2':item.content_total_2,
				})
				console.log(datas)
				if(datas.indexOf("title_total_0")!=-1){
					uni.navigateTo({
						url: './motion/children/motion_ydData?id=1&datas='+datas,
						animationType: 'pop-in',
						animationDuration: 200
					});
				}
				
			}
			
		}
	}
</script>

<style scoped>
@import url("../../style/animation/animation.css"); /* 动画 */
	.motion{
		margin-top:100upx;
	}
	.motion_top{
		margin-top: 128upx;
		background-image: url("data:image/svg+xml;base64,PHN2ZyBpZD0iZjZhYjhiYTEtN2U2OC00YmVjLWJiNDItMzc4OTIwOGE2MjcwIiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwODAiIGhlaWdodD0iNTg5LjMzODkyIiB2aWV3Qm94PSIwIDAgMTA4MCA1ODkuMzM4OTIiPjx0aXRsZT53b3JraW5nX291dDwvdGl0bGU+PHBhdGggZD0iTTExNDAsNzA3LjgxMDUzYzAtMzIuMTY2OC0xNi4zMjIxLTU4LjI0MzE2LTM2LjQ1NjUyLTU4LjI0MzE2LTEyLjY1NSwwLTIzLjgwMDUsMTAuMzA1MzEtMzAuMzM3MzEsMjUuOTQ1NThhMTguMjg3MTMsMTguMjg3MTMsMCwwLDAtNi45NjctMS4zOThjLTYuMDk0MzcsMC0xMS43MjkxMiwzLjEyMjc4LTE2LjMyNDI3LDguNDA3ODYtNS44OTI0Ni0xOS41MDEtMTguMzg3MzQtMzIuOTU1NDQtMzIuODQ5NjQtMzIuOTU1NDQtMTMuNTIyMTcsMC0yNS4zMTYsMTEuNzcwNzEtMzEuNjA5NjcsMjkuMjM5NjhhMTkuOTE1MjQsMTkuOTE1MjQsMCwwLDAtMTIuNDc3MjktNC42OTIxQzk1Ny41MjYzNCw2NzQuMTE1LDk0NSw2OTQuMTI3LDk0NSw3MTguODEzMTZhNjUuMTQ0NzMsNjUuMTQ0NzMsMCwwLDAsNC40MDc5MywyNC4wNjgyN2gxODMuMjM5NzJDMTEzNy4yNjEsNzMzLjEyNTE5LDExNDAsNzIwLjk4MDI1LDExNDAsNzA3LjgxMDUzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwIC0xNTUuMzMwNTQpIiBmaWxsPSIjNmM2M2ZmIi8+PHBhdGggZD0iTTEwMDkuMjk5LDM3MS40ODE3M2MtMjguNzEwMzMtNjIuMTA3NDgtODQuODk1ODctMTE1LjA5MDIxLTE1Mi43NzExOC0xMjMuNzI1NTgtMTcuOTQ2MzUtMi4yODMyMS0zNi42ODM3OC0xLjM2NzUtNTMuMzM0NzgsNS43MDU1Ni0yMS44NTcsOS4yODQ1NS0zNy45NjUwOCwyOC4wMjUwOS01NC4yNDYxNSw0NS4zMTI3NUE2NTQuMTA4MjIsNjU0LjEwODIyLDAsMCwxLDYzMy45ODcsMzk1LjYyMTkzYy0yMC42ODcsMTMuNjk2LTQyLjg3NiwyNi40NzQ1NS02Ny40MzcyNiwyOS45Nzg4Mi00OS4yNDUzLDcuMDI2MDYtOTcuOTU1NTYtMjYuNTU2MzMtMTIwLjQxNDE4LTcwLjk0MTg5LTE0LjAyOTM2LTI3LjcyNjUtMjAuNTEyNDUtNjAuMjc5NjEtMzEuODUzNTgtODkuMTE5LTEzLjA2MTQtLjAyNS0yOC42MjI4Ni0uMDIwMi00NS4zNjQ4Ny4wNTY5NC00Ni4yNzY3My4yMTMzMi04My45NDQxNS44OTctODMuOTQ0MTUuODk3czQ0Ljc3MzYyLTU5LjMwNzI1LDgzLjc3NjI1LTM3LjMzNDM1YzEyLjQ2NDExLDcuMDIxOTEsMjUuNTE4ODYsMTMuMjg4MDgsMzcuNTE2MzUsMTguNTY2NjUtNi44MTU3OS0xMy4xMTA3OC0xNS40MTMwOC0yNC45MDcyOS0yNy4yNDAzNS0zNC4zOTE5MS0yMy4zMjEyOS0xOC43MDE5LTU0LjkwNzQxLTIzLjk0Nzc1LTg0Ljc2ODgtMjIuNTU1LTMxLjM1Njc1LDEuNDYyNTItNjMuMDAxNzEsOS44NTc2LTg4LjQ4MTU3LDI4LjE5MjMyLTQ1LjM5MDYyLDMyLjY2Mi02NC4xMzUsOTAuMTUyODMtODAuMTc3NzMsMTQzLjcyMjg0bDM4Ljc3NzUyLDE5LjQzOTgyYzE2LjYzMzEyLTE0LjM4LDQwLjk1NTgxLTI4LjYwNDgsNjMuMzc0NTgtMTUuOTc0NzMsMzkuMDAyNTYsMjEuOTczLDgzLjgwNjU4LDM2LjU2Miw4My44MDY1OCwzNi41NjJzLTM3LjM2MTk0LS4zMzc4OS04My42Mzg2OC0uMTI0NjRjLTcuNzcyMjcuMDM1ODMtMTUuMjkyNDIuMDg1MTUtMjIuNDQxMzQuMTQyTDYzNiw2MTguNTY3MzdjMTQyLDIsMjQ5LjA2ODE4LTUuNjc5MTQsMzg0LDAsNy4wMzcxNy4yOTYxNCwyMi44NjU1NC0zNi41OTIsMjIuOTE4MjctNDYuMjk5ODdDMTA0My4yOTAxNiw1MDMuODQ2MTEsMTAzOC4wMDkzNCw0MzMuNTg5MjIsMTAwOS4yOTksMzcxLjQ4MTczWm0tMTM3Ljg4MTg0LDE4LjYxNWMtNDYuMjc2NzMuMjEzMzItODMuOTQ0MTUuODk3LTgzLjk0NDE1Ljg5N3M0NC43NzM2Mi01OS4zMDcyNSw4My43NzYyNS0zNy4zMzQzNSw4My44MDY1OCwzNi41NjIsODMuODA2NTgsMzYuNTYyUzkxNy42OTM4NSwzODkuODgzNTMsODcxLjQxNzExLDM5MC4wOTY3OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MCAtMTU1LjMzMDU0KSIgZmlsbD0iI2YyZjJmMiIvPjxwYXRoIGQ9Ik05OTIsNTkzLjA2NzM3YzAtMjMuMzg4NDMtMTQuNDgwNjMtNDIuMzQ4NTItMzIuMzQzNDgtNDIuMzQ4NTItMTEuMjI3MjQsMC0yMS4xMTUzMiw3LjQ5My0yNi45MTQ2NCwxOC44NjVhMTkuMzYxODQsMTkuMzYxODQsMCwwLDAtNi4xODEtMS4wMTY0NywyMS4wNTg3NCwyMS4wNTg3NCwwLDAsMC0xNC40ODI1Niw2LjExMzM0Yy01LjIyNzY3LTE0LjE3OTE0LTE2LjMxMjg3LTIzLjk2MTg2LTI5LjE0MzUzLTIzLjk2MTg2LTExLjk5NjU4LDAtMjIuNDU5ODEsOC41NTg0OC0yOC4wNDM0NSwyMS4yNjAxNGEyMC4xMDY3MywyMC4xMDY3MywwLDAsMC0xMS4wNjk1OS0zLjQxMTYyYy0xMy43MDg2MywwLTI0LjgyMTc0LDE0LjU1MDcyLTI0LjgyMTc0LDMyLjVhMzkuOTI3OTIsMzkuOTI3OTIsMCwwLDAsMy45MTA2MiwxNy41SDk4NS40NzcxNUE1MS4yMDEyMyw1MS4yMDEyMywwLDAsMCw5OTIsNTkzLjA2NzM3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwIC0xNTUuMzMwNTQpIiBmaWxsPSIjNmM2M2ZmIiBvcGFjaXR5PSIwLjMiLz48cG9seWdvbiBwb2ludHM9IjEwODAgNTg5LjIzNyA4MiA1ODkuMjM3IDgyIDU4Ny4yMzcgMTA3OSA1ODcuMjM3IDEwODAgNTg5LjIzNyIgZmlsbD0iIzJmMmU0MSIvPjxwb2x5Z29uIHBvaW50cz0iOTk4IDQ2NS4yMzcgMCA0NjUuMjM3IDAgNDYzLjIzNyA5OTcgNDYzLjIzNyA5OTggNDY1LjIzNyIgZmlsbD0iIzJmMmU0MSIvPjxwYXRoIGQ9Ik00ODMuNjI5NjIsNDM2LjQ2NzIxczYuMjg1NDctNDYuMDkzNDksMTYuNzYxMjctMzMuNTIyNTQsMCwzMS40MjczOCwwLDMxLjQyNzM4bC04LjM4MDY0LDEwLjQ3NTgtOC4zODA2My02LjI4NTQ4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwIC0xNTUuMzMwNTQpIiBmaWxsPSIjZmZiOGI4Ii8+PHBhdGggZD0iTTQ1OC40ODc3MSw0NTEuMTMzMzJzMjAuOTUxNTktMjMuMDQ2NzQsMjUuMTQxOTEtMTguODU2NDMsMTYuNzYxMjcsNi4yODU0OCwxNC42NjYxMSwxNC42NjYxMS00Ni4wOTM1LDM1LjYxNzctNDYuMDkzNSwzNS42MTc3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwIC0xNTUuMzMwNTQpIiBmaWxsPSIjNmM2M2ZmIi8+PHBhdGggZD0iTTQ1OC40ODc3MSw0NTEuMTMzMzJzMjAuOTUxNTktMjMuMDQ2NzQsMjUuMTQxOTEtMTguODU2NDMsMTYuNzYxMjcsNi4yODU0OCwxNC42NjYxMSwxNC42NjYxMS00Ni4wOTM1LDM1LjYxNzctNDYuMDkzNSwzNS42MTc3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwIC0xNTUuMzMwNTQpIiBvcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJNMzM5LjA2MzY2LDQ0OS4wMzgxNnYxNi43NjEyN3MtMi4wOTUxNiwzNy43MTI4NiwxMC40NzU3OSwzNS42MTc3LDYuMjg1NDgtMzMuNTIyNTQsNi4yODU0OC0zMy41MjI1NGwtMi4wOTUxNi0xOC44NTY0M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MCAtMTU1LjMzMDU0KSIgZmlsbD0iI2ZmYjhiOCIvPjxwYXRoIGQ9Ik0zNDUuMzQ5MTQsNTcwLjU1NzM3cy0xOC44NTY0MywyOS4zMzIyMy0yNS4xNDE5MSwzMS40MjczOS0zOS44MDgsMjAuOTUxNTgtNDMuOTk4MzMsMzkuODA4bC0yOS4zMzIyMywzNy43MTI4NiwxNC42NjYxMSwxOC44NTY0M3M2Ny4wNDUwOS03MS4yMzU0LDg1LjkwMTUxLTc3LjUyMDg4LDM3LjcxMjg2LTM3LjcxMjg1LDM3LjcxMjg2LTM3LjcxMjg1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwIC0xNTUuMzMwNTQpIiBmaWxsPSIjZmZiOGI4Ii8+PHBhdGggZD0iTTQ5NC4xMDU0MSw1MjIuMzY4NzJzMzkuODA4LDYuMjg1NDgsMzMuNTIyNTQsMzEuNDI3MzhTNDYwLjU4Mjg3LDYzMS4zMTcsNDYwLjU4Mjg3LDYzMS4zMTdsLTIuMDk1MTYsMTIuNTcxTDQzNS40NDEsNjQ4LjA3ODI1bC0xMC40NzU3OS0xMC40NzU3OSwyLjA5NTE2LTYuMjg1NDhzMjUuMTQxOS0yMy4wNDY3NSwyNy4yMzcwNi0zMS40MjczOCwyNS4xNDE5MS00MS45MDMxOCwzNS42MTc3LTQzLjk5ODM0TDQ3NS4yNDksNTQ3LjUxMDYzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwIC0xNTUuMzMwNTQpIiBmaWxsPSIjZmZiOGI4Ii8+PHBhdGggZD0iTTI1My4xNjIxNSw2NzkuNTA1NjNzOC4zODA2My0xMi41NzEtNC4xOTAzMi0xMC40NzU3OS0yMC45NTE1OSw0LjE5MDMxLTIwLjk1MTU5LDEyLjU3MDk1LDEwLjQ3NTgsNjcuMDQ1MDgsMjMuMDQ2NzUsNjIuODU0NzYsMi4wOTUxNi0yMy4wNDY3NCwyLjA5NTE2LTIzLjA0Njc0LDYuMjg1NDctMTYuNzYxMjcsMTAuNDc1NzktMTguODU2NDMsNC4xOTAzMi0xMi41NzA5NSwwLTEyLjU3MDk1UzI1MS4wNjcsNjgzLjY5NiwyNTMuMTYyMTUsNjc5LjUwNTYzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwIC0xNTUuMzMwNTQpIiBmaWxsPSIjMmYyZTQxIi8+PHBhdGggZD0iTTQzMS4yNTA2NSw2MzMuNDEyMTRzMC0xMC40NzU4LTguMzgwNjQsMC0xMi41NzA5NSwxOC44NTY0My00LjE5MDMyLDI1LjE0MTksMzcuNzEyODYsMjAuOTUxNTksMzcuNzEyODYsMjAuOTUxNTksMzEuNDI3MzgsNi4yODU0OCwyNy4yMzcwNy04LjM4MDYzYzAsMC0yMC45NTE1OS0xMC40NzU4LTIwLjk1MTU5LTE4Ljg1NjQzczAtMjMuMDQ2NzUtNi4yODU0OC0xOC44NTY0M1M0MzEuMjUwNjUsNjM5LjY5NzYxLDQzMS4yNTA2NSw2MzMuNDEyMTRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjAgLTE1NS4zMzA1NCkiIGZpbGw9IiMyZjJlNDEiLz48cGF0aCBkPSJNMzkxLjQ0MjYzLDQ3Ni4yNzUyM3MtMjkuMzMyMjIsNC4xOTAzMi0yNy4yMzcwNyw0Ni4wOTM0OWMwLDAtMzcuNzEyODUsMzcuNzEyODYtMjcuMjM3MDYsNTAuMjgzODFzMzMuNTIyNTQsMzUuNjE3Nyw0MS45MDMxOCwyOS4zMzIyMywzMy41MjI1NC01NC40NzQxMywzMy41MjI1NC01NC40NzQxMyw1OC42NjQ0NCwyMC45NTE1OCw2OS4xNDAyNCwxMC40NzU3OSwyMC45NTE1OS0zNS42MTc3LDIwLjk1MTU5LTM1LjYxNzdsLTUyLjM3OS0yNy4yMzcwNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MCAtMTU1LjMzMDU0KSIgZmlsbD0iIzJmMmU0MSIvPjxjaXJjbGUgY3g9IjQxMy4xNTM4MiIgY3k9IjE3Ni4zNzg3MyIgcj0iMjUuMTQxOTEiIGZpbGw9IiNmZmI4YjgiLz48cGF0aCBkPSJNNDU0LjI5NzM5LDMzMy44MDQ0M3MtMTQuNjY2MTEsMjMuMDQ2NzUtMTguODU2NDMsMjUuMTQxOTEsMjkuMzMyMjMsMjMuMDQ2NzQsMjkuMzMyMjMsMjMuMDQ2NzQsMC0yNy4yMzcwNiwxMC40NzU3OS0zMy41MjI1NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MCAtMTU1LjMzMDU0KSIgZmlsbD0iI2ZmYjhiOCIvPjxwYXRoIGQ9Ik00NTIuMjAyMjMsMzU2Ljg1MTE4cy0zMy41MjI1NC0xMC40NzU4LTM5LjgwOCw2LjI4NTQ3LTIwLjk1MTU5LDQ4LjE4ODY2LTE4Ljg1NjQzLDY5LjE0MDI0LDYuMjg1NDcsMTYuNzYxMjcsMCwyMy4wNDY3NS0xMC40NzU4LDIuMDk1MTYtOC4zODA2NCwxMC40NzU3OSw0LjE5MDMyLDguMzgwNjQsMi4wOTUxNiwxMi41NzFTNDEyLjM5NDIyLDQ5Ny4yMjY4Miw0MzUuNDQxLDQ5OS4zMjJsMjMuMDQ2NzUsMi4wOTUxNnMwLTM3LjcxMjg1LDQuMTkwMzItNDYuMDkzNDksMTIuNTcxLTI1LjE0MTkxLDEyLjU3MS0zMS40MjczOFY0MDcuMjY1NDFhNjMuNjA2NzMsNjMuNjA2NzMsMCwwLDAtOC4zODA2My0zMS41NTc3OWgwUzQ1NC4yOTczOSwzNTYuODUxMTgsNDUyLjIwMjIzLDM1Ni44NTExOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MCAtMTU1LjMzMDU0KSIgZmlsbD0iIzZjNjNmZiIvPjxwYXRoIGQ9Ik00MjcuMDYwMzMsMzY1LjIzMTgxcy03Ny41MjA4OCw2LjI4NTQ4LTg1LjkwMTUxLDI3LjIzNzA3LTEyLjU3MDk1LDYyLjg1NDc2LTQuMTkwMzIsNjIuODU0NzYsMTguODU2NDMsNC4xOTAzMiwyMC45NTE1OSwwLDEwLjQ3NTc5LTQ2LjA5MzQ5LDEyLjU3MDk1LTQ2LjA5MzQ5LDY0Ljk0OTkyLTYuMjg1NDgsNjQuOTQ5OTItNi4yODU0OFM0NjIuNjc4LDM2OS40MjIxMyw0MjcuMDYwMzMsMzY1LjIzMTgxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwIC0xNTUuMzMwNTQpIiBmaWxsPSIjNmM2M2ZmIi8+PHBhdGggZD0iTTQ3NC4xNjQsMzI1LjQ3NjI2czYuNjcxOTQtMTEuNTk0NjEsMTUuMDExNzQtMS41MjM2NFM1MTEuMDgyNjksMzE1LjUxNjQxLDUwOSwzMTEuNTY3MzdzLTkuNDM3Ny4xNzc1Ni0yMi4wNDIxMi0zLjk0MjgzLTM2Ljg4NDYyLTEyLjUxNDQ3LTQwLjk1MSwxNC44NjcyNyw1LjYxODI3LDI0LjUxMTE3LDUuNjE4MjcsMjQuNTExMTcsNC40MzkxNC0yNC4yNjMxOCw4LjQ1MTI1LTE3LjI5Mzc1bDQuMDEyMTEsNi45Njk0NCwzLjQ4MDIuODU2NTRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjAgLTE1NS4zMzA1NCkiIGZpbGw9IiMyZjJlNDEiLz48Y2lyY2xlIGN4PSI2NTEuMzA4NzQiIGN5PSI3NS4zMTM2NiIgcj0iMzAuNjc0MzYiIGZpbGw9IiMyZjJlNDEiLz48cGF0aCBkPSJNNzAxLjUwMzY0LDI1My4zNDg2NHMxLjU4NzM0LDI4LjU3MjA4LTEuNTg3MzMsMjguNTcyMDhTNzE5Ljc1OCwyOTUuNDEzMDksNzE5Ljc1OCwyOTUuNDEzMDlsMTQuMjg2LTcuOTM2Njh2LTkuNTI0cy0xOS4wNDgwNi0yLjM4MS0xMS4xMTEzNy0yMy4wMTY0UzcwMS41MDM2NCwyNTMuMzQ4NjQsNzAxLjUwMzY0LDI1My4zNDg2NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MCAtMTU1LjMzMDU0KSIgZmlsbD0iIzlmNjE2YSIvPjxwb2x5Z29uIHBvaW50cz0iNTc0LjgzNSA0MTEuNTE3IDU3Mi40NTQgNDM1LjMyNyA1ODAuMzkxIDQzNy43MDggNTg2Ljc0IDQzMS4zNTkgNTg5LjEyMSA0MTEuNTE3IDU3NC44MzUgNDExLjUxNyIgZmlsbD0iIzlmNjE2YSIvPjxwb2x5Z29uIHBvaW50cz0iNjg5LjEyNCA0MjUuMDEgNjkzLjA5MiA0NDAuMDg5IDcwNC4yMDMgNDQ3LjIzMiA3MTYuMTA5IDQ0MC44ODMgNzAyLjYxNiA0MTguNjYgNjg5LjEyNCA0MjUuMDEiIGZpbGw9IiM5ZjYxNmEiLz48Y2lyY2xlIGN4PSI2NDkuMDQzNSIgY3k9Ijg3LjMwMzU4IiByPSIyMy4wMTY0IiBmaWxsPSIjOWY2MTZhIi8+PHBhdGggZD0iTTY5NS4xNTQyOSwzMjguNzQ3MTlsLTUuNTU1NjgtMi4zODFzLTkuNTI0LTUuNTU1NjgtMTAuMzE3NjktMTYuNjY3LDcuOTM2NjgtMjUuMzk3NCw3LjkzNjY4LTI1LjM5NzRsMTIuNjk4NzEtMy45NjgzNCwxNC45MiwxMi4xNDMzOC4xNTk3MywxOS42MDMzN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MCAtMTU1LjMzMDU0KSIgZmlsbD0iIzlmNjE2YSIvPjxwYXRoIGQ9Ik02ODkuNTk4NjEsMjg1Ljg4OTA3bC0zLjE3NDY3LTEuNTg3MzRzLTE1Ljg3MzM4LS43OTM2Ny0xNy40NjA3MiwxOC4yNTQzOC03LjE0Myw1MC43OTQ4MS03LjE0Myw1MC43OTQ4MS0xMi42OTg3LDIyLjIyMjczLTExLjkwNSw0Ni4wMzI4bC02LjM0OTM1LDIwLjYzNTM5cy04LjczMDM2LDMwLjE1OTQxLDEuNTg3MzMsMzAuMTU5NDEsOS41MjQtMzIuNTQwNDIsOS41MjQtMzIuNTQwNDIsMTkuMDQ4LTQ2LjAzMjc5LDIwLjYzNTM5LTUzLjk2OTQ4LDE1LjA3OTcxLTQ1LjIzOTEzLDExLjExMTM3LTU1LjU1NjgyUzY4OS41OTg2MSwyODUuODg5MDcsNjg5LjU5ODYxLDI4NS44ODkwN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MCAtMTU1LjMzMDU0KSIgZmlsbD0iIzlmNjE2YSIvPjxwYXRoIGQ9Ik03MDEuNTAzNjQsMzM1Ljg5MDIxdjguNzMwMzVzNS41NTU2OSw2LjM0OTM2LDMuMTc0NjgsMTAuMzE3Ny00Ljc2MiwxMS45MDUtNC43NjIsMTEuOTA1TDcxMS4wMjc2NywzODQuMzA0bDM3LjMwMjQ0LDMuMTc0NjcsNy40MTgtNDkuNjk5NDdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjAgLTE1NS4zMzA1NCkiIGZpbGw9IiM5ZjYxNmEiLz48cGF0aCBkPSJNNzM2LjQyNTA3LDI4MC4zMzMzOWw2LjM0OTM1LTMuMTc0NjhzMTMuNDkyMzgtOS41MjQsMjQuNjAzNzQtMTEuMTExMzZsMzQuMTI3NzYtMjMuMDE2NCwyMi4yMjI3My01My4xNzU4MnMtLjc5MzY3LTI4LjU3MjA3LDUuNTU1NjgtMjUuMzk3NFM4MzQuODQsMTkyLjIzNjE0LDgzNC44NCwxOTIuMjM2MTRzLTExLjkwNSw0OS4yMDc0Ny0yMi4yMjI3Miw2Mi42OTk4NC00Ny42MjAxNCwzNS43MTUxLTQ3LjYyMDE0LDM1LjcxNTEtMTAuMzE3NjksMTEuOTA1LTkuNTI0LDE3LjQ2MDcyUzczNi40MjUwNywyODAuMzMzMzksNzM2LjQyNTA3LDI4MC4zMzMzOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MCAtMTU1LjMzMDU0KSIgZmlsbD0iIzlmNjE2YSIvPjxwYXRoIGQ9Ik03MDcuMDU5MzMsMzY2Ljg0MzI5cy04LjczMDM2LTUuNTU1NjgtMTQuMjg2LDMuOTY4MzUtMTUuODczMzgsMTEuOTA1LTIyLjIyMjczLDQwLjQ3NzExUzY0OS4xMjE1LDQ4NS4xLDY0NS4xNTMxNSw0ODguMjc0NjNzLTIwLjYzNTM5LDM2LjUwODc3LTExLjExMTM2LDgzLjMzNTIzaDE1Ljg3MzM4TDY2My40MDc1NCw1MDQuMTQ4czQzLjY1MTc5LTUzLjk2OTQ5LDQ2LjgyNjQ2LTc2LjE5MjIxTDcyNC41Miw1MTEuMjkxcy43OTM2NywzMS43NDY3NSwxMi42OTg3LDQ2LjgyNjQ2bDEyLjY5ODcsMzAuMTU5NDIsMTYuNjY3LTcuOTM2NjktMTkuMDQ4LTc2LjE5MjIxczkuNTI0LTc2Ljk4NTg4LDMuMTc0NjctOTguNDE0OTRsLS45MTIzOS0yOC4wOTM5MVM3MjMuNzI2MzcsMzc4Ljc0ODMzLDcwNy4wNTkzMywzNjYuODQzMjlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjAgLTE1NS4zMzA1NCkiIGZpbGw9IiMyZjJlNDEiLz48cGF0aCBkPSJNNjQwLjM5MTE0LDU4Ni42ODk1N2gtOS41MjRjLTEuNTg3MzMsMC0xNC4yODYsMTAuMzE3NjktOC43MzAzNSwxNS44NzMzOHMxNC4yODYsMTUuODczMzcsMTQuMjg2LDE1Ljg3MzM3LDMwLjk1MzA4LDMuOTM2NjksMzEuNzQ2NzUtMS42MTktMTMuNDkyMzctMTcuNDI5MDYtMTMuNDkyMzctMTcuNDI5MDZsLTMuOTY4MzQtMTIuNjk4N1M2NDIuNzcyMTUsNTc3Ljk1OTIxLDY0MC4zOTExNCw1ODYuNjg5NTdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjAgLTE1NS4zMzA1NCkiIGZpbGw9IiMyZjJlNDEiLz48cGF0aCBkPSJNNzY2LjU4NDQ5LDU5NC42MjYyNnMtMTMuNDkyMzctLjc5MzY3LTE1Ljg3MzM4LTEuNTg3MzQtNy4xNDMsMjAuNjM1MzksMCwyMi4yMjI3M1M3ODcuMjE5ODgsNjE5LjIzLDc4Ny4yMTk4OCw2MTkuMjNzMjMuMDE2NC0uNzkzNjcsMjEuNDI5MDYtNy4xNDMtMzIuNTQwNDItMTkuMDQ4LTMyLjU0MDQyLTE5LjA0OFM3NzIuMTQwMTcsNTg1LjEwMjIzLDc2Ni41ODQ0OSw1OTQuNjI2MjZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjAgLTE1NS4zMzA1NCkiIGZpbGw9IiMyZjJlNDEiLz48cGF0aCBkPSJNNzAzLjg4NDY1LDI3OS41Mzk3MmwtMy45NjgzNC0yLjM4MS00Ljc2MiwzLjk2ODM0czE0LjI4Niw5LjUyNCwxMS4xMTEzNywxOC4yNTQzOS0xNi42NjcwNSwyNi45ODQ3NC0xNi42NjcwNSwyNi45ODQ3NCwxMS45MDUsMTMuNDkyMzcsMTEuOTA1LDE4LjI1NDM4YzAsMCwzMC45NTMwOS0xMS4xMTEzNiw1My45Njk0OSwwLDAsMCwwLTE1Ljg3MzM3LDMuMTc0NjctMTkuMDQ4czQuNzYyLTE0LjI4Ni0zLjE3NDY3LTIzLjgxMDA2YTE3NC4wMDc0LDE3NC4wMDc0LDAsMCwxLTE1LjA3OTcxLTIyLjIyMjczbC03LjkzNjY5LTQuNzYyLTQuMDg3OSwxLjI5NjY2czguMDU2MjQsOS4wMjEuMTE5NTYsOS44MTQ3MVM3MDcuODUzLDI4NC4zMDE3Myw3MDMuODg0NjUsMjc5LjUzOTcyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwIC0xNTUuMzMwNTQpIiBmaWxsPSIjNmM2M2ZmIi8+PHBhdGggZD0iTTczMy43Mjc1NiwxNzguMzQ2OTRhMTYuNzY3NDQsMTYuNzY3NDQsMCwwLDEtMTAuNCw1LjQ0NzYyYy02LjkzMzM0Ljk5MDQ4LTEuNDg1NzEsMTEuODg1NzMtMS40ODU3MSwxMS44ODU3M3MtMS45ODEtMy45NjE5MSwxLjk4MS03LjQyODU4UzczMy43Mjc1NiwxODIuODA0MDgsNzMzLjcyNzU2LDE3OC4zNDY5NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MCAtMTU1LjMzMDU0KSIgZmlsbD0iIzJmMmU0MSIvPjxjaXJjbGUgY3g9IjY2MC4zNjAxOSIgY3k9IjQyLjYyNzg3IiByPSI4LjU0ODU5IiBmaWxsPSIjMmYyZTQxIi8+PHBhdGggZD0iTTczMC4zNDAzOCwyMDYuMzc2Yy02LjYwNDE5LTMuNDQ5NTItMTcuOTY1NC02LjE2MjY0LTI0LjAwMTczLTUuOTY4N2wxLjUyNy01LjgzNzg4YzUuMzQzOTIsMy42MzA2MywxNi42NDU0LDYuMzk0NDEsMjQuMDAxNzMsNS45Njg3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwIC0xNTUuMzMwNTQpIiBmaWxsPSIjNmM2M2ZmIi8+PHBhdGggZD0iTTcxNi42OTYzNSwyMDYuODg5ODJzLTEwLjQwNjg4LDEzLjM4MDI2LTMxLjIyMDYzLDE2LjM1MzY2LTQuNDYwMDksMzUuNjgwNzEtNC40NjAwOSwzNS42ODA3MS01Ljk0Njc4LTExLjg5MzU3LDUuOTQ2NzktMjIuMzAwNDRTNzE2LjY5NjM1LDIyMC4yNzAwOCw3MTYuNjk2MzUsMjA2Ljg4OTgyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYwIC0xNTUuMzMwNTQpIiBmaWxsPSIjMmYyZTQxIi8+PHBhdGggZD0iTTcxNy40OSwyMDYuMDk2MTVzNS45NDY3OCwyMC44MTM3NSwxNC44NjcsMjMuNzg3MTQsNC40NjAwOSwzNC4xOTQtMTAuNDA2ODcsMzcuMTY3NDFjMCwwLDEyLjYzNjkyLTE3LjA5Nyw1LjIwMzQ0LTMwLjQ3NzI3UzcxNS4yNiwyMTIuNzg2MjgsNzE3LjQ5LDIwNi4wOTYxNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MCAtMTU1LjMzMDU0KSIgZmlsbD0iIzJmMmU0MSIvPjxyZWN0IHg9Ijc0Mi42OTY0MiIgeT0iMTUuODczMzgiIHdpZHRoPSI1NC43NjMxNSIgaGVpZ2h0PSI2LjM0OTM1IiBmaWxsPSIjMmYyZTQxIi8+PGVsbGlwc2UgY3g9Ijc5Ny40NTk1OCIgY3k9IjE5LjA0ODA1IiByeD0iNC43NjIwMSIgcnk9IjE5LjA0ODA1IiBmaWxsPSIjMmYyZTQxIi8+PGVsbGlwc2UgY3g9Ijc0Mi42OTY0MiIgY3k9IjE5LjA0ODA1IiByeD0iNC43NjIwMSIgcnk9IjE5LjA0ODA1IiBmaWxsPSIjMmYyZTQxIi8+PHJlY3QgeD0iNzcwLjQ3NDgzIiB5PSI0NDIuODgyNDkiIHdpZHRoPSI1NC43NjMxNSIgaGVpZ2h0PSI2LjM0OTM1IiBmaWxsPSIjMmYyZTQxIi8+PGVsbGlwc2UgY3g9IjgyNS4yMzc5OSIgY3k9IjQ0Ni4wNTcxNiIgcng9IjQuNzYyMDEiIHJ5PSIxOS4wNDgwNSIgZmlsbD0iIzJmMmU0MSIvPjxlbGxpcHNlIGN4PSI3NzAuNDc0ODMiIGN5PSI0NDYuMDU3MTYiIHJ4PSI0Ljc2MjAxIiByeT0iMTkuMDQ4MDUiIGZpbGw9IiMyZjJlNDEiLz48cGF0aCBkPSJNMjU0LDU5My4wNjczN2MwLTIzLjM4ODQzLTE0LjQ4MDYzLTQyLjM0ODUyLTMyLjM0MzQ4LTQyLjM0ODUyLTExLjIyNzI0LDAtMjEuMTE1MzIsNy40OTMtMjYuOTE0NjQsMTguODY1YTE5LjM2MTg0LDE5LjM2MTg0LDAsMCwwLTYuMTgxLTEuMDE2NDcsMjEuMDU4NzQsMjEuMDU4NzQsMCwwLDAtMTQuNDgyNTYsNi4xMTMzNGMtNS4yMjc2Ny0xNC4xNzkxNC0xNi4zMTI4Ny0yMy45NjE4Ni0yOS4xNDM1My0yMy45NjE4Ni0xMS45OTY1OCwwLTIyLjQ1OTgxLDguNTU4NDgtMjguMDQzNDUsMjEuMjYwMTRhMjAuMTA2NzMsMjAuMTA2NzMsMCwwLDAtMTEuMDY5NTktMy40MTE2MmMtMTMuNzA4NjMsMC0yNC44MjE3NCwxNC41NTA3Mi0yNC44MjE3NCwzMi41YTM5LjkyNzkyLDM5LjkyNzkyLDAsMCwwLDMuOTEwNjIsMTcuNUgyNDcuNDc3MTVBNTEuMjAxMjMsNTEuMjAxMjMsMCwwLDAsMjU0LDU5My4wNjczN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MCAtMTU1LjMzMDU0KSIgZmlsbD0iIzZjNjNmZiIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+");
		background-position: center center; 
		background-size: cover; 
		background-repeat: no-repeat; 
		height: 410upx;
	}
	.content-notice {
		padding: 15upx;
		margin: 24upx;
		border-radius: 8upx;
	}
	.icon{
		margin-right: 6upx;
	}
	.icon-close{
		margin-top: 4upx;
	}
	.tagTitle{
		margin: 48upx 24upx 0upx 24upx;
		font-size: 32upx;
		font-weight: 100; 
		color: rgba(0,0,0,0.5);
	}
	
	/* 顶部数据圈 */
	.m-time{
		position: absolute;
		left:216upx;
		top:36upx;
		font-weight: 900!important;
		color: rgba(0,129,255,1);
	}
	.m-kll{
		position: absolute;
		left:24upx;
		top:176upx;
		font-weight: 900!important;
		color: rgba(229,77,66,1);
	}
	.m-foot{
		position: absolute;
		left:500upx;
		top:248upx;
		font-weight: 900!important; 
		color: rgba(28,187,180,1);
	}
	
	.line-red{
		color:rgba(229,77,66,0.5)
	}
	.text-red{
		font-size: 24upx;
		color:rgba(229,77,66,1)
	}
	.line-blue{
		color:rgba(0,129,255,0.5)
	}
	.text-blue{
		font-size: 24upx;
		color:rgba(0,129,255,1)
	}
	.line-cyan{
		color:rgba(28,187,180,0.5)
	}
	.text-cyan{
		font-size: 24upx;
		color:rgba(28,187,180,1)
	}
	
	
	.round {
		border-radius: 50%;
	}
	.cu-tag-top {
		content: "";
		width: 84upx;
		height: 84upx;
		position: absolute;
		border: 6upx solid currentColor;
	}
	.page-m{
		margin-left: 100upx;
		line-height: 44upx;
	}
	.t-title{
		font-size: 48upx;
	}
	.t-text{
		font-weight: 500 !important; 
		font-size: 24upx; 
	}
	
	/* 具体运动数据 */
	.bg-img-yd{
		background-size: 256upx;
		background-position: right;
	}
	.cu-yd{
		width: 100%;
		height: 100%;
		position: absolute;
	}
	.page_motion_tag{
		padding: 0 24upx;
	}
	.cu-card {
		width: 620upx;
	}
	.cu-card.article>.cu-item {
		padding-bottom: 240upx;
		margin-left: 0px; 
	}
	.cardTitle{
		padding: 36upx 0upx 0upx 36upx;
		z-index: 1;
	}
	.yd-title{
		margin-bottom: 24upx;
		font-size: 48upx;
		font-weight: 700;
		color: #FFFFFF;
	}
	.yd-text{
		color: #FFFFFF;
	}
	.yd-text-title{
		font-size: 24upx;
	}
	.yd-text-t{
		font-size: 40upx;
		font-weight: 700;
	}
	
	
	/* 具体健康数据 */
	.cu-card-jk {
		width: 100%;
		padding: 0 24upx;
		
		
	}
	.cu-card-jk.article>.cu-item {
		/*padding-bottom: 108upx;*/
		height: 800upx;
		margin-right: 0;
		margin-left: 0;
	}
	.cardTitle-jk{
		padding: 36upx 36upx;
		z-index: 1;
	}
	.jk-title{
		margin-bottom: 24upx;
		font-size: 48upx;
		font-weight: 700;
		color: #333333;
	}
	.jk-text{
		color: #333333;
	}
	.jk-text-title{
		font-size: 24upx;
	}
	.jk-text-t{
		font-size: 40upx;
		font-weight: 700;
	}
	.text-center{
		margin-right: 24upx;
	}
	.text-blue{
		font-size: 28upx;
		color: rgba(0,129,255,1);
	}
	
	.heartbeat{
		margin-top: 128upx;
	}
	.heartbeat-line{
		width: 256upx;
		height: 256upx;
		margin-left: -12upx;
	}
	.heartbeat-text{
		font-size: 64upx;
	}
	.heartbeat-button{
		margin-top: 348upx;
		margin-left: -12upx;
	}
	.bg-red{
		background-color:rgba(229,77,66,0.7);
	}
	
	.pulse{
		margin-top: 128upx;
	}
	.pulse-line{
		width: 256upx;
		height: 256upx;
		margin-left: -12upx;
	}
	.pulse-text{
		font-size: 64upx;
	}
	.pulse-button{
		margin-top: 348upx;
		margin-left: -12upx;
	}
	.bg-blue{
		background-color:rgba(0,129,255,0.7); 
	}
	
	
</style>
