import {
  CURRENCY_QUOTE,
  CHANGE_CURRENCY,
  SET_VALUE,
  SET_CURRENCY,
  LOGIN,
  LOGOUT,
  SET_USER
} from "./types";
import api from "@/api";
import { brNumberToFloat } from "@/utils/number";

export default {
  [CURRENCY_QUOTE]({ commit }, { currency, value, calledFromTo }) {
    api
      .quotation(`${currency.from}-${currency.to}`.toLocaleUpperCase())
      .then(quote => {
        var quotetion = brNumberToFloat(quote[currency.from].bid);
        if (calledFromTo) {
          value.from = value.to / quotetion;
        } else {
          value.to = value.from * quotetion;
        }
        commit(SET_VALUE, value);
        return value;
      });
  },
  [CHANGE_CURRENCY]({ commit, dispatch }, { currency, value }) {
    return new Promise((resolve, reject) => {
      if (currency.from && currency.to) {
        commit(SET_CURRENCY, currency);
        return dispatch(CURRENCY_QUOTE, { currency, value });
      }
      reject({
        error: "É preciso definir o currency from e to"
      });
    });
  },
  [LOGIN]({ commit }, { user }) {
    commit(SET_USER, user);
  },
  [LOGOUT]({ commit }, { user }) {
    commit(SET_USER, user);
  }
};
