<template>
  <el-container id="app">
    <el-header class="header">
      <nav-bar-component />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>
<script>
import NavBarComponent from "@/components/NavBarComponent";

export default {
  name: "App",
  components: {
    NavBarComponent
  }
};
</script>

<style>
#app,
html,
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: "Roboto";
  src: url("~@/assets/fonts/Roboto-Regular.ttf") format("opentype");
  font-weight: 400;
}

@font-face {
  font-family: "Roboto";
  src: url("~@/assets/fonts/Roboto-Bold.ttf") format("opentype");
  font-weight: 700;
}

@font-face {
  font-family: "Roboto";
  src: url("~@/assets/fonts/Roboto-Light.ttf") format("opentype");
  font-weight: 300;
}
</style>

<style scoped>
.header {
  padding: 0;
}
</style>
