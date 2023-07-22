"use strict";
var ACatInLimbo;
(function (ACatInLimbo) {
    ACatInLimbo.originAmountFish = 0;
    ACatInLimbo.originAmountSpider = 0;
    ACatInLimbo.originAmountFly = 0;
    //  export let originAmountSnail: number = 0;
    //export let bayCreatureFed = false;
    let startGame = true;
    setInterval(() => {
        // console.log("hello from timeout");
        if (!startGame) {
            if (ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Fish) < ACatInLimbo.originAmountFish) {
                console.log("nomnomnom");
                ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.fishEat, 1, false);
                ACatInLimbo.originAmountFish = ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Fish);
                ACatInLimbo.dataForSave.catScore += 2;
            }
            if (ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Fish) != ACatInLimbo.originAmountFish) {
                ACatInLimbo.originAmountFish = ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Fish);
            }
            if (ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Spider) < ACatInLimbo.originAmountSpider) {
                console.log("nomnomnom");
                ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.dryFood, 2, false);
                ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.dryFood, 0, 4, false);
                ACatInLimbo.originAmountSpider = ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Spider);
                ACatInLimbo.dataForSave.catScore += 2;
            }
            if (ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Spider) != ACatInLimbo.originAmountSpider) {
                ACatInLimbo.originAmountSpider = ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Spider);
            }
            if (ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Fly) < ACatInLimbo.originAmountFly) {
                console.log("nomnomnom");
                ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.chompEat, 1, false);
                ACatInLimbo.originAmountFly = ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Fly);
                ACatInLimbo.dataForSave.catScore += 2;
            }
            if (ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Fly) != ACatInLimbo.originAmountFly) {
                ACatInLimbo.originAmountFly = ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Fly);
            }
        }
        else {
            ACatInLimbo.originAmountFish = ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Fish);
            ACatInLimbo.originAmountSpider = ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Spider);
            ACatInLimbo.originAmountFly = ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Fly);
            //originAmountSnail = ƒS.Inventory.getAmount(items.Snail);
            startGame = false;
        }
    }, 1000);
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    ACatInLimbo.ƒ = FudgeCore;
    ACatInLimbo.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    ACatInLimbo.dataForSave = {
        //booleans for scenes visited --> for Location-Decisions
        visitedLake: false,
        visitedLakeTwice: false,
        visitedForest: false,
        visitedSwamp: false,
        visitedBay: false,
        talkedWithBayCreatureTwice: false,
        visitedRiver: false,
        //for map scene --> showing current path
        currentPath: "",
        //booelans for checking if paths on map has already been walked --> mapScene
        pathMeadowForest: false,
        pathMeadowLake: false,
        pathForestLake: false,
        pathForestSwamp: false,
        pathLakeSwamp: false,
        pathSwampBay: false,
        pathSwampRiver: false,
        pathBayCave: false,
        pathBayRiver: false,
        pathRiverMountain: false,
        pathRiverCave: false,
        pathCaveClouds: false,
        pathMountainClouds: false,
        pathCloudsGate: false,
        //mountainScene
        betrayGoats: false,
        //gate scene -->Decision allowCat (to come with you or not)
        betrayCat: false,
        nameProtagonist: "You",
        //originally for checking score and handling lostCat
        catLeaving: false,
        catScore: 10,
        pickedMeterBar: false
    };
    //check for catScore and hndl badEnding LostCat --> Szene wird nicht returned wenn Funktion in anderer Szene aufgerufne wird :(
    // export async function handleLostCat(): Promise<string> {
    //   if (dataForSave.catScore >= 0) {
    //     console.log("cat is not running away");
    //   } else {
    //     console.log("cat should run away");
    //     return "BadEnding LostCat Scene";
    //   }
    // }
    setInterval(() => {
        //show score
        let showScore = document.getElementById("scoreForCat");
        showScore.setAttribute("value", ACatInLimbo.dataForSave.catScore.toString());
        //check for score
        if (ACatInLimbo.dataForSave.catScore < 0) {
            console.log("Cat is leaving, cause ", ACatInLimbo.dataForSave.catScore);
            ACatInLimbo.dataForSave.catLeaving = true;
            // return "BadEnding LostCat Scene";
        }
        else if (ACatInLimbo.dataForSave.catScore <= 5) {
            console.log("Cat's still there, but be careful. Feed items, if you can.");
            // ƒS.Text.print("Be careful. The cat doesn't like you very much right now.")
        }
        else {
            console.log("all good, cat likes you.");
        }
    }, 3000);
    window.addEventListener("load", start);
    function start(_event) {
        //Menu
        ACatInLimbo.gameMenu = ACatInLimbo.ƒS.Menu.create(ACatInLimbo.inGameMenuButtons, ACatInLimbo.buttonFunctionalities, "gameMenuCSS");
        // buttonFunctionalities("Close");
        //Hide MeterBar
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForCat").style.display = "none";
        let scenes = [
            { id: "Meadow Scene", scene: ACatInLimbo.Meadow, name: "Meadow" },
            { id: "Forest Scene", scene: ACatInLimbo.Forest, name: "Forest" },
            { id: "Lake Scene", scene: ACatInLimbo.Lake, name: "Lake" },
            { id: "Map Scene", scene: ACatInLimbo.Map, name: "Map" },
            { id: "Swamp Scene", scene: ACatInLimbo.Swamp, name: "Swamp" },
            { id: "River Scene", scene: ACatInLimbo.River, name: "River" },
            { id: "Bay Scene", scene: ACatInLimbo.Bay, name: "Bay" },
            { id: "Mountain Scene", scene: ACatInLimbo.Mountain, name: "Mountain" },
            { id: "Cave Entrance Scene", scene: ACatInLimbo.CaveEntrance, name: "Cave Entrance" },
            { id: "Cave Inside Scene", scene: ACatInLimbo.CaveInside, name: "Cave Inside" },
            { id: "Cave Exit Scene", scene: ACatInLimbo.CaveExit, name: "Cave Exit" },
            { id: "Clouds Scene", scene: ACatInLimbo.Clouds, name: "Clouds", next: "Gate Scene" },
            { id: "Gate Scene", scene: ACatInLimbo.Gate, name: "Gate" },
            { id: "BadEnding Cave Scene", scene: ACatInLimbo.BadEndingFrog, name: "BadEnding Cave", next: "Empty Scene" },
            { id: "BadEnding LostCat Scene", scene: ACatInLimbo.BadEndingLostCat, name: "BadEnding LostCat", next: "Empty Scene" },
            { id: "BadEnding Hell Scene", scene: ACatInLimbo.BadEndingHell, name: "BadEnding Hell", next: "Empty Scene" },
            { id: "NeutralEnding Scene", scene: ACatInLimbo.NeutralEnding, name: "NeutralEnding", next: "Empty Scene" },
            { id: "GoodEnding Scene", scene: ACatInLimbo.GoodEnding, name: "GoodEnding", next: "Empty Scene" },
            // Empty ending scene to stop the program
            { id: "Empty Scene", scene: ACatInLimbo.Empty, name: "END" } //Progamm kann nicht stopenn, deswegen empty Scene zum Schluss erstellen, ohne Inhalt
        ];
        let uiElement = document.querySelector("[type=interface]");
        ACatInLimbo.dataForSave = ACatInLimbo.ƒS.Progress.setData(ACatInLimbo.dataForSave, uiElement);
        // start the sequence
        ACatInLimbo.ƒS.Progress.go(scenes);
    }
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function Map() {
        ACatInLimbo.ƒS.Speech.hide();
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForCat").style.display = "none";
        ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.map);
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.straightLines.duration, ACatInLimbo.transition.straightLines.alpha, ACatInLimbo.transition.straightLines.edge);
        await ACatInLimbo.ƒS.update(1);
        if (ACatInLimbo.dataForSave.pathMeadowLake == true) {
            await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.meadowLake, ACatInLimbo.pathWalked());
            await ACatInLimbo.ƒS.update();
        }
        if (ACatInLimbo.dataForSave.pathMeadowForest == true) {
            await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.meadowForest, ACatInLimbo.pathWalked());
            await ACatInLimbo.ƒS.update();
        }
        if (ACatInLimbo.dataForSave.pathForestLake == true) {
            await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.forestLake, ACatInLimbo.pathWalked());
            await ACatInLimbo.ƒS.update();
        }
        if (ACatInLimbo.dataForSave.pathLakeSwamp == true) {
            await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.lakeSwamp, ACatInLimbo.pathWalked());
            await ACatInLimbo.ƒS.update();
        }
        if (ACatInLimbo.dataForSave.pathForestSwamp == true) {
            await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.forestSwamp, ACatInLimbo.pathWalked());
            await ACatInLimbo.ƒS.update();
        }
        if (ACatInLimbo.dataForSave.pathSwampRiver == true) {
            await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.swampRiver, ACatInLimbo.pathWalked());
            await ACatInLimbo.ƒS.update();
        }
        if (ACatInLimbo.dataForSave.pathSwampBay == true) {
            await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.swampBay, ACatInLimbo.pathWalked());
            await ACatInLimbo.ƒS.update();
        }
        if (ACatInLimbo.dataForSave.pathBayCave == true) {
            await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.bayCave, ACatInLimbo.pathWalked());
            await ACatInLimbo.ƒS.update();
        }
        if (ACatInLimbo.dataForSave.pathBayRiver == true) {
            await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.bayRiver, ACatInLimbo.pathWalked());
            await ACatInLimbo.ƒS.update();
        }
        if (ACatInLimbo.dataForSave.pathRiverMountain == true) {
            await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.riverMountains, ACatInLimbo.pathWalked());
            await ACatInLimbo.ƒS.update();
        }
        if (ACatInLimbo.dataForSave.pathRiverCave == true) {
            await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.riverCave, ACatInLimbo.pathWalked());
            await ACatInLimbo.ƒS.update();
        }
        if (ACatInLimbo.dataForSave.pathCaveClouds == true) {
            await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.caveClouds, ACatInLimbo.pathWalked());
            await ACatInLimbo.ƒS.update();
        }
        if (ACatInLimbo.dataForSave.pathMountainClouds == true) {
            await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.mountainsClouds, ACatInLimbo.pathWalked());
            await ACatInLimbo.ƒS.update();
        }
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.footstepsGrass, 1, false);
        ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.footstepsGrass, 0, 5);
        switch (ACatInLimbo.dataForSave.currentPath) { //ask for path
            case "MeadowToForest":
                console.log("Meadow to Forest");
                ACatInLimbo.dataForSave.pathMeadowForest = true;
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.meadowForest, ACatInLimbo.path());
                await ACatInLimbo.ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 2000));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.update();
                return "Forest Scene";
                break;
            case "MeadowToLake":
                console.log("Meadow to Lake");
                ACatInLimbo.dataForSave.pathMeadowLake = true;
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.meadowLake, ACatInLimbo.path());
                await ACatInLimbo.ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 2000));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.update();
                return "Lake Scene";
                break;
            case "LakeToSwamp":
                console.log("Lake to Swamp");
                ACatInLimbo.dataForSave.pathLakeSwamp = true;
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.lakeSwamp, ACatInLimbo.path());
                await ACatInLimbo.ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 2000));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.update();
                return "Swamp Scene";
                break;
            case "ForestToSwamp":
                console.log("Forest to Swamp");
                ACatInLimbo.dataForSave.pathForestSwamp = true;
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.forestSwamp, ACatInLimbo.path());
                await ACatInLimbo.ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 2000));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.update();
                return "Swamp Scene";
                break;
            case "ForestToLake":
                console.log("Forest to Lake");
                ACatInLimbo.dataForSave.pathForestLake = true;
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.forestLake, ACatInLimbo.path());
                await ACatInLimbo.ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 2000));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.update();
                return "Lake Scene";
                break;
            case "LakeToForest":
                console.log("Lake to Forest");
                ACatInLimbo.dataForSave.pathForestLake = true;
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.forestLake, ACatInLimbo.path());
                await ACatInLimbo.ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 2000));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.update();
                return "Forest Scene";
                break;
            case "SwampToRiver":
                console.log("Swamp to River");
                ACatInLimbo.dataForSave.pathSwampRiver = true;
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.swampRiver, ACatInLimbo.path());
                await ACatInLimbo.ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 2000));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.update();
                return "River Scene";
                break;
            case "SwampToBay":
                console.log("Swamp to Bay");
                ACatInLimbo.dataForSave.pathSwampBay = true;
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.swampBay, ACatInLimbo.path());
                await ACatInLimbo.ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 2000));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.update();
                return "Bay Scene";
                break;
            case "SwampToForest":
                console.log("Swamp to Forest");
                ACatInLimbo.dataForSave.pathForestSwamp = true;
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.forestSwamp, ACatInLimbo.path());
                await ACatInLimbo.ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 2000));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.update();
                return "Forest Scene";
                break;
            case "SwampToLake":
                console.log("Swamp to Lake");
                ACatInLimbo.dataForSave.pathLakeSwamp = true;
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.lakeSwamp, ACatInLimbo.path());
                await ACatInLimbo.ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 2000));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.update();
                return "Lake Scene";
                break;
            case "BayToCave":
                console.log("Bay to Cave");
                ACatInLimbo.dataForSave.pathBayCave = true;
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.bayCave, ACatInLimbo.path());
                await ACatInLimbo.ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 2000));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.update();
                return "Cave Entrance Scene";
                break;
            case "BayToLake":
                console.log("Bay to Lake");
                ACatInLimbo.dataForSave.pathSwampBay = true;
                ACatInLimbo.dataForSave.pathLakeSwamp = true;
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.swampBay, ACatInLimbo.path());
                await ACatInLimbo.ƒS.update(2);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.lakeSwamp, ACatInLimbo.path());
                await ACatInLimbo.ƒS.update(2);
                await new Promise(resolve => setTimeout(resolve, 2000));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.update();
                return "Lake Scene";
                break;
            case "BayToRiver":
                console.log("Bay to River");
                ACatInLimbo.dataForSave.pathBayRiver = true;
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.bayRiver, ACatInLimbo.path());
                await ACatInLimbo.ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 2000));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.update();
                return "River Scene";
            case "RiverToBay":
                console.log("River to Bay");
                ACatInLimbo.dataForSave.pathBayRiver = true;
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.bayRiver, ACatInLimbo.path());
                await ACatInLimbo.ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 2000));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.update();
                return "Bay Scene";
            case "RiverToMountain":
                console.log("River to Mountain");
                ACatInLimbo.dataForSave.pathRiverMountain = true;
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.riverMountains, ACatInLimbo.path());
                await ACatInLimbo.ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 2000));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.update();
                return "Mountain Scene";
            case "RiverToCave":
                console.log("River to Cave");
                ACatInLimbo.dataForSave.pathRiverCave = true;
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.riverCave, ACatInLimbo.path());
                await ACatInLimbo.ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 2000));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.update();
                return "Cave Entrance Scene";
            case "CaveToRiver":
                console.log("Cave to River");
                ACatInLimbo.dataForSave.pathRiverCave = true;
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.riverCave, ACatInLimbo.path());
                await ACatInLimbo.ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 2000));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.update();
                return "River Scene";
            case "CaveToBay":
                console.log("Cave to Bay");
                ACatInLimbo.dataForSave.pathBayCave = true;
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.bayCave, ACatInLimbo.path());
                await ACatInLimbo.ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 2000));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.update();
                return "Bay Scene";
            case "CaveToClouds":
                console.log("Cave to Clouds");
                ACatInLimbo.dataForSave.pathCaveClouds = true;
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.caveClouds, ACatInLimbo.path());
                await ACatInLimbo.ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 2000));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.update();
                return "Clouds Scene";
            case "MountainsToClouds":
                console.log("Cave to Clouds");
                ACatInLimbo.dataForSave.pathMountainClouds = true;
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.mountainsClouds, ACatInLimbo.path());
                await ACatInLimbo.ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 2000));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.update();
                return "Clouds Scene";
        }
    }
    ACatInLimbo.Map = Map;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    ACatInLimbo.menuIsOpen = true;
    //MENU
    ACatInLimbo.inGameMenuButtons = {
        save: "Save",
        load: "Load",
        inventory: "Inventory",
        credits: "Credits",
        help: "Help",
        close: "x",
        //   map: "Map"
    };
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case ACatInLimbo.inGameMenuButtons.save:
                await ACatInLimbo.ƒS.Progress.save();
                break;
            case ACatInLimbo.inGameMenuButtons.load:
                await ACatInLimbo.ƒS.Progress.load();
                break;
            case ACatInLimbo.inGameMenuButtons.close:
                ACatInLimbo.gameMenu.close();
                ACatInLimbo.menuIsOpen = false;
                break;
            case ACatInLimbo.inGameMenuButtons.credits:
                credits();
                break;
            case ACatInLimbo.inGameMenuButtons.help:
                help();
                break;
            case ACatInLimbo.inGameMenuButtons.inventory:
                await ACatInLimbo.ƒS.Inventory.open();
        }
    }
    ACatInLimbo.buttonFunctionalities = buttonFunctionalities;
    // Menu shortcuts
    document.addEventListener("keydown", handleKeyPress);
    async function handleKeyPress(_event) {
        switch (_event.code) {
            case ACatInLimbo.ƒ.KEYBOARD_CODE.S:
                console.log("Save Scene");
                await ACatInLimbo.ƒS.Progress.save();
                break;
            case ACatInLimbo.ƒ.KEYBOARD_CODE.C:
                console.log("Credits");
                credits();
                break;
            case ACatInLimbo.ƒ.KEYBOARD_CODE.L:
                console.log("Load Scene");
                await ACatInLimbo.ƒS.Progress.load();
                break;
            case ACatInLimbo.ƒ.KEYBOARD_CODE.H:
                console.log("Help");
                help();
                break;
            case ACatInLimbo.ƒ.KEYBOARD_CODE.I:
                console.log("open Inventory");
                await ACatInLimbo.ƒS.Inventory.open();
                break;
            case ACatInLimbo.ƒ.KEYBOARD_CODE.M:
                if (ACatInLimbo.menuIsOpen) {
                    console.log("Menu closed");
                    ACatInLimbo.gameMenu.close();
                    ACatInLimbo.menuIsOpen = false;
                }
                else {
                    console.log("Menu open");
                    ACatInLimbo.gameMenu.open();
                    ACatInLimbo.menuIsOpen = true;
                }
                break;
        }
    }
    //Help
    function help() {
        ACatInLimbo.ƒS.Text.setClass("TextPrint");
        ACatInLimbo.ƒS.Text.print("<p>In this game you can find a Lovemeter in the right corner of the screen. It shows the affection the pink Cat feels towards you.</p><p>Open your Inventory through the menu to feed your Cat with items you collect throughout the story to make it like you more.<br>Be careful it doesn't leave you!<p>Shortcuts:<br>Save: S<br>Load: L --> Note: If you save and load the game, all your items are gonna be lost<br>Inventory: I<br>Credits: C<br>Help: H<br>Menu: M</p>");
    }
    ACatInLimbo.help = help;
    //Credits
    async function credits() {
        ACatInLimbo.ƒS.Text.setClass("credits");
        let credits = ["<h3>Images</h3>\
        <table>\
        <tr>\
        <th></th>\
        <th>Asset</th>\
        <th>Source</th>\
        </tr>\
        <tr>\
        <td>Characters</td>\
        <td>All characters</td>\
        <td>by Valentina Schwan</td>\
        </tr>\
        <tr>\
        <td>Backgrounds</td>\
        <td>lake.png (modified)</td>\
        <td><a href:https://www.pexels.com/de-de/foto/szenische-ansicht-des-sees-im-wald-247600/>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>meadow.png,<br>mainBackground.png,<br>clouds.png,<br>all riverflow.pngs,<br>map.png + paths</td>\
        <td>by Valentina Schwan</td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>Remaining (modified)</td>\
        <td>AI-generated with generative Fill Option in Adobe Photoshop (Beta)</td>\
        </tr>\
        <tr>\
        <td>Items</td>\
        <td>All items</td>\
        <td>by Valentina Schwan</td>\
        </tr>\
        </table>\
        ",
            "<h3>Audio</h3>\
        <table>\
        <tr>\
        <th></th>\
        <th>Asset</th>\
        <th>Source</th>\
        </tr>\
        <tr>\
        <td>Ambience</td>\
        <td>forest-swamp-6751, forest-wind-and-birds-6881,<br>frogs-48410, river-in-the-forest-17271,<br>waves-on-the-lake-in-summer-time-in-wav-64379, <br> celestial-melody-18337 </td>\
        <td><a href:https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=114694>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>Dripping Water in Cave</td>\
        <td>Sound effect by <a href:'https://pixabay.com/de/users/solarmusic-27851065/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=114694'>solarmusic</a> from <a href:'https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=114694'>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>small-waves-onto-the-sand-143040</td>\
        <td>Sound Effect by <a href:'https://pixabay.com/de/users/dennish18-26151496/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=143040'>Dennis</a> from <a href:'https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=114694'>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>jazz-happy-110855</td>\
        <td>Music by <a href:'https://pixabay.com/de/users/music_for_videos-26992513/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=110855'>Kirilkov</a> from <a href:'https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=114694'>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>anxious-march-full-15523</td>\
        <td>Music by <a href:'https://pixabay.com/de/users/litesaturation-17654080/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=15523'>LiteSaturation</a> from <a href:https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=36186>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>mindfulness-relaxation-amp-meditation-music-22174</td>\
        <td>Music by <a href:'https://pixabay.com/es/users/john_kensy_music-26026995/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=22174'>Dank John_Kensy_Music</a> from <a href:'https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=114694'>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>horror-music-box-2-145144</td>\
        <td>Music by <a href:'https://pixabay.com/de/users/universfield-28281460/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=145144'>UNIVERSFIELD</a> from <a href:'https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=145144'>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>dreamy-jazz-slow-background-jazz-music-piano-and-seattle-strings-9998</td>\
        <td>Music by <a href:'https://pixabay.com/de/users/juliush-3921568/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=9998'>JuliusH</a> from <a href:'https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=145144'>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>haunted-house-ambience-21831</td>\
        <td>Music by <a href:'https://pixabay.com/de/users/placidplace-25572496/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=21831'>Placidplace</a> from <a href:'https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=145144'>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>spring-forest-birds-sounds</td>\
        <td><a href:'https://www.freesoundslibrary.com/'>Free Sounds Library</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>mixkit-scary-forest-at-night-2486</td>\
        <td><a href:'https://mixkit.co/free-sound-effects/scary-woods/'>Free Scary Woods Sound Effects</a><br>from Mixkit, Envato Elements</td>\
        </tr>\
        ",
            "<h3>Audio</h3>\
        <table>\
        <tr>\
        <th></th>\
        <th>Asset</th>\
        <th>Source</th>\
        </tr>\
        <tr>\
        <td>FX</td>\
        <td>BlubbernInDerTiefe,<br>Originaltitel: In der Tiefe und nah blubberndes Wasser;<br>BlubbernLeisesPlanschen<br>Originaltitel: Blubbern und leises Planschen</td>\
        <td><a href:https://hoerspielbox.de/>hoerspielbox.de</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>5-meters-dive-6070, eating-sound-effect-36186,<br>finger-cracking-40991, frog_quak-81741,<br>frog-qua-cry-36013, monster-rumble-99026,<br>sheep-bleating-31117, slimey-97605,<br>taiko-drumloop-001-120-97780, fear-breathing-14825,<br>scary-wood-74661, clock-ticking-natural-room-verb-17249,<br>croaking-70573</td>\
        <td>Sound Effects from <a href:https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=36186>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>cat-eating-dry-food-133130</td>\
        <td>Sound Effect by <a href:'https://pixabay.com/de/users/soundsforyou-4861230/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=133130'>Micheal</a> from <a href:https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=36186>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>mixkit-hard-horror-hit-drum-565,<br>mixkit-horror-deep-drum-heartbeat-559</td>\
        <td><a href:'https://mixkit.co/free-sound-effects/horror/'>Free Horror Sound Effects</a><br>from Mixkit, Envato Elements</td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>mixkit-big-wild-cat-slow-moan-90</td>\
        <td><a href:'https://mixkit.co/free-sound-effects/monster/'>Free Monster Sound Effects</a><br>from Mixkit, Envato Elements</td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>mixkit-walking-on-grass-1921</td>\
        <td><a href:'https://mixkit.co/free-sound-effects/footsteps/'>Free Footsteps Sound Effects</a><br>from Mixkit, Envato Elements</td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>Fish Eat (Nr. 2  Fortnite Sound) - Sound Effect for editing</td>\
        <td><a href:'https://www.file-upload.net/download-13974100/FishEatNr.2FortniteSound-SoundEffectforediting.mp3.html'>File-Upload.net</a></td>\
        </tr>\
        ",
            "<h3>Audio</h3>\
        <table>\
        <tr>\
        <th></th>\
        <th>Asset</th>\
        <th>Source</th>\
        </tr>\
        <tr>\
        <td>FX<br>Cat-Sounds</td>\
        <td>a-yawn-7011,<br>catmeow1-89814,<br>shari_meow-47485,<br>purring-cat-77928</td>\
        <td><a href:'https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=7011'>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>cat-purr-meow-8327</td>\
        <td>Sound Effect by <a href:'https://pixabay.com/es/users/edr-1177074/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=8327'>EdR</a><br>from <a href:https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=36186>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>ANMLCat_Growling cat 3 (ID 1887)_BSB,<br>ANMLCat_Meow cat 7 (ID 1895)_BSB,<br>ANMLCat_Little meow of a cat (ID 0494)_BSB</td>\
        <td>Joseph Sardin,<br><a href:'https://bigsoundbank.com/'>BigSoundBank</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>Cat-hissing-sound</td>\
        <td>Cat Hissing Sound Effect by Alexander,<br><a href:'https://orangefreesounds.com/cat-hissing-sound-effect/'>OrangeFreeSounds</a></td>\
        </tr>\
        "
        ];
        let creditsNav = {
            back: "«",
            next: "»",
            done: "x"
        };
        let choice;
        let current = 0;
        do {
            ACatInLimbo.ƒS.Text.print(credits[current]);
            choice = await ACatInLimbo.ƒS.Menu.getInput(creditsNav, "creditsNav");
            switch (choice) {
                case creditsNav.back:
                    current = Math.max(0, current - 1);
                    break;
                case creditsNav.next:
                    current = Math.min(3, current + 1);
                    break;
            }
        } while (choice != creditsNav.done);
        ACatInLimbo.ƒS.Text.close();
    }
    ACatInLimbo.credits = credits;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    //ANIMATIONS
    // export function ScaredCatAnimation(): ƒS.AnimationDefinition {
    //   return {
    //     start: { translation: ƒS.positionPercent(85, 99), color: ƒS.Color.CSS("", 1) },
    //     end: { translation: ƒS.positionPercent(150, 100), color: ƒS.Color.CSS("black", 0.5) },  <------
    //     duration: 2,
    //     playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    //   }; //Die Opacity und Farbe der Animation wird, nachdem sie abgespielt wurde, 
    //   //jedes mal auf das Bild auf welches sie angewendet wurde auch in Zukunft auf dieses angewendet, 
    //   //auch wenn man halt keine Animation nutzt, sondern das Bild nur erscheinen lassen will
    //   //verstehe nicht, weshalb.
    // }
    function ScaredCatAnimation() {
        return {
            start: { translation: ACatInLimbo.ƒS.positionPercent(85, 99), color: ACatInLimbo.ƒS.Color.CSS("", 1) },
            end: { translation: ACatInLimbo.ƒS.positionPercent(150, 100), color: ACatInLimbo.ƒS.Color.CSS("", 1) },
            duration: 2,
            playmode: ACatInLimbo.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    ACatInLimbo.ScaredCatAnimation = ScaredCatAnimation;
    function spiderAnimationHide() {
        return {
            start: { translation: ACatInLimbo.ƒS.positionPercent(50, -20) },
            end: { translation: ACatInLimbo.ƒS.positionPercent(50, 20) },
            duration: 5,
            playmode: ACatInLimbo.ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
        };
    }
    ACatInLimbo.spiderAnimationHide = spiderAnimationHide;
    function spiderAnimationAppear() {
        return {
            start: { translation: ACatInLimbo.ƒS.positionPercent(50, -20) },
            end: { translation: ACatInLimbo.ƒS.positionPercent(50, 50) },
            duration: 5,
            playmode: ACatInLimbo.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    ACatInLimbo.spiderAnimationAppear = spiderAnimationAppear;
    function spiderAnimationDisappear() {
        return {
            start: { translation: ACatInLimbo.ƒS.positionPercent(50, 50) },
            end: { translation: ACatInLimbo.ƒS.positionPercent(50, -20) },
            duration: 5,
            playmode: ACatInLimbo.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    ACatInLimbo.spiderAnimationDisappear = spiderAnimationDisappear;
    function swampCreatureAppearance() {
        //something
        return {
            start: { translation: ACatInLimbo.ƒS.positionPercent(-50, 85), color: ACatInLimbo.ƒS.Color.CSS("", 0) },
            end: { translation: ACatInLimbo.ƒS.positionPercent(30, 85), color: ACatInLimbo.ƒS.Color.CSS("", 1) },
            duration: 8,
            playmode: ACatInLimbo.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    ACatInLimbo.swampCreatureAppearance = swampCreatureAppearance;
    function swampCreatureDisappearance() {
        //something
        return {
            start: { translation: ACatInLimbo.ƒS.positionPercent(30, 85), color: ACatInLimbo.ƒS.Color.CSS("", 1) },
            end: { translation: ACatInLimbo.ƒS.positionPercent(-50, 85), color: ACatInLimbo.ƒS.Color.CSS("", 0) },
            duration: 8,
            playmode: ACatInLimbo.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    ACatInLimbo.swampCreatureDisappearance = swampCreatureDisappearance;
    function path() {
        //something
        return {
            start: { translation: ACatInLimbo.ƒS.positionPercent(50, 50), color: ACatInLimbo.ƒS.Color.CSS("", 0) },
            end: { translation: ACatInLimbo.ƒS.positionPercent(50, 50), color: ACatInLimbo.ƒS.Color.CSS("#FF7BAC", 1) },
            duration: 4,
            playmode: ACatInLimbo.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    ACatInLimbo.path = path;
    function pathWalked() {
        //something
        return {
            start: { translation: ACatInLimbo.ƒS.positionPercent(50, 50), color: ACatInLimbo.ƒS.Color.CSS("", 1) },
            end: { translation: ACatInLimbo.ƒS.positionPercent(50, 50), color: ACatInLimbo.ƒS.Color.CSS("white", 1) },
            duration: 1,
            playmode: ACatInLimbo.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    ACatInLimbo.pathWalked = pathWalked;
    function snailThrow() {
        //something
        return {
            start: { translation: ACatInLimbo.ƒS.positionPercent(30, 95), color: ACatInLimbo.ƒS.Color.CSS("", 1) },
            end: { translation: ACatInLimbo.ƒS.positionPercent(5, 50), color: ACatInLimbo.ƒS.Color.CSS("black", 0) },
            duration: 1,
            playmode: ACatInLimbo.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    ACatInLimbo.snailThrow = snailThrow;
    function deathSlide() {
        //something
        return {
            start: { translation: ACatInLimbo.ƒS.positionPercent(20, 100), color: ACatInLimbo.ƒS.Color.CSS("", 1) },
            end: { translation: ACatInLimbo.ƒS.positionPercent(-20, 100), color: ACatInLimbo.ƒS.Color.CSS("", 0) },
            duration: 2,
            playmode: ACatInLimbo.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    ACatInLimbo.deathSlide = deathSlide;
    function skywormAppearing() {
        //something
        return {
            start: { translation: ACatInLimbo.ƒS.positionPercent(50, 100), color: ACatInLimbo.ƒS.Color.CSS("", 1) },
            end: { translation: ACatInLimbo.ƒS.positionPercent(50, 50), color: ACatInLimbo.ƒS.Color.CSS("", 1) },
            duration: 2,
            playmode: ACatInLimbo.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    ACatInLimbo.skywormAppearing = skywormAppearing;
    function skywormDisappearing() {
        //something
        return {
            start: { translation: ACatInLimbo.ƒS.positionPercent(50, 50), color: ACatInLimbo.ƒS.Color.CSS("", 1) },
            end: { translation: ACatInLimbo.ƒS.positionPercent(50, 50), color: ACatInLimbo.ƒS.Color.CSS("#ea9847", 0) },
            duration: 4,
            playmode: ACatInLimbo.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    ACatInLimbo.skywormDisappearing = skywormDisappearing;
    function flyingCatBlue() {
        //something
        return {
            start: { translation: ACatInLimbo.ƒS.positionPercent(20, 60), color: ACatInLimbo.ƒS.Color.CSS("", 1) },
            end: { translation: ACatInLimbo.ƒS.positionPercent(50, 50), color: ACatInLimbo.ƒS.Color.CSS("", 1) },
            duration: 6,
            playmode: ACatInLimbo.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    ACatInLimbo.flyingCatBlue = flyingCatBlue;
    function flyingCatRose() {
        //something
        return {
            start: { translation: ACatInLimbo.ƒS.positionPercent(70, 60), color: ACatInLimbo.ƒS.Color.CSS("", 1) },
            end: { translation: ACatInLimbo.ƒS.positionPercent(50, 50), color: ACatInLimbo.ƒS.Color.CSS("", 1) },
            duration: 6,
            playmode: ACatInLimbo.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    ACatInLimbo.flyingCatRose = flyingCatRose;
    // export function getAnimation(): ƒS.AnimationDefinition {
    //   return {
    //     start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0.3) },
    //     end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
    //     duration: 1,
    //     playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
    //   };
    // }
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    ACatInLimbo.sound = {
        // ambience
        forestWind: "Audio/Ambience/forest-wind-and-birds-6881.mp3",
        scaryForest: "./Audio/Ambience/mixkit-scary-forest-at-night-2486.wav",
        meadowSound: "./Audio/Ambience/spring-forest-birds-sounds.mp3",
        DrippingInCave: "./Audio/Ambience/dripping-water-in-cave-114694.mp3",
        smallOceanWaves: ".//Audio/Ambience/small-waves-onto-the-sand-143040.mp3",
        LakeWaves: "./Audio/Ambience/waves-on-the-lake-in-summer-time-in-wav-64379.mp3",
        swamp: "./Audio/Ambience/forest-swamp-6751.mp3",
        frogs: "./Audio/Ambience/frogs-48410.mp3",
        river: "./Audio/Ambience/river-in-the-forest-17271.mp3",
        relaxMusic: "./Audio/Ambience/mindfulness-relaxation-amp-meditation-music-22174.mp3",
        anxiousMarch: "./Audio/Ambience/anxious-march-full-15523.mp3",
        celestial: "./Audio/Ambience/celestial-melody-18337.mp3",
        slowInsanity: "./Audio/Ambience/horror-music-box-2-145144.mp3",
        happyJazz: "./Audio/Ambience/jazz-happy-110855.mp3",
        backgroundJazz: "./Audio/Ambience/dreamy-jazz-slow-background-jazz-music-piano-and-seattle-strings-9998.mp3",
        clockTicking: "./Audio/Ambience/clock-ticking-natural-room-verb-17249.mp3",
        frogStomach: "./Audio/Ambience/croaking-70573.mp3",
        hell: "./Audio/Ambience/haunted-house-ambience-21831.mp3",
        //catSounds
        cathissing: "./Audio/catAudio/Cat-hissing-sound.mp3",
        demanding: "./Audio/catAudio/catmeow1-89814.mp3",
        cuteMeow: "./Audio/catAudio/ANMLCat_Meow cat 7 (ID 1895)_BSB.wav",
        cuteMeowMultiple: "./Audio/catAudio/shari_meow-47485.mp3",
        purrMeow: "./Audio/catAudio/cat-purr-meow-8327.mp3",
        purring: "Audio/catAudio/purring-cat-77928.mp3",
        growling: "./Audio/catAudio/ANMLCat_Growling cat 3 (ID 1887)_BSB.wav",
        yawn: "./Audio/catAudio/a-yawn-7011.mp3",
        reowr: "./Audio/catAudio/ANMLCat_Little meow of a cat (ID 0494)_BSB.wav",
        // FX
        horrorDrum1: "./Audio/FX/mixkit-hard-horror-hit-drum-565.wav",
        horrorDrum2: "./Audio/FX/mixkit-horror-deep-drum-heartbeat-559.wav",
        dive: "./Audio/FX/5-meters-dive-6070.mp3",
        slimeSound: "./Audio/FX/slimey-97605.mp3",
        chompEat: "./Audio/FX/eating-sound-effect-36186.mp3",
        fishEat: "./Audio/FX/Fish Eat (Nr. 2  Fortnite Sound) - Sound Effect for editing.mp3",
        dryFood: "./Audio/FX/cat-eating-dry-food-133130.mp3",
        bubblingInTheDeep: "./Audio/FX/BlubbernInTiefe.mp3",
        lightbubbling: "./Audio/FX/BlubbernLeisesPlanschen.mp3",
        footstepsGrass: "./Audio/FX/mixkit-walking-on-grass-1921.wav",
        frogQuak: "./Audio/FX/frog-qua-cry-36013.mp3",
        frogQuaks: "./Audio/FX/frog_quak-81741.mp3",
        snailbreak: "./Audio/FX/finger-cracking-40991.mp3",
        monster: "./Audio/FX/monster-rumble-99026.mp3",
        goats: "./Audio/FX/sheep-bleating-31117.mp3",
        wildRoar: "./Audio/FX/mixkit-big-wild-cat-slow-moan-90.wav",
        taikoDrum: "./Audio/FX/taiko-drumloop-001-120-97780.mp3",
        breathing: "./Audio/FX/fear-breathing-14825.mp3",
        Howling: "./Audio/FX/scary-wood-74661.mp3"
    };
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    //CHARACTERS
    ACatInLimbo.characters = {
        protagonist: {
            name: ACatInLimbo.dataForSave.nameProtagonist,
            origin: ACatInLimbo.ƒS.ORIGIN.BOTTOMCENTER,
        },
        pinkCat: {
            name: "pinkCat",
            origin: ACatInLimbo.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                //pink Cat poses regular
                normal: "./Images/Characters/pinkCat/pinkCatNormal.png",
                normalLookingAway: "./Images/Characters/pinkCat/pinkCatNormalFromBehind.png",
                normalAngry: "./Images/Characters/pinkCat/pinkCatNormalAngry.png",
                normalSad: "./Images/Characters/pinkCat/pinkCatNormalSad.png",
                fromBehindLookingAway: "./Images/Characters/pinkCat/pinkCatBehind.png",
                fromBehindLookingBack: "./Images/Characters/pinkCat/pinkCatBehindLook.png",
                scared: "./Images/Characters/pinkCat/pinkCatScared.png",
                cleaningAss: "./Images/Characters/pinkCat/pinkCatCleaningAss.png",
                cleaningPaw: "./Images/Characters/pinkCat/pinkCatCleaningPaw.png",
                curious: "./Images/Characters/pinkCat/pinkCatCurious.png",
                derpy1: "./Images/Characters/pinkCat/pinkCatDerp1.png",
                derpy2: "./Images/Characters/pinkCat/pinkCatDerp2.png",
                lovely: "./Images/Characters/pinkCat/pinkCatLove.png",
                layingOnBack: "./Images/Characters/pinkCat/pinkCatOnBack.png",
                sleeping: "./Images/Characters/pinkCat/pinkCatSleeping.png",
                stretching: "./Images/Characters/pinkCat/pinkCatStretching.png",
                talking: "./Images/Characters/pinkCat/pinkCatTalking.png",
                talkingAngry: "./Images/Characters/pinkCat/pinkCatTalkingAngry.png",
                talkingSad: "./Images/Characters/pinkCat/pinkCatTalkingSad.png",
                thoughtful1: "./Images/Characters/pinkCat/pinkCatThoughtful1.png",
                thoughtful2: "./Images/Characters/pinkCat/pinkCatThoughtful2.png",
                thumbsUp: "./Images/Characters/pinkCat/pinkCatThumbsUp.png",
                walking: "./Images/Characters/pinkCat/pinkCatWalking.png",
                yawning: "./Images/Characters/pinkCat/pinkCatYawning.png",
                crouched: "./Images/Characters/pinkCat/pinkCatCrouched.png",
                crouchedLookingAway: "./Images/Characters/pinkCat/pinkCatCrouchedLookingAway.png",
                crouchedSad: "./Images/Characters/pinkCat/pinkCatCrouchedSad.png",
                crouchedAngry: "./Images/Characters/pinkCat/pinkCatCrouchedAngry.png",
                proud: "./Images/Characters/pinkCat/pinkCatProud.png",
                play1: "./Images/Characters/pinkCat/pinkCatplay1.png",
                play2: "./Images/Characters/pinkCat/pinkCatplay2.png",
                normal2: "./Images/Characters/pinkCat/pinkCatNormal2.png",
                normal2Sad: "./Images/Characters/pinkCat/pinkCatNormal2Sad.png",
                lookingUp: "./Images/Characters/pinkCat/pinkCatLookingUp.png",
                //pink Cat poses small 
                normalSmall: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatNormalSmall.png",
                scaredSmall: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatScaredSmall.png",
                scaredSmallTurnedRight: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatScaredSmallTurnedRight.png",
                curiousSmall: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatCuriousSmall.png",
                lovelySmall: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatLoveSmall.png",
                layingOnBackSmall: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatOnBackSmall.png",
                stretchingSmall: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatStretchingSmall.png",
                play1Small: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatPlay1Small.png",
                play2Small: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatPlay2Small.png",
                //pink Cat tiny (mountain scene with goats)
                cleaningAssTiny: "./Images/Characters/pinkCat/pinkCatTiny/pinkCatCleaningAssTiny.png",
                cleaningPawTiny: "./Images/Characters/pinkCat/pinkCatTiny/pinkCatCleaningPawTiny.png",
                lookingUpTiny: "./Images/Characters/pinkCat/pinkCatTiny/pinkCatLookingUpTiny.png",
                onBackTiny: "./Images/Characters/pinkCat/pinkCatTiny/pinkCatOnBackTiny.png",
                proudTiny: "./Images/Characters/pinkCat/pinkCatTiny/pinkCatProudTiny.png",
                loveTiny: "./Images/Characters/pinkCat/pinkCatTiny/pinkCatLoveTiny.png",
                //pink Cat as stone Statue awakes
                awakening1: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening1.png",
                awakening2: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening2.png",
                awakening3: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening3.png",
                awakening4: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening4.png",
                awakening5: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening5.png",
                awakening6: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening6.png",
                awakening7: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening7.png",
                awakening8: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening8.png"
            }
        },
        stonePedestal: {
            name: "stonePedestal",
            origin: ACatInLimbo.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                stonePedestal: "./Images/Characters/pinkCat/pinkCatAwakening/stonePedestal.png"
            }
        },
        spiderCreature: {
            name: "Spider Creature",
            origin: ACatInLimbo.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                attack: "./Images/Characters/creatures/spiderCreature/spiderCreatureLightAttack.png",
                attackBig: "./Images/Characters/creatures/spiderCreature/spiderCreatureLightAttackBig.png",
                normal: "./Images/Characters/creatures/spiderCreature/spiderCreatureLightNormal.png",
                sad: "./Images/Characters/creatures/spiderCreature/spiderCreatureLightSad.png",
                smile: "./Images/Characters/creatures/spiderCreature/spiderCreatureLightSmile.png"
            }
        },
        swampCreature: {
            name: "Swamp Creature",
            origin: ACatInLimbo.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Characters/creatures/swampCreature/swampCreatureNormal.png",
                asleep: "./Images/Characters/creatures/swampCreature/swampCreatureAsleep.png",
                lessWood1: "./Images/Characters/creatures/swampCreature/swampCreatureLessWood1.png",
                lessWood2: "./Images/Characters/creatures/swampCreature/swampCreatureLessWood2.png",
                noSnails: "./Images/Characters/creatures/swampCreature/swampCreatureNoSnails.png",
                smile: "./Images/Characters/creatures/swampCreature/swampCreatureSmile.png"
            }
        },
        lakeCreature: {
            name: "Lake Creature",
            origin: ACatInLimbo.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Characters/creatures/lakeCreature/lakeCreatureNormal.png",
                sideEye: "./Images/Characters/creatures/lakeCreature/lakeCreatureSideEye.png",
                hide: "./Images/Characters/creatures/lakeCreature/lakeCreatureHide.png",
                attack: "./Images/Characters/creatures/lakeCreature/lakeCreatureAttack.png",
                bait: "./Images/Characters/creatures/lakeCreature/lakeCreatureBait.png",
                smile: "./Images/Characters/creatures/lakeCreature/lakeCreatureSmile.png",
                cry: "./Images/Characters/creatures/lakeCreature/lakeCreatureCry.png",
                hardCry: "./Images/Characters/creatures/lakeCreature/lakeCreatureHardCry.png",
                heartEyes: "./Images/Characters/creatures/lakeCreature/lakeCreatureHeartEyes.png",
                heartEyesBroken: "./Images/Characters/creatures/lakeCreature/lakeCreatureHeartEyesBroken.png",
                hideSad: "./Images/Characters/creatures/lakeCreature/lakeCreatureHideSad.png",
                smileHeart: "./Images/Characters/creatures/lakeCreature/lakeCreatureSmileHeart.png",
            }
        },
        bayCreature: {
            name: "Bay Creature",
            origin: ACatInLimbo.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                armSide: "./Images/Characters/creatures/bayCreature/bayCreatureArmsSide.png",
                attack: "./Images/Characters/creatures/bayCreature/bayCreatureAttack.png",
                coin: "./Images/Characters/creatures/bayCreature/bayCreatureCoin.png",
                happy: "./Images/Characters/creatures/bayCreature/bayCreatureHappy.png",
                headAngry: "./Images/Characters/creatures/bayCreature/bayCreatureHeadAngry.png",
                headNormal: "./Images/Characters/creatures/bayCreature/bayCreatureHeadNormal.png",
                heart: "./Images/Characters/creatures/bayCreature/bayCreatureHeart.png",
                lookingDownSad: "./Images/Characters/creatures/bayCreature/bayCreatureLookindDownSad.png",
                lookingDown: "./Images/Characters/creatures/bayCreature/bayCreatureLookingDown.png",
                normal: "./Images/Characters/creatures/bayCreature/bayCreatureNormal.png",
                talking: "./Images/Characters/creatures/bayCreature/bayCreatureTalking.png",
                talkingAngry: "./Images/Characters/creatures/bayCreature/bayCreatureTalkingAngry.png",
                glow: "./Images/Characters/creatures/bayCreature/bayGlow.png",
                happyHeart: "./Images/Characters/creatures/bayCreature/bayCreatureHappyHeart.png"
            }
        },
        caveCreature: {
            name: "Cave Creature",
            origin: ACatInLimbo.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Characters/creatures/caveCreature/caveCreatureNormal.png",
                sound: "./Images/Characters/creatures/caveCreature/caveCreatureSound.png",
                toungeOut: "./Images/Characters/creatures/caveCreature/caveCreaturOpenMouth.png",
                attack: "./Images/Characters/creatures/caveCreature/caveCreatureAttack.png"
            }
        },
        death: {
            name: "Death",
            origin: ACatInLimbo.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                fishingLookingDown: "./Images/Characters/death/deathFishingLookingDown.png",
                fishingLookingUp: "./Images/Characters/death/deathFishingLookingUp.png",
                normal: "./Images/Characters/death/deathNormal.png",
                smile: "./Images/Characters/death/deathSmile.png",
                evilSmile: "./Images/Characters/death/deathEvilSmile.png",
                angry: "./Images/Characters/death/deathAngry.png",
                surprised: "./Images/Characters/death/deathSurprised.png",
                DeathBigAtGate: "./Images/Characters/death/deathBigAtGate.png",
            }
        },
        goats: {
            name: "Goats",
            origin: ACatInLimbo.ƒS.ORIGIN.CENTER,
            pose: {
                allGoats: "./Images/Characters/creatures/goats/mountainGoats.png",
                singleGoat: "./Images/Characters/creatures/goats/singleGoatLookingAtCat.png"
            }
        },
        path: {
            name: "Path",
            origin: ACatInLimbo.ƒS.ORIGIN.CENTER,
            pose: {
                meadowForest: "./Images/Map/meadowForest.png",
                meadowLake: "./Images/Map/meadowLake.png",
                forestLake: "./Images/Map/forestLake.png",
                forestSwamp: "./Images/Map/forestSwamp.png",
                lakeSwamp: "./Images/Map/lakeSwamp.png",
                swampRiver: "./Images/Map/swampRiver.png",
                swampBay: "./Images/Map/swampBay.png",
                bayRiver: "./Images/Map/bayRiver.png",
                bayCave: "./Images/Map/bayCave.png",
                riverCave: "./Images/Map/riverCave.png",
                riverMountains: "./Images/Map/riverMountains.png",
                mountainsClouds: "./Images/Map/mountainsClouds.png",
                caveClouds: "./Images/Map/caveClouds.png",
                cloudsGate: "./Images/Map/cloudsGate.png"
            }
        },
        riverflow: {
            name: "Riverflow",
            origin: ACatInLimbo.ƒS.ORIGIN.CENTER,
            pose: {
                plain: "./Images/Backgrounds/Riverflow/riverflow.png",
                flow1: "./Images/Backgrounds/Riverflow/riverflow1.png",
                flow2: "./Images/Backgrounds/Riverflow/riverflow2.png",
                flow3: "./Images/Backgrounds/Riverflow/riverflow3.png",
                flowWaving3: "./Images/Backgrounds/Riverflow/riverflow3Waving.png",
                flow4: "./Images/Backgrounds/Riverflow/riverflow4.png",
                flowWaving4: "./Images/Backgrounds/Riverflow/riverflow4Waving.png",
                flow5: "./Images/Backgrounds/Riverflow/riverflow5.png",
                flow6: "./Images/Backgrounds/Riverflow/riverflow6.png"
            }
        },
        gateCloser: {
            name: "GateCLoser",
            origin: ACatInLimbo.ƒS.ORIGIN.CENTER,
            pose: {
                closer1: "./Images/Backgrounds/GateCloser/gateDeathCloser1.png",
                closer2: "./Images/Backgrounds/GateCloser/gateDeathCloser2.png",
                closer3: "./Images/Backgrounds/GateCloser/gateDeathCloser3.png",
                closer4: "./Images/Backgrounds/GateCloser/gateDeathCloser4.png",
                closer5: "./Images/Backgrounds/GateCloser/gateDeathCloser5.png"
            }
        },
        snail: {
            name: "Snail",
            origin: ACatInLimbo.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Items/snail.png"
            }
        },
        skyworm: {
            name: "Skyworm",
            origin: ACatInLimbo.ƒS.ORIGIN.CENTER,
            pose: {
                normal: "./Images/Characters/creatures/skyworm/skywormNormal.png",
                friendly: "./Images/Characters/creatures/skyworm/skywormFriendly.png",
                thinking: "./Images/Characters/creatures/skyworm/skywormThinking.png",
                evil: "./Images/Characters/creatures/skyworm/skywormEvil.png",
                excited: "./Images/Characters/creatures/skyworm/skywormExcited.png",
                cheeky: "./Images/Characters/creatures/skyworm/skywormCheeky.png",
                dreaming: "./Images/Characters/creatures/skyworm/skywormDreaming.png",
                smelling: "./Images/Characters/creatures/skyworm/skywormSmelling.png",
                persuading: "./Images/Characters/creatures/skyworm/skyWormPersuading.png",
                fin: "./Images/Characters/creatures/skyworm/skywormFin.png",
                bye: "./Images/Characters/creatures/skyworm/skywormBye.png",
                disappearing: "./Images/Characters/creatures/skyworm/sykwormDisappearing.png",
                angry: "./Images/Characters/creatures/skyworm/skywormAngry.png",
                angry2: "./Images/Characters/creatures/skyworm/skywormAngry2.png",
                cliffEdge: "./Images/Characters/creatures/skyworm/skywormCliffEdge.png"
            }
        },
        //Cats in Heaven
        orangeCat: {
            name: "OrangeCat",
            origin: ACatInLimbo.ƒS.ORIGIN.CENTER,
            pose: {
                looking: "./Images/Characters/catsInHeaven/orangeCatLooking.png",
                reading: "./Images/Characters/catsInHeaven/orangeCatReading.png",
                waving: "./Images/Characters/catsInHeaven/orangeCatWaving.png"
            }
        },
        blueCat: {
            name: "BlueCat",
            origin: ACatInLimbo.ƒS.ORIGIN.CENTER,
            pose: {
                flying: "./Images/Characters/catsInHeaven/flyingCatBlue.png",
            }
        },
        roseCat: {
            name: "RoseCat",
            origin: ACatInLimbo.ƒS.ORIGIN.CENTER,
            pose: {
                flying: "./Images/Characters/catsInHeaven/flyingCatRose.png",
            }
        },
        catGod: {
            name: "CatGod",
            origin: ACatInLimbo.ƒS.ORIGIN.CENTER,
            pose: {
                normal: "./Images/Characters/catsInHeaven/catGodNormal.png",
                smile: "./Images/Characters/catsInHeaven/catGodSmile.png",
                lookingLeft: "./Images/Characters/catsInHeaven/catGodLeft.png",
                lookingRight: "./Images/Characters/catsInHeaven/catGodRight.png"
            }
        },
        multipleCats: {
            name: "MultipleCats",
            origin: ACatInLimbo.ƒS.ORIGIN.CENTER,
            pose: {
                curious: "./Images/Characters/catsInHeaven/curiousCats.png"
            }
        },
    };
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    ACatInLimbo.items = {
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
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    ACatInLimbo.locations = {
        forest: {
            name: "Forest",
            background: "Images/Backgrounds/darkforest.png"
        },
        bay: {
            name: "Bay",
            background: "Images/Backgrounds/bay.png"
        },
        lake: {
            name: "Lake",
            background: "Images/Backgrounds/lake.png"
        },
        meadow: {
            name: "Meadow",
            background: "Images/Backgrounds/meadow.png"
        },
        swamp: {
            name: "Swamp",
            background: "Images/Backgrounds/swampFireflies.png"
        },
        river: {
            name: "River",
            background: "Images/Backgrounds/river.png"
        },
        map: {
            name: "Map",
            background: "./Images/Map/map.png"
        },
        riverflow: {
            name: "Riverflow",
            background: "./Images/Backgrounds/Riverflow/riverflow.png"
        },
        caveEntrance: {
            name: "CaveEntrance",
            background: "./Images/Backgrounds/entranceCave.png"
        },
        caveInside: {
            name: "CaveInside",
            background: "./Images/Backgrounds/insideCave.png"
        },
        caveInsideDark: {
            name: "CaveInsideDark",
            background: "./Images/Backgrounds/insideCaveDark.png"
        },
        caveExit: {
            name: "CaveExit",
            background: "./Images/Backgrounds/exitCave.png"
        },
        mountains: {
            name: "Mountains",
            background: "./Images/Backgrounds/mountains.png"
        },
        clouds: {
            name: "Clouds",
            background: "./Images/Backgrounds/clouds.png"
        },
        gate: {
            name: "Gate",
            background: "./Images/Backgrounds/gate.png",
        },
        //GateCloser
        gateCloser5: {
            name: "Gate",
            background: "./Images/Backgrounds/GateCloser/gateDeathCloser5.png",
        },
        //Endings Screens
        badEndingFrog: {
            name: "BadEndingFrog",
            background: "./Images/Backgrounds/EndingScreens/badEndingFrog.png",
        },
        badEndingFrogFin: {
            name: "BadEndingFrogFin",
            background: "./Images/Backgrounds/EndingScreens/badEndingFrogFin.png",
        },
        badEndingHell: {
            name: "BadEndingHell",
            background: "./Images/Backgrounds/EndingScreens/badEndingHell.png",
        },
        badEndingHellFin: {
            name: "BadEndingHellFin",
            background: "./Images/Backgrounds/EndingScreens/badEndingHellFin.png",
        },
        neutralEnding: {
            name: "NeutralEnding",
            background: "./Images/Backgrounds/EndingScreens/neutralEnding.png",
        },
        neutralEndingFin: {
            name: "NeutralEndingFin",
            background: "./Images/Backgrounds/EndingScreens/neutralEndingFin.png",
        },
        badEndingLostCat: {
            name: "BadEndingLostCat",
            background: "./Images/Backgrounds/EndingScreens/badEndingLostCat.png",
        },
        badEndingLostCatFin: {
            name: "BadEndingLostCatFin",
            background: "./Images/Backgrounds/EndingScreens/badEndingLostCatFin.png",
        },
        goodEndingNoCats: {
            name: "GoodEndingCats",
            background: "./Images/Backgrounds/EndingScreens/goodEndingNoCats.png",
        },
        goodEnding: {
            name: "GoodEnding",
            background: "./Images/Backgrounds/EndingScreens/goodEnding.png",
        },
        goodEndingFin: {
            name: "GoodEndingClean",
            background: "./Images/Backgrounds/EndingScreens/goodEndingFin.png",
        },
    };
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    //Transitions
    ACatInLimbo.transition = {
        swirlStuff: {
            duration: 2,
            alpha: "FreeTransitions/Others/027.jpg",
            edge: 1
        },
        circleSwirl: {
            duration: 2,
            alpha: "FreeTransitions/Others/009.jpg",
            edge: 1
        },
        hardEdges: {
            duration: 3,
            alpha: "./FreeTransitions/Others/024.jpg",
            edge: 1
        },
        wet1: {
            duration: 2,
            alpha: "./FreeTransitions/Others/002.jpg",
            edge: 1
        },
        wet2: {
            duration: 2,
            alpha: "./FreeTransitions/Others/wet.jpg",
            edge: 1
        },
        dots: {
            duration: 2,
            alpha: "./FreeTransitions/Others/017.png",
            edge: 1
        },
        wildSwirl: {
            duration: 2,
            alpha: "./FreeTransitions/Others/012.jpg",
            edge: 1
        },
        straightLines: {
            duration: 1,
            alpha: "./FreeTransitions/Others/005.jpg",
            edge: 1
        },
        maze: {
            duration: 1,
            alpha: "./FreeTransitions/Others/003.jpg",
            edge: 1
        },
        swirl: {
            duration: 1,
            alpha: "./FreeTransitions/Others/swirl.png",
            edge: 1
        },
        circleWipeCCW: {
            duration: 1,
            alpha: "./FreeTransitions/WipesAndOther/circlewipe-ccw.jpg",
            edge: 1
        },
        fuzzyPatches: {
            duration: 5,
            alpha: "./FreeTransitions/WipesAndOther/12.jpg",
            edge: 1
        },
        sunCatcher: {
            duration: 3,
            alpha: "./FreeTransitions/Others/019.png",
            edge: 1
        },
        badEndingLostCat: {
            duration: 4,
            alpha: "./FreeTransitions/WipesAndOther/1.jpg",
            edge: 1
        },
        goodEnding: {
            duration: 3,
            alpha: "./FreeTransitions/Others/021.png",
            edge: 1
        },
        neutralEnding: {
            duration: 3,
            alpha: "./FreeTransitions/Others/015.jpg",
            edge: 1
        },
        badEndingFrog: {
            duration: 6,
            alpha: "./FreeTransitions/Others/040.jpg",
            edge: 1
        },
        badEndingHell: {
            duration: 4,
            alpha: "./FreeTransitions/Others/023.png",
            edge: 1
        }
        // ./FreeTransitions/Others/015.jpg
    };
})(ACatInLimbo || (ACatInLimbo = {}));
;
var ACatInLimbo;
(function (ACatInLimbo) {
    async function Bay() {
        console.log("Scene starting: Bay");
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForCat").style.display = "";
        ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Snail);
        ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Snail);
        ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Snail);
        ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Snail);
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.smallOceanWaves, 0.5, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.bay);
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.wildSwirl.duration, ACatInLimbo.transition.wildSwirl.alpha, ACatInLimbo.transition.wildSwirl.edge);
        //if you have already visited bay and not visited lake twice to give lake creature heart back: choose next location
        if (ACatInLimbo.dataForSave.visitedBay == true) {
            //if you have visited lake twice and have given lake creature heart back
            if (ACatInLimbo.dataForSave.visitedLakeTwice == true && ACatInLimbo.dataForSave.talkedWithBayCreatureTwice == false) {
                ACatInLimbo.dataForSave.talkedWithBayCreatureTwice = true;
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Hey, what's up!");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.headNormal, ACatInLimbo.ƒS.positionPercent(60, 82));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Lake creature was really happy to get it's heart back!");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.dive, 1, false);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.happyHeart, ACatInLimbo.ƒS.positionPercent(60, 82));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.bayCreature, "blblblbHablppy!");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.coin, ACatInLimbo.ƒS.positionPercent(60, 82));
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Is that for us? Thank you, that's really nice!");
                await ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Coin);
                await ACatInLimbo.ƒS.update();
                ACatInLimbo.ƒS.Text.print("A coin an has been added to your inventory");
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.happyHeart, ACatInLimbo.ƒS.positionPercent(60, 82));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.bayCreature, "Blblbl");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.dive, 1, false);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.headNormal, ACatInLimbo.ƒS.positionPercent(60, 82));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update(2);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "A coin? That could be helpful!");
                await ACatInLimbo.ƒS.update();
            }
            //pick next Location
            let nextLocation = {
                river: "River",
                cave: "Cave",
            };
            ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.smallOceanWaves, 0, 2);
            let nextLocationRequest = await ACatInLimbo.ƒS.Menu.getInput(nextLocation, "choicesCSSClass");
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            switch (nextLocationRequest) {
                case nextLocation.river:
                    ACatInLimbo.dataForSave.currentPath = "BayToRiver";
                    return "Map Scene";
                    break;
                case nextLocation.cave:
                    ACatInLimbo.dataForSave.currentPath = "BayToCave";
                    return "Map Scene";
                    break;
            }
        }
        ACatInLimbo.dataForSave.visitedBay = true;
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.sleeping, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Aaah, the sea. Salt air. Cool Breeze. Adventure in my soul.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.yawning, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update(2);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "You should design wall decals.");
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "You're a grumpy, mean little cat.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "How dare you!?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Excuse me?");
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "I've been here far too long, only to get to live once every few decades, and then spend all my time guiding some lost souls with no sense of direction through the countryside.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouchedLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Most of the time they fail, but that's not my fault! I'm just being treated very poorly here.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouchedSad, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "I get no tips, no holidays, only working hours and then eternal sleep without relaxation.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "I want to retire, I'm exhausted! And now I have to put up with your insolence!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Jesus, you're mad, huh?");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Hmpf.");
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.glow, ACatInLimbo.ƒS.positionPercent(60, 82));
        await ACatInLimbo.ƒS.update(3);
        let howToTreatGrumpyCat = {
            solution: "Offer solution.",
            ask: "Ask for more info about the job"
        };
        let howToTreatGrumpyCatRequest = await ACatInLimbo.ƒS.Menu.getInput(howToTreatGrumpyCat, "choicesCSSClass");
        switch (howToTreatGrumpyCatRequest) {
            case howToTreatGrumpyCat.solution:
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Maybe you should speak with HR, I don't know how it works, but...", false);
                await ACatInLimbo.ƒS.update();
                ACatInLimbo.dataForSave.catScore -= 5;
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouchedLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Forget it.");
                await ACatInLimbo.ƒS.update();
                //check for catScore and hndl badEnding LostCat
                if (ACatInLimbo.dataForSave.catScore >= 0) {
                    console.log("cat is not running away");
                }
                else {
                    ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.smallOceanWaves, 0, 2);
                    await ACatInLimbo.ƒS.Progress.save();
                    console.log("cat should run away");
                    return "BadEnding LostCat Scene";
                }
                break;
            case howToTreatGrumpyCat.ask:
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Who's your boss?");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Oh, you know him.");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Okaayyyy....Why do you not quit?");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Good idea, " + ACatInLimbo.dataForSave.nameProtagonist + "! Thanks for reminding me of the option!");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouchedLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "It's complicated, okay?");
                await ACatInLimbo.ƒS.update();
                break;
        }
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Wait, what's that in the water?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.play1Small, ACatInLimbo.ƒS.positionPercent(51, 84));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.cuteMeowMultiple, 1.5, false);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.play2Small, ACatInLimbo.ƒS.positionPercent(51, 84));
        await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.cuteMeowMultiple, 0, 2);
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.cathissing, 1, false);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.scaredSmallTurnedRight, ACatInLimbo.ƒS.positionPercent(40, 86));
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.dive, 1, false);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.attack, ACatInLimbo.ƒS.positionPercent(60, 82));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.headAngry, ACatInLimbo.ƒS.positionPercent(60, 82));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.scared, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "It almost got you!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.headNormal, ACatInLimbo.ƒS.positionPercent(60, 82));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Almost. But I think it can't get out of the water, so we should be safe.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.dive, 1, false);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.armSide, ACatInLimbo.ƒS.positionPercent(60, 82));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Wtf. Does it have two hearts there in it's body?");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Wait.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.lookingDown, ACatInLimbo.ƒS.positionPercent(60, 82));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingBack, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "You think that might be the lake creatures heart?");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "It's possible.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(60, 82));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.bayCreature, "blblbl");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "This creature seems less compromise-oriented though.");
        //had to implement in case you have no snails due to saving+loading or not getting the snails in the first place (from swamp creature)
        if (ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Snail) <= 0) {
            console.log("no snail sin inventory");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Mhm, we don't really have anything to feed it...To bad we lost those snails, huh?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Yeah, too bad. Whatever, I guess.");
            await ACatInLimbo.ƒS.update();
            let nextLocation = {
                river: "River",
                cave: "Cave",
            };
            ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.smallOceanWaves, 0, 2);
            let nextLocationRequest = await ACatInLimbo.ƒS.Menu.getInput(nextLocation, "choicesCSSClass");
            await ACatInLimbo.ƒS.Character.hideAll();
            ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.smallOceanWaves, 0, 2);
            switch (nextLocationRequest) {
                case nextLocation.river:
                    ACatInLimbo.dataForSave.currentPath = "BayToRiver";
                    return "Map Scene";
                    break;
                case nextLocation.cave:
                    ACatInLimbo.dataForSave.currentPath = "BayToCave";
                    return "Map Scene";
                    break;
            }
        }
        let feedBayCreature = {
            feed: "Feed snails",
            talk: "Try to talk it out"
        };
        let feedBayCreatureRequest = await ACatInLimbo.ƒS.Menu.getInput(feedBayCreature, "choicesCSSClass");
        switch (feedBayCreatureRequest) {
            case feedBayCreature.talk:
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Listen, we've met a friend from a lake who is really really sad. It lost its heart. We thought you could have it, as you have two hearts!");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(60, 82));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.bayCreature, "blblbllb get blblost!");
                await ACatInLimbo.ƒS.update();
            //   pickedTalk = true;
            case feedBayCreature.feed:
                //  pickedFeed = true;
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Let's give it some snails or something...");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "They're MY snails!");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal2Sad, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "...We only have four. Maybe don't use all of them up, okay?");
                break;
        }
        let feedSnails = {
            feed: "Feed a snail",
            stop: "Stop Feeding"
        };
        let pickedStop = false;
        let pickedSnail = false;
        do {
            let feedSnailsRequest;
            if (pickedStop == true) {
                delete feedSnails.feed;
                delete feedSnails.stop;
            }
            feedSnailsRequest = await ACatInLimbo.ƒS.Menu.getInput(feedSnails, "choicesCSSClass");
            switch (feedSnailsRequest) {
                case feedSnails.feed:
                    ACatInLimbo.ƒS.Speech.hide();
                    pickedSnail = true;
                    if (ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Snail) >= 1) {
                        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.slimeSound, 1, false);
                        ACatInLimbo.ƒS.Inventory.subtract(ACatInLimbo.items.Snail);
                    }
                    else {
                        ACatInLimbo.dataForSave.catScore -= 10;
                        pickedStop = true;
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Awesome, you used all my snails. Thanks a lot. Idiot.");
                        ACatInLimbo.ƒS.update();
                    }
                    //check for catScore and hndl badEnding LostCat
                    if (ACatInLimbo.dataForSave.catScore >= 0) {
                        console.log("cat is not running away");
                    }
                    else {
                        ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.smallOceanWaves, 0, 2);
                        await ACatInLimbo.ƒS.Progress.save();
                        console.log("cat should run away");
                        return "BadEnding LostCat Scene";
                    }
                    break;
                case feedSnails.stop:
                    if (pickedSnail == true) {
                        pickedStop = true;
                    }
                    else {
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "I don't like it, but I guess it's important the creature trusts us. We need to feed it at least one snail.");
                        ACatInLimbo.ƒS.update();
                    }
                    break;
            }
        } while (!pickedStop);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.happy, ACatInLimbo.ƒS.positionPercent(60, 82));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Okay, now it looks definitely happier. So, do you know anything about a friend we met in a lake? He is looking for his heart.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.talking, ACatInLimbo.ƒS.positionPercent(60, 82));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.bayCreature, "blblblLake?");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Yes, Lake! Big, a bit slimy and very dramatic character! Also, very very sad.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.lookingDown, ACatInLimbo.ƒS.positionPercent(60, 82));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.bayCreature, "bbllblblb");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.lookingDownSad, ACatInLimbo.ƒS.positionPercent(60, 82));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.bayCreature, "blbllSaaad");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "What is it doing?");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "I think...");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.heart, ACatInLimbo.ƒS.positionPercent(60, 82));
        await ACatInLimbo.ƒS.update(1);
        //add lake creatures heart
        await ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Heart);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Wow, we really got it! Thanks!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.happyHeart, ACatInLimbo.ƒS.positionPercent(60, 82));
        await ACatInLimbo.ƒS.update(1);
        ACatInLimbo.ƒS.Text.print("A heart has been added to your inventory");
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal2, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Great. We don't have any time to lose. Do you still want to help the Lake Creature?");
        await ACatInLimbo.ƒS.update();
        //conversation about helping or not helping
        let helpLakeCreature = {
            help: "bring heart to lake Creature",
            dontHelp: "move forward"
        };
        let helpLakeCreatureRequest = await ACatInLimbo.ƒS.Menu.getInput(helpLakeCreature, "choicesCSSClass");
        switch (helpLakeCreatureRequest) {
            case helpLakeCreature.help:
                ACatInLimbo.dataForSave.catScore += 10;
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
                ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.smallOceanWaves, 0, 2);
                ACatInLimbo.dataForSave.currentPath = "BayToLake";
                return "Map Scene";
                break;
            case helpLakeCreature.dontHelp:
                ACatInLimbo.dataForSave.catScore -= 10;
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "No. We should hurry. Come on.");
                await ACatInLimbo.ƒS.update();
                //check for catScore and hndl badEnding LostCat
                if (ACatInLimbo.dataForSave.catScore >= 0) {
                    console.log("cat is not running away");
                }
                else {
                    ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.smallOceanWaves, 0, 2);
                    await ACatInLimbo.ƒS.Progress.save();
                    console.log("cat should run away");
                    return "BadEnding LostCat Scene";
                }
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
                await ACatInLimbo.ƒS.update();
                let nextLocation = {
                    river: "River",
                    cave: "Cave",
                };
                ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.smallOceanWaves, 0, 2);
                let nextLocationRequest = await ACatInLimbo.ƒS.Menu.getInput(nextLocation, "choicesCSSClass");
                switch (nextLocationRequest) {
                    case nextLocation.river:
                        ACatInLimbo.dataForSave.currentPath = "BayToRiver";
                        return "Map Scene";
                        break;
                    case nextLocation.cave:
                        ACatInLimbo.dataForSave.currentPath = "BayToCave";
                        return "Map Scene";
                        break;
                }
                break;
        }
    }
    ACatInLimbo.Bay = Bay;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function CaveEntrance() {
        console.log("Scene starting: Cave Entrance");
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForCat").style.display = "";
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.meadowSound, 0.5, true);
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.forestWind, 1, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.caveEntrance);
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.maze.duration, ACatInLimbo.transition.maze.alpha, ACatInLimbo.transition.maze.edge);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.walking, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalSad, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "I hate caves.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal2, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "It's gonna be dark in there. Do we have anything that can provide some light?");
        await ACatInLimbo.ƒS.update();
        if (ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Fireflies) < 1) {
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Unfortunately, we don't. what should we do?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "It's your decision, but obviously we won't see much. It could get dangerous.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
        }
        else {
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Yes! We could use those fireflies the swamp creature gave us!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Hmpf. Great.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
        }
        let getInCave = {
            turnAround: "Turn Around",
            enter: "Enter Cave"
        };
        let getInCaveRequest = await ACatInLimbo.ƒS.Menu.getInput(getInCave, "choicesCSSClass");
        switch (getInCaveRequest) {
            case getInCave.enter:
                ACatInLimbo.dataForSave.catScore -= 10;
                //check for catScore and hndl badEnding LostCat
                if (ACatInLimbo.dataForSave.catScore >= 0) {
                    console.log("cat is not running away");
                }
                else {
                    ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.forestWind, 0, 10);
                    ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.meadowSound, 0, 10);
                    await ACatInLimbo.ƒS.Progress.save();
                    console.log("cat should run away");
                    return "BadEnding LostCat Scene";
                }
                ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.forestWind, 0, 2);
                ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.meadowSound, 0, 2);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                return "Cave Inside Scene";
                break;
            case getInCave.turnAround:
                let nextLocation = {
                    river: "River",
                    bay: "Bay",
                };
                ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.forestWind, 0, 2);
                ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.meadowSound, 0, 2);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                let nextLocationRequest = await ACatInLimbo.ƒS.Menu.getInput(nextLocation, "choicesCSSClass");
                switch (nextLocationRequest) {
                    case nextLocation.bay:
                        ACatInLimbo.dataForSave.currentPath = "CaveToBay";
                        return "Map Scene";
                        break;
                    case nextLocation.river:
                        ACatInLimbo.dataForSave.currentPath = "CaveToRiver";
                        return "Map Scene";
                        break;
                }
                break;
        }
    }
    ACatInLimbo.CaveEntrance = CaveEntrance;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function CaveExit() {
        console.log("Scene starting: Cave Exit");
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.forestWind, 1, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.caveExit);
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.circleWipeCCW.duration, ACatInLimbo.transition.circleWipeCCW.alpha, ACatInLimbo.transition.circleWipeCCW.edge);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Omg, that was close!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingBack, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Yeah, we're lucky, we brought those snails with us!");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "True.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Now, it's not much further.");
        await ACatInLimbo.ƒS.update();
        ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.forestWind, 0, 3);
        ACatInLimbo.dataForSave.currentPath = "CaveToClouds";
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        return "Map Scene";
    }
    ACatInLimbo.CaveExit = CaveExit;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function CaveInside() {
        console.log("Scene starting: Cave Inside");
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.DrippingInCave, 1, true);
        if (ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Fireflies) < 1) {
            await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.caveInsideDark);
            await ACatInLimbo.ƒS.update(ACatInLimbo.transition.swirl.duration, ACatInLimbo.transition.swirl.alpha, ACatInLimbo.transition.swirl.edge);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.walking, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await new Promise(resolve => setTimeout(resolve, 3000));
            ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.monster, 0.5, false);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "This does not feel good.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouched, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "I told you so.");
            ACatInLimbo.ƒS.Sound;
            ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.frogQuaks, 1, false);
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "What is that?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.horrorDrum2, 1, false);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.caveCreature, ACatInLimbo.characters.caveCreature.pose.attack, ACatInLimbo.ƒS.positionPercent(40, 95));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.cathissing, 1, false);
            await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.scared, ACatInLimbo.ScaredCatAnimation());
            await ACatInLimbo.ƒS.update(1);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Nooo!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.caveCreature);
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.update();
            ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.DrippingInCave, 0, 3);
            return "BadEnding Cave Scene";
        }
        else {
            await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.caveInside);
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.proud, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "So, as it turned out, helping the swamp creature payed off.");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Totally!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.frogQuaks, 1, false);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Eh, what was that? That sounds like we're not alone in here.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Chill, it's just some frogs probably.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.caveCreature, ACatInLimbo.characters.caveCreature.pose.sound, ACatInLimbo.ƒS.positionPercent(45, 70));
            ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.frogQuak, 1, false);
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Welp, nevermind. It wasn't here last time I visited this cave. But it looks quite old...");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "I guess? How can you tell?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.caveCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.caveCreature, ACatInLimbo.characters.caveCreature.pose.normal, ACatInLimbo.ƒS.positionPercent(45, 70));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Experience.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Let's give it some snails to distract it.");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "What? I thought you wanted them so badly?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "I'm your guide for a reason. This creature comes from a very dark place. Let's not take any chances.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal2, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Alright, alright.");
            await ACatInLimbo.ƒS.update();
            if (ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Snail) < 1) {
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "It's just...Apparently, I don't have any snails left.");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Ah, yes, of course, you gave all of the to the bay creature.");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "What can I say, I didn't know we would still need them!");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Damnit.");
                await ACatInLimbo.ƒS.update();
                ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.frogQuak, 1, false);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.caveCreature);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.caveCreature, ACatInLimbo.characters.caveCreature.pose.sound, ACatInLimbo.ƒS.positionPercent(45, 70));
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouchedLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.caveCreature);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.caveCreature, ACatInLimbo.characters.caveCreature.pose.toungeOut, ACatInLimbo.ƒS.positionPercent(40, 95));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Oh fuck.");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.caveCreature);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.caveCreature, ACatInLimbo.characters.caveCreature.pose.attack, ACatInLimbo.ƒS.positionPercent(40, 95));
                ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.cathissing, 1, false);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.scared, ACatInLimbo.ScaredCatAnimation());
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Nooo!");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.caveCreature);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.update();
                ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.DrippingInCave, 0, 3);
                return "BadEnding Cave Scene";
            }
            else {
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Luckily, I have a bit of snail left.");
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Throw it to the left!");
                ACatInLimbo.ƒS.Inventory.subtract(ACatInLimbo.items.Snail);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.snail, ACatInLimbo.characters.snail.pose.normal, ACatInLimbo.snailThrow());
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.caveCreature);
                await ACatInLimbo.ƒS.update(1);
                ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.snailbreak, 1, false);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Let's move on quickly now!");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.DrippingInCave, 0, 3);
                return "Cave Exit Scene";
            }
            //monstergrowl einbauen
            //evtl animation für frog einbauen
        }
    }
    ACatInLimbo.CaveInside = CaveInside;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function Clouds() {
        console.log("Scene starting: Clouds");
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForCat").style.display = "";
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        // ƒS.Sound.play(sound.forestWind, 1, true);
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.relaxMusic, 0.1, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.clouds);
        // await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.multiple, ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouchedLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.fuzzyPatches.duration, ACatInLimbo.transition.fuzzyPatches.alpha, ACatInLimbo.transition.fuzzyPatches.edge);
        await new Promise(resolve => setTimeout(resolve, 3000));
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Wow!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouched, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Pretty great, huh?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouchedLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "It's amazing!");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "What are these things in the sky?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.thoughtful2, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Skyworms, I think.");
        if (ACatInLimbo.dataForSave.pathMountainClouds == true) {
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update(1);
            await new Promise(resolve => setTimeout(resolve, 1000));
            //geile spannende  mucke hier rein
            ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.taikoDrum, 1, false);
            ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.relaxMusic, 0, 1);
            await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.wildRoar, 0.4, false);
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.scared, ACatInLimbo.ƒS.positionPercent(85, 105));
            await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.evil, ACatInLimbo.skywormAppearing());
            await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.cathissing, 0.5, false);
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Whoa!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hideAll();
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.evil, ACatInLimbo.ƒS.positionPercent(50, 50));
            await ACatInLimbo.ƒS.update();
            ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.taikoDrum, 0, 2);
            ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.anxiousMarch, 0.3, true);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "For fuck's sake!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hideAll();
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.scared, ACatInLimbo.ƒS.positionPercent(85, 105));
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.evil, ACatInLimbo.ƒS.positionPercent(50, 50));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.skyworm, "I'm smelling something!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.excited, ACatInLimbo.ƒS.positionPercent(50, 50));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.skyworm, "I'm smelling...");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.smelling, ACatInLimbo.ƒS.positionPercent(50, 50));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.skyworm, "my FAVOURITE THING!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Please don't eat us!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hideAll();
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.persuading, ACatInLimbo.ƒS.positionPercent(50, 50));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Cats, pink cats especially, taste like rotten mice, I swear!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.thinking, ACatInLimbo.ƒS.positionPercent(50, 50));
            await ACatInLimbo.ƒS.update();
            ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.anxiousMarch, 0.1, 2);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.skyworm, "Cats? No shit! Blargh! I haven't tried a pink one, but you guys taste like litter box leftovers!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hideAll();
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouchedSad, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.thinking, ACatInLimbo.ƒS.positionPercent(50, 50));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Ouch?");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Lol, why do you feel offended?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hideAll();
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.thinking, ACatInLimbo.ƒS.positionPercent(50, 50));
            await ACatInLimbo.ƒS.update();
            await new Promise(resolve => setTimeout(resolve, 2000));
            await ACatInLimbo.ƒS.Character.hideAll();
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.thinking, ACatInLimbo.ƒS.positionPercent(50, 50));
            await ACatInLimbo.ƒS.update(1);
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.friendly, ACatInLimbo.ƒS.positionPercent(50, 50));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.skyworm, "No, what I'm smelling is...");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.excited, ACatInLimbo.ƒS.positionPercent(50, 50));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.skyworm, "GOATS!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.friendly, ACatInLimbo.ƒS.positionPercent(50, 50));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.skyworm, "You smell like goats.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hideAll();
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.derpy1, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.friendly, ACatInLimbo.ƒS.positionPercent(50, 50));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Whispering: <i>Oh no.</i>");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Whispering: <i>Just because you couldn't leave them alone.</i>");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal2Sad, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.thinking, ACatInLimbo.ƒS.positionPercent(50, 50));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Whispering: <i>Sorry, I love goats.</i>");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.evil, ACatInLimbo.ƒS.positionPercent(50, 50));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.skyworm, "WHAT ARE YOU WHISPERING ABOUT?!");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.skyworm, "I'm hearing goat-talk.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.excited, ACatInLimbo.ƒS.positionPercent(50, 50));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.skyworm, "You probably know where they are, right? RIGHT?!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.normal, ACatInLimbo.ƒS.positionPercent(50, 50));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.skyworm, " I'm always smelling them, but they are sneaky. Somehow they always get away from me.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hideAll();
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.normal, ACatInLimbo.ƒS.positionPercent(50, 50));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Whispering: <i>Poor guy.</i>");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.dreaming, ACatInLimbo.ƒS.positionPercent(50, 50));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.skyworm, "Except this one time. It was DELICIOUS!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.smelling, ACatInLimbo.ƒS.positionPercent(50, 50));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.skyworm, "DELICIOUS!!!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.persuading, ACatInLimbo.ƒS.positionPercent(50, 50));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.skyworm, "Tell me, where are they?");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "If we knew, why would we tell you? You're gonna eat them!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.cheeky, ACatInLimbo.ƒS.positionPercent(50, 50));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.skyworm, "Well, you know, I am good friends with a certain…ruler. I could whisper in his ear about how you've helped me out!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.dreaming, ACatInLimbo.ƒS.positionPercent(50, 50));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.skyworm, "Also, ha, it's just some goats! Kill one animal for the possibility of a happy afterlife? What do you say? Suddenly, a goat's life gets precious? I don't think so.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hideAll();
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.dreaming, ACatInLimbo.ƒS.positionPercent(50, 50));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Mhmm.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.angry2, ACatInLimbo.ƒS.positionPercent(50, 50));
            await ACatInLimbo.ƒS.update();
            let betrayGoats = {
                betrayGoats: "reveal goat hideout",
                dontBetrayGoats: "don't reveal goat hideout"
            };
            let betrayGoatsRequest = await ACatInLimbo.ƒS.Menu.getInput(betrayGoats, "choicesCSSClass");
            switch (betrayGoatsRequest) {
                case betrayGoats.betrayGoats:
                    ACatInLimbo.dataForSave.betrayGoats = true;
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "They live in small caves further down the mountain.");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.excited, ACatInLimbo.ƒS.positionPercent(50, 50));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.skyworm, "Caaaaves?");
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Small holes in the big stone we stand on.");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.evil, ACatInLimbo.ƒS.positionPercent(50, 50));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "You're a bitch, " + ACatInLimbo.dataForSave.nameProtagonist + ".");
                    ACatInLimbo.dataForSave.catScore -= 20;
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.persuading, ACatInLimbo.ƒS.positionPercent(50, 50));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Huh? Me?");
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Dude, I just want to live a peaceful afterlife!");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.cheeky, ACatInLimbo.ƒS.positionPercent(50, 50));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "You think they're gonna eat just one goat?");
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "It's gonna be a fucking massacre!");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.fin, ACatInLimbo.ƒS.positionPercent(50, 50));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "But they're all already dead! We're in Limbo, are we not?");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouchedAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.bye, ACatInLimbo.ƒS.positionPercent(50, 50));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Of course we are, but just because someone is already suffering does not excuse being an asshole to them or torturing and killing them fucking AGAIN!");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouchedLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
                    await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.disappearing, ACatInLimbo.skywormDisappearing());
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Fuck this.");
                    await ACatInLimbo.ƒS.update();
                    //check for catScore and hndl badEnding LostCat
                    if (ACatInLimbo.dataForSave.catScore >= 0) {
                        console.log("cat is not running away");
                    }
                    else {
                        ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.relaxMusic, 0, 10);
                        ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.anxiousMarch, 0, 10);
                        await ACatInLimbo.ƒS.Progress.save();
                        console.log("cat should run away");
                        return "BadEnding LostCat Scene";
                    }
                    break;
                case betrayGoats.dontBetrayGoats:
                    ACatInLimbo.dataForSave.catScore += 15;
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Nah, sorry, we don't really know where they are, right?");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.lovely, ACatInLimbo.ƒS.positionPercent(83, 99));
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.angry, ACatInLimbo.ƒS.positionPercent(50, 50));
                    await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.purrMeow, 1, false);
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    await ACatInLimbo.ƒS.update(1);
                    await ACatInLimbo.ƒS.Character.hideAll();
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.angry, ACatInLimbo.ƒS.positionPercent(50, 50));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Nooo, sorry! We met them but they were so damn fast!");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.wildRoar, 1, false);
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.evil, ACatInLimbo.ƒS.positionPercent(50, 50));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "What?! You're lying!");
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Nooo, we wouldn't! We like to eat goats, same as you! If you see them, could you do <i>us</i> a favor and tell us where they're hiding?");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.angry, ACatInLimbo.ƒS.positionPercent(50, 50));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.skyworm, "Hmpf, alright.");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.thinking, ACatInLimbo.ƒS.positionPercent(50, 50));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.skyworm, "Maybe...");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.angry2, ACatInLimbo.ƒS.positionPercent(50, 50));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.skyworm, "Damn little hiding artists.");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.fin, ACatInLimbo.ƒS.positionPercent(50, 50));
                    await ACatInLimbo.ƒS.update(2);
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.skyworm);
                    await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.skyworm, ACatInLimbo.characters.skyworm.pose.disappearing, ACatInLimbo.skywormDisappearing());
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Damn, " + ACatInLimbo.dataForSave.nameProtagonist + ", for a moment I thought you would betray those cute little goats.");
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Well, I thought about it, but it didn't seem right.");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(83, 99));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "It wouldn't have been right.");
                    await ACatInLimbo.ƒS.update();
                    break;
            }
            ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.anxiousMarch, 0, 7);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Let's get you to that damn gate.");
            await ACatInLimbo.ƒS.update();
        }
        else {
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "They're pretty");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.curious, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "From far away maybe... Once, i saw one up close.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "It was terrifying.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Mhm.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.cleaningAss, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "We should get going.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.cleaningPaw, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Before one notices us.");
            await ACatInLimbo.ƒS.update();
            ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.relaxMusic, 0, 4);
        }
        // ƒS.Sound.fade(sound.forestWind, 0, 4);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        return "Gate Scene";
    }
    ACatInLimbo.Clouds = Clouds;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function Empty() {
        console.log("THE VISUAL NOVEL ENDS HERE");
        let title = document.getElementById("title");
        title.innerText = "A Cat in Limbo";
        // await new Promise(resolve => setTimeout(resolve, 5000));
        // let endButtons = {
        //   replay: "Play again",
        //   replayFromLastScene: "Replay from last Scene"
        // }
        // let endButtonsRequest = await ƒS.Menu.getInput(endButtons, "choicesCSSClass");
        // switch (endButtonsRequest) {
        //   case endButtons.replay:
        //     window.location.reload();
        //     break;
        //   case endButtons.replayFromLastScene:
        //     await ƒS.Progress.load();
        //     break;
        // }
    }
    ACatInLimbo.Empty = Empty;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function Forest() {
        console.log("Scene starting: Forest");
        ACatInLimbo.dataForSave.visitedForest = true;
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForCat").style.display = "";
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.scaryForest, 2, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.forest);
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.circleSwirl.duration, ACatInLimbo.transition.circleSwirl.alpha, ACatInLimbo.transition.circleSwirl.edge);
        await ACatInLimbo.ƒS.update(2);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.walking, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "It's kinda eery here. Do we HAVE to be here?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.cleaningPaw, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "We don't HAVE to, but I want to visit an old friend. I want to see what he's been up to, you know?");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "...I don't like this place.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "That's cause you're a baby.");
        await ACatInLimbo.ƒS.update();
        //creature can be seen
        await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.normal, ACatInLimbo.spiderAnimationHide());
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.horrorDrum1, 1);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "!Oh, look! I think I just saw him!");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Come out you chicken shit!");
        await ACatInLimbo.ƒS.update();
        //Creature appears
        await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.normal, ACatInLimbo.spiderAnimationAppear());
        await ACatInLimbo.ƒS.update(2);
        await ACatInLimbo.ƒS.Character.hideAll();
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.horrorDrum2, 1);
        //creature attacks
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.attackBig, ACatInLimbo.ƒS.positionPercent(55, 55));
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.cathissing, 1);
        await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.scared, ACatInLimbo.ScaredCatAnimation());
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Uaaaah, fuck fuck fuck fuck, LET'S RUN!!!!", false);
        await ACatInLimbo.ƒS.update();
        //fight in foroest or flight to lake/swamp
        let fightFlight = {
            fight: "Fight",
            flight: "Flight"
        };
        let fightFlightRequest = await ACatInLimbo.ƒS.Menu.getInput(fightFlight, "choicesCSSClass");
        switch (fightFlightRequest) {
            //flight to lake or swamp
            case fightFlight.flight:
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.spiderCreature);
                await ACatInLimbo.ƒS.update();
                let nextLocation = {
                    swamp: "Swamp",
                    lake: "Lake"
                };
                //delete lake option if already visited
                if (ACatInLimbo.dataForSave.visitedLake == true) {
                    delete nextLocation.lake;
                }
                ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.scaryForest, 0, 2);
                let nextLocationRequest = await ACatInLimbo.ƒS.Menu.getInput(nextLocation, "choicesCSSClass");
                switch (nextLocationRequest) {
                    case nextLocation.lake:
                        ACatInLimbo.dataForSave.currentPath = "ForestToLake";
                        return "Map Scene";
                        break;
                    case nextLocation.swamp:
                        ACatInLimbo.dataForSave.currentPath = "ForestToSwamp";
                        return "Map Scene";
                        break;
                }
                break;
            //fight in forest
            case fightFlight.fight:
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.attack, ACatInLimbo.ƒS.positionPercent(50, 50));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Wait...you're not going to attack, are you?", true);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.spiderCreature);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.normal, ACatInLimbo.ƒS.positionPercent(50, 50));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "I knew it! You're my old chicken shit friend!");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.normal, ACatInLimbo.ƒS.positionPercent(50, 50));
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "He doesn't do anything, he's just trying to be scary.");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Well, it's working?!");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "You should get along well actually, you both seem to stem from the chicken family.");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "...");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Ugh, okay. Listen, it's just a poor soul like you, that got stuck here.");
                await ACatInLimbo.ƒS.update();
                let howToTreatSpider = {
                    insult: "insult spider creature",
                    console: "console spider creature"
                };
                let howToTreatSpiderRequest = await ACatInLimbo.ƒS.Menu.getInput(howToTreatSpider, "choicesCSSClass");
                switch (howToTreatSpiderRequest) {
                    case howToTreatSpider.insult:
                        await ACatInLimbo.ƒS.Character.hideAll();
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.sad, ACatInLimbo.ƒS.positionPercent(50, 50));
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Ew, I'm nothing like that thing, it's fucking digusting.");
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "What in Death's name is wrong with you?");
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Character.hideAll();
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
                        await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.sad, ACatInLimbo.spiderAnimationDisappear());
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Wow, great, now it's gone. It heard you!");
                        ACatInLimbo.dataForSave.catScore -= 10;
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "You're kind of an idiot, you know?");
                        await ACatInLimbo.ƒS.update();
                        //check for catScore and hndl badEnding LostCat
                        if (ACatInLimbo.dataForSave.catScore >= 0) {
                            console.log("cat is not running away");
                        }
                        else {
                            ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.scaryForest, 0, 10);
                            await ACatInLimbo.ƒS.Progress.save();
                            console.log("cat should run away");
                            return "BadEnding LostCat Scene";
                        }
                        break;
                    case howToTreatSpider.console:
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Really? That poor thing!");
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Character.hideAll();
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.smile, ACatInLimbo.ƒS.positionPercent(50, 50));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "See, we're nice! This is my new companion, " + ACatInLimbo.dataForSave.nameProtagonist + ". Do you remember me?");
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.spiderCreature, "Grmmmllb");
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Ui, that's gonna be difficult.");
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "What's wrong with it?");
                        await ACatInLimbo.ƒS.Character.hideAll();
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.sad, ACatInLimbo.ƒS.positionPercent(50, 50));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "It got lost here. Like you, if we don't stay on our path.");
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Wait, so if I'm staying I'm gonna turn into this thing?");
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Not exactly, but yeah. You're probably not gonna turn into a spider, I think. Everyone's different.");
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "...Great.");
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Character.hideAll();
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.smile, ACatInLimbo.ƒS.positionPercent(50, 50));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Yeah. So, buddy, have you got any treats for me maybe?");
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.spiderCreature, "Brbbrlll yaaaaa");
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "OMD, that was almost a word!");
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Thank you, my friend. Take it easy, okay?");
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.spiderCreature, "Lmmmrb");
                        ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fly);
                        ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fly);
                        ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fly);
                        ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fly);
                        ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fly);
                        ACatInLimbo.ƒS.Text.print("Five flies have been added to your Inventory");
                        //add flies to Inventory
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Character.hideAll();
                        await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.smile, ACatInLimbo.spiderAnimationDisappear());
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.stretching, ACatInLimbo.ƒS.positionPercent(83, 99));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
                        await ACatInLimbo.ƒS.update();
                        break;
                }
        }
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Let's move on.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.update();
        let nextLocation = {
            swamp: "Swamp",
            lake: "Lake"
        };
        if (ACatInLimbo.dataForSave.visitedLake == true) {
            delete nextLocation.lake;
        }
        ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.scaryForest, 0, 2);
        let nextLocationRequest = await ACatInLimbo.ƒS.Menu.getInput(nextLocation, "choicesCSSClass");
        switch (nextLocationRequest) {
            case nextLocation.lake:
                ACatInLimbo.dataForSave.currentPath = "ForestToLake";
                return "Map Scene";
            case nextLocation.swamp:
                ACatInLimbo.dataForSave.currentPath = "ForestToSwamp";
                return "Map Scene";
        }
    }
    ACatInLimbo.Forest = Forest;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function Gate() {
        console.log("Scene starting: Gate");
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForCat").style.display = "";
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.celestial, 0.1, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.gate);
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.sunCatcher.duration, ACatInLimbo.transition.sunCatcher.alpha, ACatInLimbo.transition.sunCatcher.edge);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.walking, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await new Promise(resolve => setTimeout(resolve, 3000));
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Text.print("You're almost there!<br>Don't forget to feed any remaining items from your inventory to the cat.");
        // await new Promise(resolve => setTimeout(resolve, 5000));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.DeathBigAtGate, ACatInLimbo.ƒS.positionPercent(50, 100));
        await ACatInLimbo.ƒS.update(3);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "Well, hello my little friends! How have you been?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        if (ACatInLimbo.dataForSave.pathMountainClouds == true && ACatInLimbo.dataForSave.betrayGoats == true) {
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "My buddy here has just made sure that quite a few goats are going to die.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.surprised, ACatInLimbo.ƒS.positionPercent(20, 100));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "Noooooo. I love those goats!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.angry, ACatInLimbo.ƒS.positionPercent(20, 100));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "Why would you do that, " + ACatInLimbo.dataForSave.nameProtagonist + " ?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "For real? What is it about these goats?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.normal, ACatInLimbo.ƒS.positionPercent(20, 100));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouchedAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "What's done is done.");
            await ACatInLimbo.ƒS.update();
        }
        else if (ACatInLimbo.dataForSave.pathMountainClouds == true && ACatInLimbo.dataForSave.betrayGoats == false) {
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Yeah, I mean, my buddy here just saved quite a few goats from a skyworm, so I am pleased.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.proud, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.smile, ACatInLimbo.ƒS.positionPercent(20, 100));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "Woohoo! I love those goats!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.lovely, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "I know.");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "I'm glad I did the right thing.");
            await ACatInLimbo.ƒS.update();
        }
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.evilSmile, ACatInLimbo.ƒS.positionPercent(20, 100));
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "Now that you made it up here you need to leave this place and take one last step through this gate.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal2, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "What happens when I step through the gate?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Either something very good or very bad.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.normal, ACatInLimbo.ƒS.positionPercent(20, 100));
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "So heaven or hell?");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "Yes. There's also the possibility of sweet nothingness. There will be no pain or sorrow. You will find peace in an endless sleep.");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "How is it decided what's gonna happen?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.smile, ACatInLimbo.ƒS.positionPercent(20, 100));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, " It depends on your past actions of course. - How you've treated my little kitty here!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.cuteMeow, 1, false);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.lovely, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Oh. Wait. What?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.proud, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Yep.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.normal, ACatInLimbo.ƒS.positionPercent(20, 100));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "This cat was not only your guide, but a means to test your character.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.evilSmile, ACatInLimbo.ƒS.positionPercent(20, 100));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "Surprised? Well, that was expected. Humans are not the brightest.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.angry, ACatInLimbo.ƒS.positionPercent(20, 100));
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal2, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "Now walk through the gate!");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Okay okay…It's… goodbye I guess.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal2Sad, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.DeathBigAtGate, ACatInLimbo.ƒS.positionPercent(50, 100));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Goodbye.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.celestial, 1, 3);
        await ACatInLimbo.ƒS.update();
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForCat").style.display = "none";
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.breathing, 3, true);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.gateCloser, ACatInLimbo.characters.gateCloser.pose.closer1, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(2);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.gateCloser);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.gateCloser, ACatInLimbo.characters.gateCloser.pose.closer2, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(2);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.gateCloser);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.gateCloser, ACatInLimbo.characters.gateCloser.pose.closer3, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(2);
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.demanding, 1, false);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "WAIT!", false);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.gateCloser);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.DeathBigAtGate, ACatInLimbo.ƒS.positionPercent(50, 100));
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.breathing, 0, 0.1);
        await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.celestial, 0.05, 0.1);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "What is it?");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Death, may I come along?");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "What? No!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouchedSad, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.angry, ACatInLimbo.ƒS.positionPercent(20, 100));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "You know very well that you are not allowed to do so!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingSad, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "But I want to die already! This place is so boring and guiding souls fucking sucks!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalSad, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.normal, ACatInLimbo.ƒS.positionPercent(20, 100));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "Mhm. I got to admit, you've been here for quite some time.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.angry, ACatInLimbo.ƒS.positionPercent(20, 100));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "You've been complaining a lot though. That got on my nerves a little bit…");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingSad, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "I'm soooorry, I was just not made for this!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalSad, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.normal, ACatInLimbo.ƒS.positionPercent(20, 100));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "Actually, you were solely made to be a guide in limbo.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouchedSad, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Oh no.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.smile, ACatInLimbo.ƒS.positionPercent(20, 100));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "Ah, what the hell. I'm feeling generous today!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.lovely, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.normal, ACatInLimbo.ƒS.positionPercent(20, 100));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "But I won't let you go so easily cause you're causing me more work!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "I will have to craft a new guide if I lose you.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.evilSmile, ACatInLimbo.ƒS.positionPercent(20, 100));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "If " + ACatInLimbo.dataForSave.nameProtagonist + " takes you with them, both your fates are linked to those of your companion!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal2, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.normal, ACatInLimbo.ƒS.positionPercent(20, 100));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, ACatInLimbo.dataForSave.nameProtagonist + ", you choose first whether to allow Kitty to accompany you at all.");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "Choose wisely.");
        await ACatInLimbo.ƒS.update();
        let allowCat = {
            toFollow: "allow cat to follow you",
            notToFollow: "don't allow cat to follow you"
        };
        let allowcatRequest = await ACatInLimbo.ƒS.Menu.getInput(allowCat, "choicesCSSClass");
        switch (allowcatRequest) {
            case allowCat.toFollow:
                ACatInLimbo.dataForSave.catScore += 10;
                if (ACatInLimbo.dataForSave.catScore >= 60) {
                    await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.purring, 1, false);
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.smile, ACatInLimbo.ƒS.positionPercent(20, 100));
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.lovely, ACatInLimbo.ƒS.positionPercent(83, 99));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.purring, 0, 3);
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "It is decided.");
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "Now, my little soul and you, kitty...step through the gate. Your destiny awaits on the other side.");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.cuteMeow, 1, false);
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.DeathBigAtGate, ACatInLimbo.ƒS.positionPercent(50, 100));
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.proud, ACatInLimbo.ƒS.positionPercent(83, 99));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Thanks to both of you!");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(83, 99));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Quick, let's go! Before he changes his mind!");
                    await ACatInLimbo.ƒS.update();
                }
                else {
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(83, 99));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Mhm, I don't know. I think I'll stay here.");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "For real?");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "I won't take any chances. You haven't been very pleasant.");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.DeathBigAtGate, ACatInLimbo.ƒS.positionPercent(50, 100));
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "It is decided.");
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "Now, my little soul...step through the gate. Your destiny awaits on the other side.");
                    await ACatInLimbo.ƒS.update();
                }
                break;
            case allowCat.notToFollow:
                ACatInLimbo.dataForSave.betrayCat = true;
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.angry, ACatInLimbo.ƒS.positionPercent(20, 100));
                await ACatInLimbo.ƒS.update();
                if (ACatInLimbo.dataForSave.catScore >= 60) {
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Wow, " + ACatInLimbo.dataForSave.nameProtagonist + ". I really underestimated the shittiness of your character.");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Sorry, but I haven't had the best time with you, you know. You're a mean brat.");
                }
                else {
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Lol. Since my fate would be linked to yours, believe me, I wanted to stay anyway.");
                }
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.DeathBigAtGate, ACatInLimbo.ƒS.positionPercent(50, 100));
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.cleaningAss, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Goodbye forever, " + ACatInLimbo.dataForSave.nameProtagonist + ".");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Goodbye.");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.cleaningPaw, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "It is decided.");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "Step through the gate. Your destiny awaits on the other side.");
                await ACatInLimbo.ƒS.update();
                break;
        }
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.celestial, 1, 3);
        await ACatInLimbo.ƒS.update();
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForCat").style.display = "none";
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.breathing, 3, true);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.gateCloser, ACatInLimbo.characters.gateCloser.pose.closer1, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(2);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.gateCloser);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.gateCloser, ACatInLimbo.characters.gateCloser.pose.closer2, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(2);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.gateCloser);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.gateCloser, ACatInLimbo.characters.gateCloser.pose.closer3, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(2);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.gateCloser);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.gateCloser, ACatInLimbo.characters.gateCloser.pose.closer4, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(2);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.gateCloser);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.gateCloser, ACatInLimbo.characters.gateCloser.pose.closer5, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.gateCloser5);
        await ACatInLimbo.ƒS.update(2);
        await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.celestial, 0, 4);
        await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.breathing, 0, 5);
        if (ACatInLimbo.dataForSave.betrayCat == true) {
            return "BadEnding Hell Scene";
        }
        if (ACatInLimbo.dataForSave.catScore < 60) {
            return "BadEnding Hell Scene";
        }
        if (ACatInLimbo.dataForSave.catScore >= 60 && ACatInLimbo.dataForSave.catScore < 90) {
            return "NeutralEnding Scene";
        }
        if (ACatInLimbo.dataForSave.catScore >= 90) {
            return "GoodEnding Scene";
        }
    }
    ACatInLimbo.Gate = Gate;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function Lake() {
        console.log("Scene starting: Lake");
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForCat").style.display = "";
        ACatInLimbo.ƒS.Speech.hide();
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.LakeWaves, 1, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.lake);
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.wet1.duration, ACatInLimbo.transition.wet1.alpha, ACatInLimbo.transition.wet1.edge);
        //second time visiting lake --> lake creature gets it's heart back
        if (ACatInLimbo.dataForSave.visitedLake == true) {
            //set visitedLakeTwice to true to check for boolean in Bay Scene
            ACatInLimbo.dataForSave.visitedLakeTwice = true;
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.hide, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update(1);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Buddy, we got your heart!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.dive, 1, false);
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.smile, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update(1);
            ACatInLimbo.ƒS.Inventory.subtract(ACatInLimbo.items.Heart);
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.smileHeart, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update(2);
            ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fish);
            ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fish);
            ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fish);
            ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fish);
            ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fish);
            await ACatInLimbo.ƒS.Text.print("Five fishes have been added to your inventory");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "That's really sweet! I love fishies! Yum.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.dive, 1, false);
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.hide, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Mission accomplished. Alright. Bye Laky!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        }
        else { //first time visiting lake
            ACatInLimbo.dataForSave.visitedLake = true;
            await ACatInLimbo.ƒS.update(1);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingBack, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update(1);
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.cleaningAss, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update(1);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Ah, what a beautiful lake!");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "You never know, " + ACatInLimbo.dataForSave.nameProtagonist + ".");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Oh, come on...");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.hide, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.cleaningPaw, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update(1);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Ehm, okay, you were right.");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "What?");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "We're not alone.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.bait, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update(1);
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouchedLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update(1);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Oh. Hi!");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Buddy, that's the worst bait I've ever seen. Maybe you should just, you know, first, show the fish, and then, if somebody is trying to get it, you could show yourself?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.dive, 1, false);
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.attack, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Yeah, like that!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.normal, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Whispering: <i>He seems a bit simple.</i>");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Down here, all creatures are a bit dumb.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.sideEye, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Down here?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Those that don't make it far into the mountains turn into idiots.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Oh.");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Whispering: <i>What's that hole in his body?</i>");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.normal, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Good Question. Ey, why's that hole in your body?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.sideEye, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update(1);
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.cry, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Good Death.");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "You mean 'Good God', right?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "No. We're in Limbo. God has no place here. I don't even know him.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.heartEyes, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update(1);
            await new Promise(resolve => setTimeout(resolve, 2000));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.heartEyesBroken, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update(1);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Is it Lost Love maybe?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Ooooh, of course, now I get it! It gave his heart to someone!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal2, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.hardCry, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Omg, that's kind of sweet!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Sweet? " + ACatInLimbo.dataForSave.nameProtagonist + ", you're delusional. You should never give your heart away. It belongs to you and you only. First person you should love is yourself.");
            let judgeStatement = {
                agree: "Agree with statement",
                disagree: "Disagree with statement"
            };
            let judgeStatementRequest = await ACatInLimbo.ƒS.Menu.getInput(judgeStatement, "choicesCSSClass");
            switch (judgeStatementRequest) {
                case judgeStatement.agree:
                    ACatInLimbo.dataForSave.catScore += 5;
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Wow, very wise.");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.thumbsUp, ACatInLimbo.ƒS.positionPercent(83, 99));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Call me Sokracat.");
                    break;
                case judgeStatement.disagree:
                    ACatInLimbo.dataForSave.catScore -= 5;
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Nah, I think it's the ultimate goal to be able to fall in love and give your all to someone.");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "How unprogressive and disappointing…");
                    //check for catScore and hndl badEnding LostCat
                    if (ACatInLimbo.dataForSave.catScore >= 0) {
                        console.log("cat is not running away");
                    }
                    else {
                        ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.LakeWaves, 0, 10);
                        await ACatInLimbo.ƒS.Progress.save();
                        console.log("cat should run away");
                        return "BadEnding LostCat Scene";
                    }
                    break;
            }
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.normal, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Hey, maybe we can get it's heart back!");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Maybe…if we can find it on our way…But then we have to go back again…");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.sideEye, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "It should be worth it, right?");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "…Ok. If we can reduce some of this creatures suffering I guess it can be worth it.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.cry, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Then let's not waste time and move on!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Jeez, alright, you goody-goody.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.update();
            ACatInLimbo.ƒS.Speech.hide();
            await new Promise(resolve => setTimeout(resolve, 2000));
            await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.dive, 1, false);
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.hideSad, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update();
            await new Promise(resolve => setTimeout(resolve, 2000));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.update(2);
        }
        let nextLocation = {
            swamp: "Swamp",
            forest: "Forest"
        };
        if (ACatInLimbo.dataForSave.visitedForest == true) {
            delete nextLocation.forest;
        }
        ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.LakeWaves, 0, 2);
        let nextLocationRequest = await ACatInLimbo.ƒS.Menu.getInput(nextLocation, "choicesCSSClass");
        switch (nextLocationRequest) {
            case nextLocation.forest:
                ACatInLimbo.dataForSave.currentPath = "LakeToForest";
                return "Map Scene";
            case nextLocation.swamp:
                ACatInLimbo.dataForSave.currentPath = "LakeToSwamp";
                return "Map Scene";
        }
    }
    ACatInLimbo.Lake = Lake;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function Meadow() {
        console.log("Scene starting: Meadow");
        //Intro
        ACatInLimbo.ƒS.Speech.hide();
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.meadowSound, 0.7, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.meadow);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.awakening1, ACatInLimbo.ƒS.positionPercent(65, 85));
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.swirlStuff.duration, ACatInLimbo.transition.swirlStuff.alpha, ACatInLimbo.transition.swirlStuff.edge);
        await new Promise(resolve => setTimeout(resolve, 3000));
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Where am I?");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "WHO am I?");
        await ACatInLimbo.ƒS.update();
        //get name
        ACatInLimbo.dataForSave.nameProtagonist = await ACatInLimbo.ƒS.Speech.getInput();
        await ACatInLimbo.ƒS.update();
        ACatInLimbo.characters.protagonist.name = ACatInLimbo.dataForSave.nameProtagonist;
        console.log(ACatInLimbo.dataForSave.nameProtagonist);
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Ah, I remember, it's " + ACatInLimbo.dataForSave.nameProtagonist + "!");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "What is that strange statue doing over there....?");
        await ACatInLimbo.ƒS.update();
        let firstAction = {
            awakeCat: "Touch the Stone-Cat",
            lookAround: "First, take a look around"
        };
        let firstActionRequest = await ACatInLimbo.ƒS.Menu.getInput(firstAction, "choicesCSSClass");
        switch (firstActionRequest) {
            case firstAction.lookAround:
                //bissl doof hier, weil die Katze ja noch nicht erwacht ist, aber togglen von item usability geht nicht (zumindest bekomm ichs nicht hin)
                console.log("look around");
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Spider);
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Spider);
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Spider);
                ACatInLimbo.ƒS.Text.print("Three spiders have been added to your Inventory");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Got some spiders, great.");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Well, this seems like a lovely meadow, but what the fuck am I doing here? I feel kind of...ghosty. Like I don't have a lot of substance.");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Why does this cat look so real? What if I touch i...");
                await ACatInLimbo.ƒS.update();
            case firstAction.awakeCat:
                console.log("cat awakes");
                ACatInLimbo.ƒS.Speech.hide();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.awakening2, ACatInLimbo.ƒS.positionPercent(65, 85));
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.awakening3, ACatInLimbo.ƒS.positionPercent(65, 85));
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Wtf, it's alive!");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.hide();
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.yawn, 1, false);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.awakening4, ACatInLimbo.ƒS.positionPercent(65, 85));
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.awakening5, ACatInLimbo.ƒS.positionPercent(65, 85));
                await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.yawn, 0, 5);
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.awakening6, ACatInLimbo.ƒS.positionPercent(65, 85));
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.awakening7, ACatInLimbo.ƒS.positionPercent(65, 85));
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.awakening8, ACatInLimbo.ƒS.positionPercent(65, 85));
                await ACatInLimbo.ƒS.update(1);
                break;
        }
        //Cat stretch
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "What now?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.hide();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.stretchingSmall, ACatInLimbo.ƒS.positionPercent(70, 85));
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.stonePedestal, ACatInLimbo.characters.stonePedestal.pose.stonePedestal, ACatInLimbo.ƒS.positionPercent(65, 85));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.reowr, 1, false);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalSmall, ACatInLimbo.ƒS.positionPercent(75, 85));
        await ACatInLimbo.ƒS.update(1);
        //Choices for how to act towards Cat
        let approachCat = {
            approachCarefully: "Carefully approach cat",
            walk: "Walk towards cat",
            Wait: "Wait"
        };
        //wait for input
        let approachCatRequest = await ACatInLimbo.ƒS.Menu.getInput(approachCat, "choicesCSSClass");
        //Show MeterBar 
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForCat").style.display = "";
        switch (approachCatRequest) {
            case approachCat.approachCarefully:
                console.log("Carefully approach cat");
                ACatInLimbo.dataForSave.catScore += 5;
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.curiousSmall, ACatInLimbo.ƒS.positionPercent(75, 85));
                await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.purrMeow, 1, false);
                await ACatInLimbo.ƒS.update();
                ACatInLimbo.ƒS.Text.print("Hint: You just got some affection points. <p>The Lovemeter in the right corner shows how much the cat likes you.</p>Try to give it some food (if you have some) out of your Inventory to please it.<p>If the cat doesn't like you anymore, it's gonna leave.</p>");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Not too fast, that's right. You seem to know your stuff I guess.");
                await ACatInLimbo.ƒS.update();
                break;
            case approachCat.walk:
                console.log("Walk towards cat");
                ACatInLimbo.dataForSave.catScore -= 10;
                //check for catScore and hndl badEnding LostCat
                if (ACatInLimbo.dataForSave.catScore >= 0) {
                    console.log("cat is not running away");
                }
                else {
                    ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.meadowSound, 0, 10);
                    await ACatInLimbo.ƒS.Progress.save();
                    console.log("cat should run away");
                    return "BadEnding LostCat Scene"; //not possible yet to lose cat
                }
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.growling, 1, false);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.scaredSmall, ACatInLimbo.ƒS.positionPercent(75, 85));
                await ACatInLimbo.ƒS.update();
                ACatInLimbo.ƒS.Text.print("Hint: You just lost some affection points. <p>The Lovemeter in the right corner shows how much the cat likes you.</p><p>Try to give it some food (if you have some) out of your Inventory to please it.</p><p>If the cat doesn't like you anymore, it's gonna leave.</p>");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Back off! I'm warning you. My claws are sharp as ever.");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Ouuuh, I'm sorry, I'm sorry, calm down!");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "You act like someone who has never ever even met a cat!");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Well, you're certainly not a normal cat.");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Ugh, shut up. Do I have to expect you to behave like this all the time? Cause if that's the case I think I'm just gonna scooch right back on my stone over there.");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalSmall, ACatInLimbo.ƒS.positionPercent(75, 85));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Alright, I'm gonna behave from now on!");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "...I hope so.");
                await ACatInLimbo.ƒS.update();
                break;
            case approachCat.Wait:
                console.log("Wait");
                //choices for how to attract cat
                let attractCat = {
                    kneelDown: "Kneel down",
                    reachOut: "Reach Out",
                    makeSounds: "Make ksksks",
                };
                //booleans to be able to delete buttons/choices
                let pickedKneelDown;
                let pickedReachOut;
                let pickedMakeKsKsKs;
                let pickedChoice;
                do {
                    if (pickedKneelDown == true) {
                        delete attractCat.kneelDown;
                        console.log("delete kneel down");
                    }
                    if (pickedMakeKsKsKs == true) {
                        delete attractCat.makeSounds;
                        console.log("delete make sounds");
                    }
                    if (pickedReachOut == true) {
                        delete attractCat.reachOut;
                        console.log("delete reach out");
                    }
                    let attractCatRequest;
                    if (pickedKneelDown == true && pickedMakeKsKsKs == true && pickedReachOut == true) {
                        pickedChoice = true;
                    }
                    else {
                        attractCatRequest = await ACatInLimbo.ƒS.Menu.getInput(attractCat, "choicesCSSClass");
                    }
                    switch (attractCatRequest) {
                        case attractCat.kneelDown:
                            console.log("Kneel down");
                            ACatInLimbo.dataForSave.catScore += 5;
                            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.stonePedestal);
                            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.curiousSmall, ACatInLimbo.ƒS.positionPercent(75, 85));
                            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.stonePedestal, ACatInLimbo.characters.stonePedestal.pose.stonePedestal, ACatInLimbo.ƒS.positionPercent(65, 85));
                            await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.purrMeow, 1, false);
                            await ACatInLimbo.ƒS.update();
                            pickedKneelDown = true;
                            break;
                        case attractCat.makeSounds:
                            console.log("make ksksks");
                            ACatInLimbo.dataForSave.catScore += 5;
                            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.stonePedestal);
                            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.lovelySmall, ACatInLimbo.ƒS.positionPercent(75, 85));
                            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.stonePedestal, ACatInLimbo.characters.stonePedestal.pose.stonePedestal, ACatInLimbo.ƒS.positionPercent(65, 85));
                            await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.purrMeow, 1, false);
                            await ACatInLimbo.ƒS.update();
                            pickedMakeKsKsKs = true;
                            break;
                        case attractCat.reachOut:
                            console.log("reach out");
                            ACatInLimbo.dataForSave.catScore += 5;
                            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.stonePedestal);
                            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.layingOnBackSmall, ACatInLimbo.ƒS.positionPercent(75, 85));
                            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.stonePedestal, ACatInLimbo.characters.stonePedestal.pose.stonePedestal, ACatInLimbo.ƒS.positionPercent(65, 85));
                            await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.purrMeow, 1, false);
                            await ACatInLimbo.ƒS.update();
                            pickedReachOut = true;
                            break;
                    }
                } while (!pickedChoice);
                await ACatInLimbo.ƒS.update(2);
                console.log("cat is happy and you got +20 in lovebar");
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.stonePedestal);
                await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.purring, 1, false);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.lovelySmall, ACatInLimbo.ƒS.positionPercent(75, 85));
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.stonePedestal, ACatInLimbo.characters.stonePedestal.pose.stonePedestal, ACatInLimbo.ƒS.positionPercent(65, 85));
                await ACatInLimbo.ƒS.update();
                ACatInLimbo.ƒS.Text.print("Hint: You just got a lot of affection points. <p>The Lovemeter in the right corner shows how much the cat likes you.</p>Try to give it some food (if you have some) out of your Inventory to please it.<p>If the cat doesn't like you anymore, it's gonna leave.</p>");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Ouuuh, you seem nice!");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.lovely, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.purring, 0, 2);
                break;
        }
        //First conversation
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal2, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Do you know where I am? Do you know about this place?");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "I'm " + ACatInLimbo.dataForSave.nameProtagonist + " by the way.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "A warm Hello to you too, good sir. Looks like you're pretty dead, " + ACatInLimbo.dataForSave.nameProtagonist + "!");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "What?!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.cleaningPaw, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "No need to panic. You're in Limbo.");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Limbo? Like the Limbo in Christianity?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.thoughtful2, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Uuuuuh, I don't know anything about that Christianity stuff. This is neither a good nor a bad place though. It's an in-between.");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "...?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.derpy2, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Well, you're dead, but your soul didn't get to afterlife.");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "So... there is a way out? Can I be with my family if I get out?");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Why do you care? You can't remember them.");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "No, honestly I don't have a clue about what happens if you get through, but good thing is, you don't have to suffer for eternity.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.curious, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Does sound good, ey?");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "You're right, I can't remember anything.");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "From what you're telling me, this place doesn't sound like one I would want to stay in.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.derpy1, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Okay, you're right, I forgot, it's only a neutral place for me personally.");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Why is that?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.proud, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "That's cause I'm a guide. I can give you a tour if you want?");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "A tour to...where exactly?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "To the gate to afterlife, you dummy! Want to get out of here and avoid eternal suffering or do you want to stay?");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Oh, good God, yeah, let's go!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hideAll();
        await ACatInLimbo.ƒS.update();
        //pick next Location
        let nextLocation = {
            forest: "Forest",
            lake: "Lake"
        };
        ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.meadowSound, 0, 2);
        let nextLocationRequest = await ACatInLimbo.ƒS.Menu.getInput(nextLocation, "choicesCSSClass");
        switch (nextLocationRequest) {
            case nextLocation.forest:
                ACatInLimbo.dataForSave.currentPath = "MeadowToForest";
                return "Map Scene";
                // return "Forest Scene"
                break;
            case nextLocation.lake:
                ACatInLimbo.dataForSave.currentPath = "MeadowToLake";
                return "Map Scene";
                //return "Lake Scene"
                break;
        }
    }
    ACatInLimbo.Meadow = Meadow;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function Mountain() {
        console.log("Scene starting: Mountain");
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        //Fun riverflow
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.happyJazz, 0.5, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.riverflow);
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.wet1.duration, ACatInLimbo.transition.wet1.alpha, ACatInLimbo.transition.wet1.edge);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.riverflow, ACatInLimbo.characters.riverflow.pose.plain, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.riverflow);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.riverflow, ACatInLimbo.characters.riverflow.pose.flow1, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.riverflow);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.riverflow, ACatInLimbo.characters.riverflow.pose.flow2, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.riverflow);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.riverflow, ACatInLimbo.characters.riverflow.pose.flow3, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.riverflow);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.riverflow, ACatInLimbo.characters.riverflow.pose.flow4, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.riverflow);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.riverflow, ACatInLimbo.characters.riverflow.pose.flow5, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.riverflow);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.riverflow, ACatInLimbo.characters.riverflow.pose.flow6, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.riverflow);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.riverflow, ACatInLimbo.characters.riverflow.pose.flow1, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.riverflow);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.riverflow, ACatInLimbo.characters.riverflow.pose.flow2, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.riverflow);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.riverflow, ACatInLimbo.characters.riverflow.pose.flowWaving3, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.riverflow);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.riverflow, ACatInLimbo.characters.riverflow.pose.flowWaving4, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.riverflow);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.riverflow, ACatInLimbo.characters.riverflow.pose.flow5, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.riverflow);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.riverflow, ACatInLimbo.characters.riverflow.pose.flow6, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.riverflow);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.riverflow, ACatInLimbo.characters.riverflow.pose.plain, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.riverflow);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.riverflow, ACatInLimbo.characters.riverflow.pose.flow1, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.riverflow);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.riverflow, ACatInLimbo.characters.riverflow.pose.flow2, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.riverflow);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.riverflow, ACatInLimbo.characters.riverflow.pose.flow3, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.riverflow);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.riverflow, ACatInLimbo.characters.riverflow.pose.flow4, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.riverflow);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.riverflow, ACatInLimbo.characters.riverflow.pose.flow5, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.riverflow);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.riverflow, ACatInLimbo.characters.riverflow.pose.flow6, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.riverflow);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.riverflow, ACatInLimbo.characters.riverflow.pose.plain, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.riverflow);
        await ACatInLimbo.ƒS.update(1);
        ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.happyJazz, 0, 5);
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForCat").style.display = "";
        //Mountains
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.mountains);
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.hardEdges.duration, ACatInLimbo.transition.hardEdges.alpha, ACatInLimbo.transition.hardEdges.edge);
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.forestWind, 2, true);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.normal, ACatInLimbo.ƒS.positionPercent(20, 100));
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.derpy1, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "Fun, fun, FUN! Now, this is where we part ways.");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Oh. Alright. Let me ask, who are you, anyway?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.yawning, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "...");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "We shall meet again.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal2, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Great, thanks for ignoring me.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.thumbsUp, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "Byyyeee!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.normal, ACatInLimbo.deathSlide());
        await ACatInLimbo.ƒS.update(2);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.curious, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Ok, whatever, let's move on.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.goats, ACatInLimbo.characters.goats.pose.allGoats, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.goats, 0.5, true);
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.goats);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.goats, ACatInLimbo.characters.goats.pose.allGoats, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Look, goats! Oh, I LOVE goats!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.purring, 1, false);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.goats);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.lovely, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.goats, ACatInLimbo.characters.goats.pose.allGoats, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Really?");
        await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.purring, 0, 2);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "They can jump very high, climb absolutely everywhere and the make cute sounds.");
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.purrMeow, 1, false);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Makes sense.");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "You think they're hiding from the sun in those caves?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal2, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Probably? I'm not a goat expert.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Come, let's leave.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Waiiit! I know we're in a hurry, but do you mind if I say a quick hello at least?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
        await new Promise(resolve => setTimeout(resolve, 1000));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.proud, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "...");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal2Sad, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        let catApproachGoats = {
            allow: "Allow Cat to approach goats",
            dontAllow: "Don't allow Cat to approach goats"
        };
        let catApproachGoatsRequest = await ACatInLimbo.ƒS.Menu.getInput(catApproachGoats, "choicesCSSClass");
        switch (catApproachGoatsRequest) {
            case catApproachGoats.allow:
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Knock yourself out.");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.purrMeow, 1, false);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.lovely, ACatInLimbo.ƒS.positionPercent(83, 99));
                break;
            case catApproachGoats.dontAllow:
                ACatInLimbo.dataForSave.catScore -= 5;
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Naaah, we're wasting time.");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Come on, I want to get going!");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.demanding, 1, false);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Oh, fuck you, I'm gonna do it anyways!");
                break;
        }
        await ACatInLimbo.ƒS.update();
        ACatInLimbo.ƒS.Speech.hide();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.proudTiny, ACatInLimbo.ƒS.positionPercent(62, 86));
        await new Promise(resolve => setTimeout(resolve, 1000));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.goats, ACatInLimbo.characters.goats.pose.singleGoat, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.lookingUpTiny, ACatInLimbo.ƒS.positionPercent(62, 86));
        await new Promise(resolve => setTimeout(resolve, 2000));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.loveTiny, ACatInLimbo.ƒS.positionPercent(62, 86));
        await new Promise(resolve => setTimeout(resolve, 1000));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.cleaningPawTiny, ACatInLimbo.ƒS.positionPercent(62, 86));
        await new Promise(resolve => setTimeout(resolve, 1000));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.lookingUpTiny, ACatInLimbo.ƒS.positionPercent(62, 86));
        await new Promise(resolve => setTimeout(resolve, 1000));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.onBackTiny, ACatInLimbo.ƒS.positionPercent(62, 86));
        await new Promise(resolve => setTimeout(resolve, 1000));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.cleaningAssTiny, ACatInLimbo.ƒS.positionPercent(62, 86));
        await new Promise(resolve => setTimeout(resolve, 1000));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.loveTiny, ACatInLimbo.ƒS.positionPercent(62, 86));
        await new Promise(resolve => setTimeout(resolve, 1000));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Can we move on now?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.cleaningPawTiny, ACatInLimbo.ƒS.positionPercent(62, 86));
        await new Promise(resolve => setTimeout(resolve, 2000));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "You're a real party pooper.");
        await ACatInLimbo.ƒS.update();
        ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.forestWind, 0, 3);
        ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.goats, 0, 2);
        await ACatInLimbo.ƒS.Character.hideAll();
        //check for catScore and hndl badEnding LostCat
        if (ACatInLimbo.dataForSave.catScore >= 0) {
            console.log("cat is not running away");
        }
        else {
            ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.forestWind, 0, 10);
            ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.goats, 0, 10);
            await ACatInLimbo.ƒS.Progress.save();
            console.log("cat should run away");
            return "BadEnding LostCat Scene";
        }
        ACatInLimbo.dataForSave.currentPath = "MountainsToClouds";
        return "Map Scene";
    }
    ACatInLimbo.Mountain = Mountain;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function River() {
        console.log("Scene starting: River");
        // ƒS.Inventory.add(items.Coin);
        // dataForSave.visitedRiver = true;
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForCat").style.display = "";
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.river, 1, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.river);
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.dots.duration, ACatInLimbo.transition.dots.alpha, ACatInLimbo.transition.dots.edge);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.fishingLookingDown, ACatInLimbo.ƒS.positionPercent(45, 82));
        await ACatInLimbo.ƒS.update();
        //second time river
        if (ACatInLimbo.dataForSave.visitedRiver == true) {
            if (ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Coin) != 0) {
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.normal, ACatInLimbo.ƒS.positionPercent(20, 100));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "So?");
                await ACatInLimbo.ƒS.update();
            }
            else {
                let nextLocation = {
                    bay: "Bay",
                    cave: "Cave",
                };
                ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.river, 0, 2);
                let nextLocationRequest = await ACatInLimbo.ƒS.Menu.getInput(nextLocation, "choicesCSSClass");
                switch (nextLocationRequest) {
                    case nextLocation.cave:
                        ACatInLimbo.dataForSave.currentPath = "RiverToCave";
                        return "Map Scene";
                        break;
                    case nextLocation.bay:
                        ACatInLimbo.dataForSave.currentPath = "RiverToBay";
                        return "Map Scene";
                        break;
                }
            }
        }
        else {
            //first time river
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.walking, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update(1);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "There is someone! Who's that?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouchedLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.reowr, 1, false);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Oh.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Doesn't look like the rest of the creatures we met.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.derpy2, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "That's right.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Hey, excuse me!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.horrorDrum2, 1, false);
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.fishingLookingUp, ACatInLimbo.ƒS.positionPercent(45, 82));
            await ACatInLimbo.ƒS.update();
            await new Promise(resolve => setTimeout(resolve, 3000));
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Why is he not answering?");
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouched, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Cause he's a mysterious weirdo.");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "You know him?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.normal, ACatInLimbo.ƒS.positionPercent(20, 100));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Hi. What's up. We're doing fine. You don't have to check on me.");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Check on you?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.smile, ACatInLimbo.ƒS.positionPercent(20, 100));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "Mhm, sure thing. Want a ride to the mountains?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.cleaningPaw, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Since when are you helping?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.normal, ACatInLimbo.ƒS.positionPercent(20, 100));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "I'm bored. But I'll tell you what I am not: A cheap bitch! I will help you for an obolus.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.curious, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Well, might as well accept the offer, right? Also, I seriously need a break from these scandalous travel conditions.");
            await ACatInLimbo.ƒS.update();
            ACatInLimbo.dataForSave.visitedRiver = true;
        }
        if (ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Coin) != 0) {
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "We do have a coin!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.proud, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.smile, ACatInLimbo.ƒS.positionPercent(20, 100));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "Then I can be your ferryman. Do you accept my offer?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal2, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "If we're up there, we won't come back down, you know?");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "We could also try to move through the cave.");
            await ACatInLimbo.ƒS.update();
            let payDeathDecision = {
                accept: "accept death's offer, give coin",
                refuse: "refuse death's offer, keep coin"
            };
            ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.river, 0, 5);
            let payDeathDecisionRequest = await ACatInLimbo.ƒS.Menu.getInput(payDeathDecision, "choicesCSSClass");
            switch (payDeathDecisionRequest) {
                case payDeathDecision.accept:
                    ACatInLimbo.dataForSave.catScore += 5;
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Whatever. Let's go!");
                    ACatInLimbo.ƒS.Inventory.subtract(ACatInLimbo.items.Coin);
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
                    await ACatInLimbo.ƒS.update();
                    ACatInLimbo.dataForSave.currentPath = "RiverToMountain";
                    return "Map Scene";
                    break;
                case payDeathDecision.refuse:
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Nah, I don't feel like it. Let's go the other way around through the cave.");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.angry, ACatInLimbo.ƒS.positionPercent(20, 100));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "Pah! Good luck.");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.fishingLookingDown, ACatInLimbo.ƒS.positionPercent(45, 82));
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalSad, ACatInLimbo.ƒS.positionPercent(83, 99));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Let's move through the cave then.");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
                    await ACatInLimbo.ƒS.update();
                    ACatInLimbo.dataForSave.currentPath = "RiverToCave";
                    return "Map Scene";
                    break;
            }
        }
        else {
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "We could, the only problem is, I don't have money.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.smile, ACatInLimbo.ƒS.positionPercent(20, 100));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "A coin would be enough.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.angry, ACatInLimbo.ƒS.positionPercent(20, 100));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "But if you don't have anything, go back to where you came from! I'm disappointed.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "What?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.fishingLookingDown, ACatInLimbo.ƒS.positionPercent(45, 82));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Ooooh, he's so dramatic. Let's go, maybe we can still find a coin or just move through the cave up the mountain.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
            await ACatInLimbo.ƒS.update();
        }
        let nextLocation = {
            bay: "Bay",
            cave: "Cave",
        };
        ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.river, 0, 2);
        let nextLocationRequest = await ACatInLimbo.ƒS.Menu.getInput(nextLocation, "choicesCSSClass");
        switch (nextLocationRequest) {
            case nextLocation.cave:
                ACatInLimbo.dataForSave.currentPath = "RiverToCave";
                return "Map Scene";
                break;
            case nextLocation.bay:
                ACatInLimbo.dataForSave.currentPath = "RiverToBay";
                return "Map Scene";
                break;
        }
    }
    ACatInLimbo.River = River;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function Swamp() {
        console.log("Scene starting: Swamp");
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForCat").style.display = "";
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.frogs, 0.1, true);
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.swamp, 0.5, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.swamp);
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.wet2.duration, ACatInLimbo.transition.wet2.alpha, ACatInLimbo.transition.wet2.edge);
        await ACatInLimbo.ƒS.update(1);
        //check if Swamp has already been visited and jump to next scene if so
        if (ACatInLimbo.dataForSave.visitedSwamp == true) {
            //pick next Location
            let nextLocation = {
                bay: "Bay",
                river: "River",
                forest: "Forest",
                lake: "Lake"
            };
            if (ACatInLimbo.dataForSave.visitedForest == false || ACatInLimbo.dataForSave.visitedLake == false) {
                delete nextLocation.bay;
                delete nextLocation.river;
            }
            if (ACatInLimbo.dataForSave.visitedForest == true) {
                delete nextLocation.forest;
            }
            if (ACatInLimbo.dataForSave.visitedLake == true) {
                delete nextLocation.lake;
            }
            ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.frogs, 0, 2);
            ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.swamp, 0, 2);
            let nextLocationRequest = await ACatInLimbo.ƒS.Menu.getInput(nextLocation, "choicesCSSClass");
            switch (nextLocationRequest) {
                case nextLocation.bay:
                    ACatInLimbo.dataForSave.currentPath = "SwampToBay";
                    return "Map Scene";
                    // return "Forest Scene"
                    break;
                case nextLocation.river:
                    ACatInLimbo.dataForSave.currentPath = "SwampToRiver";
                    return "Map Scene";
                    //return "Lake Scene"
                    break;
                case nextLocation.forest:
                    ACatInLimbo.dataForSave.currentPath = "SwampToForest";
                    return "Map Scene";
                    //return "Lake Scene"
                    break;
                case nextLocation.lake:
                    ACatInLimbo.dataForSave.currentPath = "SwampToLake";
                    return "Map Scene";
                    //return "Lake Scene"
                    break;
            }
        }
        ACatInLimbo.dataForSave.visitedSwamp = true;
        //start with Scene 
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Bah, it really doesn't smell good here!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Ugh, you're right, and those fucking frogs, what the hell?! Let's move on ASAP.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.bubblingInTheDeep, 1, false);
        await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.bubblingInTheDeep, 0, 5);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "What was that?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "The next shitshow, I fear.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.bubblingInTheDeep, 1, false);
        await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.swampCreature, ACatInLimbo.characters.swampCreature.pose.asleep, ACatInLimbo.swampCreatureAppearance());
        await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.bubblingInTheDeep, 0, 3);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.derpy1, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update(1);
        await new Promise(resolve => setTimeout(resolve, 1000));
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouchedLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Holy moly, what happened to YOU?");
        await ACatInLimbo.ƒS.update();
        let helpSwampCreature = {
            help: "help",
            dontHelp: "don't help"
        };
        let helpSwampCreatureRequest = await ACatInLimbo.ƒS.Menu.getInput(helpSwampCreature, "choicesCSSClass");
        switch (helpSwampCreatureRequest) {
            case helpSwampCreature.help:
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "He looks really sad. Maybe we can help him somehow?");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Are you hurt, maybe?");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.swampCreature);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.swampCreature, ACatInLimbo.characters.swampCreature.pose.normal, ACatInLimbo.ƒS.positionPercent(30, 85));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.swampCreature, "Blubblblblblb!");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Is it the wood that sticks inside your body?");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.swampCreature, "Blubblblblblb!");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Sounds about right. Okay let's get that stuff out of you. It would hurt me too, to be honest.");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouched, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Alright, I'm gonna do it!");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.thumbsUp, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.lightbubbling, 1, false);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.swampCreature);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.swampCreature, ACatInLimbo.characters.swampCreature.pose.lessWood1, ACatInLimbo.ƒS.positionPercent(30, 85));
                await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.lightbubbling, 0, 3);
                await ACatInLimbo.ƒS.update(3);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.derpy2, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Hey, " + ACatInLimbo.dataForSave.nameProtagonist + "! Can I get those snails maybe? They look pretty.");
                let getSnails = {
                    getSnails: "get Snails",
                    dontGetSnails: "Don't get snails"
                };
                let getSnailsRequest = await ACatInLimbo.ƒS.Menu.getInput(getSnails, "choicesCSSClass");
                switch (getSnailsRequest) {
                    case getSnails.dontGetSnails:
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "What? No. They don't belong to you and they don't hut the creature. Maybe it wants to keep them.");
                        await ACatInLimbo.ƒS.update();
                        ACatInLimbo.dataForSave.catScore -= 5;
                        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Wow, thanks for nothing.");
                        await ACatInLimbo.ƒS.update();
                        //check for catScore and hndl badEnding LostCat
                        if (ACatInLimbo.dataForSave.catScore >= 0) {
                            console.log("cat is not running away");
                        }
                        else {
                            ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.frogs, 0, 10);
                            ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.swamp, 0, 10);
                            await ACatInLimbo.ƒS.Progress.save();
                            console.log("cat should run away");
                            return "BadEnding LostCat Scene";
                        }
                        break;
                    case getSnails.getSnails:
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, " Ehm… Alright? If it doesn't mind…");
                        ACatInLimbo.dataForSave.catScore += 5;
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.lovely, ACatInLimbo.ƒS.positionPercent(83, 99));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Thanks!");
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(83, 99));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.lightbubbling, 1, false);
                        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.swampCreature);
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.swampCreature, ACatInLimbo.characters.swampCreature.pose.noSnails, ACatInLimbo.ƒS.positionPercent(30, 85));
                        await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.lightbubbling, 0, 3);
                        await ACatInLimbo.ƒS.update(3);
                        ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Snail);
                        ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Snail);
                        ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Snail);
                        ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Snail);
                        ACatInLimbo.ƒS.Text.print("Four snails have been added to your Inventory");
                        await ACatInLimbo.ƒS.update(2);
                        break;
                }
                await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.lightbubbling, 1, false);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.swampCreature);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.swampCreature, ACatInLimbo.characters.swampCreature.pose.lessWood2, ACatInLimbo.ƒS.positionPercent(30, 85));
                await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.lightbubbling, 0, 3);
                await ACatInLimbo.ƒS.update(2);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Better?");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.lightbubbling, 1, false);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.swampCreature);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.swampCreature, ACatInLimbo.characters.swampCreature.pose.smile, ACatInLimbo.ƒS.positionPercent(30, 85));
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.cleaningPaw, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fireflies);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Well, he was talkative. Hey, I think we got something from him!");
                await ACatInLimbo.ƒS.update();
                ACatInLimbo.ƒS.Text.print("A jar of fireflies has been added to your Inventory");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Some fireflies!");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.bubblingInTheDeep, 1, false);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.swampCreature);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.swampCreature, ACatInLimbo.characters.swampCreature.pose.smile, ACatInLimbo.swampCreatureDisappearance());
                await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.bubblingInTheDeep, 0, 5);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Noice. Maybe it's gonna be of use. Please let's move forward now, this place stinks like hell!");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.update();
                break;
            case helpSwampCreature.dontHelp:
                ACatInLimbo.dataForSave.catScore -= 10;
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "What?! " + ACatInLimbo.dataForSave.nameProtagonist + ", how can you be so heartless?");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(83, 99));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Sorry, I just think it looks a bit nasty.");
                //check for catScore and hndl badEnding LostCat
                if (ACatInLimbo.dataForSave.catScore >= 0) {
                    console.log("cat is not running away");
                }
                else {
                    ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.frogs, 0, 10);
                    ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.swamp, 0, 10);
                    await ACatInLimbo.ƒS.Progress.save();
                    console.log("cat should run away");
                    return "BadEnding LostCat Scene";
                }
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Then let's go, I guess. I would drown If I tried to help him.");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.bubblingInTheDeep, 1, false);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.swampCreature);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.swampCreature, ACatInLimbo.characters.swampCreature.pose.asleep, ACatInLimbo.swampCreatureDisappearance());
                await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.bubblingInTheDeep, 0, 5);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.update();
                //hide swamp creature?
                break;
        }
        //pick next Location
        let nextLocation = {
            bay: "Bay",
            river: "River",
            forest: "Forest",
            lake: "Lake"
        };
        if (ACatInLimbo.dataForSave.visitedForest == false || ACatInLimbo.dataForSave.visitedLake == false) {
            delete nextLocation.bay;
            delete nextLocation.river;
        }
        if (ACatInLimbo.dataForSave.visitedForest == true) {
            delete nextLocation.forest;
        }
        if (ACatInLimbo.dataForSave.visitedLake == true) {
            delete nextLocation.lake;
        }
        ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.frogs, 0, 2);
        ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.swamp, 0, 2);
        ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.bubblingInTheDeep, 0, 2);
        let nextLocationRequest = await ACatInLimbo.ƒS.Menu.getInput(nextLocation, "choicesCSSClass");
        switch (nextLocationRequest) {
            case nextLocation.bay:
                ACatInLimbo.dataForSave.currentPath = "SwampToBay";
                return "Map Scene";
                // return "Forest Scene"
                break;
            case nextLocation.river:
                ACatInLimbo.dataForSave.currentPath = "SwampToRiver";
                return "Map Scene";
                //return "Lake Scene"
                break;
            case nextLocation.forest:
                ACatInLimbo.dataForSave.currentPath = "SwampToForest";
                return "Map Scene";
                //return "Lake Scene"
                break;
            case nextLocation.lake:
                ACatInLimbo.dataForSave.currentPath = "SwampToLake";
                return "Map Scene";
                //return "Lake Scene"
                break;
        }
    }
    ACatInLimbo.Swamp = Swamp;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function BadEndingFrog() {
        console.log("Scene starting: Bad Ending - Frog");
        await ACatInLimbo.ƒS.Character.hideAll();
        await ACatInLimbo.ƒS.update();
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.frogStomach, 0.3, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.badEndingFrog);
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.badEndingFrog.duration, ACatInLimbo.transition.badEndingFrog.alpha, ACatInLimbo.transition.badEndingFrog.edge);
        await ACatInLimbo.ƒS.update(1);
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        await ACatInLimbo.ƒS.Text.print("Your soul got devoured by a huge frog and now you're not only dead and in Limbo, but also trapped in a creature's body.<br>Congratulations.<br>Maybe you shouldn't have gone in there.<br>If it's any consolation: The cat will probably make sure that the monster from the cave gets a proper kick in the arse.");
        await new Promise(resolve => setTimeout(resolve, 2000));
        ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.frogStomach, 0.6, 4);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.badEndingFrogFin);
        await ACatInLimbo.ƒS.update(4);
        await new Promise(resolve => setTimeout(resolve, 2000));
        let endingCaption = document.getElementById("endingCaption");
        endingCaption.innerText = "Bad Ending: Hungry Frog";
    }
    ACatInLimbo.BadEndingFrog = BadEndingFrog;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function BadEndingHell() {
        console.log("Scene starting: Bad Ending - Hell");
        await ACatInLimbo.ƒS.Character.hideAll();
        await ACatInLimbo.ƒS.update();
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.hell, 0.3, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.badEndingHell);
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.badEndingHell.duration, ACatInLimbo.transition.badEndingHell.alpha, ACatInLimbo.transition.badEndingHell.edge);
        await ACatInLimbo.ƒS.update(1);
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        if (ACatInLimbo.dataForSave.betrayCat == true) {
            await ACatInLimbo.ƒS.Text.print("Death has his twisted ways to test the kindness of souls trapped in Limbo.<br>What were you thinking, leaving the cat behind? I mean, this whole story was a test, were you not aware?<br>Death has kept his little cat, of course.<br>Though it now has to stay in Limbo and pursue it's boring job as a guide (thanks to you) it at least doesn't have to endure endless torture in hell.<br><p>Have fun in here.</p>");
        }
        else {
            await ACatInLimbo.ƒS.Text.print("Apparently you haven't been very nice to the cat and other creatures in Limbo.<br>I mean, this whole story was a test, were you not aware?<br>Of course the cat didn't want to go with you!<br>Though it now has to stay in Limbo and pursue it's boring job as a guide (thanks to you) it at least doesn't have to endure endless torture in hell.<br><p>Have fun in here.</p>");
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
        ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.hell, 0.6, 4);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.badEndingHellFin);
        await ACatInLimbo.ƒS.update(4);
        await new Promise(resolve => setTimeout(resolve, 2000));
        let endingCaption = document.getElementById("endingCaption");
        endingCaption.innerText = "Bad Ending: Burn in Hell!";
    }
    ACatInLimbo.BadEndingHell = BadEndingHell;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function BadEndingLostCat() {
        console.log("Scene starting: Bad Ending - Lost Cat");
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.slowInsanity, 0.1, true);
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hideAll();
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "You know what?");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "I don't care anymore. Why should I waste my time with you?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingSad, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "I'm the one helping you, cause your soul's twisted. You should have been nicer.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalSad, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "But...Wait!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "You failed the test. Figure out how you're going to cope on your own.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.update(3);
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForCat").style.display = "none";
        await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.slowInsanity, 0.7, 4);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.badEndingLostCat);
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.badEndingLostCat.duration, ACatInLimbo.transition.badEndingLostCat.alpha, ACatInLimbo.transition.badEndingLostCat.edge);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.Howling, 0.4, false);
        await ACatInLimbo.ƒS.Text.print("You've pissed off the pink cat and it's abandoning you.<br>The second it leaves, you get dizzy, your vision gets blurry and you see things that definitely weren't there before.");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "What are those sounds?");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Where am I?");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "What happened?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.badEndingLostCatFin);
        await ACatInLimbo.ƒS.update(4);
        await ACatInLimbo.ƒS.Text.print("You have to stay in Limbo.<br>Seems like you're not a cat-person.");
        await ACatInLimbo.ƒS.update();
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        await new Promise(resolve => setTimeout(resolve, 2000));
        let endingCaption = document.getElementById("endingCaption");
        endingCaption.innerText = "Bad Ending: Lost Cat";
    }
    ACatInLimbo.BadEndingLostCat = BadEndingLostCat;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function GoodEnding() {
        console.log("Scene starting: Good Ending: Cat's Heaven");
        await ACatInLimbo.ƒS.Character.hideAll();
        await ACatInLimbo.ƒS.update();
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.backgroundJazz, 0.1, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.goodEndingNoCats);
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.goodEnding.duration, ACatInLimbo.transition.goodEnding.alpha, ACatInLimbo.transition.goodEnding.edge);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.lovely, ACatInLimbo.ƒS.positionPercent(87, 103));
        await ACatInLimbo.ƒS.update(1);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(87, 103));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "I can't believe it. We made it to heaven!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.proud, ACatInLimbo.ƒS.positionPercent(87, 103));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Cat Heaven, apparently?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.curious, ACatInLimbo.ƒS.positionPercent(87, 103));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Well, that's how it is. You did well.");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "You were the nicest soul I've met in a long time, " + ACatInLimbo.dataForSave.nameProtagonist + ".");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.cleaningPaw, ACatInLimbo.ƒS.positionPercent(87, 103));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Thank you. You're the strangest cat I've ever met, I'll give you that.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.lovely, ACatInLimbo.ƒS.positionPercent(87, 103));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.cuteMeow, 1, false);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Hehe.", false);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.orangeCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.orangeCat, ACatInLimbo.characters.orangeCat.pose.reading, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(3);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Look, there is one of your kind!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(87, 103));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Ouh!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingAway, ACatInLimbo.ƒS.positionPercent(87, 103));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Shouting: Hello?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.orangeCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.orangeCat, ACatInLimbo.characters.orangeCat.pose.looking, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.multipleCats, ACatInLimbo.characters.multipleCats.pose.curious, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.catGod, ACatInLimbo.characters.catGod.pose.normal, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update(3);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.cuteMeow, 0.1, false);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.orangeCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.orangeCat, ACatInLimbo.characters.orangeCat.pose.waving, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update();
        await new Promise(resolve => setTimeout(resolve, 2000));
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.orangeCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.orangeCat, ACatInLimbo.characters.orangeCat.pose.looking, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.catGod);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.catGod, ACatInLimbo.characters.catGod.pose.lookingLeft, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.blueCat, ACatInLimbo.characters.blueCat.pose.flying, ACatInLimbo.flyingCatBlue());
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.catGod);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.catGod, ACatInLimbo.characters.catGod.pose.lookingRight, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.roseCat, ACatInLimbo.characters.roseCat.pose.flying, ACatInLimbo.flyingCatRose());
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.proud, ACatInLimbo.ƒS.positionPercent(87, 103));
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.catGod);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.catGod, ACatInLimbo.characters.catGod.pose.smile, ACatInLimbo.ƒS.positionPercent(50, 50));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "This is the best day of my life.");
        await ACatInLimbo.ƒS.update();
        ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.backgroundJazz, 0.5, 9);
        await ACatInLimbo.ƒS.Character.hideAll();
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.goodEnding);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Come on, " + ACatInLimbo.dataForSave.nameProtagonist + ". It's time to move into our new home.");
        await ACatInLimbo.ƒS.update();
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        await ACatInLimbo.ƒS.Text.print("Because you treated the cat very well and your destinies are linked, you both end up in Cat's Heaven. <br>By entering this realm you obviously got turned into a cat as well, otherwise, what would be the point of you being in cat heaven? <br>Enjoy endless streams of milk and tuna as far as the eye can see.");
        await new Promise(resolve => setTimeout(resolve, 2000));
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.goodEndingFin);
        await ACatInLimbo.ƒS.update(4);
        await new Promise(resolve => setTimeout(resolve, 2000));
        let endingCaption = document.getElementById("endingCaption");
        endingCaption.innerText = "Good Ending: Cat's Heaven";
    }
    ACatInLimbo.GoodEnding = GoodEnding;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function NeutralEnding() {
        console.log("Scene starting: Neutral Ending");
        await ACatInLimbo.ƒS.Character.hideAll();
        await ACatInLimbo.ƒS.update();
        ACatInLimbo.ƒS.Speech.hide();
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.clockTicking, 0.3, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.neutralEnding);
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.neutralEnding.duration, ACatInLimbo.transition.neutralEnding.alpha, ACatInLimbo.transition.neutralEnding.edge);
        await ACatInLimbo.ƒS.update(1);
        ACatInLimbo.ƒS.Speech.hide();
        await ACatInLimbo.ƒS.Text.print("Because you treated the cat decently well and your destinies are linked, you both end up in Sweet Nothingness.<br>Let's face it, there is probably neither heaven nor hell.<br>Now you are properly dead, just like the cat.<br> Maybe you'll be reincarnated, maybe this is the final end.<br><p>Who knows what's to come?</p>");
        await new Promise(resolve => setTimeout(resolve, 2000));
        ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.clockTicking, 0.6, 4);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.neutralEndingFin);
        await ACatInLimbo.ƒS.update(4);
        await new Promise(resolve => setTimeout(resolve, 2000));
        let endingCaption = document.getElementById("endingCaption");
        endingCaption.innerText = "Neutral Ending: Sweet Nothingness";
    }
    ACatInLimbo.NeutralEnding = NeutralEnding;
})(ACatInLimbo || (ACatInLimbo = {}));
//# sourceMappingURL=Template.js.map