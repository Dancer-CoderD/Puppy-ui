import { createApp } from "vue";
import App from "./app.vue";
import puppy from "@puppy-ui/components";

const app = createApp(App);
app.use(puppy);
app.mount("#app");
