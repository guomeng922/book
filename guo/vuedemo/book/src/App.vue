<template>
  <div id="app">
    <!-- <Banner></Banner> -->
    <buttons></buttons>
    <Nine></Nine>
    <Echart></Echart>
    <Echart2></Echart2>
    <Echart3></Echart3>
    <Echart4></Echart4>
    <Connect></Connect>
  </div>
</template>

<script>
import Banner from './components/banner'
import Buttons from './components/buttons'
import Nine from './components/nine'
import Echart from './components/echart'
import Echart2 from './components/echart2'
import Echart3 from './components/echart3'
import Echart4 from './components/echart4'
import Connect from './components/connect'
export default {
  name: 'App',
  components: {
    Banner,
    Buttons,
    Nine,
    Echart,
    Echart2,
    Echart3,
    Echart4,
    Connect
  }
}
</script>

<style>
  
</style>
