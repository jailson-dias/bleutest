import { shallowMount, createLocalVue } from "@vue/test-utils";
import Home from "@/views/Home";
import ElementUI from "element-ui";

const localVue = createLocalVue();
localVue.use(ElementUI);

describe("Home page", () => {
  const build = () => {
    const wrapper = shallowMount(Home, { localVue });

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
