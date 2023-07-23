namespace ACatInLimbo {

  export let items = {
    //consumable
    Spider: {
      name: "Spider",
      description: "x hairy Spider",
      image: "./Images/Items/spider.png",
      static: false //false: item useable
    },
    Fish: {
      name: "Fish",
      description: "x fishy Fish",
      image: "./Images/Items/fish.png",
      static: false
    },
    Fly: {
      name: "Fly",
      description: "x annoying Fly",
      image: "./Images/Items/fly.png",
      static: false
    },

    //not consumable
    Snail: {
      name: "Snail",
      description: "x slimy Snail",
      image: "./Images/Items/snail.png",
      static: true
    },

    Fireflies: {
      name: "Fireflies",
      description: "x Jar of glowing Fireflies",
      image: "./Images/Items/fireflies.png",
      static: true
    },
    Heart: {
      name: "Heart ",
      description: "x laky Heart",
      image: "./Images/Items/heart.png",
      static: true
    },
    Coin: {
      name: "Coin ",
      description: "x shiny Coin",
      image: "./Images/Items/coin.png",
      static: true
    }

  };

}