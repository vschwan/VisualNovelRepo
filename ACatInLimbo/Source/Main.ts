namespace ACatInLimbo {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;
  console.log("FudgeStory template starting");
  let gameMenu: ƒS.Menu;
  //open entspricht Menu ist offen und false zu
  let menuIsOpen: boolean = true;

  export let dataForSave = {
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
  export let characters = {
    protagonist: {
      name: dataForSave.nameProtagonist,
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        stonePedestal: "./Images/Characters/pinkCat/pinkCatAwakening/stonePedestal.png"
      }
    },

    spiderCreature: {
      name: "Spider Creature",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "./Images/Characters/creatures/caveCreature/CaveCreatureNormal.png",
        sound: "./Images/Characters/creatures/caveCreature/CaveCreatureSound.png",
        toungeOut: "./Images/Characters/creatures/caveCreature/CaveCreaturOpenMouth.png",
        attack: "./Images/Characters/creatures/caveCreature/CaveCreatureAttack.png"
      }
    },


    death: {
      name: "Death",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        fishingLookingDown: "./Images/Characters/death/deathFishingLookingDown.png",
        fishingLookingUp: "./Images/Characters/death/deathFishingLookingUp.png",
        close: "./Images/Characters/death/deathClose.png"
      }
    },

    path: {
      name: "Path",
      origin: ƒS.ORIGIN.CENTER,
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
      origin: ƒS.ORIGIN.CENTER,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
  export function help(): void {
    ƒS.Text.setClass("TextPrint");
    ƒS.Text.print("<p>In this game you can find a Lovemeter in the right corner of the screen. It shows the affection the pink Cat feels towards you.</p><p>Open your Inventory through the menu to feed your Cat with items you collect throughout the story to make it like you more.</p><p>Be careful it doesn't leave you!</p><p>Shortcuts:</p><p>Menu: M</p><p>Save: S</p><p>Load: L</p><p>Help: H</p><p>Credits: C</p>");
  }

  //Credits
  function credits(): void {
    ƒS.Text.addClass("credits");
    ƒS.Text.print("Credits: All characters are drawn by Valentina Schwan");
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

  export async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save();
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
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
        await ƒS.Inventory.open();
    }
  }

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
  async function handleKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.S:
        console.log("Save Scene");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.C:
        console.log("Credits");
        credits();
        break;
      case ƒ.KEYBOARD_CODE.L:
        console.log("Load Scene");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.H:
        console.log("Help");
        help();
        break;
      // case ƒ.KEYBOARD_CODE.I:
      //   console.log("open Inventory");
      //   await ƒS.Inventory.open();
      //   break;
      case ƒ.KEYBOARD_CODE.M:
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
  function start(_event: Event): void {
    //Menu
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSS");
    // buttonFunctionalities("Close");


    //Hide MeterBar
    document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = true);
    // document.getElementById("scoreForCat").style.display = "none";

    let scenes: ƒS.Scenes = [
      { id: "Meadow Scene", scene: Meadow, name: "meadow" },
      { id: "Forest Scene", scene: Forest, name: "Forest" },
      { id: "Lake Scene", scene: Lake, name: "lake" },
      { id: "Map Scene", scene: Map, name: "map" },
      { id: "Swamp Scene", scene: Swamp, name: "Swamp", next: "" },
      { id: "River Scene", scene: River, name: "River" },
      { id: "Bay Scene", scene: Bay, name: "Bay" },
      { id: "Mountain Scene", scene: Mountain, name: "Mountain" },
      { id: "Cave Entrance Scene", scene: CaveEntrance, name: "Cave Entrance" },
      { id: "Cave Inside Scene", scene: CaveInside, name: "Cave Inside" },
      { id: "Cave Exit Scene", scene: CaveExit, name: "Cave Exit" },
      { id: "BadEnding Cave Scene", scene: BadEndingCave, name: "BadEnding Cave" },
      { id: "BadEnding LostCat Scene", scene: BadEndingLostCat, name: "BadEnding Frog" },

      // { id: "Clouds Scene", scene: Clouds, name: "Clouds" },
      // { id: "Gate", scene: Gate, name: "Gate" },
      // { id: "Test Scene", scene: testScene, name: "Test", next: "" }, //name = kurze Description für einen selbst
      // { id: "choose", scene: secondScene, name: "second Scene", next: "" }, //id um ...next um zu bestimmen welche Szene nach dieser Szene abgespielt wird? mit Hilfe von id 
      // {id: "Bad End", scene: BadEnding, name: "Bad"},
      // Empty ending scene to stop the program
      { id: "Empty Scene", scene: Empty, name: "END" }  //Progamm kann nicht stopenn, deswegen empty Scene zum Schluss erstellen, ohne Inhalt
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}




