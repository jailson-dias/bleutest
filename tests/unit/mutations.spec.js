import mutations from "@/store/mutations";
import initialState from "@/store/state";
import { SET_VALUE, SET_CURRENCY } from "@/store/types";

describe("mutations", () => {
  let state;

  beforeEach(() => {
    state = { ...initialState };
  });

  it("Alterando a mutation de value", () => {
    const value = {
      from: 1,
      to: 4.09
    };

    mutations[SET_VALUE](state, value);

    expect(state.value).toEqual(value);
  });

  it("Alterando a mutation de currency", () => {
    const currency = {
      from: "USD",
      to: "BRL"
    };

    mutations[SET_CURRENCY](state, currency);

    expect(state.currency).toEqual(currency);
  });
});
