import { shallowMount, createLocalVue } from "@vue/test-utils";

import NavBarComponent from "@/components/NavBarComponent";
import LoginLogoutButtonComponent from "@/components/LoginLogoutButtonComponent";
import SelectMenuCurrencyComponent from "@/components/SelectMenuCurrencyComponent";

import Router from "vue-router";
import ElementUI from "element-ui";

const localVue = createLocalVue();
localVue.use(Router);
localVue.use(ElementUI);

describe("NavBar Component", () => {
  const build = () => {
    const wrapper = shallowMount(NavBarComponent, { localVue });

    return {
      wrapper,
      loginLogoutButton: () => wrapper.find(LoginLogoutButtonComponent),
      selectLanguage: () => wrapper.find(SelectMenuCurrencyComponent)
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
