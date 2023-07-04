//motion数据
const state = {
    goalcData: '', //计划完成度数据
    sportData: '', //运动数据
    healthData: '', //健康数据
}
const mutations = {
    set_GoalcData(state,GoalcData) {
        //赋值
        state.goalcData = GoalcData;
    },
    set_SportData(state,SportData) {
        //赋值
        state.sportData = SportData;
    },
    set_HealthData(state,HealthData) {
        //赋值
        state.healthData = HealthData;
    },
} 


const actions = {
    setGoalcData ({commit},GoalcData) {
        //赋值
        commit("set_GoalcData", GoalcData);
    },
    setSportData ({commit},SportData) {
        //赋值
        commit("set_SportData", SportData);
    },
    setHealthData ({commit},HealthData) {
        //赋值
        commit("set_HealthData", HealthData);
    },
}
const getters = {
    getGoalcData(state){
        //获取
        return state.goalcData;
    },
    getSportData(state){
        //获取
        return state.sportData;
    },
    getHealthData(state){
        //获取
        return state.healthData;
    }

}

//暴露出去
export default {
    state,
    mutations,
    actions,
    getters
}