<template>
  <div class="banner">
    <!-- <p>11111</p> -->
    <swiper :options="swiperOption" class="banner">
        <swiper-slide v-for="(item,index) in swiperSlides" 
            :key="index">
            <img :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Banner',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperSlides:[
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3355576356,735207401&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575524930&di=6f63fbaa84c983a103c5645f37b04bda&imgtype=jpg&er=1&src=http%3A%2F%2Fimgs.focus.cn%2Fupload%2Fpics%2F37471%2Fb_374703954.jpg',
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=907169170,3498150753&fm=26&gp=0.jpg'
      ],
      swiperOption:{
        pagination: {
            el: '.swiper-pagination'
        },
        slidesPerView: 'auto',
        centeredSlides:true,
        // spaceBetween: 10,
        loop:true,
        speed:600, //config参数同swiper4,与官网一致
      }
    }
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
}

</script>


<style scoped>
@import '../style/reset.css';
.banner{
  width: 100%;
  height:200px;
  /* background: skyblue; */
}
.banner p{
    width:100%;
    height:3rem;
}
.swiper-slide img{
    width:100%;
    height:100%;
}
p{
    width:100%;
    height:100%;
}
</style>