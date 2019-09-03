<template>
  <div>
    <logo-component />
    <div>
      <menu-button-component />
      <menu-button-component />
      <menu-button-component />
      <menu-button-component />
      <menu-button-component />
    </div>
    <login-logout-button-component />
    <select-language-component />
  </div>
</template>

<script>
import SelectLanguageComponent from "./SelectLanguageComponent";
import LoginLogoutButtonComponent from "./LoginLogoutButtonComponent";
import MenuButtonComponent from "./MenuButtonComponent";
import LogoComponent from "./LogoComponent";

export default {
  name: "NavBarComponent",
  components: {
    MenuButtonComponent,
    LoginLogoutButtonComponent,
    SelectLanguageComponent,
    LogoComponent
  }
};
</script>