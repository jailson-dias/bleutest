import { shallowMount } from "@vue/test-utils";

import App from "@/App";
import NavBarComponent from "@/components/NavBarComponent";

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

describe("App page", () => {
  const build = () => {
    const wrapper = shallowMount(App);

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
