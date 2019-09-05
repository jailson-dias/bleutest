import mutations from "@/store/mutations";
import initialState from "@/store/state";
import { SET_QUOTE } from "@/store/types";
import usdBrl from "./fixtures/usdBrl";

describe("mutations", () => {
  let state;

  beforeEach(() => {
    state = { ...initialState };
  });

  it("Alterando a mutation de quote", () => {
    const quote = usdBrl;

    mutations[SET_QUOTE](state, quote);

    expect(state.quote).toEqual(quote);
  });
});
