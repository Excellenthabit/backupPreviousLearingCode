
<template>
  <div class="container">
    <!-- <div class="row clearfix">
      <div class="col-md-12 column">
        <nav class="navbar navbar-default" role="navigation">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#"></a>
          </div>

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="active">
                <a href="#">
                  <span class="iconfont icon-shouye"></span>首页
                </a>
              </li>
              <li>
                <a @click="ToHaveCourse()">
                  <span class="iconfont icon-tubiaozhizuomoban-"></span>已报课程
                </a>
              </li>
              <li>
                <a @click="ToMY()">
                  <span class="iconfont icon-wode"></span>我的
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div> -->
    <div class="course-all"></div>
    <!--发布课程入口-->
    <div class="ToPostCourse" @click="ToPostCourse()">
      <span class="iconfont icon-tianjia"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$axios({
      method: "post",
      url: "http://139.196.102.232:8080/course/list",
      data: {} //向后端传递参数
    }).then(res => {
      console.log(res.data.data.result.length);
      if (res.data.data.result.length > 0) {
        let courseAll = document.getElementsByClassName("course-all")[0];
        for (let i = 0; i < res.data.data.result.length; i++) {
          let course = document.createElement("div");
          course.setAttribute("class", "course");
          course.setAttribute("courseId", res.data.data.result[i].courseId);
          let coursetext = document.createElement("div");
          coursetext.setAttribute("class", "coursetext");
          let coursetexttitle = document.createElement("div");
          coursetexttitle.setAttribute("class", "coursetexttitle");
          coursetexttitle.innerHTML = res.data.data.result[i].courseName;
          coursetext.appendChild(coursetexttitle);
          let coursetextmsg = document.createElement("div");
          coursetextmsg.setAttribute("class", "coursetextmsg");
          let spanone = document.createElement("span");
          let spanoneicon = document.createElement("span");
          spanoneicon.setAttribute("class", "iconfont icon-wode1");
          spanone.appendChild(spanoneicon);
          let spanonetext = document.createElement("span");
          spanonetext.innerHTML = res.data.data.result[i].userName;
          spanone.appendChild(spanonetext);
          coursetextmsg.appendChild(spanone);
          let spantwo = document.createElement("span");
          spantwo.innerHTML = res.data.data.result[i].location;
          coursetextmsg.appendChild(spantwo);
          let spanthree = document.createElement("span");

          spanthree.innerHTML = res.data.data.result[i].courseId;
           spanthree.innerHTML ="10:00-12:00";
          coursetextmsg.appendChild(spanthree);
          coursetext.appendChild(coursetextmsg);
          course.appendChild(coursetext);
          let courseimg = document.createElement("div");
          courseimg.setAttribute("class", "courseimg");
          let Img = document.createElement("Img");
          Img.setAttribute("src", "/static/bigimg.jpg");
          courseimg.appendChild(Img);
          course.appendChild(courseimg);
          courseAll.appendChild(course);
          let that = this
          course.onclick = function() {
            console.log(this.getAttribute("courseId"));
            let courseId = this.getAttribute("courseId");
            localStorage.setItem("courseId",courseId);
            that.ToCourseDetail();
          };
        }
      }
    });
  },
  mounted() {
    let windowsw = document.documentElement.clientWidth;
    if (windowsw > 768) {
      console.log(windowsw);
      let IconTianJia = document.getElementsByClassName("icon-tianjia")[0];
      console.log(IconTianJia);
      IconTianJia.style.fontSize = "50px";
    }
  },
  methods: {
    ToHaveCourse() {
      this.$router.push("./reportedCourseList");
    },
    ToCourseDetail() {
      this.$router.push("./CourseDetail");
    },
    ToMY() {
      this.$router.push("./personalInfo");
    },
    ToPostCourse() {
      console.log("跳转发布课程");
      this.$router.push("./releaseCourse"); //跳转发布课程
    }
  }
};
</script>

<style >
a {
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
}
/*移动端*/
@media (max-width: 480px) {
  .course-all {
    width: 100%;
  }
  .course {
    width: 100%;
  }
}
/*平板端*/
@media (min-width: 481px) {
  .course-all {
    width: 100%;
  }
  .course {
    width: 30%;
    margin: 0 1%;
  }
}
/*PC端*/
@media (min-width: 993px) {
  .course-all {
    width: 100%;
  }
  .course {
    width: 20%;
    margin: 0 2%;
  }
}
.course-all {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  align-items: center;
  margin: auto;
}
.course {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4% 0;
  border-bottom: 1px solid #aaaaaa;
}
.coursetext {
  width: 60%;
  text-align: left;
}
.coursetexttitle {
  font-size: 1rem;
}
.coursetextmsg {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #aaaaaa;
  font-size: 0.5rem;
}
.courseimg {
  width: 35%;
}
.courseimg img {
  width: 100%;
  border-radius: 8%;
}
.icon-shouye,
.icon-tubiaozhizuomoban-,
.icon-wode {
  font-size: 20px;
  color: #ffb818;
}
img {
  width: 100%;
}
.ToPostCourse {
  position: fixed;
  bottom: 5vh;
  right: 8vw;
  z-index: 9;
}
.icon-tianjia {
  font-size: 10vw;
  color: #ffb818;
}
</style>
