//home数据
const state = {
    swiperData: '', //轮播数据
	ringData: '', //统计数据
}
const mutations = {
    set_SwiperData(state,SwiperData) {
        //赋值
        state.swiperData = SwiperData;
    },
	set_RingData(state,RingData) {
	    //赋值
	    state.ringData = RingData;
	},
} 


const actions = {
    setSwiperData ({commit},SwiperData) {
        //赋值
        commit("set_SwiperData", SwiperData);
    },
	setRingData ({commit},RingData) {
	    //赋值
	    commit("set_RingData", RingData);
	},
}
const getters = {
    getSwiperData(state){
        //获取
        return state.swiperData;
    },
	getRingData(state){
	    //获取
	    return state.ringData;
	}

}

//暴露出去
export default {
    state,
    mutations,
    actions,
    getters
}