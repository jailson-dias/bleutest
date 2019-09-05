<template>
  <div class="currency-component">
    <el-input
      v-if="!readonly"
      placeholder="0,00"
      v-model="valueFormatted"
      @keyup.native="$emit('quotation', brNumberToFloat(valueFormatted))"
    />
    <el-input v-else placeholder="0,00" :value="floatToBrNumber(value)" readonly />
    <div class="vertical-div" />
    <el-dropdown trigger="click" v-if="!readonly">
      <span class="dropdown-currency el-dropdown-link">
        {{ currency }}
        <span class="icon-leaked-down-arrow"></span>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="(currency, index) in availableCurrencies"
          :key="`currency-${index}`"
          @click.native="$emit('changeCurrency', currency)"
        >{{ currency }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span v-else class="dropdown-currency currency-to-label">{{ currency }}</span>
  </div>
</template>

<script>
import { brNumberToFloat, floatToBrNumber } from "@/utils/number";

export default {
  name: "CurrencyComponent",
  props: {
    value: [String, Number],
    currency: String,
    availableCurrencies: Array,
    readonly: Boolean
  },
  data() {
    return {
      mValue: this.value
    };
  },
  computed: {
    valueFormatted: {
      get: function() {
        var value = floatToBrNumber(this.mValue);
        return value;
      },
      set(value) {
        value = value.replace(/\D/g, "");
        if (value.length < 1) {
          value = "0";
        }
        this.mValue = parseFloat(value) / 100;
      }
    }
  },
  methods: {
    brNumberToFloat,
    floatToBrNumber
  }
};
</script>

<style>
.currency-component {
  display: flex;
  flex: row;
  align-items: center;
  border: 2px solid #58585833;
  box-sizing: border-box;
  border-radius: 16px;
  width: 290px;
  height: 80px;
  margin: 5px;
  padding: 20px 0 20px 0;
}

.vertical-div {
  opacity: 0.2;
  background-color: #585858;
  width: 2.5px;
  height: 30px;
}

.el-input__inner {
  background-color: transparent;
  border: none;
  text-align: right;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 33px;
  color: #585858;
}

.dropdown-currency {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 0 15px 0 13px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  color: #003358;
  text-transform: uppercase;
}

.dropdown-currency > span {
  margin-left: 10px;
  font-size: 9px;
}

.el-dropdown-menu__item {
  text-transform: uppercase;
}

.currency-to-label {
  color: #585858;
  margin-left: 23px;
  margin-right: 23px;
}
</style>
