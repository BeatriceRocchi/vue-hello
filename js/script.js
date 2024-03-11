const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue",
      image: "./assets/img/img1.png",
    };
  },
}).mount("#app");
