<template>
  <div class="echart3">
    <div id="chart3">

    </div>
  </div>
</template>

<script>
export default {
  name:'echart3',
  data() {
    return {
      data:{},
    }
  },
  methods:{
    draw() {
      let chart = this.$echarts.init(document.getElementById('chart3'));
      // 显示标题，图例和空的坐标轴
      chart.setOption({
          title: {
              text: '异步数据加载示例'
          },
          tooltip: {},
          legend: {
              data:['销量']
          },
          xAxis: {
              data: []
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: []
          }]
      });
    },
    getData() {
      let echarts = this.$echarts
      let chart = echarts.init(document.getElementById('chart3'));
      chart.showLoading();
      setTimeout(function () {
        this.data = {
          categories: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
          data: [5, 20, 36, 10, 10, 20]
        }
        chart.hideLoading()
        chart.setOption({
          xAxis: {
              data: this.data.categories
          },
          series: [{
              // 根据名字对应到相应的系列
              name: '销量',
              data: this.data.data
          }]
        });
      },2000)
    }
  },
  mounted() {
    this.draw()
    this.getData()
  }
}
</script>


<style scoped>
  .echart3{
    width:100%;
    height:300px;
  }
  #chart3{
    width:100%;
    height:100%;
  }
</style>


