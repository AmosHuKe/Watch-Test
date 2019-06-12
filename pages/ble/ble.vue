<template>
	<view class="ble">
		<!-- 顶部 -->
		<cu-custom bgColor="bg-white" :isBack="false">
			<block slot="backText"></block>
			<block slot="content">设备</block>
		</cu-custom>
		
		<view class="cu-list menu sm-border card-menu margin-top" v-for="(bleList,index) in bleData" v-bind:key="index">
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-btn text-black"></text>
					<text class="text-black">
						{{bleList.name}}
						<text class="cu-tag round line-black light bleid" v-if="bleList.tag">{{bleList.id}}</text>
					</text>
					
				</view>
				<view class="action">
					<button class="cu-btn round bg-black shadow"><text class="cuIcon-add bg-black"></text></button>
				</view>
			</view>

		</view>
		
		<!-- 弹出请开启蓝牙 -->
		<view class="cu-modal" :class="modalName=='isOpenBle'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">蓝牙</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					请开启手机蓝牙功能
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				bleData:[],//蓝牙名字列表
				bleIndex:[],//蓝牙查重
				modalName:"",//提示窗口 默认弹出蓝牙
				available:false,//蓝牙是否可用
				discovering:false,//蓝牙是否已开始搜索
			}
		},
		mounted() {
			var _this=this
			
			_this.initBle() //初始化蓝牙
			setInterval(function(){
				if(!_this.available){
					_this.initBle() //初始化蓝牙
				}
			},1000)
			
		},
		methods:{
			hideModal(){
				//隐藏弹出
				this.modalName=""
			},
			getBleState(){
				//判断蓝牙是否在启用或者搜索 蓝牙状态
				var _this=this
				uni.onBluetoothAdapterStateChange(function (res) {
					_this.available = res.available
					_this.discovering = res.discovering
					console.log('蓝牙是否可用：'+res.available)
					console.log('蓝牙是否搜索：'+res.discovering);
					
					if(!_this.available){
						_this.modalName="isOpenBle"
					}else{
						_this.modalName=""
					}
				})
			},
			initBle(){
				//初始化蓝牙
				var _this=this
				var bleCount=1 //新蓝牙数量
				uni.openBluetoothAdapter({
					success(res) {
						
						console.log(res)
						if(res.errMsg=="openBluetoothAdapter:ok"){
							console.log("************************初始化蓝牙成功************************")
							//蓝牙状态
							_this.getBleState();
							//搜寻蓝牙
							uni.startBluetoothDevicesDiscovery({
								services: [],
								success(res) {
									console.log("************************开始搜寻蓝牙************************")
									//搜寻新蓝牙
									uni.onBluetoothDeviceFound(function (devices) {
										
										console.log("************************新蓝牙 "+bleCount+"************************")
										bleCount++
										var bles = devices.devices[0];//蓝牙信息
										if(_this.bleIndex.indexOf(bles.deviceId) == -1){
											if(bles.name==""){
												_this.bleData.push({"name":bles.deviceId,"id":bles.deviceId,"tag":false});
												_this.bleIndex.push(bles.deviceId);

											}else{
												_this.bleData.push({"name":bles.name,"id":bles.deviceId,"tag":true});
												_this.bleIndex.push(bles.deviceId);
											}
										}
									  
									}) //搜寻新蓝牙
								} //搜寻蓝牙 success
							}) //搜寻蓝牙
						}//初始化蓝牙 ok
					}, //初始化蓝牙 success
					fail(re){
						//初始化蓝牙失败
						console.log(re);
						if(re.errCode="10001"){
							_this.modalName="isOpenBle"
						}
					} //初始化蓝牙 fail
				  
				}) //初始化蓝牙
			}
		}
	}
</script>

<style scoped>
	.bleid{
		margin-left:10upx;
	}
</style>
