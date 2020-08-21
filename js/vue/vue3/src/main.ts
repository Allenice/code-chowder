import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button } from "element-ui";
import { VueSvgIcon } from "@yzfe/vue-svgicon";
import "@yzfe/vue-svgicon/dist/index.css";

const app = createApp(App);

app.component(Button.name, Button);
app.component('icon', VueSvgIcon)

app
  .use(store)
  .use(router)
  .mount("#app");
