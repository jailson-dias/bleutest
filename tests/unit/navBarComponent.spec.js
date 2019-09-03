import { shallowMount } from "@vue/test-utils";

import NavBarComponent from "@/components/NavBarComponent";
import LoginLogoutButtonComponent from "@/components/LoginLogoutButtonComponent";
import SelectLanguageComponent from "@/components/SelectLanguageComponent";

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

describe("NavBar Component", () => {
  const build = () => {
    const wrapper = shallowMount(NavBarComponent);

    return {
      wrapper,
      loginLogoutButton: () => wrapper.find(LoginLogoutButtonComponent),
      selectLanguage: () => wrapper.find(SelectLanguageComponent)
    };
  };

  it("É um component do vue", () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("Tem o botão de login/logout e a opção de selecionar o idioma", () => {
    const { loginLogoutButton, selectLanguage } = build();

    expect(loginLogoutButton().exists()).toBe(true);
    expect(selectLanguage().exists()).toBe(true);
  });
});
