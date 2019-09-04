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
          <currency-component class="currency-from" />
          <currency-component class="currency-to" />
        </div>
      </el-col>
    </el-row>
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

<style>
#home {
  margin-top: 70px;
  /* display: flex; */
  /* align-items: center; */
  /* background-color: red; */
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
  /* font-weight: normal; */
  font-size: 18px;
  line-height: 32px;
  /* background-color: green; */

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
