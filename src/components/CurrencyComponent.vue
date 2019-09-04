<template>
  <div class="currency-component">
    <el-input placeholder="Please input" v-model="input"></el-input>
    <div class="vertical-div" />
    <el-dropdown trigger="click">
      <span class="dropdown-currency el-dropdown-link">
        BRL
        <span class="icon-leaked-down-arrow"></span>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>brl</el-dropdown-item>
        <el-dropdown-item>usd</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "CurrencyComponent",
  data() {
    return {
      input: "100,00"
    };
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
  margin: 10px;
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
</style>