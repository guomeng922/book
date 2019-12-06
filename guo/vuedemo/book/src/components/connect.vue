<template>
  <div class="con">
     <button @click="getData">点击</button>
     <p>{{data}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data:{}
    }
  },
  methods:{
    getData() {
      
    }
  }
}
</script>

<style scoped>
  .con{
    width:100%;
    height:400px;
  }
</style>
