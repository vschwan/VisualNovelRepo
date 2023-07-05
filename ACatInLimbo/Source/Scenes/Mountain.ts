namespace ACatInLimbo {

    export async function Mountain(): ƒS.SceneReturn {
        console.log("Scene starting: Mountain");
        ƒS.Speech.hide(); //Sprachfenster ausblenden
        //Fun riverflow
        ƒS.Sound.play(sound.happyJazz, 0.5, true);
        await ƒS.Location.show(locations.riverflow);
        await ƒS.update(transition.wet1.duration, transition.wet1.alpha, transition.wet1.edge);
        await ƒS.Character.show(characters.riverflow, characters.riverflow.pose.plain, ƒS.positionPercent(50, 50))
        await ƒS.update(1);
        await ƒS.Character.hide(characters.riverflow);
        await ƒS.Character.show(characters.riverflow, characters.riverflow.pose.flow1, ƒS.positionPercent(50, 50))
        await ƒS.update(1);
        await ƒS.Character.hide(characters.riverflow);
        await ƒS.Character.show(characters.riverflow, characters.riverflow.pose.flow2, ƒS.positionPercent(50, 50))
        await ƒS.update(1);
        await ƒS.Character.hide(characters.riverflow);
        await ƒS.Character.show(characters.riverflow, characters.riverflow.pose.flow3, ƒS.positionPercent(50, 50))
        await ƒS.update(1);
        await ƒS.Character.hide(characters.riverflow);
        await ƒS.Character.show(characters.riverflow, characters.riverflow.pose.flow4, ƒS.positionPercent(50, 50))
        await ƒS.update(1);
        await ƒS.Character.hide(characters.riverflow);
        await ƒS.Character.show(characters.riverflow, characters.riverflow.pose.flow5, ƒS.positionPercent(50, 50))
        await ƒS.update(1);
        await ƒS.Character.hide(characters.riverflow);
        await ƒS.Character.show(characters.riverflow, characters.riverflow.pose.flow6, ƒS.positionPercent(50, 50))
        await ƒS.update(1);
        await ƒS.Character.hide(characters.riverflow);
        await ƒS.Character.show(characters.riverflow, characters.riverflow.pose.flow1, ƒS.positionPercent(50, 50))
        await ƒS.update(1);
        await ƒS.Character.hide(characters.riverflow);
        await ƒS.Character.show(characters.riverflow, characters.riverflow.pose.flow2, ƒS.positionPercent(50, 50))
        await ƒS.update(1);
        await ƒS.Character.hide(characters.riverflow);
        await ƒS.Character.show(characters.riverflow, characters.riverflow.pose.flowWaving3, ƒS.positionPercent(50, 50))
        await ƒS.update(1);
        await ƒS.Character.hide(characters.riverflow);
        await ƒS.Character.show(characters.riverflow, characters.riverflow.pose.flowWaving4, ƒS.positionPercent(50, 50))
        await ƒS.update(1);
        await ƒS.Character.hide(characters.riverflow);
        await ƒS.Character.show(characters.riverflow, characters.riverflow.pose.flow5, ƒS.positionPercent(50, 50))
        await ƒS.update(1);
        await ƒS.Character.hide(characters.riverflow);
        await ƒS.Character.show(characters.riverflow, characters.riverflow.pose.flow6, ƒS.positionPercent(50, 50))
        await ƒS.update(1);
        await ƒS.Character.hide(characters.riverflow);
        await ƒS.Character.show(characters.riverflow, characters.riverflow.pose.plain, ƒS.positionPercent(50, 50))
        await ƒS.update(1);
        await ƒS.Character.hide(characters.riverflow);
        await ƒS.Character.show(characters.riverflow, characters.riverflow.pose.flow1, ƒS.positionPercent(50, 50))
        await ƒS.update(1);
        await ƒS.Character.hide(characters.riverflow);
        await ƒS.Character.show(characters.riverflow, characters.riverflow.pose.flow2, ƒS.positionPercent(50, 50))
        await ƒS.update(1);
        await ƒS.Character.hide(characters.riverflow);
        await ƒS.Character.show(characters.riverflow, characters.riverflow.pose.flow3, ƒS.positionPercent(50, 50))
        await ƒS.update(1);
        await ƒS.Character.hide(characters.riverflow);
        await ƒS.Character.show(characters.riverflow, characters.riverflow.pose.flow4, ƒS.positionPercent(50, 50))
        await ƒS.update(1);
        await ƒS.Character.hide(characters.riverflow);
        await ƒS.Character.show(characters.riverflow, characters.riverflow.pose.flow5, ƒS.positionPercent(50, 50))
        await ƒS.update(1);
        await ƒS.Character.hide(characters.riverflow);
        await ƒS.Character.show(characters.riverflow, characters.riverflow.pose.flow6, ƒS.positionPercent(50, 50))
        await ƒS.update(1);
        await ƒS.Character.hide(characters.riverflow);
        await ƒS.Character.show(characters.riverflow, characters.riverflow.pose.plain, ƒS.positionPercent(50, 50))
        await ƒS.update(1);
        await ƒS.Character.hide(characters.riverflow);
        await ƒS.update(1);
        ƒS.Sound.fade(sound.happyJazz, 0, 5);

        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        //Mountains
        await ƒS.Location.show(locations.mountains);
        await ƒS.update(transition.hardEdges.duration, transition.hardEdges.alpha, transition.hardEdges.edge);
        ƒS.Sound.play(sound.forestWind, 2, true);
        await ƒS.Character.show(characters.death, characters.death.pose.close, ƒS.positionPercent(20, 100));
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.derpy1, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Speech.tell(characters.death, "Fun, fun, FUN! Now, this is where we part ways.");
        await ƒS.Speech.tell(characters.protagonist, "Oh. Alright. Let me ask, who are you, anyway?");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.yawning, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Speech.tell(characters.death, "...");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "We shall meet again.");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal2, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "Great, thanks for ignoring me.");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.thumbsUp, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Speech.tell(characters.death, "Byyyeee!");
        await ƒS.update();
        await ƒS.Character.animate(characters.death, characters.death.pose.close, deathSlide());
        await ƒS.update(2);
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.curious, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "Ok, whatever, let's move on.");
        await ƒS.update();

        await ƒS.Location.show(locations.mountainGoats);
        await ƒS.Sound.play(sound.goats, 0.5, true);
        await ƒS.update(1);
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.fromBehindLookingAway, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "Look, goats! Oh, I LOVE goats!");
        dataForSave.catScore += 5;
        await ƒS.update();
        await ƒS.Sound.play(sound.purring, 1, false);
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.lovely, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "Really?");
        await ƒS.Sound.fade(sound.purring, 0, 2);
        await ƒS.Speech.tell(characters.pinkCat, "They can jump very high, climb absolutely everywhere and the make cute sounds");
        await ƒS.Sound.play(sound.purrMeow, 1, false);
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "Makes sense.");
        await ƒS.Speech.tell(characters.protagonist, "You think they're hiding from the sun in those caves?");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal2, ƒS.positionPercent(80, 95));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.pinkCat, "Probably? I'm not a goat expert.");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.walking, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "Come on, let's leave them in peace.");
        await ƒS.update();

        ƒS.Sound.fade(sound.forestWind, 0, 3);
        ƒS.Sound.fade(sound.goats, 0, 2)
        await ƒS.Character.hide(characters.pinkCat);

        dataForSave.currentPath = "MountainsToClouds";
        return "Map Scene"
















    }

}
