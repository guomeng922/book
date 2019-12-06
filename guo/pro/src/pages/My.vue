<template>
  <div id="my">
    <div class="m-header">
      <div class="m-title">
        <h2>我的</h2>
        <p>
          <i>信封</i>
        </p>
      </div>

      <div class="userInfo">
        <div class="user-left">
          <div class="pic">       
          </div>
          <div class="name">
            <h4>刘洋洋</h4>
            <span>xxxxx机构</span>
          </div>
        </div>
        <p class="user-right"> </p>
      </div>
    </div>
    <MyList></MyList>
  </div>
</template>

<script>
import MyList from '../components/my-list'
export default {
  name: 'My',
  components:{MyList}
}
</script>

<style scoped lang="less">
@import '../style/index.less';
  #my{
    .m-header{
      width:100%;
      height:3.2rem;
      background: #F0BF7D;
      padding-top:0.6rem;
      .m-title{
        width:100%;
        padding:0 0.4rem;
        height:1rem;
        display: flex;
        h2{
          font-size:0.5em;
          display: inline-block;
          margin-left:43%;
        }
        p{
          flex:1;
          display: flex;
          align-items: flex-start;
          i{
            font-size:0.3rem;
            margin-left:60%;
          }
        }
      }
    }
    .userInfo{
      padding:0 0.4rem;
      width:100%;
      // height:2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .user-left{
        display: flex;
        width:40%;
        height:100%;
        align-items: center;
        justify-content: space-around;
        .pic{
          width:1.2rem;
          height:1.2rem;
          border-radius:50%;
          background: #ccc;
        }
        .name{
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          h4{
            font-size:0.36rem;
            color:#fff;
            margin-bottom: 0.16rem;
          }
          span{
            font-size:0.28rem;
            color:#fff;
          }
        }
      }
    }
  }

</style>