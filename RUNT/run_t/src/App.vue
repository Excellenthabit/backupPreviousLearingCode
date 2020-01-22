<template>
  <div id="app">
    <!-- 顶部轮播图 -->
    <a-carousel autoplay>
      <div>
        <img src="/static/1.jpg" />
      </div>
      <div>
        <img src="/static/2.jpeg" />
      </div>
      <div>
        <img src="/static/3.jpg" />
      </div>
      <div>
        <img src="/static/4.jpg" />
      </div>
    </a-carousel>
    <!-- 顶部导航栏 -->
    <ul class="nav nav-tabs">
      <li role="presentation">
        <router-link to="/CourseList">首页</router-link>
      </li>
      <li role="presentation">
        <router-link to="/">登录</router-link>
      </li>
      <li role="presentation">
        <router-link to="/register">注册</router-link>
      </li>
      <!-- <li role="presentation">
        <router-link to="/releaseCourse">发布课程</router-link>
      </li> -->
      <li role="presentation">
        <router-link to="/personalInfo">个人信息</router-link>
      </li>
      <li role="presentation">
        <router-link to>更多>>></router-link>
      </li>
    </ul>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
img {
  width: 100%;
}
</style>
