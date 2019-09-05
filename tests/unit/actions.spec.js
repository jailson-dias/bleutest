jest.mock("@/api");
import flushPromises from "flush-promises";
import actions from "@/store/actions";
import api from "@/api";
import { CURRENCY_QUOTE, SET_VALUE } from "@/store/types";

describe("store actions", () => {
  let commit;

  beforeEach(() => {
    commit = jest.fn();
  });

  it("Fazendo a cotação da moeda", async () => {
    const currency = {
      from: "USD",
      to: "BRL"
    };

    const value = {
      from: 1,
      to: 0
    };

    await actions[CURRENCY_QUOTE]({ commit }, { currency, value });
    await flushPromises();

    expect(api.quotation).toHaveBeenCalledWith(
      `${currency.from}-${currency.to}`
    );
    expect(commit).toHaveBeenCalledWith(SET_VALUE, value);
  });
});
