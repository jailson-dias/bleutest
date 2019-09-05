import usdBrl from "../../tests/unit/fixtures/usdBrl";

export default {
  quotation: jest.fn().mockResolvedValue(usdBrl)
};
