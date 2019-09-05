import flushPromises from "flush-promises";
import nock from "nock";
import api from "@/api";
import usdBrl from "./fixtures/usdBrl";

describe("api", () => {
  it("Fazendo a cotação de USD para BRL", async () => {
    const currency = "USD-BRL";

    const request = nock("https://economia.awesomeapi.com.br")
      .get(`/all/${currency}`)
      .reply(200, usdBrl);

    const result = await api.quotation(currency);
    await flushPromises();

    expect(result).toEqual(usdBrl);
    expect(request.isDone()).toBe(true);
  });
});
