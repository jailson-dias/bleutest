import { SET_QUOTE } from "./types";

export default {
  [SET_QUOTE](state, quote) {
    state.quote = quote;
  }
};
