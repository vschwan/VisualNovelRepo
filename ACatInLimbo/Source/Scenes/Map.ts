namespace ACatInLimbo {

    export async function Map(): ƒS.SceneReturn {

        ƒS.Speech.hide();
        ƒS.Location.show(locations.map);
        await ƒS.update(transition.straightLines.duration, transition.straightLines.alpha, transition.straightLines.edge);
        await ƒS.update(1);

        if (dataForSave.pathMeadowLake == true) {
            await ƒS.Character.show(characters.path, characters.path.pose.meadowLake, ƒS.positionPercent(50, 50));
            await ƒS.update();
        }
        if (dataForSave.pathMeadowForest == true) {
            await ƒS.Character.show(characters.path, characters.path.pose.meadowForest, ƒS.positionPercent(50, 50));
            await ƒS.update();
        }
        if (dataForSave.pathForestLake == true) {
            await ƒS.Character.show(characters.path, characters.path.pose.forestLake, ƒS.positionPercent(50, 50));
            await ƒS.update();
        }
        if (dataForSave.pathLakeSwamp == true) {
            await ƒS.Character.show(characters.path, characters.path.pose.lakeSwamp, ƒS.positionPercent(50, 50));
            await ƒS.update();
        }
        if (dataForSave.pathForestSwamp == true) {
            await ƒS.Character.show(characters.path, characters.path.pose.forestSwamp, ƒS.positionPercent(50, 50));
            await ƒS.update();
        }
        if (dataForSave.pathSwampRiver == true) {
            await ƒS.Character.show(characters.path, characters.path.pose.swampRiver, ƒS.positionPercent(50, 50));
            await ƒS.update();
        }
        if (dataForSave.pathSwampBay == true) {
            await ƒS.Character.show(characters.path, characters.path.pose.swampBay, ƒS.positionPercent(50, 50));
            await ƒS.update();
        }
        if (dataForSave.pathBayCave == true) {
            await ƒS.Character.show(characters.path, characters.path.pose.bayCave, ƒS.positionPercent(50, 50));
            await ƒS.update();
        }
        if (dataForSave.pathBayRiver == true) {
            await ƒS.Character.show(characters.path, characters.path.pose.bayRiver, ƒS.positionPercent(50, 50));
            await ƒS.update();
        }
        if (dataForSave.pathRiverMountain == true) {
            await ƒS.Character.show(characters.path, characters.path.pose.riverMountains, ƒS.positionPercent(50, 50));
            await ƒS.update();
        }
        if (dataForSave.pathRiverCave == true) {
            await ƒS.Character.show(characters.path, characters.path.pose.riverCave, ƒS.positionPercent(50, 50));
            await ƒS.update();
        }


        ƒS.Sound.play(sound.footstepsGrass, 1, false);
        ƒS.Sound.fade(sound.footstepsGrass, 0, 5);


        switch (dataForSave.currentPath) {  //ask for path
            case "MeadowToForest":
                console.log("Meadow to Forest");
                dataForSave.pathMeadowForest = true;
                await ƒS.update(1);
                await ƒS.Character.show(characters.path, characters.path.pose.meadowForest, ƒS.positionPercent(50, 50));
                await ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 3000));
                await ƒS.update();
                await ƒS.Character.hideAll();
                await ƒS.update();
                return "Forest Scene";
                break;

            case "MeadowToLake":
                console.log("Meadow to Lake");
                dataForSave.pathMeadowLake = true;
                await ƒS.update(1);
                await ƒS.Character.show(characters.path, characters.path.pose.meadowLake, ƒS.positionPercent(50, 50));
                await ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 3000));
                await ƒS.update();
                await ƒS.Character.hideAll();
                await ƒS.update();
                return "Lake Scene"

                break;

            case "LakeToSwamp":
                console.log("Lake to Swamp");
                dataForSave.pathLakeSwamp = true;
                await ƒS.update(1);
                await ƒS.Character.show(characters.path, characters.path.pose.lakeSwamp, ƒS.positionPercent(50, 50));
                await ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 3000));
                await ƒS.update();
                await ƒS.Character.hideAll();
                await ƒS.update();
                return "Swamp Scene"

                break;

            case "ForestToSwamp":
                console.log("Forest to Swamp");
                dataForSave.pathForestSwamp = true;
                await ƒS.update(1);
                await ƒS.Character.show(characters.path, characters.path.pose.forestSwamp, ƒS.positionPercent(50, 50));
                await ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 3000));
                await ƒS.update();
                await ƒS.Character.hideAll();
                await ƒS.update();
                return "Swamp Scene"

                break;
            case "ForestToLake":
                console.log("Forest to Lake");
                dataForSave.pathForestLake = true
                await ƒS.update(1);
                await ƒS.Character.show(characters.path, characters.path.pose.forestLake, ƒS.positionPercent(50, 50));
                await ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 3000));
                await ƒS.update();
                await ƒS.Character.hideAll();
                await ƒS.update();
                return "Lake Scene"

                break;
            case "LakeToForest":
                console.log("Lake to Forest");
                dataForSave.pathForestLake = true;
                await ƒS.update(1);
                await ƒS.Character.show(characters.path, characters.path.pose.forestLake, ƒS.positionPercent(50, 50));
                await ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 3000));
                await ƒS.update();
                await ƒS.Character.hideAll();
                await ƒS.update();
                return "Forest Scene"

                break;

            case "SwampToRiver":
                console.log("Swamp to River");
                dataForSave.pathSwampRiver = true;
                await ƒS.update(1);
                await ƒS.Character.show(characters.path, characters.path.pose.swampRiver, ƒS.positionPercent(50, 50));
                await ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 3000));
                await ƒS.update();
                await ƒS.Character.hideAll();
                await ƒS.update();
                return "River Scene"

                break;

            case "SwampToBay":
                console.log("Swamp to Bay");
                dataForSave.pathSwampBay = true;
                await ƒS.update(1);
                await ƒS.Character.show(characters.path, characters.path.pose.swampBay, ƒS.positionPercent(50, 50));
                await ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 3000));
                await ƒS.update();
                await ƒS.Character.hideAll();
                await ƒS.update();
                return "Bay Scene"

                break;
            case "SwampToForest":
                console.log("Swamp to Forest");
                dataForSave.pathForestSwamp = true;
                await ƒS.update(1);
                await ƒS.Character.show(characters.path, characters.path.pose.forestSwamp, ƒS.positionPercent(50, 50));
                await ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 3000));
                await ƒS.update();
                await ƒS.Character.hideAll();
                await ƒS.update();
                return "Forest Scene"

                break;
            case "SwampToLake":
                console.log("Swamp to Lake");
                dataForSave.pathLakeSwamp = true;
                await ƒS.update(1);
                await ƒS.Character.show(characters.path, characters.path.pose.lakeSwamp, ƒS.positionPercent(50, 50));
                await ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 3000));
                await ƒS.update();
                await ƒS.Character.hideAll();
                await ƒS.update();
                return "Lake Scene"

                break;
            case "BayToCave":
                console.log("Bay to Cave");
                dataForSave.pathBayCave = true;
                await ƒS.update(1);
                await ƒS.Character.show(characters.path, characters.path.pose.bayCave, ƒS.positionPercent(50, 50));
                await ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 3000));
                await ƒS.update();
                await ƒS.Character.hideAll();
                await ƒS.update();
                return "Cave Scene"

                break;
            case "BayToLake":
                console.log("Bay to Lake");
                await ƒS.update(1);
                await ƒS.Character.show(characters.path, characters.path.pose.swampBay, ƒS.positionPercent(50, 50));
                await ƒS.update(2);
                await ƒS.Character.show(characters.path, characters.path.pose.lakeSwamp, ƒS.positionPercent(50, 50));
                await ƒS.update(2);
                await new Promise(resolve => setTimeout(resolve, 3000));
                await ƒS.update();
                await ƒS.Character.hideAll();
                await ƒS.update();
                return "Lake Scene"

                break;

            case "BayToRiver":
                console.log("Bay to River");
                dataForSave.pathBayCave = true;
                await ƒS.update(1);
                await ƒS.Character.show(characters.path, characters.path.pose.bayRiver, ƒS.positionPercent(50, 50));
                await ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 3000));
                await ƒS.update();
                await ƒS.Character.hideAll();
                await ƒS.update();
                return "River Scene"

            case "RiverToMountain":
                console.log("River to Mountain");
                dataForSave.pathBayCave = true;
                await ƒS.update(1);
                await ƒS.Character.show(characters.path, characters.path.pose.riverMountains, ƒS.positionPercent(50, 50));
                await ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 3000));
                await ƒS.update();
                await ƒS.Character.hideAll();
                await ƒS.update();
                return "Mountain Scene"

            case "RiverToCave":
                console.log("River to Cave");
                dataForSave.pathBayCave = true;
                await ƒS.update(1);
                await ƒS.Character.show(characters.path, characters.path.pose.riverCave, ƒS.positionPercent(50, 50));
                await ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 3000));
                await ƒS.update();
                await ƒS.Character.hideAll();
                await ƒS.update();
                return "Cave Scene"
        }

        // await new Promise(resolve => setTimeout(resolve, 3000));

    }
}