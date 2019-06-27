//Login数据
const state = {
    userData: '', //用户信息
}
const mutations = {
    set_UserData(state,UserData) {
        //赋值用户信息
        state.userData = UserData;
    },

} 


const actions = {
    setUserData ({commit},UserData) {
        //赋值用户信息
        commit("set_UserData", UserData);
    },
}
const getters = {
    getUserData(state){
        //获取用户信息
        return state.userData;
    }

}

//暴露出去
export default {
    state,
    mutations,
    actions,
    getters
}