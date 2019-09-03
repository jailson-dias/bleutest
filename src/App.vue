<template>
  <div id="app">
    <nav-bar-component />
    <router-view />
  </div>
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
