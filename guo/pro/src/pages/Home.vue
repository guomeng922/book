<template>
  <div id="home">
    <header>
      <h1>经代王牌</h1>
    </header>
    <!-- <Kalendar></Kalendar> -->
    <p class="line"></p>
    <Update></Update>
    
  </div>
</template>

<script>
import Kalendar from '../components/kalendar'
import Update from '../components/update'
export default {
  name: 'Home',
  components:{Kalendar,Update},
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="less">
  #home{
    width:100%;
    padding-bottom:1rem;
    header{
      height:1.3rem;
      background: url(../assets/img/bg1.png);
      background-size: 100%;
      background-repeat:no-repeat;
      border-radius:0px 0px 0.5rem 0.5rem;
      overflow: hidden;
      text-align: center;
      h1{
        font-size:0.38rem;
        color:#fff;
        margin-top:0.66rem;
      }
    }
    .line{
      width:100%;
      height:0.17rem;
      background: #F5F5F5;
    }
  }
</style>