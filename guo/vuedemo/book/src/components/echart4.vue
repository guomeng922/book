<template>
    <div class="echart4">
        <div id="chart4"></div>
    </div>
</template>

<script>
export default {
  name:'echart4',
  data() {
    return {
      base: +new Date(),
      date: [],
      data: [Math.random() * 150],
      option:{}
    }
  },
  methods: {
    getOption() {
      this.option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            interval:0,
          },
          data: this.date
        },
        yAxis: {
          boundaryGap: [0, '50%'],
          type: 'value'
        },
        series: [
          {
              name:'成交',
              type:'line',
              smooth:true,
              symbol: 'none',
              stack: 'a',
              areaStyle: {
                  normal: {}
              },
              data: this.data
          }
        ]
      }
      let chart = this.$echarts.init(document.getElementById('chart4'))
      chart.setOption(this.option)
    },
    addData(shift) {
      var oneDay = 24 * 60 * 60 * 1000;
      var length = this.data.length
      var now = new Date(this.base)
      now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/')
      this.date.push(now);
      // console.log(this.date)
      this.data.push((Math.random() - 0.4) * 10 + this.data[length - 1]);
      this.base = this.base + oneDay
      if (shift) {
          this.date.shift();
          this.data.shift();
      }
      
    },
    loop() {
      for (var i = 1; i < 7; i++) {
        this.addData();
      }
    }
    
  },
  mounted() {
    this.loop()
    this.getOption()
    let chart = this.$echarts.init(document.getElementById('chart4'))
    let _this = this
    setInterval(function () {
        _this.addData(true);
        chart.setOption({
            xAxis: {
                data: _this.date
            },
            series: [{
                name:'成交',
                data: _this.data
            }]
        });
    }, 10000);
  }
}
</script>


<style scoped>
  .echart4{
    width:100%;
    height:300px;
    background: skyblue;
  }
  #chart4{
    width:100%;
    height:100%;
  } 
</style>


