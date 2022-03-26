import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag";

const app = createApp({
  render: () => h(App),

  mounted() {
    const loadScreen = document.getElementById("load-screen");
    loadScreen.style.opacity = "0";
    loadScreen.style.pointerEvents = "none";
  },
});

app.use(router);
app.use(VueGtag, {
  config: {
    id: "G-H8EDK2GPVW",
  },
});

app.directive("fade-in", {
  mounted(el) {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 1.25s ease";
    const fadeIn = () => {
      if (el.getBoundingClientRect().y < (window.innerHeight * 2) / 3) {
        el.style.opacity = "";
        el.style.transform = "";
        window.removeEventListener("scroll", fadeIn);
      }
    };
    window.addEventListener("scroll", fadeIn);
  },
});

app.mount("#app");
