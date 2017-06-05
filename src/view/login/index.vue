<template>
  <div class="login-container">
        <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left"
                 label-width="0px"
                 class="card-box login-form">
            <h3 class="title">系统登录</h3>

            <el-form-item prop="username">
                <el-input placeholder="账号" v-model="loginForm.username" name="username" type="text" class="item-input"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input placeholder="密码" v-model="loginForm.password" name="password" type="password" class="item-input"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
                      登录
              </el-button>
            </el-form-item>
        </el-form>
  </div>
</template>


<script>

export default {
  name: 'login',
  data() {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请输入密码'));
        } else if(value.length > 6) {
            callback(new Error('密码不能小于6位'));
        }
        callback();
      };

      return {
        loginForm: {
          username: '',
          password: ''
        },
        loginRules: {
          username: [
              { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
              { trigger: 'blur', validator: validatePass,}
          ]
        },
        loading: false
      }
    },
    methods: {
        handleLogin() {
          this.$refs.loginForm.validate(valid => {
            if (valid) {
              this.loading = true;
              this.$store.dispatch('LoginByEmail', this.loginForm).then(() => {
                this.loading = false;
                this.$router.push({ path: '/' });
              }).catch(err => {
                this.$message.error(err.data.msg || '没有此账号~');
                this.loading = false;
              });

            } else {
              console.log('error submit!!');
              return false;
            }

          });
      }
    },
    created(){
      console.log(this.$refs);
    }
}
</script>

<style lang="scss" scoped>
     @import "src/styles/mixin.scss";

    .login-container {
       position:relative;
        height: 100vh;
        background-color: #2d3a4b;

        input:-webkit-autofill {
            -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
            -webkit-text-fill-color: #fff !important;
        }
        .title {
            font-size: 26px;
            font-weight: 400;
            color: #eeeeee;
            margin: 0px auto 40px auto;
            text-align: center;
            font-weight: bold;
        }

        .login-form {
            position: absolute;
            left: 0;
            right: 0;
            width: 400px;
            padding: 35px 35px 15px 35px;
            margin: 120px auto;
        }

    }

    .el-form-item{
      border: 1px solid hsla(0,0%,100%,.1);
      background: rgba(0,0,0,.1);
      border-radius: 5px;
      color: #454545;
    }

    .item-input input{
      background-color:transparent
    }
    
</style>
