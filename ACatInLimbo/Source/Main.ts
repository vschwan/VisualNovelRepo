namespace ACatInLimbo {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;
  console.log("FudgeStory template starting");
  

  export let dataForSave = {
    catScore: 10,
    scoreForCat: "",
    nameProtagonist: "",
    points: 0,
    pickedMeterBar: false,
    pickedChoice: false
    // started: false,
    // ended: false

    //hier auch Punkte verteilungssystem-Variable reinhauen
  };

  export let items = {
    Spider: {
      name: "Spider",
      description: "a spidery spider",
      image: "./Images/Items/spider.png",
      static: true //nicht gecheckt, falls false, einfach weglassen, weil schon autom. auf false
    },

    Fish: {
      name: "Fish",
      description: "a tiny fishy fish",
      image: "./Images/Items/fish.png",
      static: true
    },

    Fly: {
      name: "Fly",
      description: "an annoying fly, like most flies",
      image: "./Images/Items/fly.png",
      static: true
    }
  };


  export function animation(): ƒS.AnimationDefinition {
    //something
    return {
      start: { translation: ƒS.positionPercent(60, 90), color: ƒS.Color.CSS("", 1) },
      end: { translation: ƒS.positionPercent(90, 90), color: ƒS.Color.CSS("black", 0.5) },
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
    };
  }

  export function getAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0.3) },
      end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
    };
  }

  //Menu shortcuts
  let inGameMenuButtons = {
    save: "Save",
    load: "Load",
    close: "Close",
    credits: "Credits" //
  };

  function credits(): void {
    ƒS.Text.print("");
  }

  let gameMenu: ƒS.Menu;

  //open entspricht Menu ist offen und false zu
  let menuIsOpen: boolean = true;

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save();
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
      case inGameMenuButtons.close:
        gameMenu.close();
        menuIsOpen = false;
        break;
      case inGameMenuButtons.credits:
        credits();
    }
  }

  // Menu shortcuts
  document.addEventListener("keydown", handleKeyPress);
  async function handleKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
        if (menuIsOpen) {
          console.log("Close");
          gameMenu.close();
          menuIsOpen = false;
        }
        else {
          console.log("Open");
          gameMenu.open();
          menuIsOpen = true;
        }
        break;
    }
  }

  export let transition = {
    puzzle: {
      duration: 1,
      alpha: "FreeTransitions/JigsawThemedTransitions/puzzle.png",
      edge: 1
    },

    swirlStuff: {
      duration: 1,
      alpha: "FreeTransitions/Others/027.jpg",
      edge: 1
    }
  };

  export let sound = {
    // ambience
    forestSound: "Audio/forestWind.mp3",
    meadowSound: "Audio/Ambience/spring-forest-birds-sounds.mp3",

    //catSounds
    normalMoew: "Audio/catAudio/meow.mp3",
    cathissing: "Audio/catAudio/cathisses.wav",
    demandingmeow: "Template/Audio/demandingMeow.wav",
    cuteMeow: "./Audio/catAudio/ANMLCat_Meow cat 7 (ID 1895)_BSB.wav"
    // SFX
    //zb drop (namen geben): "audio/drop.mp3"
  };

  export let locations = {
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
      background: "Images/Backgrounds/lake1.png"
    },

    meadow: {
      name: "Meadow",
      background: "Images/Backgrounds/meadow.png"
    },

    swamp: {
      name: "Swamp",
      background: "Images/Backgrounds/swamp.png"
    },

    river: {
      name: "River",
      background: "Images/Backgrounds/swampRiver.png"
    },

    nightpark: {
      name: "Nightpart",
      background: "Images/Backgrounds/nightpark.png"
    }


  };

  export let characters = {
    narrator: {
      name: "Narrator"
    },

    protagonist: {
      name: "You"
    },

    pinkCat: {
      name: "pinkCat",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        //pink Cat poses regular
        normal: "./Images/Characters/pinkCat/pinkCatNormal.png",
        fromBehind: "./Images/Characters/pinkCat/pinkCatBehind.png",
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
        thoughtful1: "./Images/Characters/pinkCat/pinkCatThoughtful1.png",
        thoughtful2: "./Images/Characters/pinkCat/pinkCatThoughtful2.png",
        thumbsUp: "./Images/Characters/pinkCat/pinkCatThumbsUp.png",
        walking: "./Images/Characters/pinkCat/pinkCatWalking.png",
        yawning: "./Images/Characters/pinkCat/pinkCatYawning.png",

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
        awakening8: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening8.png",
        stonePedestal: "./Images/Characters/pinkCat/pinkCatAwakening/stonePedestal.png"
      }
    },

    spiderCreature: {
      name: "-",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "./Images/Characters/Creatures/....png"
      }
    }

  };

  // Szenenstruktur
  window.addEventListener("load", start);

  function start(_event: Event): void {
    //Hide MeterBar
    document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = true);
    document.getElementById("scoreForCat").style.display = "none";
    //Menu
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSclass");
    buttonFunctionalities("Close");

    let scenes: ƒS.Scenes = [
      { id: "", scene: firstScene, name: "meadow", next: "" },
      { id: "write", scene: testScene, name: "test Scene", next: "" }, //name = kurze Description für einen selbst
      { id: "choose", scene: secondScene, name: "second Scene", next: "" }, //id um ...next um zu bestimmen welche Szene nach dieser Szene abgespielt wird? mit Hilfe von id 
      // Empty ending scene to stop the program
      { id: "Empty Scene", scene: Empty, name: "END" }  //Progamm kann nicht stopenn, deswegen empty Scene zum Schluss erstellen, ohne Inhalt
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);


    // start the sequence
    ƒS.Progress.go(scenes);
  }
}




