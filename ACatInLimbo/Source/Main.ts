namespace ACatInLimbo {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;
  console.log("FudgeStory template Bitch starting");

  let gameMenu: ƒS.Menu;
  //open entspricht Menu ist offen und false zu
  let menuIsOpen: boolean = true;

  export let dataForSave = {
    visitedLake: false,
    nameProtagonist: "You",
    catScore: 10,
    scoreForCat: "",
    points: 0,
    pickedMeterBar: false,
    pickedChoice: false
    // started: false,
    // ended: false

    //hier auch Punkte verteilungssystem-Variable reinhauen
  };

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

    narrator: {
      name: "Narrator",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {}
    },


    pinkCat: {
      name: "pink Cat",
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

        //pink Cat poses small 
        normalSmall: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatNormalSmall.png",
        scaredSmall: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatScaredSmall.png",
        curiousSmall: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatCuriousSmall.png",
        lovelySmall: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatLoveSmall.png",
        layingOnBackSmall: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatOnBackSmall.png",
        stretchingSmall: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatStretchingSmall.png",

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
        normal: "./Images/Characters/creatures/swampCreature/swampCreatureAsleep.png",
        asleep: "./Images/Characters/creatures/swampCreature/swampCreatureNormal.png"
      }
    }

  };


  /*export function UpdateName(): void {
    characters.protagonist.name = dataForSave.nameProtagonist;
  }*/

  export function ItemUse(): void {

  }

  //INVENTORY
  export function OpenInventory(): void {

  }


  //Credits
  function credits(): void {
    ƒS.Text.print("All characters are drawn by Valentina Schwan");
  }

  //MENU
  let inGameMenuButtons = {
    save: "Save",
    load: "Load",
    inventory: "Inventory",
    credits: "Credits",
    close: "Close"
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
      case ƒ.KEYBOARD_CODE.I:
        console.log("open Inventory");
        await ƒS.Inventory.open();
        break;
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
    document.getElementById("scoreForCat").style.display = "none";

    let scenes: ƒS.Scenes = [
      // { id: "Meadow Scene", scene: Meadow, name: "meadow", next: "" },
      //  { id: "Forest Scene", scene: Forest, name: "Forest", next: "" },
      // { id: "Lake Scene", scene: Lake, name: "lake", next: "" },
      // {id: "Swamp Scene", scene: Swamp, name: "Swamp", next:""},
      { id: "Test Scene", scene: testScene, name: "Test", next: "" }, //name = kurze Description für einen selbst
      // { id: "choose", scene: secondScene, name: "second Scene", next: "" }, //id um ...next um zu bestimmen welche Szene nach dieser Szene abgespielt wird? mit Hilfe von id 
      // Empty ending scene to stop the program
      { id: "Empty Scene", scene: Empty, name: "END" }  //Progamm kann nicht stopenn, deswegen empty Scene zum Schluss erstellen, ohne Inhalt
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}




