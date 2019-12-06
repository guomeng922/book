<template>
  <div class="day">
    <div class="point">
      <p class="title">驻点职场</p>
      <select name="" id="">
        <option value=""
          v-for="(item,index) in pointArr"
          :key=index
          >
          {{item}}
        </option>
      </select>
    </div>

    <div class="meeting">
      <div class="MRadio">
        <p class="title">参加晨夕会</p>
        <div class="radios">
          <p>
            <input type="radio" id="yes" value="是" v-model="isMeeting">
            <label for="yes">是</label>
          </p>
          <p>
            <input type="radio" id="no" value="否" v-model="isMeeting">
            <label for="no">否</label>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Day',
  data () {
    return {
      pointArr:['工商银行北京分行大屯路支行路支行支行',2,4,5,6],
      isMeeting:'是'
    }
  }
}
</script>
<style scoped lang="less">
@import '../style/index.less';
  .day{
    .point{
      width:100%;
      .title{
        padding:0 0.3rem;
        width:100%;
        height:0.9rem;
        background: #dddddd;
        font-size: 0.3rem;
        color:#333;
        line-height: 0.9rem;
      }
      select{
        padding:0 0.3rem;
        width:100%;
        height:0.9rem;
        border:none;
        appearance:none;
        -moz-appearance:none;
        -webkit-appearance:none;
        position: relative;
        margin-top:0;
      }
    }
    .meeting{
      width:100%;
      .MRadio{
        padding:0 0.3rem;
        height:0.9rem;
        background: #dddddd;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
          font-size: 0.3rem;
          color:#333;
          line-height: 0.9rem;
          margin-right:2.75rem;
        }
        .radios{
          flex:1;
          display:flex;
          justify-content: space-between;
          p{
            font-size:0.3rem;
            color:#F5F5F5;
            height:0.9rem;
            color:@fc-black;
            position: relative;
            margin-right: 37px;
            input{
              position: absolute;
              width: 0.44rem;
              height: 0.44rem;
              visibility: hidden;
            }
            label{
              height: 0.44rem;
              width: 0.44rem;
              border-radius: 50%;
              border:1px solid #ccc;
              display: inline-block;
              background-image: url("../assets/img/nocheck.png");
              background-repeat: no-repeat;
              background-position: center;
              vertical-align: middle;
              margin-top: -4px;
            }
            input[type="radio"]:checked + label{
              background-image: url('../assets/img/check.png');
            }
            &:nth-child(1){
              margin-right:0.73rem;
            }
          }
        }
      }
    }
  }
</style>
