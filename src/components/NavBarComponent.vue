<template>
  <div id="navbar">
    <el-row>
      <el-col :offset="3" :lg="4" class="logo">
        <logo-component />
      </el-col>
      <el-col :offset="3" :lg="12" class="menu">
        <el-menu
          background-color="#0080DD"
          text-color="#FFFFFF"
          active-text-color="#FFFFFF"
          mode="horizontal"
          default-active="2"
          @select="handleSelect"
        >
          <el-menu-item index="1">Bleutest BUY</el-menu-item>
          <el-menu-item index="2">Compare</el-menu-item>
          <el-menu-item index="3">Remittance</el-menu-item>
          <el-menu-item index="4">Exchanges</el-menu-item>
          <el-menu-item index="5">Exchanges' Fees</el-menu-item>
        </el-menu>
        <login-logout-button-component />
        <select-menu-currency-component />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SelectMenuCurrencyComponent from "./SelectMenuCurrencyComponent";
import LoginLogoutButtonComponent from "./LoginLogoutButtonComponent";
import LogoComponent from "./LogoComponent";

export default {
  name: "NavBarComponent",
  components: {
    LoginLogoutButtonComponent,
    SelectMenuCurrencyComponent,
    LogoComponent
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
#navbar {
  background-color: #0080dd;
  /* display: flex;
  align-items: center; */
}
/* #navbar.el-row {
  align-items: center;
  justify-content: center;
  height: 70px;
} */
.logo {
  /* background-color: blue; */
  margin-top: 28px;
  margin-bottom: 28px;
}
.menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: red; */
  /* justify-content: center; */
  margin-top: 10px;
  margin-bottom: 15px;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}

.el-menu-item {
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  height: 48px;
  /* line-height: 80px; */
  text-align: center;
}

.el-menu-item.is-active {
  font-weight: bold;
  /* line-height: 60px; */
}
</style>
