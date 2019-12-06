<template>
  <div class="my-list">
    <ul class="mui-table-view mui-table-view-chevron">
        <li class="mui-table-view-cell">
            <a href="#service" class="mui-navigate-right">驻场服务列表</a>
        </li>
        <li class="mui-table-view-cell">
            <a href="#feed" class="mui-navigate-right">意见反馈</a>
        </li>
        <li class="mui-table-view-cell">
            <a href="#setting" class="mui-navigate-right">设置</a>
        </li>
    </ul>
    <!-- <Service></Service> -->
    <div id="feed" class="mui-page">
			<div class="mui-navbar-inner mui-bar mui-bar-nav">
				<button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
					<span class="mui-icon mui-icon-left-nav"></span>设置
				</button>
				<h1 class="mui-center mui-title">关于MUI</h1>
			</div>
			<div class="mui-page-content">
				<div class="mui-scroll-wrapper">
					<div class="mui-scroll">
						<ul class="mui-table-view">
							<li class="mui-table-view-cell mui-plus-visible mui-stream-hidden">
								<a id="rate" class="mui-navigate-right">评分鼓励</a>
							</li>
							<li class="mui-table-view-cell mui-plus-visible">
								<a id="welcome" class="mui-navigate-right">欢迎页</a>
							</li>
							<li class="mui-table-view-cell mui-plus-visible">
								<a id="share" class="mui-navigate-right">分享推荐</a>
							</li>
							<li class="mui-table-view-cell">
								<a id="tel" class="mui-navigate-right">客服电话</a>
							</li>
							<li class="mui-table-view-cell">
								<a id="feedback-btn" href="#feedback" class="mui-navigate-right">问题反馈</a>
							</li>
							<li id="check_update" class="mui-table-view-cell mui-plus-visible">
								<a id="update" class="mui-navigate-right">检查更新</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script src="../../mui/js/mui.min.js "></script>
<script>
import Service from './service.vue'
export default {
  name: 'MyList',
  cmponents:{Service},
  data() {

  },
  methods:{
    
  }
}
</script>

<style scoped>
@import '../../static/mui/css/mui.css';
  .mui-table-view-cell{
      height:1.04rem;
      font-size:0.3rem;
  }
  .mui-navigate-right{
   height:1.04rem;
   display: flex;
   align-items: center;
  }
</style>

