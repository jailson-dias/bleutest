import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home";

describe("Home page", () => {
  const build = () => {
    const wrapper = shallowMount(Home);

    return {
      wrapper,
      CurrencyFrom: () => wrapper.find(".currency-from"),
      CurrencyTo: () => wrapper.find(".currency-to")
    };
  };

  it("É uma página do vue", () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("Tem os components da moeda que vai converter e o da moeda destino", () => {
    const { CurrencyFrom, CurrencyTo } = build();

    expect(CurrencyFrom().exists()).toBe(true);
    expect(CurrencyTo().exists()).toBe(true);
  });
});
