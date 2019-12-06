<template>
  <div id="app">
    <MNav></MNav>
    <router-view></router-view>
  </div>
</template>

<script>
import MNav from  './components/m-nav.vue'
export default { 
  components:{MNav}
}
</script>

<style lang="less">
  
</style>
