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
						<text class="cu-tag round line-black light belid" v-if="bleList.tag">{{bleList.id}}</text>
					</text>
					
				</view>
				<view class="action">
					<button class="cu-btn round bg-black shadow"><text class="cuIcon-add bg-black"></text></button>
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
			}
		},
		mounted() {
			this.getBel()
		},
		methods:{
			getBel(){
				var _this=this
				//初始化蓝牙
				uni.openBluetoothAdapter({
				  success(res) { 
					console.log(res)
					if(res.errMsg=="openBluetoothAdapter:ok"){
						console.log("ok")
						//搜寻蓝牙
						uni.startBluetoothDevicesDiscovery({
						  services: [],
						  success(res) {
							//搜寻新蓝牙
							uni.onBluetoothDeviceFound(function (devices) {
								console.log('new device list has founded')
								var bels = devices.devices[0];//蓝牙信息
								if(_this.bleIndex.indexOf(bels.deviceId) == -1){
									if(bels.name==""){
										_this.bleData.push({"name":bels.deviceId,"id":bels.deviceId,"tag":false});
										_this.bleIndex.push(bels.deviceId);

									}else{
										_this.bleData.push({"name":bels.name,"id":bels.deviceId,"tag":true});
										_this.bleIndex.push(bels.deviceId);
									}
								}
							  
							})
							
						  }
						})
					}
				  }
				})
			}
		}
	}
</script>

<style>
	.belid{
		margin-left:10upx;
	}
</style>
