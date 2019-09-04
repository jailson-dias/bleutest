import Vue from "vue";
import {
  Container,
  Row,
  Col,
  Header,
  Main,
  Menu,
  MenuItem,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input
} from "element-ui";

import "./assets/bleutest-icons/style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(Container);
Vue.use(Row);
Vue.use(Col);
Vue.use(Header);
Vue.use(Main);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Button);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Input);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
