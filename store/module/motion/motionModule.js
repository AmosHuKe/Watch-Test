//motion数据
const state = {
    goalcData: '', //计划完成度数据
	ydData: '', //运动数据
	jkData: '', //健康数据
}
const mutations = {
    set_GoalcData(state,GoalcData) {
        //赋值
        state.goalcData = GoalcData;
    },
	set_YdData(state,YdData) {
	    //赋值
	    state.ydData = YdData;
	},
	set_JkData(state,JkData) {
	    //赋值
	    state.jkData = JkData;
	},
} 


const actions = {
    setGoalcData ({commit},GoalcData) {
        //赋值
        commit("set_GoalcData", GoalcData);
    },
	setYdData ({commit},YdData) {
	    //赋值
	    commit("set_YdData", YdData);
	},
	setJkData ({commit},JkData) {
	    //赋值
	    commit("set_JkData", JkData);
	},
}
const getters = {
    getGoalcData(state){
        //获取
        return state.goalcData;
    },
	getYdData(state){
	    //获取
	    return state.ydData;
	},
	getJkData(state){
	    //获取
	    return state.jkData;
	}

}

//暴露出去
export default {
    state,
    mutations,
    actions,
    getters
}