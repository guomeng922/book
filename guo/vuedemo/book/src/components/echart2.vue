<template>
    <div class="echart2">
        <div id="chart">

        </div>
    </div>
</template>

<script>
export default {
  name:'echart2',
  data() {
    return {
      option:{
        itemStyle: {
                emphasis: {
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
        textStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
        },
        series : [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            roseType: 'angle',
            itemStyle: {
                // 阴影的大小
                shadowBlur: 200,
                // 阴影水平方向上的偏移
                shadowOffsetX: 0,
                // 阴影垂直方向上的偏移
                shadowOffsetY: 0,
                // 阴影颜色
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            data:[
              {value:235, name:'视频广告'},
              {value:274, name:'联盟广告'},
              {value:310, name:'邮件营销'},
              {value:335, name:'直接访问'},
              {value:400, name:'搜索引擎'}
            ],
          }
       ],
       visualMap: {
          // 不显示 visualMap 组件，只用于明暗度的映射
          show: false,
          // 映射的最小值为 80
          min: 80,
          // 映射的最大值为 600
          max: 600,
          inRange: {
            // 明暗度的范围是 0 到 1
            colorLightness: [0, 1]
          }
        },  
      }
    }
  },
  methods:{
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let chart = this.$echarts.init(document.getElementById('chart'))
      // 绘制图表
      chart.setOption(this.option);  
    }  
  },
  mounted() {
      this.drawLine()
  }
}
</script>


<style scoped>
  .echart2{
    width:100%;
    height:300px;
    background: #2c343c;
  }
  #chart{
    width:100%;
    height:100%;
  } 
</style>


