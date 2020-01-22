<template>
  <div id="login">
    <h3>Welcome back *_*</h3>
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
          'user',
          { rules: [{ required: true, message: '请输入手机号噢~' }] }
        ]"
          placeholder="请输入手机号"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入密码~' }] }
        ]"
          type="password"
          placeholder="请输入密码"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <div id="loginBtn">
          <a-checkbox
            v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
          ]"
          >记住登录状态</a-checkbox>
          <a-button type="primary" html-type="submit" class="login-form-button">登录</a-button>没账号？->
          <router-link to="./register">现在注册</router-link>
          <a class="login-form-forgot" href>忘记密码？</a>
        </div>
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
            url: "http://139.196.102.232:8080/user/login",
            data: {
              phone: user.value,
              userPassword: password.value
            } //向后端传递参数
          }).then(res => {
            console.log(res.data.code);
            if (res.data.data.msg == "成功") {
              this.$router.push("/CourseList");
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

<style lang="scss">
#login {
  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 18%;
  }
  h3 {
    text-align: center;
  }
  #loginBtn{
    margin: 0 auto;
  }
}
</style>