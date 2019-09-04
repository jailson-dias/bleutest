<template>
  <div id="currency">
    <img src="@/assets/unitedStatesFlag.svg" alt="Brazil Flag" />
    <span>brl</span>
  </div>
</template>

<script>
export default {
  name: "ButtonMenuCurrencyComponent"
};
</script>

<style scoped>
#currency {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  /* margin-top: 15px;
  margin-bottom: 5px; */
}

#currency > img {
  width: 35px;
  height: 28px;
  /* background-color: red; */
}

#currency > span {
  font-size: 15px;
  color: #ffffff;
  margin-left: 8px;
  text-transform: uppercase;
}
</style>
