<template>
  <div id="register">
    <h3>Join us ^_^ </h3>
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
          'username',
          { rules: [{ required: true, message: '请输入用户名噢~' }] }
        ]"
          placeholder="用户名"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
          'user',
          { rules: [{ required: true, message: '请输入手机号码噢~' }] }
        ]"
          placeholder="手机号码"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入密码噢~' }] }
        ]"
          type="password"
          placeholder="密码"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" class="login-form-button">注册</a-button> 已有账号？->
        <router-link to="/">登录</router-link>
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
            url: "http://139.196.102.232:8080/user/add",
            data: {
              userName: username.value,
              phone: user.value,
              userPassword: password.value
            } //向后端传递参数
          }).then(res => {
            console.log(res.data.code);
            if (res.data.code == 0) {
              alert("注册成功");
              this.$router.push("/");
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
#register {
  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 18%;
  }
  h3{
    text-align: center;
  }
}
</style>