<template>
  <div class="login-container">
    <div class="locale-changer">
      <locale-changer />
    </div>

    <div class="login">
      <!--账号登录 #start -->
      <div id="a" class="loginContainer">
        <el-form ref="loginForm" :rules="rules" :model="loginForm" label-width="80px">

          <h3 class="loginTitle1"><img src="https://cdn.jsdelivr.net/gh/LJHX5470/LYiImageBed@main//LJHX/logoq.png" style="height: 40px;">
          </h3>
          <h3 class="loginTitle2" style="white-space: nowrap;">
            将军小栈 【李一】 研发项目
          </h3>
          <h5 class="loginTitle3"  style="white-space: nowrap;">李一 GeneralInnPro创始人</h5>
          <p class="loginTitle4">
            很高兴你能和将军一起使用GeneralInnPro共享和协作,GeneralInnPro也是难得和你相遇。期待未来GeneralInnPro继续发展，成为更好、更强的技术发展基石，。！</p>
          <hr style="margin-top: 50px;">
          <el-header>
            <el-button class="table" @click="gotoAdminLogin" icon="el-icon-d-arrow-right"
              style="color: #d6cece;border: none"><a style="color: #d6cece" href="http://localhost:6255">GeneralInnPro--将军小栈【李一】客户端</a></el-button>
          </el-header>
        </el-form>
      </div>

    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="loginContainer" auto-complete="on" label-position="left">
      
      <div class="title-container">
        <h3 class="title" style="color: #000;">{{ $t('login.page.title') }}</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input v-model="loginForm.username" name="username" type="text" tabindex="1" auto-complete="on" placeholder="GeneralInnPro账号/邮箱/手机号" />
      </el-form-item>


      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input v-model="loginForm.password" :type="passwordType" name="password" auto-complete="on" tabindex="2" show-password placeholder="请输入密码" @keyup.enter.native="handleLogin" />
      </el-form-item>
    
      <!-- <el-form-item prop="code">
        <span class="svg-container">
          <svg-icon icon-class="lock" />
        </span>
        <el-input v-model="loginForm.code" auto-complete="off" name="code" tabindex="2" placeholder="验证码" style="width: 60%" @keyup.enter.native="handleLogin" />
        <div class="login-code">
          <img :src="codeImg" @click="getCode">
        </div>
      </el-form-item> -->

        <el-checkbox v-model="checked" class="loginRemember"></el-checkbox><span> 记住我</span>
        <router-link :to="{ path: 'Resetpassword' }" style="float: right" class="router-link-active">
          <el-link type="danger">忘记密码</el-link>
        </router-link>
    
      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;margin-top: 15px;" @click.native.prevent="handleLogin">{{ $t('login.button.login') }}</el-button>
    
      <hr class="hr">
      <div style="margin-top: 5px;">
        <a style="margin-left: 0px;" href=""><img src="../../assets/images/login/wb.png"
            style="border-radius: 50%"></a>
        <a style="margin-left: 40px;" href=""><img src="../../assets/images/login/qq.png"
            style="border-radius: 50%"></a>
        <a style="margin-left: 40px;" href=""><img src="../../assets/images/login/wx.png"
            style="border-radius: 50%"></a>
        <a style="margin-left: 40px;" href=""><img src="../../assets/images/login/yx.png"
            style="border-radius: 50%"></a>
        <a style="margin-left: 40px;" href=""><img src="../../assets/images/login/zfb.png"
            style="border-radius: 50%"></a>
      </div>
    </el-form>
    </div>
    
    <!--  底部  -->
    <div class="el-register-footer">
      <span>@GeneralInnPro 关于我们 使用条款 帮助文档 在线自助服务 激活</span>
      <!-- <h6 class="loginTitle5">@GeneralInnPro 关于我们 使用条款 帮助文档 在线自助服务 激活</h6> -->
    </div>

  </div>
</template>

<script>
import { getKaptcha } from '@/api/login'
import LocaleChanger from '@/components/LocaleChanger'


export default {
  name: 'Login',
  components: { LocaleChanger },
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('管理员密码长度应大于6'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: '',
        code: ''
      },
      codeImg: '',
      loginRules: {
        username: [{ required: true, message: '管理员账户不允许为空', trigger: 'blur' }],
        password: [
          { required: true, message: '管理员密码不允许为空', trigger: 'blur' },
          { validator: validatePassword, trigger: 'blur' }
        ]
      },
      passwordType: 'password',
      loading: false
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }

  },
  created() {
    this.getCode()
    // window.addEventListener('hashchange', this.afterQRScan)
  },
  destroyed() {
    // window.removeEventListener('hashchange', this.afterQRScan)
  },
  methods: {
    getCode() {
      getKaptcha().then(response => {
        this.codeImg = response.data.data
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid && !this.loading) {
          this.loading = true
          this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/' })
          }).catch(response => {
            if (response.data.data) {
              this.codeImg = response.data.data
            }
            this.$notify.error({
              title: '失败',
              message: response.data.errmsg
            })
            this.loading = false
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */


$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;
    
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }

  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;


.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .locale-changer {
    position: absolute;
    top: 16px;
    right: 16px;
  }

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .login-code {
    padding-top: 5px;
    float: right;
    img{
      cursor: pointer;
      vertical-align:middle
    }
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }

  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

  }
  .copyright {
    font-size: 12px;
    color: #fff;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-bottom: 20px;
    letter-spacing: 0.6px;
    a {
      font-weight: bold;
      border-bottom: 1px solid #fff;
      font-family: "PingFangSC-Semibold", sans-serif;
    }
  }
}
</style>

<style>
  .index_background {
    background: url('../../assets/images/login/bg.png') no-repeat center 0px;
    background-position: center 0;
    background-size: cover;
  }

  .disabled .el-upload--picture-card {
    display: none;
  }

  #group {
    display: flex;
    justify-content: center;
  }

  #a {
    /* background-color: rgb(255, 208, 0); */
    background-image: url("../../assets/images/dl.jpg");
    background-size: 100% 100%;
    /* background-repeat: no-repeat;
            position: absolute;
            padding: 0px;
            width: 100%;
            height: 15%;
            top: 0;
            left: 0; */
  }

  .loginContainer {
    width: 400px;
    height: 420px;
    /* margin: 100px auto; */
    border-radius: 15px;
    border: 1px solid #eaeaea;
    /*添加阴影 h-shadow(水平阴影位置)，v-shadow(垂直阴影位置)，blur(阴影大小)，color(颜色)*/
    box-shadow: 10px 10px 35px #cac6c6;
    background: #fff;
    /*background-clip——规定背景的绘制区域*/
    /*border-box：背景被裁剪到边框盒*/
    /*padding-box：背景被裁剪到内边距框*/
    /*content-box：背景被裁剪到内容框*/
    background-clip: padding-box;
    padding: 25px 35px 25px 35px;
  }

  .table {
    color: #ffffff;
    /* 字体颜色 */
    /* font-size: 16px; */
    background-color: transparent !important;
    /* 背景透明 */
    /* border: 0;
    height: 30px;
    line-height: 30px; */
  }

  .loginTitle1 {
    margin: 10px 200px 30px auto;
    text-align: center;
    color: #ffffff;
  }

  .loginTitle2 {
    margin: 10px 120px 50px auto;
    text-align: center;
    color: #dadee6;
  }

  .loginTitle3 {
    margin: 10px 190px 20px auto;
    text-align: center;
    color: #c3c5c9;
  }

  .loginTitle4 {
    margin: 10px auto 30px -5px;
    text-align: left;
    color: #e6e9ee;
  }

  .loginTitle5 {
    margin: 60px auto 50px 500px;
    text-align: left;
    color: #7c7e81;
  }

  .loginTitle {
    margin: 10px auto 30px auto;
    text-align: left;
    color: #505458;
  }

  .loginRemember {
    margin: 0px auto 0px 0px;
  }

  .hr {
    color: #000;
    border: 0;
    font-size: 12px;
    padding: 10px 0;
    position: relative;
    margin-top: 12px;
  }

  .hr::before {
    content: "其他方式登录";
    position: absolute;
    padding: 0 10px;
    line-height: 1px;
    border: solid rgb(70, 68, 68);
    border-width: 0 9vw;
    white-space: nowrap;
    left: 50%;
    transform: translateX(-50%);
  }

  a:link,
  a:visited {

    text-decoration: none;
    /*超链接无下划线*/

  }


  /*.el-form-item__content{*/
  /* display: flex;*/
  /*  align-items: center*/
  /*}*/


  .login {
    margin-top: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .router-link-active {
    text-decoration: none;
  }

  .login-form {
    border-radius: 6px;
    background: #ffffff;
    width: 400px;
    height: 420px;
    padding: 25px 25px 5px 25px;
  }

  .el-input {
    height: 38px;
  }

  .el-input input {
    height: 38px;
  }

  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 2px;
  }

  .login-tip {
    font-size: 13px;
    text-align: center;
    color: #bfbfbf;
  }

  .login-code {
    width: 33%;
    height: 38px;
    float: right;
  }

  .login-code img {
    cursor: pointer;
    vertical-align: middle;
  }

  .el-register-footer {
    height: 40px;
    line-height: 40px;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: #7c7e81;
    font-family: Arial;
    font-size: 12px;
    letter-spacing: 1px;
  }

  .login-code-img {
    height: 38px;
  }
</style>
