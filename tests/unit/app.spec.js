import { shallowMount, createLocalVue } from "@vue/test-utils";

import App from "@/App";
import NavBarComponent from "@/components/NavBarComponent";

import Router from "vue-router";
import ElementUI from "element-ui";

const localVue = createLocalVue();
localVue.use(Router);
localVue.use(ElementUI);

describe("App page", () => {
  const build = () => {
    const wrapper = shallowMount(App, { localVue });

    return {
      wrapper,
      NavBarComponent: () => wrapper.find(NavBarComponent)
    };
  };

  it("É uma instancia do vue", () => {
    const { wrapper } = build();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("É definido o NavBar do site", () => {
    const { NavBarComponent } = build();

    expect(NavBarComponent().exists()).toBe(true);
  });
});
