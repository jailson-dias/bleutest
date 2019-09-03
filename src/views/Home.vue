<template>
  <div>
    <h2>USD Best Price in Brazil</h2>
    <p>
      Compare and find in realtime the best effective prices in Brazil's top USD exchanges, considering fees.
      Click on the exchange row to view operation details.
    </p>
    <div>
      <currency-component class="currency-from" />
      <currency-component class="currency-to" />
    </div>
  </div>
</template>

<script>
import CurrencyComponent from "@/components/CurrencyComponent";

export default {
  name: "home",
  components: {
    CurrencyComponent
  }
};
</script>
