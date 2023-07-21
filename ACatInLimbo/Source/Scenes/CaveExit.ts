namespace ACatInLimbo {

    export async function CaveExit(): ƒS.SceneReturn {
        console.log("Scene starting: Cave Exit");

        ƒS.Speech.hide(); //Sprachfenster ausblenden
        ƒS.Sound.play(sound.forestWind, 1, true);
        await ƒS.Location.show(locations.caveExit);
        await ƒS.update(transition.circleWipeCCW.duration, transition.circleWipeCCW.alpha, transition.circleWipeCCW.edge);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.fromBehindLookingAway, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "Omg, that was close!");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.fromBehindLookingBack, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "Yeah, we're lucky, we brought those snails with us!");
        await ƒS.Speech.tell(characters.protagonist, "True.");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.fromBehindLookingAway, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "Now, it's not much further.");
        await ƒS.update();
        ƒS.Sound.fade(sound.forestWind, 0, 3);

        dataForSave.currentPath = "CaveToClouds";
        return "Map Scene"






    }
}