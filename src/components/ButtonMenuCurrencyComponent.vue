<template>
  <div id="currency">
    <img :src="flag" alt="Flag" />
    <span :class="{'dark-text': dark}">{{code}}</span>
  </div>
</template>

<script>
export default {
  props: {
    dark: Boolean,
    flag: String,
    code: String
  },
  name: "ButtonMenuCurrencyComponent"
};
</script>

<style scoped>
#currency {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#currency > img {
  width: 35px;
  height: 28px;
}

#currency > span {
  font-size: 15px;
  color: #ffffff;
  margin-left: 8px;
  text-transform: uppercase;
}
.dark-text {
  color: #585858 !important;
}
</style>
