<template>
    <view class="home animation-fade">
        <scroll-view scroll-y class="page">
            <!--轮播图 -->
            <swiper
                v-if="swiperList==''?false:true"
                :class="['card-swiper swiperbox animation-fade',dotStyle?'square-dot':'round-dot']" 
                :indicator-dots="true" :circular="true" 
                :autoplay="true" interval="5000" 
                duration="500" @change="cardSwiper" 
                indicator-color="#8799a3" 
                indicator-active-color="#0081ff"
            >
                <swiper-item 
                    v-for="(item,index) in swiperList" 
                    :key="index" 
                    :class="cardCur==index?'cur':''"
                >
                    <view class="swiper-item bar-shadown">
                        <image :src="item.url" mode="aspectFill" v-if="item.type=='image'" lazy-load="true"></image>
                        <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
                    </view>
                </swiper-item>
            </swiper>
            
            <!-- #ifndef H5 -->
            <view class="cu-card article animation-fade" v-if="swiperList==''?false:true" @tap="copyUrl">
                <view class="cu-item bar-shadown">
                    <view class="title">
                        <view class="text-cut">
                            <text class="cuIcon-title text-black"></text> 
                            Github地址(点击复制)
                        </view>
                    </view>
                    <view class="content">
                        https://github.com/AmosHuKe/Watch-Test
                    </view>
                </view>
            </view>
            <!-- #endif -->
            
            <!-- 统计图 -->
            <view class="ring animation-fade" v-if="ringList==''?false:true && swiperList==''?false:true">
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
                                
                                <view class="flex-sub" >
                                    <view class="tagb-content" v-for="(rList,index) in ringList"  :key="index">
                                        <view class="flex">
                                            <text class="cuIcon-title tagb" :class="rList.color"></text>{{ rList.name }}
                                        </view>
                                        <view class="flex">
                                            <text class="tagb"></text>{{ rList.time }}，{{ rList.data }}公里
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
    import uCharts from '../../lib/u-charts/u-charts.js'; //统计图
    import {
        getSwiper,
        getRing,
    } from '../../service/api/home.js'; //首页api
    import {
        getisLogin,
    } from '../../service/api/login.js' //登录api
    var _this;
    var canvaRing=null;
   
    export default {
        data() {
            return {
                swiperList: [], //轮播数据
                //轮播
                cardCur: 0,
                dotStyle: true,
                towerStart: 0,
                direction: '',
                //统计数据
                ringList:{}, 
                //环状统计初始化数据
                cWidth:'',
                cHeight:'',
                pixelRatio:1,
                //总小时公里
                hour: 5,
                minute: 20,
                kilometer: 26,
                
            }
        },
        mounted() {
            _this = this;
            getisLogin() //是否登录
            
            _this.getSwiperData();//获取轮播数据
            
            _this.cWidth=uni.upx2px(400);
            _this.cHeight=uni.upx2px(400);
            _this.getServerData();//获取统计数据
            
        },
        methods: {
            getSwiperData(){
                const swiperData=_this.$store.getters.getSwiperData; //获取状态值
                //判断状态中是否有值
                if(swiperData!=""){
                    _this.swiperList=swiperData
                }else{
                    //获取轮播数据
                    getSwiper()
                    .then(res => {
                        console.log(res)
                        _this.swiperList=res.data;
                        _this.$store.dispatch("setSwiperData",res.data); //存入状态
                    }).catch(err => {
                        console.log(err)
                    })
                }
                
            },
            copyUrl() {
                uni.setClipboardData({
                    data: 'https://github.com/AmosHuKe/Watch-Test',
                    success: function () {
                        uni.showToast({
                            title: '地址复制成功'
                        })
                    }
                });
            },
            getServerData(){
                var setRingData={series:[]}; //统计图数据装载
                
                const ringData=_this.$store.getters.getRingData; //获取状态值
                if(ringData!=""){
                    _this.ringList=ringData; //赋值统计数据
                    for(let i=0;i<ringData.length;i++){
                        //统计图数据装载
                        setRingData.series.push({"name":ringData[i].name,"data":ringData[i].data})
                    }
                    _this.showRing("canvasRing",setRingData);
                }else{
                    //获取统计数据
                    getRing()
                    .then(res => {
                        console.log(res)
                        const data=res.data; //获取统计数据
                        _this.ringList=data; //赋值统计数据
                        _this.$store.dispatch("setRingData",data); //存入状态
                        for(let i=0;i<data.length;i++){
                            //统计图数据装载
                            setRingData.series.push({"name":data[i].name,"data":data[i].data})
                        }
                        _this.showRing("canvasRing",setRingData);
                        //console.log(ringData)
                    }).catch(err => {
                        
                    })
                }
                
                
            },
            showRing(canvasId,chartData){
                canvaRing=new uCharts({
                    $this:_this,
                    canvasId: canvasId,
                    type: 'ring',
                    fontSize:11,
                    legend:false, //底部tag
                    // title: {
                    //     name: '',
                    //     color: '#7cb5ec',
                    //     fontSize: 25*_this.pixelRatio,
                    //     offsetY:-20*_this.pixelRatio,
                    // },
                    subtitle: {
                        name: '',
                        color: '#666666',
                        fontSize: 1*_this.pixelRatio,
                        offsetY:2*_this.pixelRatio,
                    },
                    extra: {
                        pie: {
                          offsetAngle: -45,
                          ringWidth: 5*_this.pixelRatio,
                          lableWidth: 15,
                        }
                    },
                    background:'#FFFFFF',
                    pixelRatio:_this.pixelRatio,
                    series: chartData.series,
                    animation: true,
                    width: _this.cWidth*_this.pixelRatio,
                    height: _this.cHeight*_this.pixelRatio,
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

.today_run{
    position: relative;
    left: 30px;
    top: -20px;
}
</style>