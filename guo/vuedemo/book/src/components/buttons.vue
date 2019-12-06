<template>
  <div class="buttons">
     <div>
       <img src="../assets/img/book.png" alt="">
       <span>免费专区</span>
     </div>
     <div>
       <img src="../assets/img/shoe.png" alt="">
       <span>女频精选</span>
     </div>
  </div>
</template>

<script>
export default {
  name: 'buttons',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
  .buttons{
    width:100%;
    height:1.2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom:1px solid #ccc;
  }
  .buttons div{
    width:40%;
    height:70%;
    border-radius:5%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #82a9e1;
  }
  .buttons img{
    width:0.7rem;
    height:0.7rem;
    margin-right:0.3rem;
  }
  span{
    font-size:0.3rem;
  }
</style>
