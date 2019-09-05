<template>
  <div id="home">
    <el-row>
      <el-col :offset="8" :lg="8">
        <p class="title">USD Best Price in Brazil</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="6" :lg="12">
        <div class="subtitle">
          <p>Compare and find in realtime the best effective prices in Brazil's top USD exchanges, considering fees.</p>
          <p>
            <span>Click on the exchange row</span> to view operation details.
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="8" :lg="8">
        <div class="currency-buttons">
          <currency-component
            class="currency-from"
            :value="1"
            @quotation="currencyQuote($event)"
            @changeCurrency="changeCurrency({ from: $event, to: currency.to })"
            :currency="currency.from"
            :available-currencies="availableCurrencies.from"
          />
          <currency-component
            class="currency-to"
            :value="value.to"
            @changeCurrency="changeCurrency({ from: currency.from, to: $event })"
            :currency="currency.to"
            readonly
            :available-currencies="availableCurrencies.to"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CurrencyComponent from "@/components/CurrencyComponent";
import { CURRENCY_QUOTE, CHANGE_CURRENCY } from "@/store/types";

export default {
  name: "home",
  components: {
    CurrencyComponent
  },
  computed: {
    ...mapState({
      value: "value",
      currency: "currency"
    })
  },
  data() {
    return {
      availableCurrencies: {
        from: ["USD", "EUR", "CAD", "GBP", "ARS"],
        to: ["BRL"]
      }
    };
  },
  mounted() {
    // Iniciando a aplicação com a conversão de 1 USD para BRL
    this.currencyQuote(1);
  },
  methods: {
    currencyQuote(value) {
      this.$store.dispatch(CURRENCY_QUOTE, {
        currency: this.currency,
        value: {
          from: value,
          to: 0
        }
      });
    },
    changeCurrency(currency) {
      this.$store.dispatch(CHANGE_CURRENCY, {
        currency,
        value: this.value
      });
    }
  }
};
</script>

<style>
#home {
  margin-top: 70px;
}
</style>

<style>
.title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 52px;
  line-height: 61px;
  margin-bottom: 40px;
  text-align: center;
  color: #003358;
}

.subtitle > p {
  align-self: center;
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-size: 18px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.015em;
  color: #585858;
  opacity: 0.8;
}

.subtitle > p > span {
  background: #efefef;
  border: 1px solid #bebebe;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 3px 6px 3px 6px;
  margin: -3px 0 -3px 0;
}

.currency-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
