jest.mock("@/api");
import flushPromises from "flush-promises";
import actions from "@/store/actions";
import api from "@/api";
import usdBrl from "./fixtures/usdBrl";
import { CURRENCY_QUOTE, SET_QUOTE } from "@/store/types";

describe("store actions", () => {
  let commit;

  beforeEach(() => {
    commit = jest.fn();
  });

  it("Fazendo a cotação da moeda", async () => {
    const currency = "USD-BRL";

    await actions[CURRENCY_QUOTE]({ commit }, { currency });
    await flushPromises();

    expect(api.quotation).toHaveBeenCalledWith(currency);
    expect(commit).toHaveBeenCalledWith(SET_QUOTE, usdBrl);
  });
});
