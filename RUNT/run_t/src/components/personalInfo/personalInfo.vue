<template>
  <div id="personalInfo">
    <h3>我的</h3>
    <ul>
      <li>
        <router-link to="/learnedCourse">学过的课</router-link>
      </li>
      <li>
        <router-link to="/releasedCourse">发布的课</router-link>
      </li>
      <li>
        <router-link to="/reportedCourseList">已报课程列表</router-link>
      </li>
      <li>
        <router-link to="/">退出登录</router-link>
      </li>
      <li>
        <router-link to="/updatePwd">修改密码</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#personalInfo {
  h3 {
    text-align: center;
    margin: 10px;
  }
  ul {
    display: flex;
  }
  ul > li {
    list-style: none;
    flex: 1;
  }
}
</style>