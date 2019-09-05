import { CURRENCY_QUOTE, SET_QUOTE } from "./types";
import api from "@/api";

export default {
  [CURRENCY_QUOTE]({ commit }, { currency }) {
    api.quotation(currency.toLocaleUpperCase()).then(quote => {
      commit(SET_QUOTE, quote);
      return quote;
    });
  }
};
