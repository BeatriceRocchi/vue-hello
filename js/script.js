const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello, welcome in",
      image: "./assets/img/img1.png",
      time: "00:00:00",
      textColor: "green",
      textBold: "bold",
    };
  },

  methods: {
    printTime() {
      const date = new Date();
      let h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      let m =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      let s =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      this.time = `${h}:${m}:${s}`;
    },
    updateTime() {
      setInterval(() => this.printTime(), 1000);
    },
  },

  mounted() {
    this.printTime();
    this.updateTime();
  },
}).mount("#app");
