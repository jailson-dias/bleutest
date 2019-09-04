<template>
  <div class="login-logout-button">
    <el-button>Login</el-button>
    <!-- <p>sdfd</p> -->
  </div>
</template>

<script>
export default {
  name: "LoginLogoutButtonComponent"
};
</script>

<style scoped>
.login-logout-button {
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 15px;
  margin-bottom: 3px;
}
</style>

<style>
.login-logout-button > .el-button {
  background-color: #0080dd;
  color: #ffffff;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.login-logout-button > .el-button:hover {
  background-color: #0066b1;
  color: #dddddd;
  /* border-color: #cccccc; */
}
</style>
