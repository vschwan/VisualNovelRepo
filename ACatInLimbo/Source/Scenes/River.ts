namespace ACatInLimbo {

    export async function River(): ƒS.SceneReturn {
        console.log("Scene starting: River");
        dataForSave.visitedRiver == true;

        let nextLocation = {
            bay: "Bay",
            cave: "Cave",
            mountains: "Mountains"
        }
        //  ƒS.Sound.fade(sound.frogs, 0, 2);
        //ƒS.Sound.fade(sound.swamp, 0, 2);
        let nextLocationRequest = await ƒS.Menu.getInput(nextLocation, "choicesCSSClass");

        switch (nextLocationRequest) {
            case nextLocation.bay:
                dataForSave.currentPath = "RiverToBay";
                return "Map Scene"
                break;
            case nextLocation.cave:
                dataForSave.currentPath = "RiverToCave";
                return "Map Scene"
                break;
            case nextLocation.cave:
                dataForSave.currentPath = "RiverToMountains";
                return "Map Scene"
                break;
        }

    }
}