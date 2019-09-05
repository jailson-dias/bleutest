import { SET_VALUE, SET_CURRENCY } from "./types";

export default {
  [SET_VALUE](state, value) {
    state.value = value;
  },
  [SET_CURRENCY](state, currency) {
    state.currency = currency;
  }
};
