<template>
  <div class="kalendar">
    <div class="one">
       <div>
         <h3>每日一单</h3>
         <h5>本月保费：{{handleprice}}万元</h5>
       </div>
       <div>
         <h3>{{handleDate}}</h3>
         <h5>本月件数：{{num}}件</h5>
       </div>
    </div>
    <p class="two"></p>
    <Kalen></Kalen>
  </div>
</template>

<script>
import Kalen from './kalen.vue'
export default {
  name: 'Kalendar',
  components:{Kalen},
  data () {
    return {
      price:12314534,
      num:123
    }
  },
  computed: {
    handleprice: function () {
      return parseInt(this.price/10000)
    },
    handleDate: function () {
      var date=new Date();
      var y = date.getFullYear()
      var m = date.getMonth() + 1
      m = m < 10 ? '0' + m : m
      return y + '年' + m +'月'
    }
  }
}
</script>
<style scoped lang="less">
@import '../style/index.less';
  .kalendar{
    padding:0 0.32rem;
    .one{
      height:1.5rem;
      display: flex;
      justify-content: space-between;
      div{
        margin-top:0.47rem;
        margin-bottom:0.36rem;
        h3{
          color:@fc-black;
          font-size:0.34rem;
          margin-bottom:0.15rem;
        }
        h5{
          color:@fc-gold;
          font-size:0.28rem;
        }
      }
    }
    .two{
      height:2px;
      width:100%;
      background:#DDDDDD;
    }
  }
  
</style>
