import { CURRENCY_QUOTE } from "../types";
import usdBrl from "../../../tests/unit/fixtures/usdBrl";

export default {
  [CURRENCY_QUOTE]: jest.fn().mockResolvedValue(usdBrl)
};
