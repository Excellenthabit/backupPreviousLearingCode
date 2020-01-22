<template>
  <div id="releaseCourse">
    <h3>发布课程</h3>
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
          'userId',
          { rules: [{ required: true, message: '请输入用户ID' }] }
        ]"
          placeholder="用户ID"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
          'categoryId',
          { rules: [{ required: true, message: '请输入目录ID' }] }
        ]"
          placeholder="目录ID"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
          'mylocation',
          { rules: [{ required: true, message: '请输入上课地点' }] }
        ]"
          placeholder="上课地点"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-input
          v-decorator="[
          'courseName',
          { rules: [{ required: true, message: '请输入课程名称' }] }
        ]"
          placeholder="课程名称"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
          'numPeople',
          { rules: [{ required: true, message: '请输入可报名人数' }] }
        ]"
          placeholder="可报名人数"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
          'classHour',
          { rules: [{ required: true, message: '请输入该课程课时' }] }
        ]"
          placeholder="该课程课时"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
          'startDate',
          { rules: [{ required: true, message: '请输入该课程开始日期' }] }
        ]"
          placeholder="该课程开始日期"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
          'endDate',
          { rules: [{ required: true, message: '请输入该课程结束日期' }] }
        ]"
          placeholder="该课程结束日期"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
          'description',
          { rules: [{ required: true, message: '请输入该课程的简介' }] }
        ]"
          placeholder="该课程简介"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
          'userName',
          { rules: [{ required: true, message: '请输入授课人名字' }] }
        ]"
          placeholder="授课人名字"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" class="login-form-button">发布课程</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          this.$axios({
            method: "post",
            url: "http://139.196.102.232:8080/course/add",
            data: {
                userId: userId.value,
                categoryId: categoryId.value,
                location: mylocation.value,
                courseName: courseName.value,
                numPeople: numPeople.value,
                classHour: classHour.value,
                startDate: startDate.value,
                endDate: endDate.value,
                description: description.value,
                userName: userName.value
            } //向后端传递参数
          }).then(res => {
            console.log(res.data.code);
            if (res.data.code == 0) {
              alert("发布成功");
              this.$router.push("/CourseList");
              console.log(res.data);
            } else {
              alert(res.data.data.msg);
            }
          });
        }
      });
    }
  }
};
</script>

<style lang='scss'>
#releaseCourse {
  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 25%;
  }
  h3 {
    text-align: center;
  }
}
</style>