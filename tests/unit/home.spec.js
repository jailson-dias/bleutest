jest.mock("@/store/actions");
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Home from "@/views/Home";
import actions from "@/store/actions";
import initialState from "@/store/state";
import usdBrl from "./fixtures/usdBrl";
import { CURRENCY_QUOTE } from "@/store/types";
import ElementUI from "element-ui";

const localVue = createLocalVue();
localVue.use(ElementUI);
localVue.use(Vuex);

describe("Home page", () => {
  let state;
  const build = () => {
    const wrapper = shallowMount(Home, {
      localVue,
      store: new Vuex.Store({
        state,
        actions
      })
    });

    return {
      wrapper,
      CurrencyFrom: () => wrapper.find(".currency-from"),
      CurrencyTo: () => wrapper.find(".currency-to")
    };
  };

  beforeEach(() => {
    jest.resetAllMocks();
    state = { ...initialState };
  });

  it("É uma página do vue", () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("Tem os components da moeda que vai converter e o da moeda destino", () => {
    const { CurrencyFrom, CurrencyTo } = build();

    expect(CurrencyFrom().exists()).toBe(true);
    expect(CurrencyTo().exists()).toBe(true);
  });

  it("Passar o valor da cotação da moeda destino", () => {
    state.value = {
      from: 1,
      to: 4.09
    };
    const { CurrencyTo } = build();

    expect(CurrencyTo().vm.value).toBe(state.value.to);
  });

  it("Fazer a cotação quando recebe o valor da moeda que está sendo convertida", () => {
    state.value = {
      from: 1,
      to: 0
    };
    const { CurrencyFrom } = build();

    CurrencyFrom().vm.$emit("quotation", state.value.from);

    expect(actions[CURRENCY_QUOTE]).toHaveBeenCalled();
    expect(actions[CURRENCY_QUOTE].mock.calls[0][1]).toEqual(state);
  });
});
