"use strict";
var ACatInLimbo;
(function (ACatInLimbo) {
    ACatInLimbo.originAmountFish = 0;
    ACatInLimbo.originAmountSpider = 0;
    ACatInLimbo.originAmountFly = 0;
    //  export let originAmountSnail: number = 0;
    ACatInLimbo.bayCreatureFed = false;
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
            // if (ƒS.Inventory.getAmount(items.Snail) < originAmountSnail) {
            //     console.log("nomnomnom, bay creature fed");
            //     ƒS.Sound.play(sound.slimeSound, 1, false);
            //     originAmountSnail = ƒS.Inventory.getAmount(items.Snail);
            //     bayCreatureFed = true;
            // } if (ƒS.Inventory.getAmount(items.Snail) != originAmountSnail) {
            //     originAmountSnail = ƒS.Inventory.getAmount(items.Snail);
            // }
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
    }, 100);
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    ACatInLimbo.ƒ = FudgeCore;
    ACatInLimbo.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    let gameMenu;
    //open entspricht Menu ist offen und false zu
    let menuIsOpen = true;
    ACatInLimbo.dataForSave = {
        // changeUsabilityItem: true,
        //snailUsability: true,
        // currentPlace: "Current Location: Lake",
        //boolean for scenes visited --> for Location-Decisions
        visitedLake: false,
        visitedLakeTwice: false,
        visitedForest: false,
        visitedSwamp: false,
        visitedBay: false,
        visitedRiver: false,
        //booelan for checking if path on map has already been walked --> mapScene
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
        nameProtagonist: "You",
        catScore: 10,
        // scoreForCat: "0",
        // points: 0,
        pickedMeterBar: false,
        pickedChoice: false,
        currentPath: "",
        // openMap: false
        // started: false,
        // ended: false
        //hier auch Punkte verteilungssystem-Variable reinhauen
    };
    //SCHEISSE
    // export async function scheisse(): Promise<void> {
    //   if (dataForSave.catScore < 7) {
    //     alert("Be careful now. The cat is not fond of you at the moment.");
    //     console.log("achtung");
    //   }
    // }
    //CHARACTERS
    ACatInLimbo.characters = {
        protagonist: {
            name: ACatInLimbo.dataForSave.nameProtagonist,
            origin: ACatInLimbo.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                front: "./Images/Characters/protagonist/protagonistFront.png",
                side: "./Images/Characters/protagonist/protagonistSide.png",
                handsInHips: "./Images/Characters/protagonist/protagonistHandsInHips.png",
                scared: "./Images/Characters/protagonist/protagonistScared.png",
                thinking: "./Images/Characters/protagonist/protagonistThinking.png"
            }
        },
        pinkCat: {
            name: "pinkCat",
            origin: ACatInLimbo.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                //pink Cat poses regular
                normal: "./Images/Characters/pinkCat/pinkCatNormal.png",
                normalLookingAway: "./Images/Characters/pinkCat/pinkCatNormalFromBehind.png",
                normalAngry: "./Images/Characters/pinkCat/pinkCatNormalAngry.png",
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
                thoughtful1: "./Images/Characters/pinkCat/pinkCatThoughtful1.png",
                thoughtful2: "./Images/Characters/pinkCat/pinkCatThoughtful2.png",
                thumbsUp: "./Images/Characters/pinkCat/pinkCatThumbsUp.png",
                walking: "./Images/Characters/pinkCat/pinkCatWalking.png",
                yawning: "./Images/Characters/pinkCat/pinkCatYawning.png",
                crouched: "./Images/Characters/pinkCat/pinkCatCrouched.png",
                crouchedLookingAway: "./Images/Characters/pinkCat/pinkCatCrouchedLookingAway.png",
                crouchedSad: "./Images/Characters/pinkCat/pinkCatCrouchedSad.png",
                proud: "./Images/Characters/pinkCat/proud.png",
                play1: "./Images/Characters/pinkCat/pinkCatplay1.png",
                play2: "./Images/Characters/pinkCat/pinkCatplay2.png",
                normal2: "./Images/Characters/pinkCat/normal2.png",
                normal2Sad: "./Images/Characters/pinkCat/normal2Sad.png",
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
                normal: "./Images/Characters/creatures/caveCreature/CaveCreatureNormal.png",
                sound: "./Images/Characters/creatures/caveCreature/CaveCreatureSound.png",
                toungeOut: "./Images/Characters/creatures/caveCreature/CaveCreaturOpenMouth.png",
                attack: "./Images/Characters/creatures/caveCreature/CaveCreatureAttack.png"
            }
        },
        death: {
            name: "Death",
            origin: ACatInLimbo.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                fishingLookingDown: "./Images/Characters/death/deathFishingLookingDown.png",
                fishingLookingUp: "./Images/Characters/death/deathFishingLookingUp.png",
                close: "./Images/Characters/death/deathClose.png"
            }
        },
        path: {
            name: "Path",
            origin: ACatInLimbo.ƒS.ORIGIN.CENTER,
            pose: {
                meadowForest: "./Images/Map/MeadowForest.png",
                meadowLake: "./Images/Map/MeadowLake.png",
                forestLake: "./Images/Map/ForestLake.png",
                forestSwamp: "./Images/Map/ForestSwamp.png",
                lakeSwamp: "./Images/Map/LakeSwamp.png",
                swampRiver: "./Images/Map/SwampRiver.png",
                swampBay: "./Images/Map/SwampBay.png",
                bayRiver: "./Images/Map/BayRiver.png",
                bayCave: "./Images/Map/BayCave.png",
                riverCave: "./Images/Map/RiverCave.png",
                riverMountains: "./Images/Map/RiverMountains.png",
                mountainsClouds: "./Images/Map/MountainsClouds.png",
                caveClouds: "./Images/Map/CaveClouds.png",
                cloudsGate: "./Images/Map/CloudsGate.png"
            }
        },
        riverflow: {
            name: "Riverflow",
            origin: ACatInLimbo.ƒS.ORIGIN.CENTER,
            pose: {
                plain: "./Images/Backgrounds/riverflow/riverflow.png",
                flow1: "./Images/Backgrounds/riverflow/riverflow1.png",
                flow2: "./Images/Backgrounds/riverflow/riverflow2.png",
                flow3: "./Images/Backgrounds/riverflow/riverflow3.png",
                flowWaving3: "./Images/Backgrounds/riverflow/riverflow3Waving.png",
                flow4: "./Images/Backgrounds/riverflow/riverflow4.png",
                flowWaving4: "./Images/Backgrounds/riverflow/riverflow4Waving.png",
                flow5: "./Images/Backgrounds/riverflow/riverflow5.png",
                flow6: "./Images/Backgrounds/riverflow/riverflow6.png"
            }
        },
        snail: {
            name: "Snail",
            origin: ACatInLimbo.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Items/snail.png"
            }
        }
    };
    //INVENTORY
    // export function OpenInventory(): void {
    // }
    /*
      export function checkForCatScore() {
        if (dataForSave.catScore === 0 || dataForSave.catScore < 0) {
          return "Bad End";
        }
      }
    */
    //Help
    function help() {
        ACatInLimbo.ƒS.Text.setClass("TextPrint");
        ACatInLimbo.ƒS.Text.print("<p>In this game you can find a Lovemeter in the right corner of the screen. It shows the affection the pink Cat feels towards you.</p><p>Open your Inventory through the menu to feed your Cat with items you collect throughout the story to make it like you more.</p><p>Be careful it doesn't leave you!</p><p>Shortcuts:</p><p>Menu: M</p><p>Save: S</p><p>Load: L</p><p>Help: H</p><p>Credits: C</p>");
    }
    ACatInLimbo.help = help;
    //Credits
    function credits() {
        ACatInLimbo.ƒS.Text.addClass("credits");
        ACatInLimbo.ƒS.Text.print("Credits: All characters are drawn by Valentina Schwan");
    }
    // if (dataForSave.scoreForCat != dataForSave.catScore.toString()) {
    //   //show score in meter bar
    //   dataForSave.scoreForCat = dataForSave.catScore.toString();
    //   // let showScore: HTMLInputElement = <HTMLInputElement>document.getElementById("scoreForCat");
    //   // document.getElementById("scoreForCat").setAttribute("value", dataForSave.scoreForCat);
    //   // showScore.setAttribute("value", dataForSave.catScore.toString());
    // }
    //MENU
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        inventory: "Inventory",
        credits: "Credits",
        help: "Help",
        close: "Close",
        //   map: "Map"
    };
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await ACatInLimbo.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await ACatInLimbo.ƒS.Progress.load();
                break;
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
            case inGameMenuButtons.credits:
                credits();
                break;
            // case inGameMenuButtons.map:
            //   if (dataForSave.openMap === false) {
            //     openMap()
            //   } else {
            //     closeMap();
            //   }
            //   break;
            case inGameMenuButtons.help:
                help();
                break;
            case inGameMenuButtons.inventory:
                await ACatInLimbo.ƒS.Inventory.open();
        }
    }
    ACatInLimbo.buttonFunctionalities = buttonFunctionalities;
    /*//ƒS.Inventory.add(items.Fly);
   export let originAmount: number;
    console.log("click bitch");
    let inventoryDialog: HTMLDialogElement = document.querySelector("#invent");
    document.addEventListener("pointerdown", checkInventoryFeeding);
    async function checkInventoryFeeding():Promise<void> {
      console.log("click bitch");
      setTimeout(() => {
        if(ƒS.Inventory.getAmount(items.Fish) < originAmount) {
            console.log("nomnomnom");
            originAmount = ƒS.Inventory.getAmount(items.Fish);
          }},100);
  }*/
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
            // case ƒ.KEYBOARD_CODE.I:
            //   console.log("open Inventory");
            //   await ƒS.Inventory.open();
            //   break;
            case ACatInLimbo.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Menu closed");
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Menu open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        //Menu
        gameMenu = ACatInLimbo.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSS");
        // buttonFunctionalities("Close");
        //Hide MeterBar
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = true);
        // document.getElementById("scoreForCat").style.display = "none";
        let scenes = [
            { id: "Meadow Scene", scene: ACatInLimbo.Meadow, name: "meadow" },
            { id: "Forest Scene", scene: ACatInLimbo.Forest, name: "Forest" },
            { id: "Lake Scene", scene: ACatInLimbo.Lake, name: "lake" },
            { id: "Map Scene", scene: ACatInLimbo.Map, name: "map" },
            { id: "Swamp Scene", scene: ACatInLimbo.Swamp, name: "Swamp", next: "" },
            { id: "River Scene", scene: ACatInLimbo.River, name: "River" },
            { id: "Bay Scene", scene: ACatInLimbo.Bay, name: "Bay" },
            { id: "Mountain Scene", scene: ACatInLimbo.Mountain, name: "Mountain" },
            { id: "Cave Entrance Scene", scene: ACatInLimbo.CaveEntrance, name: "Cave Entrance" },
            { id: "Cave Inside Scene", scene: ACatInLimbo.CaveInside, name: "Cave Inside" },
            { id: "Cave Exit Scene", scene: ACatInLimbo.CaveExit, name: "Cave Exit" },
            { id: "BadEnding Cave Scene", scene: ACatInLimbo.BadEndingCave, name: "BadEnding Cave" },
            { id: "BadEnding LostCat Scene", scene: ACatInLimbo.BadEndingLostCat, name: "BadEnding Frog" },
            // { id: "Clouds Scene", scene: Clouds, name: "Clouds" },
            // { id: "Gate", scene: Gate, name: "Gate" },
            // { id: "Test Scene", scene: testScene, name: "Test", next: "" }, //name = kurze Description für einen selbst
            // { id: "choose", scene: secondScene, name: "second Scene", next: "" }, //id um ...next um zu bestimmen welche Szene nach dieser Szene abgespielt wird? mit Hilfe von id 
            // {id: "Bad End", scene: BadEnding, name: "Bad"},
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
                await new Promise(resolve => setTimeout(resolve, 3000));
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
                await new Promise(resolve => setTimeout(resolve, 3000));
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
                await new Promise(resolve => setTimeout(resolve, 3000));
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
                await new Promise(resolve => setTimeout(resolve, 3000));
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
                await new Promise(resolve => setTimeout(resolve, 3000));
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
                await new Promise(resolve => setTimeout(resolve, 3000));
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
                await new Promise(resolve => setTimeout(resolve, 3000));
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
                await new Promise(resolve => setTimeout(resolve, 3000));
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
                await new Promise(resolve => setTimeout(resolve, 3000));
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
                await new Promise(resolve => setTimeout(resolve, 3000));
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
                await new Promise(resolve => setTimeout(resolve, 3000));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.update();
                return "Cave Entrance Scene";
                break;
            case "BayToLake":
                console.log("Bay to Lake");
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.swampBay, ACatInLimbo.path());
                await ACatInLimbo.ƒS.update(2);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.path, ACatInLimbo.characters.path.pose.lakeSwamp, ACatInLimbo.path());
                await ACatInLimbo.ƒS.update(2);
                await new Promise(resolve => setTimeout(resolve, 3000));
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
                await new Promise(resolve => setTimeout(resolve, 3000));
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
                await new Promise(resolve => setTimeout(resolve, 3000));
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
                await new Promise(resolve => setTimeout(resolve, 3000));
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
                await new Promise(resolve => setTimeout(resolve, 3000));
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
                await new Promise(resolve => setTimeout(resolve, 3000));
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
                await new Promise(resolve => setTimeout(resolve, 3000));
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
                await new Promise(resolve => setTimeout(resolve, 3000));
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
                await new Promise(resolve => setTimeout(resolve, 3000));
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
    //ANIMATIONS
    function ScaredCatAnimation() {
        //something
        return {
            start: { translation: ACatInLimbo.ƒS.positionPercent(85, 95), color: ACatInLimbo.ƒS.Color.CSS("", 1) },
            end: { translation: ACatInLimbo.ƒS.positionPercent(150, 100), color: ACatInLimbo.ƒS.Color.CSS("black", 0.5) },
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
        }; //scaling hinzufügen?
    }
    ACatInLimbo.snailThrow = snailThrow;
    function deathSlide() {
        //something
        return {
            start: { translation: ACatInLimbo.ƒS.positionPercent(20, 100), color: ACatInLimbo.ƒS.Color.CSS("", 1) },
            end: { translation: ACatInLimbo.ƒS.positionPercent(-20, 100), color: ACatInLimbo.ƒS.Color.CSS("", 0) },
            duration: 2,
            playmode: ACatInLimbo.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        }; //scaling hinzufügen?
    }
    ACatInLimbo.deathSlide = deathSlide;
    /*
      export function getAnimation(): ƒS.AnimationDefinition {
        return {
          start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0.3) },
          end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
          duration: 1,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
        };
      }*/
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    ACatInLimbo.sound = {
        // ambience
        forestWind: "Audio/Ambience/forestWind.mp3",
        scaryForest: "./Audio/Ambience/mixkit-scary-forest-at-night-2486.wav",
        meadowSound: "./Audio/Ambience/spring-forest-birds-sounds.mp3",
        lakeSound: "./Audio/Ambience/greenfield-birds-suburban-sounds-in-the-background-16683.mp3",
        DrippingInCave: "./Audio/Ambience/dripping-water-in-cave-114694.mp3",
        smallOceanWaves: ".//Audio/Ambience/small-waves-onto-the-sand-143040.mp3",
        LakeWaves: "./Audio/Ambience/waves-on-the-lake-in-summer-time-in-wav-64379.mp3",
        swamp: "./Audio/Ambience/forest-swamp-6751.mp3",
        frogs: "./Audio/Ambience/frogs-48410.mp3",
        river: "./Audio/Ambience/river-in-the-forest-17271.mp3",
        //music
        happyJazz: "./Audio/Ambience/jazz-happy-110855.mp3",
        //catSounds
        cathissing: "./Audio/catAudio/cathisses.wav",
        demandingmeow1: "./Audio/catAudio/demandingMeow1.wav",
        demandingMeow2: "./Audio/catAudio/demandingMeow2.mp3",
        singlerawr: ".//Audio/catAudio/ANMLCat_Little meow of a cat (ID 0494)_BSB.wav",
        cuteMeow: "./Audio/catAudio/cuteMeow.wav",
        cuteMeowMultiple: "./Audio/catAudio/shari_meow-47485.mp3",
        kindOfSadMeow: "./Audio/catAudio/262312__steffcaffrey__cat-meow1-80256.mp3",
        purrMeow: "./Audio/catAudio/cat-purr-meow-8327.mp3",
        purringDeep: "./Audio/catAudio/cat-purring-2-73009.mp3",
        purring: "Audio/catAudio/purring-cat-77928.mp3",
        growling1: "./Audio/catAudio/ANMLCat_Growling cat 1 (ID 1885)_BSB.wav",
        growling2: "./Audio/catAudio/ANMLCat_Growling cat 2 (ID 1886)_BSB",
        growling3: "./Audio/catAudio/ANMLCat_Growling cat 3 (ID 1887)_BSB.wav",
        yawn: "./Audio/catAudio/a-yawn-7011.mp3",
        // FX
        horrorDrum1: "./Audio/FX/mixkit-hard-horror-hit-drum-565 (1).wav",
        horrorDrum2: "./Audio/FX/mixkit-horror-deep-drum-heartbeat-559.wav",
        dive: "./Audio/FX/5-meters-dive-6070.mp3",
        slimeSound: "./Audio/FX/slimey-97605.mp3",
        stepOnSlug: "./Audio/FX/step-on-a-slug-splat-2-99966.mp3",
        chompEat: "./Audio/FX/eating-sound-effect-36186.mp3",
        fishEat: "./Audio/FX/Fish Eat (Nr. 2  Fortnite Sound) - Sound Effect for editing.mp3",
        dryFood: "./Audio/FX/cat-eating-dry-food-133130.mp3",
        bubblingInTheDeep: "./Audio/FX/BlubbernInTiefe.mp3",
        lightbubbling: "./Audio/FX/BlubbernLeisesPlanschen.mp3",
        footstepsForest: "./Audio/FX/mixkit-footsteps-in-the-forest-ground-1230.wav",
        footstepsGrass: "./Audio/FX/mixkit-walking-on-grass-1921.wav",
        frogQuak: "./Audio/FX/frog-qua-cry-36013.mp3",
        frogQuaks: "./Audio/FX/frog_quak-81741.mp3",
        snailbreak: "./Audio/FX/finger-cracking-40991.mp3",
        monster: "./Audio/FX/monster-rumble-99026.mp3",
        goats: "./Audio/FX/sheep-bleating-31117.mp3"
    };
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    ACatInLimbo.items = {
        Spider: {
            name: "Spider",
            description: "a small spider",
            image: "./Images/Items/spider.png",
            static: false //false: item useable
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
            image: "./Images/Items/snail.png",
            static: true
        },
        Fireflies: {
            name: "Fireflies",
            description: "glowing Fireflies",
            image: "./Images/Items/fireflies.png",
            static: true
        },
        Heart: {
            name: "Heart ",
            description: "heart of lake Creature",
            image: "./Images/Items/heart.png",
            static: true
        },
        Coin: {
            name: "Coin ",
            description: "a small coin",
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
        bayClose: {
            bayClose: "BayClose",
            background: "Images/Background/bayClose.png"
        },
        bayGlow: {
            bayGlow: "bayGlow",
            background: "Images/Background/bayGlow.png"
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
            background: "./Images/Backgrounds/riverflow/riverflow.png"
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
        mountainGoats: {
            name: "MountainGoats",
            background: "./Images/Backgrounds/mountainsGoats.png"
        }
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
        }
    };
})(ACatInLimbo || (ACatInLimbo = {}));
;
var ACatInLimbo;
(function (ACatInLimbo) {
    async function BadEndingCave() {
        console.log("Bad Ending Cave");
    }
    ACatInLimbo.BadEndingCave = BadEndingCave;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function BadEndingLostCat() {
        console.log("Bad Ending: Lost Cat");
    }
    ACatInLimbo.BadEndingLostCat = BadEndingLostCat;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function Bay() {
        console.log("Scene starting: Bay");
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.smallOceanWaves, 0.5, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.bay);
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.wildSwirl.duration, ACatInLimbo.transition.wildSwirl.alpha, ACatInLimbo.transition.wildSwirl.edge);
        //falls man das zweite mal bei bay war --> direkt weiterleiten zur nächsten Szene
        if (ACatInLimbo.dataForSave.visitedBay == true) {
            if (ACatInLimbo.dataForSave.visitedLakeTwice == true) {
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
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
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.happy, ACatInLimbo.ƒS.positionPercent(60, 82));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.bayCreature, "blblblbHablppy!");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.normal, ACatInLimbo.ƒS.positionPercent(60, 82));
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.coin, ACatInLimbo.ƒS.positionPercent(60, 82));
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Is that for us? Thank you, that's really nice!");
                await ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Coin);
                await ACatInLimbo.ƒS.update();
                ACatInLimbo.ƒS.Text.print("a coin has been added to your inventory");
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.talking, ACatInLimbo.ƒS.positionPercent(60, 82));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.bayCreature, "blblbl");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.dive, 1, false);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.headNormal, ACatInLimbo.ƒS.positionPercent(60, 82));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update(2);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "A coin? That could be helpful. Let's move on now.");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            }
            //pick next Location
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
        }
        ACatInLimbo.dataForSave.visitedBay = true;
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.sleeping, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Aaah, the sea. Salt air. Cool Breeze. Adventure in my soul.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.yawning, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update(2);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "You should design wall decals.");
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "You're a grumpy, mean little cat.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "How dare you!?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Excuse me?");
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "I've been here far too long, only to get to live once every few decades, and then spend all my time guiding some lost souls with no sense of direction through the countryside.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouchedLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Most of the time they fail, but that's not my fault! I'm just being treated very poorly here.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouchedSad, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "I get no tips, no holidays, only working hours and then eternal sleep without relaxation.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "I want to retire, I'm exhausted! And now I have to put up with your insolence!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Jesus, you're mad, huh?");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Hmpf.");
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.glow, ACatInLimbo.ƒS.positionPercent(60, 82));
        await ACatInLimbo.ƒS.update(3);
        let HowToTreatGrumpyCat = {
            solution: "Offer solution.",
            ask: "Ask for more info about the job"
        };
        let HowToTreatGrumpyCatRequest = await ACatInLimbo.ƒS.Menu.getInput(HowToTreatGrumpyCat, "choicesCSSClass");
        switch (HowToTreatGrumpyCatRequest) {
            case HowToTreatGrumpyCat.solution:
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Maybe you should speak with HR, I don't know how it works, but...", false);
                await ACatInLimbo.ƒS.update();
                ACatInLimbo.dataForSave.catScore -= 5;
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouchedLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Forget it.");
                await ACatInLimbo.ƒS.update();
                break;
            case HowToTreatGrumpyCat.ask:
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Who's your boss?");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Oh, you're eventually gonna meet him... probably.");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Why do you not quit?");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Good idea! Thanks for reminding me of the option!");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouchedLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
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
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.scared, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "It almost got you!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
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
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingBack, ACatInLimbo.ƒS.positionPercent(80, 95));
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
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "This creature seems less compromise-oriented though.");
        let feedBayCreature = {
            feed: "Feed snails",
            talk: "try to talk it out"
        };
        let pickedFeed;
        let pickedTalk;
        do {
            // if (pickedFeed == true) {
            //     delete feedBayCreature.feed;
            //     delete feedBayCreature.talk;
            //     console.log("delete feed");
            // }
            if (pickedTalk == true) {
                delete feedBayCreature.talk;
                console.log("delete talk");
            }
            let feedBayCreatureRequest = await ACatInLimbo.ƒS.Menu.getInput(feedBayCreature, "choicesCSSClass");
            switch (feedBayCreatureRequest) {
                case feedBayCreature.talk:
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Listen, we've met a friend from a lake who is really really sad. It lost its heart. We thought you could have it, as you have two hearts!");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(60, 82));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.bayCreature, "blblbllb get blblost!");
                    await ACatInLimbo.ƒS.update();
                    pickedTalk = true;
                case feedBayCreature.feed:
                    ACatInLimbo.dataForSave.pickedChoice = true;
                    pickedFeed = true;
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Let's give it some snails or something...");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "They're MY snails!");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal2Sad, ACatInLimbo.ƒS.positionPercent(80, 95));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "...We only have four. Maybe don't use all of them up, okay?");
                    let feedSnails = {
                        snail: "Feed a snail",
                        stop: "Stop Feeding"
                    };
                    let pickedStop = false;
                    let pickedSnail = false;
                    do {
                        if (pickedStop == true) {
                            delete feedSnails.snail;
                            delete feedSnails.stop;
                        }
                        let feedSnailsRequest = await ACatInLimbo.ƒS.Menu.getInput(feedSnails, "choicesCSSClass");
                        switch (feedSnailsRequest) {
                            case feedSnails.snail:
                                ACatInLimbo.ƒS.Speech.hide();
                                pickedSnail = true;
                                if (ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Snail) > 0) {
                                    ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.slimeSound, 1, false);
                                    ACatInLimbo.ƒS.Inventory.subtract(ACatInLimbo.items.Snail);
                                }
                                if (ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Snail) == 0) {
                                    ACatInLimbo.dataForSave.catScore -= 5;
                                    pickedStop = true;
                                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Awesome, you used all my snails. Thanks a lot. Idiot.");
                                    ACatInLimbo.ƒS.update();
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
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
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
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Yes, Lake! big, a bit slimy and very dramatic character! Also, very sad.");
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
                    await ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Heart);
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Wow, we really got it! Thanks!");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.bayCreature, ACatInLimbo.characters.bayCreature.pose.happyHeart, ACatInLimbo.ƒS.positionPercent(60, 82));
                    await ACatInLimbo.ƒS.update(1);
                    ACatInLimbo.ƒS.Text.print("a heart has been added to your inventory");
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal2, ACatInLimbo.ƒS.positionPercent(80, 95));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Great. We don't have any time to lose. do you still want to help the Lake Creature?");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
                    break;
            }
        } while (!ACatInLimbo.dataForSave.pickedChoice);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.bayCreature);
        //conversation about helping or not helping
        let lakeCreatureDecision = {
            help: "bring heart to lake Creature",
            dontHelp: "move forward"
        };
        let lakeCreatureDecisionRequest = await ACatInLimbo.ƒS.Menu.getInput(lakeCreatureDecision, "choicesCSSClass");
        switch (lakeCreatureDecisionRequest) {
            case lakeCreatureDecision.help:
                ACatInLimbo.dataForSave.catScore += 5;
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.smallOceanWaves, 0, 2);
                ACatInLimbo.dataForSave.currentPath = "BayToLake";
                return "Map Scene";
                break;
            case lakeCreatureDecision.dontHelp:
                ACatInLimbo.dataForSave.catScore -= 5;
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "You're right, I kind of want to get out of here. Let's move on.");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
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
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.meadowSound, 0.5, true);
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.forestWind, 1, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.caveEntrance);
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.maze.duration, ACatInLimbo.transition.maze.alpha, ACatInLimbo.transition.maze.edge);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.walking, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal2, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "It's gonna be dark in there. Do we have anything that can provide some light?");
        await ACatInLimbo.ƒS.update();
        if (ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Fireflies) < 1) {
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Unfortunately, we don't. what should we do?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "It's your decision, but obviously we won't see much. It could get dangerous.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
        }
        else {
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Yes! We could use those fireflies the swamp creature gave us!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Noice! Let's get going!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
        }
        let getInCave = {
            turnAround: "Turn Around",
            enter: "Enter Cave"
        };
        let getInCaveRequest = await ACatInLimbo.ƒS.Menu.getInput(getInCave, "choicesCSSClass");
        switch (getInCaveRequest) {
            case getInCave.enter:
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
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Omg, that was close!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingBack, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Yeah, we're lucky, we brought those snails with us!");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "True.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Now, it's not much further.");
        await ACatInLimbo.ƒS.update();
        ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.forestWind, 0, 3);
        ACatInLimbo.dataForSave.currentPath = "CaveToClouds";
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
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.walking, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await new Promise(resolve => setTimeout(resolve, 3000));
            ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.monster, 0.5, false);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "This does not feel good.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouched, ACatInLimbo.ƒS.positionPercent(80, 95));
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
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.proud, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "So, as it turned out, helping the swamp creature payed off.");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Totally!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.frogQuaks, 1, false);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Eh, what was that? That sounds like we're not alone in here.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Chill, it's just some frogs probably.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
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
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Experience.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Let's give it some snails to distract it.");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "What? I thought you wanted them so badly?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "I'm your guide for a reason. This creature comes from a very dark place. Let's not take any chances.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal2, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Alright, alright.");
            await ACatInLimbo.ƒS.update();
            if (ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Snail) < 1) {
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "It's just...Apparently, I don't have any snails left.");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Ah, yes, of course, you gave all of the to the bay creature.");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "What can I say, I didn't know we would still need them!");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Damnit.");
                await ACatInLimbo.ƒS.update();
                ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.frogQuak, 1, false);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.caveCreature);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.caveCreature, ACatInLimbo.characters.caveCreature.pose.sound, ACatInLimbo.ƒS.positionPercent(45, 70));
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouchedLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
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
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(80, 95));
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
    }
    ACatInLimbo.Clouds = Clouds;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function Empty() {
        console.log("THE VISUAL NOVEL ENDS HERE");
    }
    ACatInLimbo.Empty = Empty;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function Forest() {
        console.log("Scene starting: Forest");
        ACatInLimbo.dataForSave.visitedForest = true;
        let textForest = {
            protagonist: {
                T0001: "It's kinda eery here. Do we HAVE to be here?",
                T0002: "...I don't like this place.",
                T0003: "Uaaaah, fuck fuck fuck fuck, LET'S RUN!!!!",
                T0004: "Well, it's working?!",
                T0005: "...",
                T0006: "Ew, I'm nothing like that thing, it's fucking digusting.",
                T0007: "Really? That poor thing!",
                T0008: "What's wrong with it?",
                T0009: "Wait, so if I'm staying I'm gonna turn into this thing?",
                T0010: "...Great."
            },
            pinkCat: {
                T0001: "We don't HAVE to, but I want to visit an old friend. I want to see what he's been up to, you know?",
                T0002: "That's cause you're a baby.",
                T0003: "!Oh, look! I think I just saw him!",
                T0004: "Come out you chicken shit!",
                T0005: "Wait...you're not going to attack, are you?",
                T0006: "I knew it! You're my old chicken shit friend!",
                T0007: "He doesn't do anything, he's just trying to be scary.",
                T0008: "You should get along well actually, you both seem to stem from the chicken family.",
                T0009: "Ugh, okay. Listen, it's just a poor soul like you, that got stuck here.",
                T0010: "What in Death's name is wrong with you?",
                T0011: "Wow, great, now it's gone. It heard you!",
                T0012: "You're kind of an idiot, you know? I'm gonna tell you right now, if you piss me off to much, I'm just leaving you here.",
                T0013: "Let's move on.",
                T0014: "See, we're nice! Do you remember me?",
                T0015: "Ui, that's gonna be difficult.",
                T0016: "It got lost here. Like you, if we don't stay on our path.",
                T0017: "Not exactly, but yeah. You're probably not gonna turn into a spider, I think. Everyone's different.",
                T0018: "Yeah. So, buddy have you got any treats for me maybe?",
                T0019: "OMD, that was almost a word!",
                T0020: "Thank you, my friend. Take it easy, okay?"
            },
            spiderCreature: {
                T0001: "grmmmllb",
                T0002: "brbbrlll yaaaaa",
                T0003: "lmmmrb"
            }
        };
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        // document.getElementById("scoreForCat").style.display = "";
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.scaryForest, 2, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.forest);
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.circleSwirl.duration, ACatInLimbo.transition.circleSwirl.alpha, ACatInLimbo.transition.circleSwirl.edge);
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        await ACatInLimbo.ƒS.update(2);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.walking, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textForest.protagonist.T0001);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.cleaningPaw, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0001);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textForest.protagonist.T0002);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0002);
        await ACatInLimbo.ƒS.update();
        //creature can be seen
        await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.normal, ACatInLimbo.spiderAnimationHide());
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.horrorDrum1, 1);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0003);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0004);
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
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textForest.protagonist.T0003);
        await ACatInLimbo.ƒS.update();
        //fight or flight to lake or swamp
        let FightFlight = {
            fight: "Fight",
            flight: "Flight"
        };
        let fightFlightRequest = await ACatInLimbo.ƒS.Menu.getInput(FightFlight, "choicesCSSClass");
        switch (fightFlightRequest) {
            case FightFlight.flight:
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.spiderCreature);
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
                        break;
                    case nextLocation.swamp:
                        ACatInLimbo.dataForSave.currentPath = "ForestToSwamp";
                        return "Map Scene";
                        break;
                }
                break;
            case FightFlight.fight:
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.attack, ACatInLimbo.ƒS.positionPercent(50, 50));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0005, true);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.spiderCreature);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.normal, ACatInLimbo.ƒS.positionPercent(50, 50));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0006);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.normal, ACatInLimbo.ƒS.positionPercent(50, 50));
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0007);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textForest.protagonist.T0004);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0008);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textForest.protagonist.T0005);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0009);
                await ACatInLimbo.ƒS.update();
                let HowToTreatSpider = {
                    insult: "berate spider creature",
                    console: "console spider creature"
                };
                let HowToTreatSpiderRequest = await ACatInLimbo.ƒS.Menu.getInput(HowToTreatSpider, "choicesCSSClass");
                switch (HowToTreatSpiderRequest) {
                    case HowToTreatSpider.insult:
                        await ACatInLimbo.ƒS.Character.hideAll();
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.sad, ACatInLimbo.ƒS.positionPercent(50, 50));
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textForest.protagonist.T0006);
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0010);
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Character.hideAll();
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
                        await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.sad, ACatInLimbo.spiderAnimationDisappear());
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0011);
                        ACatInLimbo.dataForSave.catScore -= 10;
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0012);
                        await ACatInLimbo.ƒS.update();
                        break;
                    case HowToTreatSpider.console:
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textForest.protagonist.T0007);
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Character.hideAll();
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.smile, ACatInLimbo.ƒS.positionPercent(50, 50));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0014);
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.spiderCreature, textForest.spiderCreature.T0001);
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0015);
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textForest.protagonist.T0008);
                        await ACatInLimbo.ƒS.Character.hideAll();
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.sad, ACatInLimbo.ƒS.positionPercent(50, 50));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0016);
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textForest.protagonist.T0009);
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0017);
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textForest.protagonist.T0010);
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Character.hideAll();
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.smile, ACatInLimbo.ƒS.positionPercent(50, 50));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0018);
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.spiderCreature, textForest.spiderCreature.T0002);
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0019);
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0020);
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.spiderCreature, textForest.spiderCreature.T0003);
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
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.stretching, ACatInLimbo.ƒS.positionPercent(80, 95));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
                        await ACatInLimbo.ƒS.update();
                        break;
                }
        }
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0013);
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
    }
    ACatInLimbo.Gate = Gate;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function Lake() {
        console.log("Scene starting: Lake");
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        let textLake = {
            protagonist: {
                T0001: "Uh, what a beautiful lake!",
                T0002: "Oh, come on...",
                T0003: "Ehm, okay, you were right.",
                T0004: "We're not alone.",
                T0005: "Whispering: <i>He seems a bit simple.</i>",
                T0006: "Down here?",
                T0007: "Oh.",
                T0008: "Whispering: <i>What's that hole in his body?</i>",
                T0009: "You mean 'Good God', right?",
                T0010: "Is it Lost Love maybe?",
                T0011: "Omg, that's kind of sweet!",
                TD11: "Wow, very wise.",
                TD21: "Nah, I think it's the ultimate goal to be able to fall in love and give your all to someone.",
                T0012: "Hey, maybe we can get it's heart back!",
                T0013: "It should be worth it, right!",
                T0014: "Then let's not waste time and move on!"
            },
            pinkCat: {
                T0001: "You never know...",
                T0002: "What?",
                T0003: "Ah. Hi!",
                T0004: "Buddy, that's the worst bait I've ever seen. Maybe you should just, you know, first, show the fish, and then, if somebody is trying to get it, you could show yourself?",
                T0005: "Yeah, like that!",
                T0006: "Down here, all creatures are a bit dumb.",
                T0007: "Those that don't make it far into the mountains turn into idiots.",
                T0008: "Good Question. Ey, why's that hole in your body?",
                T0009: "Good Death.",
                T0010: "No. We're in Limbo. God has no place here. I don't even know him.",
                T0011: "Ooooh, of course, now I get it! It gave his heart to someone!",
                T0012: "Sweet? You're delusional. You should never give your heart away. It belongs to you and you only. First person you should love is yourself.",
                TD11: "Call me Sokracat.",
                TD21: "How unprogressive and disappointing…",
                T0013: "Maybe…if we can find it on our way…But then we have to go back again…",
                T0014: "…Ok. If we can reduce some of this creatures suffering I guess it can be worth it.",
                T0015: "Jeez, alright, you goody-goody."
            },
        };
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.lakeSound, 1, true);
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.LakeWaves, 0.5, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.lake);
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.wet1.duration, ACatInLimbo.transition.wet1.alpha, ACatInLimbo.transition.wet1.edge);
        if (ACatInLimbo.dataForSave.visitedLake == true) {
            //show stuff for when lake creature gets it's heart back
            ACatInLimbo.dataForSave.visitedLakeTwice = true;
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.hide, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
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
        else {
            ACatInLimbo.dataForSave.visitedLake = true;
            await ACatInLimbo.ƒS.update(1);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingBack, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update(1);
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.cleaningAss, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update(1);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textLake.protagonist.T0001);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textLake.pinkCat.T0001);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textLake.protagonist.T0002);
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.hide, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.cleaningPaw, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update(1);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textLake.protagonist.T0003);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textLake.pinkCat.T0002);
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.bait, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update(1);
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouchedLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update(1);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textLake.pinkCat.T0003);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textLake.pinkCat.T0004);
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.dive, 1, false);
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.attack, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textLake.pinkCat.T0005);
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.normal, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textLake.protagonist.T0005);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textLake.pinkCat.T0006);
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.sideEye, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textLake.protagonist.T0006);
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textLake.pinkCat.T0007);
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textLake.protagonist.T0007);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textLake.protagonist.T0008);
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.normal, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textLake.pinkCat.T0008);
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.sideEye, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update(1);
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.cry, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textLake.pinkCat.T0009);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textLake.protagonist.T0009);
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textLake.pinkCat.T0010);
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.heartEyes, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update(1);
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.heartEyesBroken, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update(1);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textLake.protagonist.T0010);
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textLake.pinkCat.T0011);
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal2, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.hardCry, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textLake.protagonist.T0011);
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textLake.pinkCat.T0012);
            let JudgeStatement = {
                agree: "Agree with statement",
                disagree: "Disagree with statement"
            };
            let JudgeStatementRequest = await ACatInLimbo.ƒS.Menu.getInput(JudgeStatement, "choicesCSSClass");
            switch (JudgeStatementRequest) {
                case JudgeStatement.agree:
                    ACatInLimbo.dataForSave.catScore += 5;
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textLake.protagonist.TD11);
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.thumbsUp, ACatInLimbo.ƒS.positionPercent(80, 95));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textLake.pinkCat.TD11);
                    break;
                case JudgeStatement.disagree:
                    ACatInLimbo.dataForSave.catScore -= 5;
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textLake.protagonist.TD21);
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textLake.pinkCat.TD21);
                    break;
            }
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.normal, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textLake.protagonist.T0012);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textLake.pinkCat.T0013);
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.sideEye, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textLake.protagonist.T0013);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textLake.pinkCat.T0014);
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.lakeCreature);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.lakeCreature, ACatInLimbo.characters.lakeCreature.pose.cry, ACatInLimbo.ƒS.positionPercent(50, 75));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textLake.protagonist.T0014);
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textLake.pinkCat.T0015);
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
        ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.lakeSound, 0, 2);
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
        let textAwakening = {
            protagonist: {
                T0001: "Where am I?",
                T0002: "WHO am I?",
                T0003: "Ah, I remember, it's ",
                T0004: "What is that strange statue doing over there....",
                T0005: "Got some spiders, great.",
                T0006: "Well, this seems like a lovely meadow, but what the fuck am I doing here? I feel kind of...ghosty. Like I don't have a lot of substance.",
                T0007: "Why does this cat look so real? Like it's not supposed to be of stone. Maybe if I touch i...",
                T0008: "Wtf, it's alive!",
                T0009: "What now?",
                T0010: "Ouuuh, I'm sorry, I'm sorry, calm down!",
                T0011: "Well, you're certainly not a normal cat.",
                T0012: "Alright, I'm gonna behave from now on!"
            },
            pinkCat: {
                T0001: "Back off! I'm warning you. My claws are sharp as ever.",
                T0002: "You act like someone who has never ever even met a cat!",
                T0003: "Ugh, shut up. Do I have to expect you to behave like this all the time? Cause if that's the case I think I'm just gonna scooch right back on my stone over there.",
                T0004: "...I hope so.",
                T0005: "Not too fast, that's right. You seem to know your stuff I guess.",
                T0006: "Ouuuh, you seem nice!"
            }
        };
        let textIntro = {
            protagonist: {
                T0001: "Okay, so what is this and where am I? Do you know about this place?",
                T0002: "What?!",
                T0003: "Limbo? Like the Limbo in Christianity?",
                T0004: "...?",
                T0005: "So... there is a way out? Can I be with my family if I get out?",
                T0006: "You're right, I can't remember anything. From what you're telling me, this place doesn't sound like one I would want to stay in.",
                T0007: "Why is that?",
                T0008: "A tour to...where exactly?",
                T0009: "Oh, good God, yeah, let's go!"
            },
            pinkCat: {
                T0001: "A warm Hello to you too, good sir. Looks like you're pretty dead!",
                T0002: "No need to panic. You're in Limbo.",
                T0003: "Uuuuuh, I don't know anything about that Christianity stuff. This is neither a good nor a bad place though. It's an in-between.",
                T0004: "Well, you're dead, but your soul didn't get to afterlife.",
                T0005: "Why do you care? You can't remember them.",
                T00052: "No, honestly I don't have a clue about what happens if you get through, but good thing is, you don't have to suffer for eternity.",
                T0006: "Does sound good, ey?",
                T0007: "Okay, you're right, I forgot, it's only a neutral place for me personally.",
                T0008: "That's cause I'm a guide. I can give you a tour if you want?",
                T0009: "To the gate to afterlife you dummy! Want to get out of here and avoid eternal suffering or do you want to stay?"
            }
        };
        // document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        // document.getElementById("scoreForCat").style.display = "";
        // dataForSave.catScore += 5;
        //Intro
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.meadowSound, 1, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.meadow);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.awakening1, ACatInLimbo.ƒS.positionPercent(65, 85));
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.swirlStuff.duration, ACatInLimbo.transition.swirlStuff.alpha, ACatInLimbo.transition.swirlStuff.edge);
        await new Promise(resolve => setTimeout(resolve, 3000));
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textAwakening.protagonist.T0001);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textAwakening.protagonist.T0002);
        await ACatInLimbo.ƒS.update();
        //  await ƒS.Character.hide(characters.protagonist);
        //  await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.thinking, ƒS.positionPercent(10, 95));
        ACatInLimbo.dataForSave.nameProtagonist = await ACatInLimbo.ƒS.Speech.getInput();
        await ACatInLimbo.ƒS.update();
        // dataForSave.catScore -= 5;
        //UpdateName();
        ACatInLimbo.characters.protagonist.name = ACatInLimbo.dataForSave.nameProtagonist; //Danke für nichts. Keine ahnung wie das gehen soll. Ich kann die protagonist figuren nciht mehr hiden wenn ich das mache 
        console.log(ACatInLimbo.dataForSave.nameProtagonist);
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textAwakening.protagonist.T0003 + ACatInLimbo.dataForSave.nameProtagonist + "!");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textAwakening.protagonist.T0004);
        await ACatInLimbo.ƒS.update();
        let firstAction = {
            awakeCat: "Touch the Stone-Cat",
            lookAround: "First, take a look around"
        };
        let firstActionRequest = await ACatInLimbo.ƒS.Menu.getInput(firstAction, "choicesCSSClass");
        switch (firstActionRequest) {
            case firstAction.lookAround:
                //macht eig keinen sinn weil die katze noch nciht wach ist, aber ich lass es erstmal drin, whatever
                console.log("look around");
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Spider);
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Spider);
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Spider);
                ACatInLimbo.ƒS.Text.print("Three spiders have been added to your Inventory");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textAwakening.protagonist.T0005);
                await ACatInLimbo.ƒS.update();
                // ƒS.Text.print("Hint: Never forget to keep the cat happy. Try to give it some food out of your Inventory (I) to make it like you more.");
                // await ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textAwakening.protagonist.T0006);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textAwakening.protagonist.T0007);
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
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textAwakening.protagonist.T0008);
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
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textAwakening.protagonist.T0009);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.hide();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.stretchingSmall, ACatInLimbo.ƒS.positionPercent(70, 85));
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.stonePedestal, ACatInLimbo.characters.stonePedestal.pose.stonePedestal, ACatInLimbo.ƒS.positionPercent(65, 85));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.cuteMeow, 1, false);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalSmall, ACatInLimbo.ƒS.positionPercent(75, 85));
        await ACatInLimbo.ƒS.update(1);
        // let itemsSpider = ƒS.Inventory.getAmount(items.Spider);
        // if (itemsSpider > 0) {
        //     console.log(items.Spider.static);
        //     ƒS.Inventory.subtract(items.Spider);
        //     ƒS.Inventory.subtract(items.Spider);
        //     ƒS.Inventory.subtract(items.Spider);
        //     console.log("subtract")
        //     items.Spider.static = false;
        //     console.log(items.Spider.static);
        //     ƒS.Inventory.add(items.Spider);
        //     ƒS.Inventory.add(items.Spider);
        //     ƒS.Inventory.add(items.Spider);
        // }
        //Choices for how to act towards Cat
        let approachCat = {
            approachCatCarefully: "Carefully approach cat",
            ApproachCat: "Walk towards cat",
            Wait: "Wait"
        };
        //wait for input
        let approachCatRequest = await ACatInLimbo.ƒS.Menu.getInput(approachCat, "choicesCSSClass");
        //Show MeterBar 
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        // document.getElementById("scoreForCat").style.display = "";
        switch (approachCatRequest) {
            case approachCat.approachCatCarefully:
                console.log("Carefully approach cat");
                ACatInLimbo.dataForSave.catScore += 5;
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.curiousSmall, ACatInLimbo.ƒS.positionPercent(75, 85));
                await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.purrMeow, 1, false);
                await ACatInLimbo.ƒS.update();
                ACatInLimbo.ƒS.Text.print("Hint: You just got some affection points. <p>The Lovemeter in the right corner shows how much the cat likes you.</p>Try to give it some food (if you have some) out of your Inventory to please it.<p>If the cat doesn't like you anymore, it's gonna leave.</p>");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textAwakening.pinkCat.T0005);
                await ACatInLimbo.ƒS.update();
                break;
            case approachCat.ApproachCat:
                console.log("Walk towards cat");
                ACatInLimbo.dataForSave.catScore -= 5;
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                //   await ƒS.Character.hide(characters.protagonist);
                await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.growling3, 1, false);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.scaredSmall, ACatInLimbo.ƒS.positionPercent(75, 85));
                // await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.thinking, ƒS.positionPercent(10, 95));
                await ACatInLimbo.ƒS.update();
                ACatInLimbo.ƒS.Text.print("Hint: You just lost some affection points. <p>The Lovemeter in the right corner shows how much the cat likes you.</p><p>Try to give it some food (if you have some) out of your Inventory to please it.</p><p>If the cat doesn't like you anymore, it's gonna leave.</p>");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textAwakening.pinkCat.T0001);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textAwakening.protagonist.T0010);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textAwakening.pinkCat.T0002);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textAwakening.protagonist.T0011);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textAwakening.pinkCat.T0003);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalSmall, ACatInLimbo.ƒS.positionPercent(75, 85));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textAwakening.protagonist.T0012);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textAwakening.pinkCat.T0004);
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
                let pickedMakeSounds;
                do {
                    if (pickedKneelDown == true) {
                        console.log(pickedKneelDown);
                        delete attractCat.kneelDown;
                        console.log("delete kneel down");
                    }
                    if (pickedMakeSounds == true) {
                        console.log(pickedMakeSounds);
                        delete attractCat.makeSounds;
                        console.log("delete make sounds");
                    }
                    if (pickedReachOut == true) {
                        console.log(pickedReachOut);
                        delete attractCat.reachOut;
                        console.log("delete reach out");
                    }
                    let attractCatRequest;
                    if (pickedKneelDown == true && pickedMakeSounds == true && pickedReachOut == true) {
                        ACatInLimbo.dataForSave.pickedChoice = true;
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
                            pickedMakeSounds = true;
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
                } while (!ACatInLimbo.dataForSave.pickedChoice);
                await ACatInLimbo.ƒS.update(2);
                console.log("cat is happy and you got +20 in lovebar");
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.stonePedestal);
                await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.purring, 1, false);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.lovelySmall, ACatInLimbo.ƒS.positionPercent(75, 85));
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.stonePedestal, ACatInLimbo.characters.stonePedestal.pose.stonePedestal, ACatInLimbo.ƒS.positionPercent(65, 85));
                await ACatInLimbo.ƒS.update();
                ACatInLimbo.ƒS.Text.print("Hint: You just got a lot of affection points. <p>The Lovemeter in the right corner shows how much the cat likes you.</p>Try to give it some food (if you have some) out of your Inventory to please it.<p>If the cat doesn't like you anymore, it's gonna leave.</p>");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textAwakening.pinkCat.T0006);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.lovely, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.purring, 0, 2);
                break;
        }
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        //  await ƒS.Character.hide(characters.protagonist);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal2, ACatInLimbo.ƒS.positionPercent(80, 95));
        //await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.handsInHips, ƒS.positionPercent(10, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textIntro.protagonist.T0001);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textIntro.pinkCat.T0001);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textIntro.protagonist.T0002);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.cleaningPaw, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textIntro.pinkCat.T0002);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textIntro.protagonist.T0003);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.thoughtful2, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textIntro.pinkCat.T0003);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textIntro.protagonist.T0004);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.derpy2, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textIntro.pinkCat.T0004);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textIntro.protagonist.T0005);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textIntro.pinkCat.T0005);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textIntro.pinkCat.T00052);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.curious, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textIntro.pinkCat.T0006);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textIntro.protagonist.T0006);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.derpy1, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textIntro.pinkCat.T0007);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textIntro.protagonist.T0007);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.proud, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textIntro.pinkCat.T0008);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textIntro.protagonist.T0008);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textIntro.pinkCat.T0009);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textIntro.protagonist.T0009);
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
        //Mountains
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.mountains);
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.hardEdges.duration, ACatInLimbo.transition.hardEdges.alpha, ACatInLimbo.transition.hardEdges.edge);
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.forestWind, 2, true);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.close, ACatInLimbo.ƒS.positionPercent(20, 100));
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.derpy1, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "Fun, fun, FUN! Now, this is where we part ways.");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Oh. Alright. Let me ask, who are you, anyway?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.yawning, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "...");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "We shall meet again.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal2, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Great, thanks for ignoring me.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.thumbsUp, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "Byyyeee!");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.close, ACatInLimbo.deathSlide());
        await ACatInLimbo.ƒS.update(2);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.curious, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Ok, whatever, let's move on.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.mountainGoats);
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.goats, 0.5, true);
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Look, goats! Oh, I LOVE goats!");
        ACatInLimbo.dataForSave.catScore += 5;
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.purring, 1, false);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.lovely, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Really?");
        await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.purring, 0, 2);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "They can jump very high, climb absolutely everywhere and the make cute sounds");
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.purrMeow, 1, false);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Makes sense.");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "You think they're hiding from the sun in those caves?");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal2, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Probably? I'm not a goat expert.");
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.walking, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Come on, let's leave them in peace.");
        await ACatInLimbo.ƒS.update();
        ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.forestWind, 0, 3);
        ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.goats, 0, 2);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
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
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.river, 1, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.river);
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.dots.duration, ACatInLimbo.transition.dots.alpha, ACatInLimbo.transition.dots.edge);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.fishingLookingDown, ACatInLimbo.ƒS.positionPercent(45, 82));
        await ACatInLimbo.ƒS.update();
        //second time river
        if (ACatInLimbo.dataForSave.visitedRiver == true) {
            if (ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Coin) != 0) {
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.close, ACatInLimbo.ƒS.positionPercent(20, 100));
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
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.walking, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update(1);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "There is someone! Who's that?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouchedLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.cuteMeow, 1, false);
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Oh.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Doesn't look like the rest of the creatures we met.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.derpy2, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "That's right.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Hey, excuse me!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.horrorDrum2, 1, false);
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.fishingLookingUp, ACatInLimbo.ƒS.positionPercent(45, 82));
            await ACatInLimbo.ƒS.update();
            await new Promise(resolve => setTimeout(resolve, 3000));
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Why is he not answering?");
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouched, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Cause he's a mysterious weirdo.");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "You know him?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.close, ACatInLimbo.ƒS.positionPercent(20, 100));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Hi. What's up. We're doing fine. You don't have to check on me.");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "Check on you?");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "Mhm, sure thing. Want a ride to the mountains?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.cleaningPaw, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Since when are you helping?");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "I'm bored. But I'll tell you what I am not: A cheap bitch! I will help you for an obolus.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.curious, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Well, might as well accept the offer, right? Also, I seriously need a break from these scandalous travel conditions.");
            await ACatInLimbo.ƒS.update();
            ACatInLimbo.dataForSave.visitedRiver = true;
        }
        if (ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Coin) != 0) {
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "We do have a coin!");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.proud, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "Then I can be your ferryman. Do you accept my offer?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal2, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "If we're up there, we won't come back down, you know?");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "We could also try to move through the cave.");
            await ACatInLimbo.ƒS.update();
            let payDeathDecision = {
                accept: "accept the offer",
                refuse: "refuse the offer"
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
                    await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "Pah! Good luck.");
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.fishingLookingDown, ACatInLimbo.ƒS.positionPercent(45, 82));
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
                    await ACatInLimbo.ƒS.update();
                    await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                    await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
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
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "A coin would be enough.");
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.death, "But if you don't have anything, go back where you came from! I'm disappointed.");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, "What?");
            await ACatInLimbo.ƒS.update();
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.death);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.death, ACatInLimbo.characters.death.pose.fishingLookingDown, ACatInLimbo.ƒS.positionPercent(45, 82));
            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
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
        let textSwamp = {
            protagonist: {
                T0001: "Bah, it really doesn't smell  good here!",
                T0002: "What was that?",
                TD11: "Sorry, I just think it looks a bit nasty.",
                TD21: "He looks really sad. Maybe we can help him somehow?",
                TD22: "Is it the wood that sticks inside your body?",
                TD23: "alright, I'm gonna do it!",
                TD24: "ehm...yeah? If it doesn't mind?",
                TD25: "Better?",
                TD26: "Well, he was talkative. Hey, I think we got something from him!",
                TD27: "Some fireflies!"
            },
            pinkCat: {
                T0001: "Ugh, you're right, and those fucking frogs, what the hell?! Let's move on ASAP.",
                T0002: "The next shitshow, I fear.",
                T0003: "Holy moly, what happened to YOU?",
                TD11: "What?! How can you be so heartless?",
                TD12: "Then let's go, I guess. I would drown If I tried to help him.",
                TD21: "Are you hurt, maybe?",
                TD22: "Sounds about right. Okay let's get that stuff out of you. It would hurt me too, to be honest.",
                TD23: "Hey, can I get those snails maybe? They look pretty.",
                TD24: "Noice. Maybe it's gonna be of use. Please let's move forward now, this place stinks like hell!"
            },
            swampCreature: {
                T0001: "blubblblblblb!"
            }
        };
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
        //set visited Swamp to true
        ACatInLimbo.dataForSave.visitedSwamp = true;
        //start with Scene
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textSwamp.protagonist.T0001);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textSwamp.pinkCat.T0001);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.bubblingInTheDeep, 1, false);
        await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.bubblingInTheDeep, 0, 5);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textSwamp.protagonist.T0002);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textSwamp.pinkCat.T0002);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.bubblingInTheDeep, 1, false);
        await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.swampCreature, ACatInLimbo.characters.swampCreature.pose.asleep, ACatInLimbo.swampCreatureAppearance());
        await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.bubblingInTheDeep, 0, 3);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.derpy1, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouchedLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textSwamp.pinkCat.T0003);
        await ACatInLimbo.ƒS.update();
        let helpSwampCreature = {
            help: "help",
            dontHelp: "don't help"
        };
        let helpSwampCreatureRequest = await ACatInLimbo.ƒS.Menu.getInput(helpSwampCreature, "choicesCSSClass");
        switch (helpSwampCreatureRequest) {
            case helpSwampCreature.help:
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textSwamp.protagonist.TD21);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textSwamp.pinkCat.TD21);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.swampCreature);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.swampCreature, ACatInLimbo.characters.swampCreature.pose.normal, ACatInLimbo.ƒS.positionPercent(30, 85));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.swampCreature, textSwamp.swampCreature.T0001);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textSwamp.protagonist.TD22);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.swampCreature, textSwamp.swampCreature.T0001);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textSwamp.pinkCat.TD22);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.crouched, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textSwamp.protagonist.TD23);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.thumbsUp, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.lightbubbling, 1, false);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.swampCreature);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.swampCreature, ACatInLimbo.characters.swampCreature.pose.lessWood1, ACatInLimbo.ƒS.positionPercent(30, 85));
                await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.lightbubbling, 0, 3);
                await ACatInLimbo.ƒS.update(2);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.derpy2, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textSwamp.pinkCat.TD23);
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
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Thanks for nothing.");
                        await ACatInLimbo.ƒS.update();
                        break;
                    case getSnails.getSnails:
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textSwamp.protagonist.TD24);
                        ACatInLimbo.dataForSave.catScore += 5;
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.lovely, ACatInLimbo.ƒS.positionPercent(80, 95));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, "Thanks!");
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.lightbubbling, 1, false);
                        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.swampCreature);
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.swampCreature, ACatInLimbo.characters.swampCreature.pose.noSnails, ACatInLimbo.ƒS.positionPercent(30, 85));
                        await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.lightbubbling, 0, 3);
                        await ACatInLimbo.ƒS.update();
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
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textSwamp.protagonist.TD25);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.lightbubbling, 1, false);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.swampCreature);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.swampCreature, ACatInLimbo.characters.swampCreature.pose.smile, ACatInLimbo.ƒS.positionPercent(30, 85));
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.cleaningPaw, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update();
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fireflies);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textSwamp.protagonist.TD26);
                await ACatInLimbo.ƒS.update();
                ACatInLimbo.ƒS.Text.print("a jar of fireflies has been added to your Inventory");
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textSwamp.protagonist.TD27);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.bubblingInTheDeep, 1, false);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.swampCreature);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.swampCreature, ACatInLimbo.characters.swampCreature.pose.smile, ACatInLimbo.swampCreatureDisappearance());
                await ACatInLimbo.ƒS.Sound.fade(ACatInLimbo.sound.bubblingInTheDeep, 0, 5);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textSwamp.pinkCat.TD24);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.update();
                break;
            case helpSwampCreature.dontHelp:
                ACatInLimbo.dataForSave.catScore -= 15;
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textSwamp.pinkCat.TD11);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textSwamp.protagonist.TD11);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textSwamp.pinkCat.TD12);
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
    async function testScene() {
        console.log("testScene starting");
        let text = {
            pinkCat: {
                T0001: "Hello, I'm a derpy cat.",
                T0002: "Who are you? Should I be afraid of you?",
                //reaction to choices
                T0003: "Ah, good, I'm glad about that.",
                T0004: "Ok, kinda boring.",
                T0005: "Uah!",
                T0006: "Fuck off, don't touch me."
            }
        };
        console.log(ACatInLimbo.ƒS.Base.getGraph());
        /*   for (let i: number = 0; i < 5; i++) { //5blobs, draufklicken --> konsumieren
               let newButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
               let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
               body.appendChild(newButton);
             //  ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.crouched, ƒS.positionPercent())
           }*/
        ACatInLimbo.ƒS.Speech.hide(); //Sprechfenster ausblenden 
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.forestWind, 1, true);
        await new Promise(resolve => setTimeout(resolve, 2500));
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.cuteMeow, 1, false);
        //  ƒS.Sound.fade(sound.forestSound, 1, 0.0, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.forest);
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.wet2.duration, ACatInLimbo.transition.wet2.alpha, ACatInLimbo.transition.wet2.edge);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(60, 90));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.scared, ACatInLimbo.ScaredCatAnimation());
        await ACatInLimbo.ƒS.update(); //nach jeder location updaten 
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, text.pinkCat.T0001); //maßstabgetreue Grafiken verwenden! 
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, text.pinkCat.T0002);
        ACatInLimbo.ƒS.update(); // wie lange dauert die Fade-transition an? - Zahl in Klammer
        //Entscheidungsmöglichkeiten
        let dialogue = {
            iSayYes: "Yes",
            iSayNo: "No",
            iSayBla: "Bla"
        };
        let dialogueElement = await ACatInLimbo.ƒS.Menu.getInput(dialogue, "choicesCSSClass");
        switch (dialogueElement) {
            case dialogue.iSayYes:
                console.log("answer: yes");
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.update();
                ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.cathissing, 1, false);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.scared, ACatInLimbo.ƒS.positionPercent(60, 90)); //ohne await, würde die katze erst nach klicken erscheinen?
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, text.pinkCat.T0005);
                await ACatInLimbo.ƒS.update();
                ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, text.pinkCat.T0006);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.scared, ACatInLimbo.ScaredCatAnimation());
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.update();
                break;
            case dialogue.iSayNo:
                //continue path here
                console.log("answer: No");
                ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.cuteMeow, 1, false);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, text.pinkCat.T0003);
                //inventory
                // ƒS.Inventory.add(items.Spider);
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fly);
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fish);
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fly);
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fish);
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fly);
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fish);
                for (let i = 0; i < 5; i++) { //5blobs, draufklicken --> konsumieren
                    ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Spider);
                }
                ACatInLimbo.originAmountFly = ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Fly);
                ACatInLimbo.originAmountFish = ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Fish);
                ACatInLimbo.originAmountSpider = ACatInLimbo.ƒS.Inventory.getAmount(ACatInLimbo.items.Spider);
                ACatInLimbo.ƒS.Inventory.open();
                ACatInLimbo.ƒS.update();
                await new Promise(resolve => setTimeout(resolve, 2500));
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, text.pinkCat.T0001); //maßstabgetreue Grafiken verwenden! 
                break;
            case dialogue.iSayBla:
                //continue path here
                console.log("answer: Bla");
                ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.demandingmeow1, 1, false);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, text.pinkCat.T0004);
                //METERBAR
                // dataForSave.pickedMeterScene = true;
                // document.getElementsByName("aisakaScore").forEach(meterStuff => meterStuff.hidden = true);
                // document.getElementById("scoreForAisaka").style.display = "none";
                ACatInLimbo.ƒS.Speech.hide();
                ACatInLimbo.dataForSave.catScore += 100;
                await ACatInLimbo.ƒS.update();
                console.log(ACatInLimbo.dataForSave.catScore);
                await ACatInLimbo.ƒS.update();
                break;
        }
        /*    await ƒS.Text.print("Hi"); //novel pages -->
            ƒS.Text.addClass("novelpage");//css klasse hinzufügen und gestalten
            //credits in novel page schreiben
            return "secondScene"; //andere Szene abspielen...id verwenden, nicht szenennahmens*/
        //boolean gibts ja auch noch, ganz vergessen
        let pickedYes;
        // let pickedNo: boolean;
        // let pickedOk: boolean;
        let pickedBla;
        if (pickedYes || pickedBla) {
            //delete dialogue.iSayBla; --> Entscheidungsmöglichkeiten oder so löschen
        }
        ;
        /*
        
                function handleItems(): void {
                 
                    let canvas: HTMLCanvasElement = document.querySelector("canvas");
                    let img: HTMLImageElement = document.createElement("img");
                    img.src = "./Images/Items/spider.png";
                    canvas.appendChild(img);
                    positionItemRandomly(img);
                }
        
                function positionItemRandomly(_img: HTMLImageElement): void {
                    let left = Math.floor((Math.random() * 400) + 1) + "px";
                    let top = Math.floor((Math.random() * 400) + 1) + "px";
                    console.log("spidies?");
                    let imagestyle = _img.style;
                    imagestyle.position = "absolute";
                    imagestyle.top = top;
                    imagestyle.left = left;
                }
        */
    }
    ACatInLimbo.testScene = testScene;
    //Erinnerung: Immer sinnvolle Bezeichnungen für Variablen wählen!
    //mit F2 Bezeichnung/Begriff auswechseln
    //maßstabgetreue Grafiken verwenden! 
    //wait for Signal bei Methoden --> true/false
    //Klassen definieren für chactere
    //ƒS.Speech.clear();
    //ƒS.Speech.hide() --> keine weitere Möglichkeit 
    //falls man Namen des Chacters nicht angeziegt haben will bei Speech.tell statt name "null" eingeben
    //ƒS.Speech.setTickerDelays(80, 5000); --> Textgeschwindigkeit + Zeit vergehen lassen, bevor Text erscheint
    // let signalDelay3: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)]) ; //Sekunden werden angegebne --> dann kan weiterverwenden
    // signalDelay3;
})(ACatInLimbo || (ACatInLimbo = {}));
//# sourceMappingURL=Template.js.map