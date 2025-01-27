const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello, welcome in",
      image: "./assets/img/img1.png",
      time: "00:00:00",
      textColor: "green",
      textBold: "bold",
      counter: 10,
      isEven: true,
      name: "Beatrice",
      nameIns: "",
      nameColor: "lime",
      nameDecoration: "underline",
      imgTravel: [
        "./assets/img/imgTravel1.JPG",
        "./assets/img/imgTravel2.jpg",
        "./assets/img/imgTravel3.JPG",
        "./assets/img/imgTravel4.JPG",
      ],
      indexImg: 0,
    };
  },

  methods: {
    //Clock
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

    //Countdown
    startCountdown() {
      const countdown = setInterval(() => {
        this.counter--;
        if (this.counter === 0) {
          clearInterval(countdown);
        }
      }, 1000);
    },

    //Change name
    changeName() {
      this.name = this.nameIns;
    },

    //Change image
    changeTravelImg() {
      this.indexImg++;
      if (this.indexImg === this.imgTravel.length) {
        this.indexImg = 0;
      }
    },
  },

  mounted() {
    this.printTime();
    this.updateTime();
  },
}).mount("#app");
