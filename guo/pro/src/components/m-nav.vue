<template>
  <div class="m-nav">
      <ul>
        <router-link tag="li" active-class="active" to="/home">首页</router-link>
        <router-link tag="li" active-class="active" to="/success">成就</router-link>
        <router-link tag="li" active-class="active" to="/product">产品</router-link>
        <router-link tag="li" active-class="active" to="/my">我的</router-link>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'MNav',
  data () {
    return {
      
    }
  }
}
</script>
<style scoped lang="less">
@import '../style/index.less';
  .m-nav{
    width:100%;
    position: fixed;
    bottom:0;
    left:0;
    height:1rem;
    background: #fff;
    z-index: 5;
    ul{
      width:100%;
      height:100%;
      font-size:0.28rem; 
      color:#333;
      display:flex;
      justify-content: space-around;
      align-items:center;
      border-top:1px solid #ccc;
      li.active{
        color:#B48732;
      }
    }
  }
  
</style>
