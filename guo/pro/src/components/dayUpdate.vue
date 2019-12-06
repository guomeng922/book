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
          <div class="yes">
            <input type="radio" id="yes" value="是" v-model="isMeeting" checked/>
            <label for="yes">是</label>
          </div>
          <div class="no">                
              <input type="radio" id="no" value="否" v-model="isMeeting" />
              <label for="no">否</label>
          </div>
        </div>
      </div>

      <div class="describe">
        <h5>晨夕会主要内容</h5>
        <textarea name="" id="" cols="30" rows="10">
          点击此处输入
        </textarea>
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
    padding-bottom:1rem;
    .point{
      width:100%;
      .title{
        padding:0 0.3rem;
        width:100%;
        height:0.9rem;
        background: #F5F5F5;
        font-weight: bold;
        font-size: 0.3rem;
        color:#333;
        line-height: 0.9rem;
      }
      select{
        padding:0 0.3rem;
        width:100%;
        height:0.9rem;
        background: #fff;
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
        background: #F5F5F5;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
          font-size: 0.3rem;
          color:#333;
          line-height: 0.9rem;
          margin-right:2.75rem;
          font-weight: bold;
        }
        .radios{
          flex:1;
          font-size: 0.2rem;
          display: flex;
          justify-content: space-between;
          div{
            input[type="radio"]+label::before {
              content: '';
              display: inline-block;
              vertical-align: middle;
              // font-size: 18px;
              width: 0.44rem;
              height: 0.44rem;
              background-image: url("../assets/img/nocheck.png");
              background-repeat: no-repeat;
              background-position: center;
              margin-right: .4em;
              border-radius: 50%;
              border: 1px solid #C9C9C9;
              text-indent: .15em;
              padding: .1em; 
            }
            input[type="radio"]:checked+label::before {
              width: 0.44rem;
              height: 0.44rem;
              background-image: url('../assets/img/check.png');
              // background-clip: content-box;
              background-size: 100%;
              border:none;
            }
            input[type="radio"] {
              position: absolute;
              opacity: 0; /*完全透明*/
            }
          }
        }
      }
    }
    .describe{
      width:100%;
      height:2.48rem;
      // background: pink;
      padding:0.32rem 0.3rem 0;
      h5{
        font-size: 0.3rem;
        color:#C9C9C9;
        margin-bottom:0.15rem;
      }
      textarea{
        width:6.89rem;
        height:1.78rem;
        margin:auto;
        border:none;
      }
    }
  }
</style>
