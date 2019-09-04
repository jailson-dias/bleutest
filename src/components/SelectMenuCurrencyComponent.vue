<template>
  <div>
    <el-dropdown trigger="click">
      <span class="currency el-dropdown-link">
        <button-menu-currency-component />
        <span class="icon-down-arrow"></span>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <button-menu-currency-component />
        </el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus">Action 2</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus-outline">Action 3</el-dropdown-item>
        <el-dropdown-item icon="el-icon-check">Action 4</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-check">Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import ButtonMenuCurrencyComponent from "./ButtonMenuCurrencyComponent";
export default {
  name: "SelectMenuCurrencyComponent",
  components: {
    ButtonMenuCurrencyComponent
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
  /* <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 0L4 4L8 0H0Z" fill="white"/>
  </svg> */
}

.currency.el-dropdown-link {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: green; */
  margin-top: 15px;
  margin-bottom: 5px;
  margin-left: 10px;
}

.icon-down-arrow {
  font-size: 5px;
  margin-left: 6px;
  /* background-color: red; */
}
</style>
