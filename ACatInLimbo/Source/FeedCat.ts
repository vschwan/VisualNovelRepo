namespace ACatInLimbo {

    export let originAmountFish: number = 0;
    export let originAmountSpider: number = 0;
    export let originAmountFly: number = 0;

    let startGame: boolean = true;

    setInterval(() => {
        // console.log("hello from timeout");
        if (!startGame) {
            if (ƒS.Inventory.getAmount(items.Fish) < originAmountFish) {
                console.log("nomnomnom");
                ƒS.Sound.play(sound.catEating, 1, false);
                originAmountFish = ƒS.Inventory.getAmount(items.Fish);
            } if (ƒS.Inventory.getAmount(items.Fish) != originAmountFish) {
                originAmountFish = ƒS.Inventory.getAmount(items.Fish);
            }

            if (ƒS.Inventory.getAmount(items.Spider) < originAmountSpider) {
                console.log("nomnomnom");
                ƒS.Sound.play(sound.catEating, 1, false);
                originAmountSpider = ƒS.Inventory.getAmount(items.Spider);
            } if (ƒS.Inventory.getAmount(items.Spider) != originAmountSpider) {
                originAmountSpider = ƒS.Inventory.getAmount(items.Spider);
            }

            if (ƒS.Inventory.getAmount(items.Fly) < originAmountFly) {
                console.log("nomnomnom");
                ƒS.Sound.play(sound.catEating, 1, false);
                originAmountFly = ƒS.Inventory.getAmount(items.Fly);
            } if (ƒS.Inventory.getAmount(items.Fly) != originAmountFly) {
                originAmountFly = ƒS.Inventory.getAmount(items.Fly);
            }
        }else {
            originAmountFish = ƒS.Inventory.getAmount(items.Fish);
            originAmountSpider = ƒS.Inventory.getAmount(items.Spider);
            originAmountFly = ƒS.Inventory.getAmount(items.Fly);
            startGame = false;
        }
    }
        , 100);






}