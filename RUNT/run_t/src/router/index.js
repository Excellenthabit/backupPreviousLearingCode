import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 导入自己的组件
import login from '@/components/login/login'
import register from '@/components/register/register'
import personalInfo from '@/components/personalInfo/personalInfo'
import releaseCourse from '@/components/releaseCourse/releaseCourse'
import learnedCourse from '@/components/personalInfo/learnedCourse'
import releasedCourse from '@/components/personalInfo/releasedCourse'
import updatePwd from '@/components/personalInfo/updatePwd'
import reportedCourseList from '@/components/personalInfo/reportedCourseList'
import CourseList from '@/components/CourseList/CourseList'
import CourseDetail from '@/components/CourseDetail/CourseDetail'

// 配置路由
export const myRouter = [
  {
    path: '/',
    component: login,
    name: '登录'
  },
  {
    path: '/login',
    component: login,
    name: '登录'
  },
  {
    path: '/register',
    component: register,
    name: '注册'
  },
  {
    path: '/personalInfo',
    component: personalInfo,
    name: '个人信息'
    // children:[
    //   {
    //     path: '/learnedCourse',
    //     component: learnedCourse,
    //     name: '我已学的课程'
    //   },
    //   {
    //     path: '/releasedCourse',
    //     component: releasedCourse,
    //     name: '我发布的课程'
    //   }
    // ]
  },
  {
    path: '/releaseCourse',
    component: releaseCourse,
    name: '发布课程'
  },
  {
    path: '/learnedCourse',
    component: learnedCourse,
    name: '我已学的课程'
  },
  {
    path: '/releasedCourse',
    component: releasedCourse,
    name: '我发布的课程'
  },
  {
    path: '/updatePwd',
    component: updatePwd,
    name: '修改密码'
  },
  {
    path: '/reportedCourseList',
    component: reportedCourseList,
    name: '已报课程列表'
  },
  {
    path: '/CourseList',
    name: 'CourseList',
    component: CourseList
  },
  {
    path: '/CourseDetail',
    name: 'CourseDetail',
    component: CourseDetail
  }
]
export default new Router({
  routes: myRouter
})
