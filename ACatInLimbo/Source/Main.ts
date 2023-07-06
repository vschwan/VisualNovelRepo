namespace ACatInLimbo {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;
  console.log("FudgeStory template starting");

  export let dataForSave = {
    //booleans for scenes visited --> for Location-Decisions
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
    catLeaving: false,
    catScore: 10,
    scoreForCat: 0,
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


  //INVENTORY
  // export function OpenInventory(): void {

  // }


  setInterval(() => {
    //show score
    let showScore = document.getElementById("scoreForCat");
    showScore.setAttribute("value", dataForSave.catScore.toString());

    //check for score
    if (dataForSave.catScore <= 0) {
      console.log("Cat is leaving, cause ", dataForSave.catScore);
      dataForSave.catLeaving = true;
      // return "BadEnding LostCat Scene";

    } else if (dataForSave.catScore <= 5) {
      console.log("Cat's still there, but be careful. Feed items, if you can.");
      // ƒS.Text.print("Be careful. The cat doesn't like you very much right now.")
    } else {
      console.log("all good, cat likes you.");
    }
  }
    , 3000);

  


  window.addEventListener("load", start);
  function start(_event: Event): void {
    //Menu
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSS");
    // buttonFunctionalities("Close");

    //Hide MeterBar
    document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = true);
    document.getElementById("scoreForCat").style.display = "none";

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
      { id: "BadEnding LostCat Scene", scene: BadEndingLostCat, name: "BadEnding LostCat" },

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




