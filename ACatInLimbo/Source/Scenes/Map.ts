namespace ACatInLimbo {

    export async function Map(): ƒS.SceneReturn {

        ƒS.Speech.hide();
        ƒS.Location.show(locations.map);
        await ƒS.update(transition.straightLines.duration, transition.straightLines.alpha, transition.straightLines.edge);
        await ƒS.update(1);
        ƒS.Sound.play(sound.footstepsGrass, 1, false);
        ƒS.Sound.fade(sound.footstepsGrass, 0, 5);
        //  await ƒS.Character.show(characters.path, characters.path.pose.meadowForest, ƒS.positionPercent(50, 50));
        //  await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.cleaningAss, ƒS.positionPercent(50,50));
        //  await ƒS.update();
        //show Map
        //in anderen szenen Wert übergeben (dataForSave.Path = "LakeForest"), hier mit switch case 
        //je nachdem Animation + return Forest

        //show Animation for 
        switch (dataForSave.currentPath) {
            case "MeadowToForest":
                console.log("Meadow to Forest");
                await ƒS.update(1);
                await ƒS.Character.show(characters.path, characters.path.pose.meadowForest, ƒS.positionPercent(50, 50));
                await ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 4000));
                await ƒS.update();
                await ƒS.Character.hide(characters.path);
                await ƒS.update();
                return "Forest Scene";
                break;

            case "MeadowToLake":
                console.log("Meadow to Lake");
                await ƒS.update(1);
                await ƒS.Character.show(characters.path, characters.path.pose.meadowLake, ƒS.positionPercent(50, 50));
                await ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 4000));
                await ƒS.update();
                await ƒS.Character.hide(characters.path);
                await ƒS.update();
                return "Lake Scene"

                break;

            case "LakeToSwamp":
                console.log("Lake to Swamp");
                await ƒS.update(1);
                await ƒS.Character.show(characters.path, characters.path.pose.lakeSwamp, ƒS.positionPercent(50, 50));
                await ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 4000));
                await ƒS.update();
                await ƒS.Character.hide(characters.path);
                await ƒS.update();
                return "Swamp Scene"

                break;

            case "ForestToSwamp":
                console.log("Forest to Swamp");
                await ƒS.update(1);
                await ƒS.Character.show(characters.path, characters.path.pose.forestSwamp, ƒS.positionPercent(50, 50));
                await ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 4000));
                await ƒS.update();
                await ƒS.Character.hide(characters.path);
                await ƒS.update();
                return "Swamp Scene"

                break;
            case "ForestToLake":
                console.log("Forest to Lake");
                await ƒS.update(1);
                await ƒS.Character.show(characters.path, characters.path.pose.forestLake, ƒS.positionPercent(50, 50));
                await ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 4000));
                await ƒS.update();
                await ƒS.Character.hide(characters.path);
                await ƒS.update();
                return "Lake Scene"

                break;
            case "LakeToForest":
                console.log("Lake to Forest");
                await ƒS.update(1);
                await ƒS.Character.show(characters.path, characters.path.pose.forestLake, ƒS.positionPercent(50, 50));
                await ƒS.update(3);
                await new Promise(resolve => setTimeout(resolve, 4000));
                await ƒS.update();
                await ƒS.Character.hide(characters.path);
                await ƒS.update();
                return "Forest Scene"

                break;

                case "SwampToRiver":
                    console.log("Swamp to River");
                    await ƒS.update(1);
                    await ƒS.Character.show(characters.path, characters.path.pose.swampRiver, ƒS.positionPercent(50, 50));
                    await ƒS.update(3);
                    await new Promise(resolve => setTimeout(resolve, 4000));
                    await ƒS.update();
                    await ƒS.Character.hide(characters.path);
                    await ƒS.update();
                    return "River Scene"
    
                    break;

                    case "SwampToBay":
                        console.log("Swamp to Bay");
                        await ƒS.update(1);
                        await ƒS.Character.show(characters.path, characters.path.pose.swampBay, ƒS.positionPercent(50, 50));
                        await ƒS.update(3);
                        await new Promise(resolve => setTimeout(resolve, 4000));
                        await ƒS.update();
                        await ƒS.Character.hide(characters.path);
                        await ƒS.update();
                        return "Bay Scene"
        
                        break;
        }

        // await new Promise(resolve => setTimeout(resolve, 3000));

    }
}