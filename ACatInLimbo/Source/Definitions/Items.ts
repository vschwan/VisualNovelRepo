namespace ACatInLimbo {


    export let items = {
        Spider: {
          name: "Spider",
          description: "a small spider",
          image: "./Images/Items/spider.png",
          static: false //nicht gecheckt, falls false, einfach weglassen, weil schon autom. auf false
        },
    
        Fish: {
          name: "Fish",
          description: "a small fishy fish",
          image: "./Images/Items/fish.png",
          static: false
        },
    
        Fly: {
          name: "Fly",
          description: "a small annoying fly, like most flies are",
          image: "./Images/Items/fly.png",
          static: false
        }, 

        Snail: {
          name: "Snail", 
          description: "a slimy snail",
          image: "./Image/Items/snail.png", 
          static: false
        }, 

        Fireflies:{
          name: "Fireflies",
          description: "glowing Fireflies",
          image: ".Image/Items/fireflies.png", 
          static: true
        }
      };

}