const { createApp } = Vue;

createApp({
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Chromatic  Couture",
          desc:
            "This collection features a bold use of color, inspired by modern art and architecture. The focus is on creating a sense of depth and movement through the use of vibrant hues.",
          photo:
            url=("./images/port-3.png")
        },
        {
          id: 2,
          title: "Vivid Velocity",
          desc:
          "This look is all about high-energy, futuristic fashion. The bold use of color is intended to create a sense of movement and dynamism.",       
          photo:
          url=("./images/port-2.png")
        },
        {
          id: 3,
          title: "Luminous Luxe",
          desc:
            "This collection is focused on creating a sense of luxury through the use of bold, vibrant hues. The inspiration is drawn from high-end fashion and the use of rich, opulent colors.",
          photo:
          url=("./images/port-1.png")
        },
        {
          id: 4,
          title: "Vibrant Vision",
          desc:
            "This look is inspired by the use of color in modern art and architecture. The focus is on creating a sense of movement and depth through the use of vibrant hues.",
          photo:
          url=("./images/port-4.png")
        },
        {
          id: 5,
          title: "Futurist Fuchsia",
          desc:
          "This collection explores the theme of futuristic fashion through the use of bold and striking hues, with a focus on fuchsia. The inspiration is drawn from modern art and architecture.",
          photo:
          url=("./images/port-5.png")
        },
        {
          id: 6,
          title: "Hyper-Hue",
          desc:
            "This look is all about pushing the boundaries of traditional color palettes. The inspiration is drawn from modern art and architecture, where vibrant hues are used to create a sense of movement and depth.",
          photo:
          url=("./images/port-6.png")
        },
        {
          id: 7,
          title: "Luminous Layers",
          desc:
            "This collection plays with texture and layering to create a dynamic, visually striking look. The inspiration is drawn from the use of color in modern art and architecture, where bold hues are used to create a sense of depth and movement.",
          photo:
          url=("./images/port-7.png")
        }
      ],
      currentNum: 0
    };
  },
  computed: {
    currentCard() {
      return this.cards[this.currentNum];
    }
  },
  methods: {
    playFoward() {
      let tl = gsap.timeline({
        defaults: {
          duration: 0.4,
          ease: "sine.out"
        },
        onComplete: () => {
          this.playReverse();
          if (this.currentNum >= 7) {
            this.currentNum = 0;
          } else {
            this.currentNum++;
          }
        }
      });
      tl.to("#mask-1", {
        yPercent: 100,
        scaleY: 1.9
      })
        .to(
          "#mask-2",
          {
            yPercent: -100,
            scaleY: 1.9
          },
          "<"
        )
        .to(
          "#card-info-title",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 0%, 0% 0%)`
          },
          "<0.4"
        )
        .to(
          "#card-info-desc",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 0%, 0% 0%)`
          },
          "<0.3"
        );
    },
    playReverse() {
      let tl = gsap.timeline({
        defaults: {
          duration: 0.3,
          ease: "sine.in"
        }
      });
      tl.to("#mask-1", {
        yPercent: -100,
        scaleY: 1.9
      })
        .to(
          "#mask-2",
          {
            yPercent: 100,
            scaleY: 1.9
          },
          "<"
        )
        .to(
          "#card-info-title",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
          },
          "<0.2"
        )
        .to(
          "#card-info-desc",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
          },
          "<0.3"
        );
    },
    nextCard() {
      this.playFoward();
    }
  }
}).mount("#app");