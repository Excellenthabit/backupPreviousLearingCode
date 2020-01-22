<template>
  <div class="all">
    <div class="backup" @click="ToCourseList()">
      <span class="iconfont icon-htmal5icon37"></span>
    </div>

    <div class="bigimg">
      <img src="/static/bigimg.jpg" />
      <div class="tip">
      </div>
    </div>

    <div class="title">
      <span>
        <h3>课程详情</h3>
      </span>
    </div>

    <div class="introduce">
      <h5>【课程简介】</h5>
      <p class="introduction"></p>
    </div>

    <div class="introduceteacher">
      <h5>【讲师介绍】</h5>
      <div class="inside">
        <div class="ittext"></div>
        <div class="itimg">
          <img src="/static/bigimg.jpg" />
        </div>
      </div>
    </div>

    <div class="people">
      <h5>【适合人群】</h5>
      <p class="suitable"></p>
    </div>

    <div class="time">
      <h5>【上课时间】</h5>
      <p class="OnClass"></p>
    </div>

    <div class="location">
      <h5>【上课地点】</h5>
      <p class="ClassL"></p>
    </div>

    <div class="bt">
      <div class="btin" @click="clickbtin()">报名</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    let courseId = localStorage.getItem("courseId");
    var userId;

    this.$axios({
      method: "post",
      url: "http://139.196.102.232:8080/course/detail",
      data: {
        courseId: courseId
      } //向后端传递参数
    }).then(res => {
      console.log(res.data);
      if (res.data.data.code == 1) {
        userId = res.data.data.result.userId;
        courseId = res.data.data.result.courseId;
        $(".introduction").text(res.data.data.result.description);
        $(".ittext").text(res.data.data.result.userName);
        $(".suitable").text("润联好青年");
        $(".OnClass").text("10:00-12:00");
        $(".ClassL").text(res.data.data.result.location);
      }
    });

    // if (localStorage.getItem("userId") != userId) {
    //   this.$axios({
    //     method: "post",
    //     url: "http://192.168.43.78:8080/signUp/check",
    //     data: {
    //       userId: userId,
    //       courseId: courseId
    //     } //向后端传递参数
    //   }).then(res => {
    //     console.log(res.data);
    //   });
    // }else{
    //   $(".tip").text("本课程")
    // }

  },
  methods: {
    ToCourseList() {
      this.$router.push("./CourseList");
    },
    clickbtin(){
      alert("报名成功");
      this.$router.push("./CourseList");
    }
  }
};
</script>


<style>
/*移动端*/
@media (max-width: 480px) {
  .icon-htmal5icon37 {
    font-size: 6vw;
  }
  .backup {
    text-align: left;
    margin: 5% 3% 0 0;
  }
  .bigimg,
  .introduce,
  .introduceteacher,
  .people,
  .time,
  .location {
    width: 100%;
    margin: auto;
  }
  .bigimg img {
    width: 100%;
  }
  .bt {
    width: 100%;
  }
  .btin {
    width: 40%;
    padding: 5% 0;
  }
}
/*平板端*/
@media (min-width: 481px) {
  .icon-htmal5icon37 {
    font-size: 6vw;
  }
  .backup {
    text-align: left;
    margin: 5% 3% 0 0;
  }
  .bigimg,
  .introduce,
  .introduceteacher,
  .people,
  .time,
  .location {
    width: 100%;
    margin: auto;
  }
  .bigimg img {
    width: 100%;
  }
  .bt {
    width: 100%;
  }
  .btin {
    width: 20%;
    padding: 3% 0;
  }
}
/*PC端*/
@media (min-width: 993px) {
  .all {
    width: 80%;
    margin: auto;
  }
  .icon-htmal5icon37 {
    font-size: 3vw;
  }
  .backup {
    text-align: left;
    margin: 3% 0 0 0;
  }
  .bigimg,
  .introduce,
  .introduceteacher,
  .people,
  .time,
  .location {
    width: 50%;
    margin: auto;
  }
  .bigimg img {
    width: 100%;
  }
  .bt {
    width: 80%;
  }
  .btin {
    width: 20%;
    padding: 1% 0;
  }
}
.title span {
  display: inline-block;
  color: #ffb818;
  padding-bottom: 0.5vh;
  border-bottom: 5px solid #ffb818;
}
.introduce,
.introduceteacher,
.people,
.time,
.location {
  text-align: left;
}
.inside {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ittext {
  width: 65%;
}
.itimg {
  width: 30%;
}
.itimg img {
  width: 100%;
}
.bt {
  position: fixed;
  bottom: 5vh;
  z-index: 19;
}
.btin {
  margin: auto;
  background-color: #ffb818;
  border-radius: 10%;
  text-align: center;
}
.bigimg{
  position: relative;
}
.tip{
  position: absolute;
  top:0.5vh;
  right: 0;
  width:10%;
  background-color: #ffb818;
  z-index: 99;
}
</style>