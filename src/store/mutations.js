import { SET_VALUE, SET_CURRENCY, SET_USER } from "./types";

export default {
  [SET_VALUE](state, value) {
    state.value = value;
  },
  [SET_CURRENCY](state, currency) {
    state.currency = currency;
  },
  [SET_USER](state, user) {
    state.user = user;
  }
};
