<template>
  <div class="update">
      <div class="tabs-box">
        <ul class="tabs"> 
          <li v-for="(tab,index) in tabsName"
              :key="index"
              :class="{ 'active': tab.isActive }"
              @click="changeActive(index)"
              > 
              {{tab.name}}
          </li> 
        </ul> 
        <div class="cards"> 
          <div class="tab-card" style="display: block">
            <Day></Day>
          </div> 
          <div class="tab-card">
            <Month></Month>
          </div> 
        </div>
      </div>

  </div>
</template>

<script>
import Day from './dayUpdate'
import Month from './monthUpdate'
export default {
  name: 'Update',
  components:{Day,Month},
  data () {
    return {
      tabsName: [
        { 
          name: "每日更新", 
          isActive: true
        }, 
        { 
          name: "每月更新", 
          isActive: false
        }
      ], 
    }
  },
  methods:{
    changeActive(index) {
      var tabCardCollection = document.querySelectorAll(".tab-card")
      let len = this.tabsName.length
      for(var i = 0; i < len; i++) {
        tabCardCollection[i].style.display = "none"
        this.tabsName[i].isActive = false
      }
      this.tabsName[index].isActive = !this.tabsName[index].isActive
      tabCardCollection[index].style.display = "block"
    }
  }
}
</script>
<style scoped lang="less">
@import '../style/index.less';
  .update{
    h1{
      font-size: 0.2rem;
    }
    .tabs-box{
      position: relative;
      .tabs{
        width:100%;
        height:0.84rem;
        display: flex;
        li{
          flex:1;
          text-align: center;
          line-height: 0.84rem;
          height:100%;
          display: inline-block;
          font-size:0.3rem;
          color:#999999;
          box-sizing: border-box;
          &.active{
            color:@fc-gold;
            border-bottom:0.04rem solid @fc-gold;
          }
        }
      }
      .tab-card{
        width:100%;
        position:absolute;
        display: none;
      }
    }
  }
</style>
