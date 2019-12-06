<template>
  <div class="echart">
     <div id="myChart"></div>
  </div>
</template>

<script>
export default {
  name: 'echart',
  data () {
    return {
      option:{
        title: {
            text: '数据展示图'
        },
        tooltip : {
            // trigger: 'axis',
            axisPointer: {
                // type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                label: {
                    normal: {
                        // show: true,
                        position: 'top'
                    }
                },
                // areaStyle: {normal: {}},
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
      }
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption(this.option);
    }
  }
}
</script>

<style scoped>
  .echart{
    width:100%;
    height:300px;
  }
  #myChart{
    width:100%;
    height:100%;
  }
</style>
