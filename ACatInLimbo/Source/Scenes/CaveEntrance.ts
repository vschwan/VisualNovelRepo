namespace ACatInLimbo {

    export async function CaveEntrance(): ƒS.SceneReturn {
        console.log("Scene starting: Cave Entrance");
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForCat").style.display = "";

        ƒS.Speech.hide(); //Sprachfenster ausblenden
        ƒS.Sound.play(sound.meadowSound, 0.5, true);
        ƒS.Sound.play(sound.forestWind, 1, true);
        await ƒS.Location.show(locations.caveEntrance);
        await ƒS.update(transition.maze.duration, transition.maze.alpha, transition.maze.edge);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.walking, ƒS.positionPercent(80, 95));
        await ƒS.update(1);
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal2, ƒS.positionPercent(80, 95))
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "It's gonna be dark in there. Do we have anything that can provide some light?");
        await ƒS.update();
        if (ƒS.Inventory.getAmount(items.Fireflies) < 1) {
            await ƒS.Speech.tell(characters.protagonist, "Unfortunately, we don't. what should we do?");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talking, ƒS.positionPercent(80, 95))
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "It's your decision, but obviously we won't see much. It could get dangerous.");
            await ƒS.update();
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95))
            await ƒS.update();
        } else {
            await ƒS.Speech.tell(characters.protagonist, "Yes! We could use those fireflies the swamp creature gave us!");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talking, ƒS.positionPercent(80, 95))
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "Noice! Let's get going!");
            await ƒS.update();
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95))
            await ƒS.update();
        }

        let getInCave = {
            turnAround: "Turn Around",
            enter: "Enter Cave"
        }
        let getInCaveRequest = await ƒS.Menu.getInput(getInCave, "choicesCSSClass");
        switch (getInCaveRequest) {
            case getInCave.enter:
                ƒS.Sound.fade(sound.forestWind, 0, 2);
                ƒS.Sound.fade(sound.meadowSound, 0, 2);
                await ƒS.Character.hide(characters.pinkCat);

                return "Cave Inside Scene"
                break;

            case getInCave.turnAround:
                let nextLocation = {
                    river: "River",
                    bay: "Bay",
                }
                ƒS.Sound.fade(sound.forestWind, 0, 2);
                ƒS.Sound.fade(sound.meadowSound, 0, 2);
                await ƒS.Character.hide(characters.pinkCat);

                let nextLocationRequest = await ƒS.Menu.getInput(nextLocation, "choicesCSSClass");
                switch (nextLocationRequest) {
                    case nextLocation.bay:
                        dataForSave.currentPath = "CaveToBay";
                        return "Map Scene"
                        break;

                    case nextLocation.river:
                        dataForSave.currentPath = "CaveToRiver";
                        return "Map Scene"
                        break;
                }
                break;
        }





    }
}