<template>
  <div>
    <el-dropdown trigger="click">
      <span class="currency el-dropdown-link">
        <button-menu-currency-component :flag="currency.flag" :code="currency.code" />
        <span class="icon-down-arrow"></span>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <button-menu-currency-component
            v-for="(currency, index) in availableCurrencies"
            :key="`currency-${index}`"
            :flag="currency.flag"
            :code="currency.code"
            dark
            @click.native="changeCurrency(currency.code)"
          />
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ButtonMenuCurrencyComponent from "./ButtonMenuCurrencyComponent";
import { CHANGE_CURRENCY } from "@/store/types";

export default {
  name: "SelectMenuCurrencyComponent",
  components: {
    ButtonMenuCurrencyComponent
  },
  data() {
    return {
      currency: {
        flag: require("@/assets/brazilFlag.svg"),
        code: "BRL"
      },
      availableCurrencies: [
        {
          flag: require("@/assets/brazilFlag.svg"),
          code: "BRL"
        }
      ]
    };
  },
  computed: {
    ...mapState({
      currencyCode: "currency",
      value: "value"
    })
  },
  methods: {
    changeCurrency(currencyTo) {
      this.$store.dispatch(CHANGE_CURRENCY, {
        currency: {
          ...this.currencyCode,
          to: currencyTo
        },
        value: this.value
      });
    }
  }
};
</script>

<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}

.icon--right {
  position: absolute;
  left: 30%;
  right: 30%;
  top: 40%;
  bottom: 40%;
  background: #ffffff;
}

.currency.el-dropdown-link {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 5px;
  margin-left: 10px;
}

.icon-down-arrow {
  font-size: 5px;
  margin-left: 6px;
}
</style>
