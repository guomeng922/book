

export default{
  namespaced:true,
  state:{
    fullScreen:true, //全屏 小屏切换
    currentIndex:-1,
    sequence:0,  // 0顺序播放  1 单曲循环 2随机播放
    list:[] 
  },
  getters:{
    currentSong(state){
      // 当前正在播放的歌相关信息
      console.log(state.list,state.currentIndex,'getters')
      return state.list[state.currentIndex]||{}
    }
  },
  mutations:{
    changeFullScreen(state){
      state.fullScreen=!state.fullScreen
    },
    setCurrentIndex(state,index){
      state.currentIndex=index
    },
    setList(state,params){
      state.list=params
    },
  },
  actions:{}
}