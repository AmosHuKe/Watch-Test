<template>
	<view class="motion animation-fade">
		<!-- 顶部 -->
		<!-- <cu-custom bgColor="bg-white" :isBack="false">
			<block slot="backText"></block>
			<block slot="content">运动</block>
		</cu-custom> -->
		
		<!-- 通知 -->
		<view 
			class="content-notice bar-shadown" 
			v-if="notice.contentmain==''?false:true " 
			:style="[{ backgroundColor:'rgba(0,0,0,0.2)',color:'#FFFFFF'}]"
		>
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
		
		<scroll-view scroll-y class="page">
			<!-- 顶部数据图 -->
			<view class="bg-img padding-bottom-xl motion_top animation-fade" v-if="goalC[0]">
				
				<view class="m-time heart1" >
					<view class="flex">
						<view class="cu-tag cu-tag-top round line-blue shadow"><text class="text-blue">{{ goalC[0].progress }}</text></view>
						<view class="flex-sub page-m">
							<view class="t-title">{{ goalC[0].actual }}</view>
							<view class="t-text"><text class="cuIcon-timefill"></text>{{ goalC[0].goal }}</view>
						</view>
					</view>
				</view>
				
				<view class="m-kll heart2">
					<view class="flex ">
						<view class="cu-tag cu-tag-top round line-cyan shadow"><text class="text-cyan">{{ goalC[2].progress }}</text></view>
						<view class="flex-sub page-m">
							<view class="t-title">{{ goalC[2].actual }}</view>
							<view class="t-text"><text class="cuIcon-usefullfill"></text>{{ goalC[2].goal }}</view>
						</view>
					</view>
				</view>
				
				<view class="m-foot heart3">
					<view class="flex">
						<view class="cu-tag cu-tag-top round line-red shadow"><text class="text-red">{{ goalC[1].progress }}</text></view>
						<view class="flex-sub page-m">
							<view class="t-title">{{ goalC[1].actual }}</view>
							<view class="t-text"><text class="cuIcon-hotfill"></text>{{ goalC[1].goal }}</view>
						</view>
					</view>
				</view>
				
			</view>
			
			<!-- 具体运动数据 -->
			<view class="tagTitle" v-if="ydList[0]">运动</view>
			<scroll-view scroll-x="true" class="page_motion_tag animation-fade" v-if="ydList[0]">
				
				<view class="flex" >
					<view class="flex-sub" v-for="(item,index) in ydList" :key="index">
						<view class="cu-card article" @tap="ydToUrl(index)">  <!--跳转到详情-->
							<view class="cu-item bar-shadown bg-img bg-img-yd" :style="[{backgroundImage:'url('+item.img+')'}]" >
								<view :class="['cu-yd',item.bgcolor ]">
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
			<view class="tagTitle" v-if="jkList">健康</view>
			<view class="jk animation-fade" v-if="jkList">
				<view class="cu-card cu-card-jk article">
					<view class="cu-item bg-img bar-shadown">
						<view class="cardTitle-jk">
							<view class="flex">
								<scroll-view scroll-x class="bg-white nav text-center">
									<view 
										class="cu-item" 
										:class="index==TabCur?'text-blue jk-cur cur':''" 
										v-for="(jk,index) in jkList" 
										:key="index" 
										@tap="tabSelect" 
										:data-id="index"
									>
										<view v-if="index=='sleep'">睡眠</view>
										<view v-if="index=='heartbeat'">心率</view>
										<view v-if="index=='pulse'">脉搏</view>
									</view>
								</scroll-view>
							</view>
							<!-- 健康详情 -->
							<!-- 睡眠 -->
							<view v-if="TabCur=='sleep'">
								<view 
									class="flex animation-fade jk-text" 
									v-for="(sleepD,index) in jkList.sleep[0].content" 
									:key="index"
								>
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
	var _this;
	import {
		getGoalc,
		getSportList,
		getHealthList,
	} from '../../service/api/motion.js' //运动api
	import {
		getisLogin,
	} from '../../service/api/login.js' //登录api
	//通知数据
	const notice={
		contentmain:"请连接蓝牙进行操作",
		content:{
			0:'请连接蓝牙设备和打开位置服务进行操作',
			1:'坚持运动'
		}
	}
	
	export default {
		data() {
			return {
				//通知
				notice: notice,
				//计划完成度
				goalC: '',
				//运动数据
				ydList: '',
				//健康数据
				jkList: '',
				//健康数据切换
				TabCur:'sleep'
			}
		},
		mounted(){
			_this=this
			getisLogin() //是否登录
			
			_this.getData()//获取数据
		},
		methods: {
			getData(){
				//获取数据
				const goalcData=_this.$store.getters.getGoalcData; //计划完成度数据
				const ydData=_this.$store.getters.getYdData; //运动数据
				const jkData=_this.$store.getters.getJkData; //健康数据
				
				if(goalcData!=""){
					_this.goalC=goalcData
				}else{
					//获取数据计划完成度
					getGoalc()
					.then(res => {		
						console.log(res)
						_this.goalC=res.data
						_this.$store.dispatch('setGoalcData',res.data)
					}).catch(err => {
						
					})
				}
				
				if(ydData!=""){
					_this.ydList=ydData
				}else{
					//获取运动数据
					getSportList()
					.then(res => {
						console.log(res)
						_this.ydList=res.data
						_this.$store.dispatch('setYdData',res.data)
					}).catch(err => {
						
					})
				}
				
				if(jkData!=""){
					_this.jkList=jkData
				}else{
					//获取健康数据
					getHealthList()
					.then(res => {
						console.log(res)
						_this.jkList=res.data
						_this.$store.dispatch('setJkData',res.data)
					}).catch(err => {
						console.log(err)
					})
				}
			},
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
				const item=this.ydList[e]
				
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

<style lang="scss" scoped>
	@import "../../style/color/color.scss"; //颜色
	
	.motion{
		margin-top:100upx;
	}
	.motion_top{
		margin-top: 128upx;
		background-image: url("data:image/svg+xml;base64,PHN2ZyBpZD0iNzEyN2E1NTItNDNkNi00YjE2LTlkZjItOWYwZmE5NjM3YWI4IiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI5NjIuMiIgaGVpZ2h0PSI3NzEuNjciIHZpZXdCb3g9IjAgMCA5NjIuMiA3NzEuNjciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZDIwZmFhYjEtNmFiNi00MzJiLWJiYTAtNjA3MDEzODkyNzYxIiB4MT0iMjAyOC4xOSIgeTE9IjQwMy4yOCIgeDI9IjIwMjguMTkiIHkyPSI0MDIuNzgiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTEsIDAsIDAsIDEsIDI3NzgsIDApIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSJncmF5IiBzdG9wLW9wYWNpdHk9IjAuMjUiLz48c3RvcCBvZmZzZXQ9IjAuNTQiIHN0b3AtY29sb3I9ImdyYXkiIHN0b3Atb3BhY2l0eT0iMC4xMiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iZ3JheSIgc3RvcC1vcGFjaXR5PSIwLjEiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iY2FiZjY3MGUtYmJiMS00ODcyLWJjNTQtYzY1OWM5OGIzODc4IiB4MT0iMjE5Mi40NyIgeTE9IjgzNS44NCIgeDI9IjIxOTIuNDciIHkyPSIxNzUuODEiIHhsaW5rOmhyZWY9IiNkMjBmYWFiMS02YWI2LTQzMmItYmJhMC02MDcwMTM4OTI3NjEiLz48L2RlZnM+PHRpdGxlPkpvZ2dpbmc8L3RpdGxlPjxwYXRoIGQ9Ik04NTQsNTIyLjI2YTEwLjg4LDEwLjg4LDAsMCwwLTE0LjIsMS4zMiwxMS4xMywxMS4xMywwLDAsMCwuNDQsMTUuNTFsMTMuNTgsMTMuNWEyLjI2LDIuMjYsMCwwLDAsMy4yMSwwTDg3MC41Nyw1MzlhMTEuMTMsMTEuMTMsMCwwLDAsLjM2LTE1LjUxLDEwLjkyLDEwLjkyLDAsMCwwLTE0LjIyLTEuMjRBMi4yOCwyLjI4LDAsMCwxLDg1NCw1MjIuMjZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE4LjkgLTY0LjE2KSIgZmlsbD0iIzhkYTZlMyIvPjxwYXRoIGQ9Ik0yNjIsMjE0LjI2YTEwLjg4LDEwLjg4LDAsMCwwLTE0LjIsMS4zMiwxMS4xMywxMS4xMywwLDAsMCwuNDQsMTUuNTFsMTMuNTgsMTMuNWEyLjI2LDIuMjYsMCwwLDAsMy4yMSwwTDI3OC41NywyMzFhMTEuMTMsMTEuMTMsMCwwLDAsLjM2LTE1LjUxLDEwLjkyLDEwLjkyLDAsMCwwLTE0LjIyLTEuMjRBMi4yOCwyLjI4LDAsMCwxLDI2MiwyMTQuMjZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE4LjkgLTY0LjE2KSIgZmlsbD0iIzhkYTZlMyIvPjxwYXRoIGQ9Ik0xMzYsNDg5LjI2YTEwLjg4LDEwLjg4LDAsMCwwLTE0LjIsMS4zMiwxMS4xMywxMS4xMywwLDAsMCwuNDQsMTUuNTFsMTMuNTgsMTMuNWEyLjI2LDIuMjYsMCwwLDAsMy4yMSwwTDE1Mi41Nyw1MDZhMTEuMTMsMTEuMTMsMCwwLDAsLjM2LTE1LjUxLDEwLjkyLDEwLjkyLDAsMCwwLTE0LjIyLTEuMjRBMi4yOCwyLjI4LDAsMCwxLDEzNiw0ODkuMjZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE4LjkgLTY0LjE2KSIgZmlsbD0iIzhkYTZlMyIvPjxwYXRoIGQ9Ik04NTMsMTg3LjI2YTEwLjg4LDEwLjg4LDAsMCwwLTE0LjIsMS4zMiwxMS4xMywxMS4xMywwLDAsMCwuNDQsMTUuNTFsMTMuNTgsMTMuNWEyLjI2LDIuMjYsMCwwLDAsMy4yMSwwTDg2OS41NywyMDRhMTEuMTMsMTEuMTMsMCwwLDAsLjM2LTE1LjUxLDEwLjkyLDEwLjkyLDAsMCwwLTE0LjIyLTEuMjRBMi4yOCwyLjI4LDAsMCwxLDg1MywxODcuMjZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE4LjkgLTY0LjE2KSIgZmlsbD0iIzhkYTZlMyIvPjxyZWN0IHg9IjY1MSIgeT0iNzMuOTIiIHdpZHRoPSIzIiBoZWlnaHQ9IjE3IiBmaWxsPSIjM2FkMjlmIi8+PHJlY3QgeD0iNzY5LjkiIHk9IjEzOC4wOCIgd2lkdGg9IjMiIGhlaWdodD0iMTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc5OS4wOCAtNjg4Ljk4KSByb3RhdGUoOTApIiBmaWxsPSIjM2FkMjlmIi8+PHJlY3QgeD0iNzgzIiB5PSIzMDQuOTIiIHdpZHRoPSIzIiBoZWlnaHQ9IjE3IiBmaWxsPSIjM2FkMjlmIi8+PHJlY3QgeD0iOTAxLjkiIHk9IjM2OS4wOCIgd2lkdGg9IjMiIGhlaWdodD0iMTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExNjIuMDggLTU4OS45OCkgcm90YXRlKDkwKSIgZmlsbD0iIzNhZDI5ZiIvPjxyZWN0IHg9IjE5MyIgeT0iNTE1LjkyIiB3aWR0aD0iMyIgaGVpZ2h0PSIxNyIgZmlsbD0iIzNhZDI5ZiIvPjxyZWN0IHg9IjMxMS45IiB5PSI1ODAuMDgiIHdpZHRoPSIzIiBoZWlnaHQ9IjE3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3ODMuMDggMjExLjAyKSByb3RhdGUoOTApIiBmaWxsPSIjM2FkMjlmIi8+PHJlY3QgeD0iMTI0IiB5PSI3My45MiIgd2lkdGg9IjMiIGhlaWdodD0iMTciIGZpbGw9IiMzYWQyOWYiLz48cmVjdCB4PSIyNDIuOSIgeT0iMTM4LjA4IiB3aWR0aD0iMyIgaGVpZ2h0PSIxNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjcyLjA4IC0xNjEuOTgpIHJvdGF0ZSg5MCkiIGZpbGw9IiMzYWQyOWYiLz48cmVjdCB4PSIyNTYiIHk9IjEwMC45MiIgd2lkdGg9IjMiIGhlaWdodD0iMTciIGZpbGw9IiMzYWQyOWYiLz48cmVjdCB4PSIzNzQuOSIgeT0iMTY1LjA4IiB3aWR0aD0iMyIgaGVpZ2h0PSIxNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDMxLjA4IC0yNjYuOTgpIHJvdGF0ZSg5MCkiIGZpbGw9IiMzYWQyOWYiLz48cGF0aCBkPSJNMzEyLDM1MWEzLjY3LDMuNjcsMCwwLDEtMi4wNS00LjQ0LDEuODYsMS44NiwwLDAsMCwuMDgtLjQxaDBhMS44NCwxLjg0LDAsMCwwLTMuMzEtMS4yMmgwYTEuODIsMS44MiwwLDAsMC0uMi4zNiwzLjY4LDMuNjgsMCwwLDEtNC40NCwyLjA1LDIsMiwwLDAsMC0uNDEtLjA4aDBhMS44NCwxLjg0LDAsMCwwLTEuMjIsMy4zMWgwYTEuNTgsMS41OCwwLDAsMCwuMzYuMiwzLjY5LDMuNjksMCwwLDEsMi4wNSw0LjQ1LDEuMzUsMS4zNSwwLDAsMC0uMDguNGgwYTEuODQsMS44NCwwLDAsMCwzLjMxLDEuMjJoMGEyLjA4LDIuMDgsMCwwLDAsLjItLjM2LDMuNjcsMy42NywwLDAsMSw0LjQ0LTIsMS44NiwxLjg2LDAsMCwwLC40MS4wOGgwYTEuODUsMS44NSwwLDAsMCwxLjIyLTMuMzJoMEEyLjA4LDIuMDgsMCwwLDAsMzEyLDM1MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTguOSAtNjQuMTYpIiBmaWxsPSIjZjU1ZjQ0Ii8+PHBhdGggZD0iTTg3OSw3MWEzLjY3LDMuNjcsMCwwLDEtMi00LjQ0LDEuODYsMS44NiwwLDAsMCwuMDgtLjQxaDBhMS44NCwxLjg0LDAsMCwwLTMuMzEtMS4yMmgwYTEuODIsMS44MiwwLDAsMC0uMi4zNiwzLjY4LDMuNjgsMCwwLDEtNC40NCwyLDIsMiwwLDAsMC0uNDEtLjA4aDBhMS44NCwxLjg0LDAsMCwwLTEuMjIsMy4zMWgwYTEuNTgsMS41OCwwLDAsMCwuMzYuMiwzLjY5LDMuNjksMCwwLDEsMi4wNSw0LjQ1LDEuMzUsMS4zNSwwLDAsMC0uMDguNGgwYTEuODQsMS44NCwwLDAsMCwzLjMxLDEuMjJoMGEyLjA4LDIuMDgsMCwwLDAsLjItLjM2LDMuNjcsMy42NywwLDAsMSw0LjQ0LTIsMS44NiwxLjg2LDAsMCwwLC40MS4wOGgwYTEuODUsMS44NSwwLDAsMCwxLjIyLTMuMzJoMEEyLjA4LDIuMDgsMCwwLDAsODc5LDcxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOC45IC02NC4xNikiIGZpbGw9IiMzYWQyOWYiLz48cGF0aCBkPSJNNTI3LDg3YTMuNjcsMy42NywwLDAsMS0yLTQuNDQsMS44NiwxLjg2LDAsMCwwLC4wOC0uNDFoMGExLjg0LDEuODQsMCwwLDAtMy4zMS0xLjIyaDBhMS44MiwxLjgyLDAsMCwwLS4yLjM2LDMuNjgsMy42OCwwLDAsMS00LjQ0LDIsMiwyLDAsMCwwLS40MS0uMDhoMGExLjg0LDEuODQsMCwwLDAtMS4yMiwzLjMxaDBhMS41OCwxLjU4LDAsMCwwLC4zNi4yLDMuNjksMy42OSwwLDAsMSwyLjA1LDQuNDUsMS4zNSwxLjM1LDAsMCwwLS4wOC40aDBhMS44NCwxLjg0LDAsMCwwLDMuMzEsMS4yMmgwYTIuMDgsMi4wOCwwLDAsMCwuMi0uMzYsMy42NywzLjY3LDAsMCwxLDQuNDQtMiwxLjg2LDEuODYsMCwwLDAsLjQxLjA4aDBhMS44NSwxLjg1LDAsMCwwLDEuMjItMy4zMmgwQTIuMDgsMi4wOCwwLDAsMCw1MjcsODdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE4LjkgLTY0LjE2KSIgZmlsbD0iI2Y1NWY0NCIvPjxwYXRoIGQ9Ik0zNDIsNDYxYTMuNjcsMy42NywwLDAsMS0yLjA1LTQuNDQsMS44NiwxLjg2LDAsMCwwLC4wOC0uNDFoMGExLjg0LDEuODQsMCwwLDAtMy4zMS0xLjIyaDBhMS44MiwxLjgyLDAsMCwwLS4yLjM2LDMuNjgsMy42OCwwLDAsMS00LjQ0LDIuMDUsMiwyLDAsMCwwLS40MS0uMDhoMGExLjg0LDEuODQsMCwwLDAtMS4yMiwzLjMxaDBhMS41OCwxLjU4LDAsMCwwLC4zNi4yLDMuNjksMy42OSwwLDAsMSwyLjA1LDQuNDUsMS4zNSwxLjM1LDAsMCwwLS4wOC40aDBhMS44NCwxLjg0LDAsMCwwLDMuMzEsMS4yMmgwYTIuMDgsMi4wOCwwLDAsMCwuMi0uMzYsMy42NywzLjY3LDAsMCwxLDQuNDQtMiwxLjg2LDEuODYsMCwwLDAsLjQxLjA4aDBhMS44NSwxLjg1LDAsMCwwLDEuMjItMy4zMmgwQTIuMDgsMi4wOCwwLDAsMCwzNDIsNDYxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOC45IC02NC4xNikiIGZpbGw9IiNmNTVmNDQiLz48cGF0aCBkPSJNNzg0LDMzM2EzLjY3LDMuNjcsMCwwLDEtMi00LjQ0LDEuODYsMS44NiwwLDAsMCwuMDgtLjQxaDBhMS44NCwxLjg0LDAsMCwwLTMuMzEtMS4yMmgwYTEuODIsMS44MiwwLDAsMC0uMi4zNiwzLjY4LDMuNjgsMCwwLDEtNC40NCwyLjA1LDIsMiwwLDAsMC0uNDEtLjA4aDBhMS44NCwxLjg0LDAsMCwwLTEuMjIsMy4zMWgwYTEuNTgsMS41OCwwLDAsMCwuMzYuMiwzLjY5LDMuNjksMCwwLDEsMi4wNSw0LjQ1LDEuMzUsMS4zNSwwLDAsMC0uMDguNGgwYTEuODQsMS44NCwwLDAsMCwzLjMxLDEuMjJoMGEyLjA4LDIuMDgsMCwwLDAsLjItLjM2LDMuNjcsMy42NywwLDAsMSw0LjQ0LTIsMS44NiwxLjg2LDAsMCwwLC40MS4wOGgwYTEuODUsMS44NSwwLDAsMCwxLjIyLTMuMzJoMEEyLjA4LDIuMDgsMCwwLDAsNzg0LDMzM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTguOSAtNjQuMTYpIiBmaWxsPSIjZjU1ZjQ0Ii8+PHBhdGggZD0iTTEwODAsMjI5YTMuNjcsMy42NywwLDAsMS0yLTQuNDQsMS44NiwxLjg2LDAsMCwwLC4wOC0uNDFoMGExLjg0LDEuODQsMCwwLDAtMy4zMS0xLjIyaDBhMS44MiwxLjgyLDAsMCwwLS4yLjM2LDMuNjgsMy42OCwwLDAsMS00LjQ0LDIuMDUsMiwyLDAsMCwwLS40MS0uMDhoMGExLjg0LDEuODQsMCwwLDAtMS4yMiwzLjMxaDBhMS41OCwxLjU4LDAsMCwwLC4zNi4yLDMuNjksMy42OSwwLDAsMSwyLDQuNDUsMS4zNSwxLjM1LDAsMCwwLS4wOC40aDBhMS44NCwxLjg0LDAsMCwwLDMuMzEsMS4yMmgwYTIuMDgsMi4wOCwwLDAsMCwuMi0uMzYsMy42NywzLjY3LDAsMCwxLDQuNDQtMiwxLjg2LDEuODYsMCwwLDAsLjQxLjA4aDBhMS44NSwxLjg1LDAsMCwwLDEuMjItMy4zMmgwQTIuMDgsMi4wOCwwLDAsMCwxMDgwLDIyOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTguOSAtNjQuMTYpIiBmaWxsPSIjZjU1ZjQ0Ii8+PHBhdGggZD0iTTc0OS43Myw0MDIuNzhsLjE2LjVBMi42NiwyLjY2LDAsMCwxLDc0OS43Myw0MDIuNzhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE4LjkgLTY0LjE2KSIgZmlsbD0idXJsKCNkMjBmYWFiMS02YWI2LTQzMmItYmJhMC02MDcwMTM4OTI3NjEpIi8+PHBhdGggZD0iTTI4My4xLDgwMy43M2MtLjEtLjE0LS4yLS4yOC0uMjgtLjQycy0uMTEtLjItLjE2LS4zYTQuMjMsNC4yMywwLDAsMS0uMjItLjQybC0uMTItLjNjLS4wNS0uMTQtLjExLS4yOS0uMTUtLjQzbC0uMDgtLjI5YzAtLjE0LS4wNy0uMjktLjEtLjQ0bDAtLjI3YzAtLjE1LDAtLjMxLDAtLjQ2czAtLjE2LDAtLjI1LDAtLjMyLDAtLjQ3LDAtLjE1LDAtLjIzbC4wNi0uNWMwLS4wNiwwLS4xMywwLS4xOWE0Ljg3LDQuODcsMCwwLDEsLjEyLS41MmwwLS4xNnEuMDctLjI3LjE4LS41NHMwLS4wOSwwLS4xMy4xNS0uMzguMjMtLjU3bDAtLjA4Yy4wOS0uMi4xOS0uNC4yOS0uNTlsMCwwLC4zNS0uNjFoMGEyMS41NiwyMS41NiwwLDAsMSw1LTUuMzljMTQuOTUsNi4xNSwzMy40MS0uODgsMzMuNDEtLjg4czI0LjYyLTEyLjMxLDIyLjg2LTguNzljLS41OSwxLjE4LS4yOSwzLjU1LjM4LDYuMTgsMTEuOC0yLjQ3LDE4LjMtOC44MSwyMS44NS0xNC41NWwtMTMuNDQtMTQuNDlTNDA3Ljg4LDcyNi44Miw0MTQsNzExczM2LTYwLjY2LDM2LTYwLjY2LDkuNjctMzUuMTcsMjcuMjYtNDMuMDhjMCwwLDM1LjA3LTQxLjg5LDU1LjU0LTc3LjgyLTcuMjctMTguMDktMTcuNC00Ni4zNy0xNS4xLTU4LjQ2LDIuODctMTUtLjExLTQzLjUyLTEuMy01My41NC05LjczLDguMTEtNDkuMjcsNDAuMjUtNjQuNjQsMzkuNDgtNS41Mi0uMjgtMTEuNDctMy4yNC0xNy03LjE3LTEzLjI4LTguNDEtMjUuMTYtMjMuNi0yNS4xNi0yMy42LDEuNzkuMTcsMy4yNi0xLjQ3LDQuNDUtNC4yMS0xNC42OC0xNi00NS4wOS00OC43Ni00OC40MS00OS40Mi00LjM5LS44OC0yOC4xMy00Mi4yMS0xNC45NC01MXMzNi45MiwyMi44NiwzNy44LDI5Yy42LDQuMTcsMTksMjIuNSwzMC43NiwzMy44NiwwLS4yOSwwLS40NiwwLS40NmwxLjc0Ljg3YzAtLjU1LDAtLjg3LDAtLjg3bDMwLjM2LDE1LjE5LDI1LjkxLTM1LjQxczctMzcuOCwyNC42Mi00NCwzMC4zMy0yNS4wNSwzMC4zMy0yNS4wNWExOCwxOCwwLDAsMSwuMzksMS44N2MuODktMS4xNywxLjM3LTEuODcsMS4zNy0xLjg3czAsLjE1LjEuNDJhNDUuOTMsNDUuOTMsMCwwLDAsMS0xNi41NWwtLjI1LS4xNWMtLjExLS42OC0uMjItMS4zMy0uMzQtMS45NUE0NCw0NCwwLDAsMSw1MTYuNzUsMjIyYy00LjQ4LTMuMTMtMTEtNS4wOC0xNi41LTcuNDYtOC4zMS0zLjU3LTE1LjI1LTguODItMTkuODMtMTVhMTcuNDcsMTcuNDcsMCwwLDEsOS4xOS4xOWMuMzctNC4wNi00LjMyLTguNy0uNjctMTEuNzksMi4yNi0xLjkyLDYuNDctMS43NSw5LjctLjhzNi4xNSwyLjUyLDkuNTgsMi45NGM2LC43MywxMS41OS0yLjE2LDE1Ljg1LTUuMjhzOC4yNC02Ljc3LDEzLjk0LTguMjVjMTEuMjgtMi45MywyMi40OCwzLjc5LDMzLjgxLDYuNjMsMTguMiw0LjU2LDI5LjA2LDkuNDIsMjkuODcsMjFhMzcuNTMsMzcuNTMsMCwwLDEsNi40Myw1LjQ2LDI0LDI0LDAsMCwxLDcuNzIsMTMuMDhjMS41NCw3Ljg5LTEuNjYsMTUuOTEtNS41MSwyMy0yLjE5LDQtMTIuNzEsMjQuODItMTkuODYsMjIuMDdhNDQsNDQsMCwwLDEtNi41OCw2LjE1Yy4yMywyLjQuNTYsNC44MiwxLDcuMjRhMTYuMTUsMTYuMTUsMCwwLDAsNS4xNywxLjc4QTYyLjc3LDYyLjc3LDAsMCwwLDYwMS45MywyODRhMTc1Ljc5LDE3NS43OSwwLDAsMCwxOC43Mi0xLjE0LDE1Ny40OCwxNTcuNDgsMCwwLDEsMTguMTktMSw5MC4wNyw5MC4wNywwLDAsMSw5LjA3LjQzbC40NywwYy42MS4wNywxLjIxLjE0LDEuNzkuMjNsLjI4LDBjLjY4LjEsMS4zMy4yLDIsLjMybC4yMSwwLDEuNi4zMS4zNi4wOGMuNTYuMTIsMS4xLjI1LDEuNjMuMzloMHEuODIuMjEsMS41OS40NWwuMjYuMDgsMS4yNS4zOS4yNy4xYy45NC4zMiwxLjgzLjY2LDIuNjcsMWwuMjYuMTEsMSwuNDUuMTkuMDksMS4xOC41NS4xLjA1LDEsLjUuMjUuMTIsMSwuNTEuMDcsMCwxLjI1LjY1Ljc1LjM5LjM1LjE4LDEsLjUyYzguNzksNC40LDk0LjA3LDI3LjI2LDEwOSw3M2wtLjMuMjgtLjA3LjA1LS4zNC4zMWMuMjUuNjcuNDksMS4zMy43MSwyLDAsMC0xLjQ1LDEuMy0zLjcxLDMuNDIsNCwxNy40OSwxNC43Niw2Mi4xNiwyMC40MSw2NC4yOCw3LDIuNjQsMTQuOTUsNTYuMjctMy41MSw1NC41MXMtMTguNDctNDQuODQtMTguNDctNDQuODQtMTIuMTctMzIuNjQtMjEuMTUtNDkuMjFhMjMuMTYsMjMuMTYsMCwwLDAtMy41Miw2LjgzbC4wNi4xOGExLjE1LDEuMTUsMCwwLDEtLjA2LS4xNyw0Ljg2LDQuODYsMCwwLDAtLjEsMi4zMWMtLjg3LTIuNTUtNS4zOC0xNC4yNi0xNC43OS0xMi42OS0xMC4wNSwxLjY3LTQ4LTM1LjcxLTUxLjU5LTM5LjI5LjA4LDEsLjE5LDIuMTguMzEsMy41OWgwdi4wNWMuMDcuODIuMTUsMS43MS4yMiwyLjY2bDAsLjNjMCwuMjQsMCwuNDguMDUuNzNzMCwuMzIsMCwuNDhsLjA2Ljc0YzAsLjE3LDAsLjM1LDAsLjUybC4wNi43NGMwLC4yMiwwLC40NSwwLC42N3MuMDYuNzIuMDgsMS4wOS4wNS41OS4wNy44OCwwLC40MiwwLC42M2wuMDYuODhjMCwuMiwwLC40LDAsLjZzMCwuNjIuMDcuOTQsMCwuNDEsMCwuNjJsLjA2LDFjMCwuMiwwLC4zOSwwLC41OCwwLC41My4wNywxLjA2LjEsMS42di4yMWwuMDksMS40OCwwLC41MWMwLC40LjA1LjgxLjA3LDEuMjJsMCwuNThjMCwuNDIuMDUuODQuMDcsMS4yNmwwLC41MmMwLC41LDAsMSwuMDgsMS41MiwwLC4xLDAsLjE5LDAsLjI5bC4wOSwxLjkxdi4xMWMwLC41OCwwLDEuMTYuMDgsMS43NCwwLC4xNywwLC4zNCwwLC41bC4wNiwxLjQzYzAsLjE5LDAsLjM4LDAsLjU3LDAsLjQ4LDAsMSwwLDEuNDUsMCwuMTYsMCwuMzMsMCwuNSwwLDEuMzIuMDksMi42Ni4xMyw0LDAsLjEsMCwuMiwwLC4yOSwwLC41NywwLDEuMTQsMCwxLjcxLDAsLjE3LDAsLjM1LDAsLjUyLDAsLjUxLDAsMSwwLDEuNTQsMCwuMTgsMCwuMzYsMCwuNTNsMCwxLjd2LjM0YzAsMS4zOCwwLDIuNzcsMCw0LjE3LDAsLjE0LDAsLjI5LDAsLjQ0djEuNjJjMCwuMTksMCwuMzgsMCwuNTYsMCwuNTIsMCwxLDAsMS41NXYuNDNjLjA2LDE5LjE4LTEuMTcsMzguNy01LjQ4LDQ5Ljg0YTU0Ljg4LDU0Ljg4LDAsMCwwLTMuNiwxOC43MkE3Ni40LDc2LjQsMCwwLDAsNjg1LjcxLDUwN2gwbC0xLS4zMmMuMTIuMjIuMTkuMzMuMTkuMzNsLS41Ny0uMThjLjg2LDEuODEsMS40NSwyLjgyLDEuNDUsMi44MnMtMS4yOC0uNDEtMy41Ni0xLjA4YzMuMjQsMTEuNDUsNS40MSwyOS4wOC0uODQsNTEuMTksMCwwLTMuNTIsMTkuMzQtLjg4LDI2LjM4czUuMjgsNjMuMyw1LjI4LDYzLjMsNS4yNyw3LDE0Ljk0LDIuNjRTODI5LDYzMi43NCw4MjksNjMyLjc0cy4yOC40OS43NCwxLjM0YzMuNjUtMS4xNCw4LjkxLTIuODgsMTIuNzYtNC41LTEuNDItMi0yLjc0LTMuMTUtMy44My0zLDAsMCw2LjM0LTMuMDYsMTMuMjQtNS40N2gwbDEuMjYtLjQzLjA1LDAsMS4yMy0uNC4wOCwwLDEuMTgtLjM2LjEzLDAsMS4wOC0uMy4yMi0uMDcsMS0uMjYuMjYtLjA3LDEtLjIyLjI4LS4wNi44Ny0uMTguMzMtLjA2Ljc5LS4xMy4zNy0uMDYuNzItLjA4LjM5LDAsLjY2LDAsLjM3LDBoMWwuNTQsMCwuMzQsMCwuNDguMS4zMi4wN2MuMTQsMCwuMjcuMS40LjE1YTIuNDksMi40OSwwLDAsMSwuMjkuMTEsMy40MSwzLjQxLDAsMCwxLC4zOC4yMWMuMDcsMCwuMTUuMDguMjEuMTNhMi41NiwyLjU2LDAsMCwxLC40OC40NWM0LjM5LDUuMjcsMjksMTA2LjM4LDE3LjU4LDExMy40MS0uMzQuMjEtLjY3LjQxLTEsLjU5bC0uNC4yMy0uNTIuMjktLjUuMjctLjM3LjE5LS41NC4yNi0uMjguMTMtLjU2LjI0LS4yLjA4Yy0uMi4wOC0uNC4xNi0uNTkuMjJsLS4xMywwLS42LjE5LS4wOCwwYy02LjM3LDEuNzItOC40OS00LjE4LTE2LjIyLTE2LjgyLTcuNTctMTIuMzktMTcuMjktMjgtMjUuNzktMzMuNzgtLjE5LjQxLS4zNy44NC0uNTgsMS4yNSwwLDAtODguOCw5LjY3LTEyMS4zMywyMC4yMnMtNTgsMjQuNjEtNzkuMTMsMGMtMTguOTMtMjIuMDgtMzcuODUtOTMuNjctNDEuNTUtMTA4LjE5aDB2MGMtLjI2LTEtLjQ0LTEuNzctLjU1LTIuMThoMGwwLS4xOCwwLS4wNywwLS4wN3YwbC03MC4zNCw1My42M0w0OTQsNjg1LjVTNDUxLDc0Ni4xNiw0NDMuMDUsNzQ3cy00NC44NCw1OC45LTQ0Ljg0LDU4LjlsLTEuMzQtMS40NGMtLjMyLDEuNjEtLjU2LDMuMDktLjc0LDQuMzgsMyw3LC4yMSwxNS4zOC0yLjQzLDIwLjkzaDBsLS4xMS4yMi0uMy42MS0uMTYuMzJjLS4xLjE5LS4xOS4zOC0uMjkuNTZsLS4xNS4yOGMtLjEuMi0uMjEuMzktLjMxLjU4bC0uMTUuMjgtLjI0LjQyLS4xMi4yMWMtLjEuMTktLjIxLjM2LS4zLjUzYTEuNTksMS41OSwwLDAsMC0uMTMuMjJjLS4wNy4xLS4xMy4yMS0uMTkuMzFzLS4wNy4xMi0uMTEuMTdsLS4yMy4zOGExLjE5LDEuMTksMCwwLDAtLjA5LjE1bC0uMTUuMjItLjA2LjEtLjE1LjIzLDAsMGMwLC4wNi0uMDYuMDktLjA4LjEzbDAsMCwwLDBzLTkyLjMyLTIyLTEwMy43NS0yOWMtLjM2LS4yMi0uNy0uNDUtMS0uNjhsLS4yOS0uMjJjLS4yLS4xNi0uNC0uMzEtLjU4LS40N2E0LDQsMCwwLDEtLjMtLjI4Yy0uMTUtLjE0LS4zMS0uMjgtLjQ0LS40MnMtLjE4LS4yLS4yNy0uM2wtLjM1LS40MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTguOSAtNjQuMTYpIiBmaWxsPSJ1cmwoI2NhYmY2NzBlLWJiYjEtNDg3Mi1iYzU0LWM2NTljOThiMzg3OCkiLz48cGF0aCBkPSJNODE5LjI2LDYzMnMyMC41Ni02LDIxLjQxLTguNTcsMTgsNDcuMSwxOCw0Ny4xbC0xNy4xMywxMnMtMTgtMTAuMjctMjcuNC04LjU2UzgxOS4yNiw2MzIsODE5LjI2LDYzMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTguOSAtNjQuMTYpIiBmaWxsPSIjNGM0YzU2Ii8+PHBhdGggZD0iTTM3Ni41Myw3NTQuNDhTMzc0LDc3Ny42LDM0NS43LDc4MC4xN3MxOC44NCwyMy4xMiwxOC44NCwyMy4xMmwzNiwyLjU3cy44NS0xNC41Niw2Ljg1LTI1LjY5UzM3Ni41Myw3NTQuNDgsMzc2LjUzLDc1NC40OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTguOSAtNjQuMTYpIiBmaWxsPSIjNGM0YzU2Ii8+PHBhdGggZD0iTTY3My42OCw0OTQuMTRTNjkwLDUxOSw2NzguODIsNTU4LjM3YzAsMC0zLjQyLDE4Ljg0LS44NSwyNS42OXM1LjEzLDYxLjY2LDUuMTMsNjEuNjYsNS4xNCw2Ljg1LDE0LjU2LDIuNTcsMTI1LTE4Ljg0LDEyNS0xOC44NCwxOC44NCwzMi41NCw4LjU2LDUyLjI0YzAsMC04Ni40OSw5LjQyLTExOC4xNywxOS42OXMtNTYuNTIsMjQtNzcuMDgsMC00MS4xLTEwNy45LTQxLjEtMTA3LjlsLTY4LjUxLDUyLjI0LTMwLDM1LjExcy00Miw1OS4wOS00OS42Nyw1OS45NC00My42Nyw1Ny4zOC00My42Nyw1Ny4zOGwtNDMuNjgtNDcuMXM1My4xLTMwLDU5LjA5LTQ1LjM5LDM1LjExLTU5LjA4LDM1LjExLTU5LjA4LDkuNDItMzQuMjYsMjYuNTUtNDJjMCwwLDYxLjY2LTczLjY0LDY3LjY1LTEwNy45czEwMi43Ni0xOCwxMDIuNzYtMThaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE4LjkgLTY0LjE2KSIgZmlsbD0iIzVmNWQ3ZSIvPjxwYXRoIGQ9Ik0zNTUuMTIsNzkwLjQ0cy02LTEzLjctNC4yOC0xNy4xMi0yMi4yNyw4LjU2LTIyLjI3LDguNTYtMTgsNi44NS0zMi41NC44NmMwLDAtMTIuODQsOS40MS0xLjcxLDE2LjI3czEwMS4wNSwyOC4yNiwxMDEuMDUsMjguMjYsMTMuNy0xOS43LDIuNTctMzAuODNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE4LjkgLTY0LjE2KSIgZmlsbD0iIzk4NjM2NSIvPjxwYXRoIGQ9Ik00MTguNDksNzA1LjY2YzYtMTUuNDEsMzUuMTEtNTkuMDgsMzUuMTEtNTkuMDhzOS40Mi0zNC4yNiwyNi41NS00MmMwLDAsNjEuNjYtNzMuNjQsNjcuNjUtMTA3LjksMS4yNC03LjA2LDYuMzQtMTIsMTMuNjQtMTUuMzJxNiwxNy45NCwxMS45NSwzNS44Nyw4LjE1LDI0LjUsMTYuMzEsNDljMy4xNCw5LjQ1LDYuMTIsMjAsNS44MywyOS43Ni0uNDEtMS42My0uNjMtMi41My0uNjMtMi41M2wtNjguNTEsNTIuMjQtMzAsMzUuMTFzLTQyLDU5LjA5LTQ5LjY3LDU5Ljk0LTQzLjY3LDU3LjM4LTQzLjY3LDU3LjM4bC00My42OC00Ny4xUzQxMi41LDcyMS4wOCw0MTguNDksNzA1LjY2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOC45IC02NC4xNikiIG9wYWNpdHk9IjAuMSIvPjxwYXRoIGQ9Ik01MzQuMSwyNzQuMDZzNy4yOCwxOC40MS0yLjE0LDM1LjU0LDMuODUsNDcuNTMsMTIuNDEsNDkuMjQsNDIuODItMjAuNTUsNDUuMzktMzUuMTEtMTEuMTMtNDQuNTMtNC4yOC02NC4yM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTguOSAtNjQuMTYpIiBmaWxsPSIjZmRjMmNjIi8+PHBhdGggZD0iTTU4MC4zNCwzMDUuNzVzLTI2LjU1LDUzLjk1LTU1LjY2LDE1LjQxYzAsMC0yOS4xMiw1OS4wOS0xOS43LDY4LjUxYTE5Ny4xNiwxOTcuMTYsMCwwLDAsMjEuNDEsMThsMTUuNDIsMTA3LjlzODcuMzQtMzAsMTI0LjE3LTI0LjgzbC01Ni41Mi0xMzUuM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTguOSAtNjQuMTYpIiBvcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJNNTgwLjM0LDMwMy4xOHMtMjYuNTUsNTMuOTUtNTUuNjYsMTUuNDFjMCwwLTI5LjEyLDU5LjA5LTE5LjcsNjguNTFhMTk3LjE2LDE5Ny4xNiwwLDAsMCwyMS40MSwxOEw1NDEuODEsNTEzUzYyOS4xNSw0ODMsNjY2LDQ4OC4xNWwtNTYuNTItMTM1LjNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE4LjkgLTY0LjE2KSIgZmlsbD0iI2QzOTk5OSIvPjxwYXRoIGQ9Ik03NjkuNiwzNjUuNjlzMTQuNTUsNjYuOCwyMS40LDY5LjM3LDE0LjU2LDU0LjgtMy40Miw1My4wOS0xOC00My42Ny0xOC00My42N1M3NTAuNzYsMzk0LDc0My4wNSwzODgsNzY5LjYsMzY1LjY5LDc2OS42LDM2NS42OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTguOSAtNjQuMTYpIiBmaWxsPSIjZmRjMmNjIi8+PHBhdGggZD0iTTQzMy4wNSwzOTYuNTJzLTM4LjU0LTM2LTM5LjM5LTQyLTI0LTM2LjgyLTM2LjgzLTI4LjI2LDEwLjI4LDQ4LjgxLDE0LjU2LDQ5LjY3LDU0LjgxLDU2LjUyLDU0LjgxLDU2LjUyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOC45IC02NC4xNikiIGZpbGw9IiNmZGMyY2MiLz48cGF0aCBkPSJNNTg0LjIsMjg5LjA1czQuNzEsNS41NiwzNi4zOSwyLjE0LDM5LjM5LDIuNTcsNDgsNi44NSw5MS42MywyNi41NSwxMDYuMTgsNzEuMDhjMCwwLTMyLjU0LDI5LjExLTI5LjExLDM2LjgyLDAsMC00LjI4LTE0LjU2LTE0LjU2LTEyLjg0cy01MC41My0zOC41NC01MC41My0zOC41NCw3LjcxLDc1LjM2LTIuNTYsMTAxLjkxLDUuMTMsNTMuMDksNS4xMyw1My4wOS03Mi43OS0yMy4xMi0xMDUuMzMtMTJjMCwwLTE4Ljg0LTg0Ljc4LTIuNTctMTE5cy02Ljg1LTY2LjgtNi44NS02Ni44WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOC45IC02NC4xNikiIG9wYWNpdHk9IjAuMSIvPjxwYXRoIGQ9Ik01ODMuMzQsMjg2LjQ4czQuNzEsNS41NywzNi4zOSwyLjE0LDM5LjQsMi41Nyw0OCw2Ljg1Uzc1OS4zMiwzMjIsNzczLjg4LDM2Ni41NWMwLDAtMzIuNTQsMjkuMTEtMjkuMTIsMzYuODIsMCwwLTQuMjgtMTQuNTYtMTQuNTYtMTIuODRTNjc5LjY4LDM1Miw2NzkuNjgsMzUyczcuNzEsNzUuMzYtMi41NywxMDEuOTFTNjgyLjI1LDUwNyw2ODIuMjUsNTA3cy03Mi43OS0yMy4xMi0xMDUuMzMtMTJjMCwwLTE4Ljg0LTg0Ljc4LTIuNTctMTE5cy02Ljg1LTY2LjgtNi44NS02Ni44WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOC45IC02NC4xNikiIG9wYWNpdHk9IjAuMSIvPjxwYXRoIGQ9Ik01ODQuMiwyODYuNDhzNC43MSw1LjU3LDM2LjM5LDIuMTQsMzkuMzksMi41Nyw0OCw2Ljg1Uzc2MC4xOCwzMjIsNzc0LjczLDM2Ni41NWMwLDAtMzIuNTQsMjkuMTEtMjkuMTEsMzYuODIsMCwwLTQuMjgtMTQuNTYtMTQuNTYtMTIuODRTNjgwLjUzLDM1Miw2ODAuNTMsMzUyczcuNzEsNzUuMzYtMi41NiwxMDEuOTFTNjgzLjEsNTA3LDY4My4xLDUwN3MtNzIuNzktMjMuMTItMTA1LjMzLTEyYzAsMC0xOC44NC04NC43OC0yLjU3LTExOXMtNi44NS02Ni44LTYuODUtNjYuOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTguOSAtNjQuMTYpIiBmaWxsPSIjZWM3NTgwIi8+PHBhdGggZD0iTTUzNi4yNCwzMDEuODlzLTEyLjQyLDE4LjQyLTI5LjU0LDI0LjQxLTI0LDQyLjgyLTI0LDQyLjgyTDQ1Nyw0MDQuMjMsNDI2LjIsMzg4Ljgxcy0uODYsNDItOS40Miw0MS4xMWMwLDAsMjEuNDEsMjcuNCwzOC41MywyOC4yNnM2NS4wOS00MC4yNSw2NS4wOS00MC4yNSw1LjE0LDM3LjY4LDEuNzEsNTUuNjYsMjEuNDEsNzIuNzksMjEuNDEsNzIuNzlsMzQuMjUtNi44NXMtMTgtNjguNTEtNDAuMjUtNzkuNjRjMCwwLDAtNDYuMjQsMy40My01Ny4zOHMtMjIuMjctNTMuMDktMTguODQtNjEuNjVjMS45Mi00LjgxLDkuNDctMTUuMDgsMTMuMjctMjQuNDFBMjQuNCwyNC40LDAsMCwwLDUzNi4yNCwzMDEuODlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE4LjkgLTY0LjE2KSIgb3BhY2l0eT0iMC4xIi8+PHBhdGggZD0iTTUzMy42NywzMDAuMThzLTEyLjQyLDE4LjQxLTI5LjU0LDI0LjQxLTI0LDQyLjgxLTI0LDQyLjgxbC0yNS42OSwzNS4xMUw0MjMuNjMsMzg3LjFzLS44Niw0Mi05LjQyLDQxLjExYzAsMCwyMS40MSwyNy40LDM4LjU0LDI4LjI2czY1LjA4LTQwLjI1LDY1LjA4LTQwLjI1LDUuMTQsMzcuNjgsMS43MSw1NS42NlM1NDEsNTQ0LjY3LDU0MSw1NDQuNjdsMzQuMjUtNi44NXMtMTgtNjguNTEtNDAuMjQtNzkuNjRjMCwwLDAtNDYuMjUsMy40Mi01Ny4zOHMtMjIuMjYtNTMuMDktMTguODQtNjEuNjZjMS45Mi00LjgsOS40Ny0xNS4wNywxMy4yNy0yNC40QTI0LjQsMjQuNCwwLDAsMCw1MzMuNjcsMzAwLjE4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOC45IC02NC4xNikiIG9wYWNpdHk9IjAuMSIvPjxwYXRoIGQ9Ik01MzUuMzgsMzAwLjE4UzUyMywzMTguNTksNTA1Ljg0LDMyNC41OXMtMjQsNDIuODEtMjQsNDIuODFsLTI1LjY5LDM1LjExTDQyNS4zNCwzODcuMXMtLjg1LDQyLTkuNDIsNDEuMTFjMCwwLDIxLjQxLDI3LjQsMzguNTQsMjguMjZzNjUuMDgtNDAuMjUsNjUuMDgtNDAuMjUsNS4xNCwzNy42OCwxLjcxLDU1LjY2LDIxLjQxLDcyLjc5LDIxLjQxLDcyLjc5bDM0LjI2LTYuODVzLTE4LTY4LjUxLTQwLjI1LTc5LjY0YzAsMCwwLTQ2LjI1LDMuNDItNTcuMzhzLTIyLjI2LTUzLjA5LTE4Ljg0LTYxLjY2YzEuOTMtNC44LDkuNDgtMTUuMDcsMTMuMjgtMjQuNEEyNC40NSwyNC40NSwwLDAsMCw1MzUuMzgsMzAwLjE4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOC45IC02NC4xNikiIGZpbGw9IiNlYzc1ODAiLz48cGF0aCBkPSJNNTMzLjkzLDMwMS42M1M1MjEuNTIsMzIwLDUwNC4zOSwzMjZzLTI0LDQyLjgxLTI0LDQyLjgxTDQ1NC43Miw0MDRsLTMwLjgzLTE1LjQxcy0uODUsNDItOS40Miw0MS4xYzAsMCwyMS40MSwyNy40MSwzOC41NCwyOC4yNnM2NS4wOC00MC4yNCw2NS4wOC00MC4yNCw1LjE0LDM3LjY4LDEuNzEsNTUuNjYsMjEuNDEsNzIuNzksMjEuNDEsNzIuNzlsMzQuMjYtNi44NXMtMTgtNjguNTEtNDAuMjUtNzkuNjRjMCwwLDAtNDYuMjUsMy40Mi01Ny4zOHMtMjIuMjYtNTMuMDktMTguODQtNjEuNjZjMS45My00LjgsOS40OC0xNS4wOCwxMy4yOC0yNC40QTI0LjQ1LDI0LjQ1LDAsMCwwLDUzMy45MywzMDEuNjNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE4LjkgLTY0LjE2KSIgb3BhY2l0eT0iMC4wNSIvPjxwYXRoIGQ9Ik04MzIuMTEsNjIzLjQ1czI0LjgzLTEyLDI5LjEyLTYuODUsMjguMjUsMTAzLjYyLDE3LjEyLDExMC40Ny0xMiwxLjcxLTIxLjQxLTEzLjctMjIuMjYtMzYtMzEuNjgtMzUuMTFjMCwwLDI3LjQtOS40MiwyNi41NS0xMi44NVM4MzguMSw2MjIuNiw4MzIuMTEsNjIzLjQ1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOC45IC02NC4xNikiIGZpbGw9IiM5ODYzNjUiLz48cGF0aCBkPSJNNTgzLjkzLDI4MS42NGE0Mi44Miw0Mi44MiwwLDAsMS00Ny43MiwyLjY5LDQzLDQzLDAsMCwwLTIuMTEtOC41Nmw1MS4zOC0xNC41NUM1ODMuMzYsMjY3LjMsNTgzLjIxLDI3NC4zNiw1ODMuOTMsMjgxLjY0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOC45IC02NC4xNikiIG9wYWNpdHk9IjAuMSIvPjxwYXRoIGQ9Ik01NTIuMTUsMjQ4LjEyYy0xMC40NC45MS0yMy4xNS0xLjA2LTI3LTguMTctMS4xMS0yLTEuMzUtNC4yOS0yLjQ4LTYuMzMtMy4yNy01Ljg5LTEyLjY0LTguMy0yMC4xNi0xMS41My04LjEtMy40OC0xNC44Ni04LjU5LTE5LjMyLTE0LjYxYTE3LjA5LDE3LjA5LDAsMCwxLDksLjE4Yy4zNy00LTQuMjEtOC40Ny0uNjUtMTEuNDksMi4yLTEuODcsNi4zLTEuNyw5LjQ0LS43N3M2LDIuNDUsOS4zNCwyLjg2YzUuODEuNzEsMTEuMjktMi4xLDE1LjQ0LTUuMTRzOC02LjYsMTMuNTctOGMxMS0yLjg2LDIxLjksMy42OSwzMi45NCw2LjQ1LDIyLjYzLDUuNjcsMzMuNiwxMS44MSwyNy40NSwzMS40OUM1OTUuMDksMjM3LjU2LDU3MS4xNCwyNDYuNDgsNTUyLjE1LDI0OC4xMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTguOSAtNjQuMTYpIiBmaWxsPSIjODY1YTYxIi8+PGNpcmNsZSBjeD0iNDM5LjE3IiBjeT0iMTgxLjY0IiByPSI0Mi44MiIgZmlsbD0iI2ZkYzJjYyIvPjxwYXRoIGQ9Ik01OTEuMzYsMjM5LjI3Yy0yLjA3LTguNC04LjA1LTE2LjI1LTE2LjM5LTE4LjU4LTcuMDktMi0xNC42My4xNy0yMS41NSwyLjY4cy0xNCw1LjQ0LTIxLjM0LDUtMTUuMDYtNS41LTE1LjYyLTEyLjg0YTYuMTUsNi4xNSwwLDAsMSwuNTMtMy4zMiw4LjA2LDguMDYsMCwwLDEsMy4wNy0yLjgzYzEwLjc3LTYuODcsMjMtMTIuMjgsMzUuNzktMTIuMDcsMTAuNTEuMTcsMjAuNTUsNC4xMSwzMC4zMiw4LDEyLjMzLDQuOSwyNi4zNCwxMS43NSwyOC44OCwyNC43NiwxLjUsNy42OS0xLjYxLDE1LjUtNS4zNiwyMi4zNy0yLjE3LDQtMTIuNywyNC44LTE5LjY3LDIxLjM3QzU4Ny4yMSwyNzIuNDMsNTkyLjY5LDI0NC42Nyw1OTEuMzYsMjM5LjI3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOC45IC02NC4xNikiIG9wYWNpdHk9IjAuMSIvPjxwYXRoIGQ9Ik01ODkuNjUsMjM3LjU2Yy0yLjA3LTguNDEtOC4wNi0xNi4yNS0xNi40LTE4LjU4LTcuMDktMi0xNC42My4xNy0yMS41NSwyLjY4cy0xNCw1LjQ0LTIxLjM0LDUtMTUuMDYtNS41MS0xNS42Mi0xMi44NWE2LjE5LDYuMTksMCwwLDEsLjU0LTMuMzIsOC4yNiw4LjI2LDAsMCwxLDMuMDYtMi44M2MxMC43OC02Ljg2LDIzLTEyLjI3LDM1LjgtMTIuMDcsMTAuNTEuMTgsMjAuNTUsNC4xMiwzMC4zMiw4LDEyLjMyLDQuOSwyNi4zNCwxMS43NSwyOC44OCwyNC43NiwxLjUsNy42OC0xLjYyLDE1LjQ5LTUuMzcsMjIuMzYtMi4xNiw0LTEyLjY5LDI0LjgxLTE5LjY2LDIxLjM4QzU4NS41LDI3MC43Miw1OTEsMjQzLDU4OS42NSwyMzcuNTZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE4LjkgLTY0LjE2KSIgZmlsbD0iIzg2NWE2MSIvPjxwYXRoIGQ9Ik04NzUuNzgsNzI3LjkzYzExLjE0LTYuODUtMTIuODQtMTA1LjMzLTE3LjEyLTExMC40Ny0xLjg4LTIuMjUtNy43MS0xLjIxLTEzLjY2LjY2LDYuNzYtMi4zNiwxNC4wOC00LjA5LDE2LjIzLTEuNTIsNC4yOCw1LjE0LDI4LjI1LDEwMy42MiwxNy4xMiwxMTAuNDdhMjAuMTMsMjAuMTMsMCwwLDEtNi4yMSwyLjgzQTMwLjksMzAuOSwwLDAsMCw4NzUuNzgsNzI3LjkzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOC45IC02NC4xNikiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuNSIvPjxwYXRoIGQ9Ik0yOTEuMTksNzg4Yy0xLjE1LDIuOTUtLjgsNi4zNyw0LDkuMzEsMTEuMTMsNi44NSwxMDEuMDUsMjguMjYsMTAxLjA1LDI4LjI2YTQ0LjYzLDQ0LjYzLDAsMCwwLDIuNDUtNC4xNiw0Ni4xMiw0Ni4xMiwwLDAsMS0zLjMxLDUuODhTMzA1LjQ1LDgwNS44NiwyOTQuMzIsNzk5QzI4OC41Nyw3OTUuNDcsMjg5LjIyLDc5MS4yNCwyOTEuMTksNzg4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOC45IC02NC4xNikiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuNSIvPjxnIG9wYWNpdHk9IjAuMDUiPjxwYXRoIGQ9Ik03NDEsMzk0Ljc5YzcuMTItMTEuNDUsMjYuODQtMjkuMSwyNi44NC0yOS4xLTE0LjU2LTQ0LjUzLTk3LjYyLTY2Ljc5LTEwNi4xOC03MS4wOC00LjczLTIuMzYtOS4yLTUuMjQtMTcuNTctNi43NywxMy4wNywxLDE4LjU0LDQuNywyNC40Miw3LjYzLDguNTYsNC4yOCw5MS42MywyNi41NSwxMDYuMTgsNzEuMDgsMCwwLTMxLjI3LDI4LTI5LjI3LDM2LjM0QTI2Ljg4LDI2Ljg4LDAsMCwwLDc0MSwzOTQuNzlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE4LjkgLTY0LjE2KSIvPjxwYXRoIGQ9Ik03NDUuNDYsNDAyLjg5bC4xNi40OEEyLjQ2LDIuNDYsMCwwLDEsNzQ1LjQ2LDQwMi44OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTguOSAtNjQuMTYpIi8+PHBhdGggZD0iTTU4My4yMSwyODcuODlsMS0xLjQxczEuMDksMS4yOCw1LjY5LDIuMjNBNTEuNzksNTEuNzksMCwwLDEsNTgzLjIxLDI4Ny44OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTguOSAtNjQuMTYpIi8+PHBhdGggZD0iTTczMC4xMywzOTAuNTdhMTEuMzUsMTEuMzUsMCwwLDEtMy43NC0xQTkuMzMsOS4zMywwLDAsMSw3MzAuMTMsMzkwLjU3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOC45IC02NC4xNikiLz48cGF0aCBkPSJNNjE4LjcxLDQ5My4wN2MtMTUuMzItMS42OS0zMC4yOC0xLjcxLTQwLjk0LDEuOTMsMCwwLS4yLS44OS0uNTMtMi41MUM1ODguOTIsNDkwLjIyLDYwMy45Myw0OTEsNjE4LjcxLDQ5My4wN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTguOSAtNjQuMTYpIi8+PHBhdGggZD0iTTY3NS41MSw1MDQuNzRjLTMtNS43Ny0xMy4yOS0yOC43My00LjQtNTEuNywxMC4yOC0yNi41NSwyLjU3LTEwMS45MSwyLjU3LTEwMS45MXMyLjk0LDIuOTQsNy40Myw3LjE5QzY4Mi42OSwzNzcsNjg2LjQzLDQzMiw2NzgsNDUzLjksNjY3LjY5LDQ4MC40NCw2ODMuMSw1MDcsNjgzLjEsNTA3UzY4MC4yOCw1MDYuMDksNjc1LjUxLDUwNC43NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTguOSAtNjQuMTYpIi8+PC9nPjwvc3ZnPg==");
		background-position: center center; 
		background-size: cover; 
		background-repeat: no-repeat; 
		height: 410upx;
		width: 500upx;
		margin-left: 128upx;
	}
	.content-notice {
		padding: 15upx;
		margin: 30upx;
		border-radius: 8upx;
	}
	.icon{
		margin-right: 6upx;
	}
	.icon-close{
		margin-top: 4upx;
	}
	.tagTitle{
		margin: 48upx 30upx 0upx 30upx;
		font-size: 32upx;
		font-weight: 100; 
		color: $blackColor;
	}
	
	/* 顶部数据圈 */
	.m-time{
		position: absolute;
		left:216upx;
		top:36upx;
		font-weight: 900 !important;
		color: $blueColor;
	}
	.m-foot{
		position: absolute;
		left:24upx;
		top:376upx;
		font-weight: 900 !important;
		color: $redColor;
	}
	.m-kll{
		position: absolute;
		left:500upx;
		top:248upx;
		font-weight: 900 !important; 
		color: $cyanColor;
	}
	
	.line-red{
		color:$redColor !important;
	}
	.text-red{
		font-size: 24upx;
		color:$redColor !important;
	}
	.line-blue{
		color:$blueColor !important;
	}
	.text-blue{
		font-size: 24upx;
		color:$blueColor !important;
	}
	.line-cyan{
		color:$cyanColor !important;
	}
	.text-cyan{
		font-size: 24upx;
		color:$cyanColor !important;
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
		position: relative;
	}
	.cu-yd{
		width: 100%;
		height: 100%;
		position: absolute;
	}
	.page_motion_tag{
		padding: 0 30upx;
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
	/* 运动颜色 数据库取出 */
	.yd-red{
		background: $redColor-linear;
	}
	.yd-blue{
		background: $blueColor-linear;
	}
	.yd-purple{
		background: $purpleColor-linear;
	}
	.yd-black{
		background: $blackColor-linear;
	}
	.yd-cyan{
		background: $cyanColor-linear;
	}
	
	/* 具体健康数据 */
	.cu-card-jk {
		width: 100%;
		padding: 0 30upx;
		
		
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
		color: $blackColor;
	}
	.jk-text{
		color: $blackColor;
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
	.jk-cur{
		font-size: 28upx;
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
		background-color:$redColor;
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
		background-color:$blueColor; 
	}
	
	
</style>
