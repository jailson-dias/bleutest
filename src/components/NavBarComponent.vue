<template>
  <div id="navbar">
    <el-row>
      <el-col :offset="3" :lg="4" :md="4" class="logo">
        <logo-component />
      </el-col>
      <el-col :offset="3" :lg="13" :md="13" class="menu">
        <!-- este menu está sem ação -->
        <el-menu
          background-color="#0080DD"
          text-color="#FFFFFF"
          active-text-color="#FFFFFF"
          mode="horizontal"
          default-active="2"
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
  }
};
</script>

<style scoped>
#navbar {
  background-color: #0080dd;
}
.logo {
  margin-top: 28px;
  margin-bottom: 28px;
}
.menu {
  display: flex;
  flex-direction: row;
  align-items: center;
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
  text-align: center;
}

.el-menu-item.is-active {
  font-weight: bold;
}
</style>
