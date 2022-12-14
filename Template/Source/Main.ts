namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;
  console.log("FudgeStory template starting");

  export let dataForSave = {
    nameProtagonist: "cat",
    points: 0
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
    }
  };

  export let sound = {
    // themes
    forestSound: "Audio/forestWind.mp3",

    //catSounds
    normalMoew: "Audio/catAudio/meow.mp3",
    cathissing: "Audio/catAudio/cathisses.wav",
    demandingmeow: "Template/Audio/demandingMeow.wav"



    // SFX
    //zb drop (namen geben): "audio/drop.mp3"
  };

  export let locations = {
    forest: {
      name: "Forest",
      background: "Images/Backgrounds/forestBackground.png"
    },

    nightpark: {
      name: "Nightpart",
      background: "Images/Backgrounds/nightpark.png"
    }
  };

  export let characters = {
    narrator: {
      name: ""
    },

    protagonist: {
      name: ""
    },

    pinkCat: {
      name: "pinkCat",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "./Images/Characters/pinkCatNormal.png",
        angry: "",
        happy: "",
        upset: "./Images/Characters/pinkCatFrightened.png",
        dormant: "./Images/Characters/pinkCatDormant.png"
      }
    },

    silvesterCat: {
      name: "silvesterCat",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "./Images/Characters/silvesterCat.png"
      }
    }

  };

  // Szenenstruktur
  window.addEventListener("load", start);

  function start(_event: Event): void {
    //Menu
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSclass");
    buttonFunctionalities("Close");

    let scenes: ƒS.Scenes = [
      { scene: firstScene, name: "first Scene" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);


    // start the sequence
    ƒS.Progress.go(scenes);
  }
}




