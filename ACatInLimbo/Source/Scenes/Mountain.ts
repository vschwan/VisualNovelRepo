namespace ACatInLimbo {

    export async function Mountain(): ƒS.SceneReturn {
        console.log("Scene starting: Mountain");
        ƒS.Speech.hide(); 
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
        document.getElementById("scoreForCat").style.display = "";

        //Mountains
        await ƒS.Location.show(locations.mountains);
        await ƒS.update(transition.hardEdges.duration, transition.hardEdges.alpha, transition.hardEdges.edge);
        ƒS.Sound.play(sound.forestWind, 2, true);
        await ƒS.Character.show(characters.death, characters.death.pose.normal, ƒS.positionPercent(20, 100));
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.derpy1, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.death, "Fun, fun, FUN! Now, this is where we part ways.");
        await ƒS.Speech.tell(characters.protagonist, "Oh. Alright. Let me ask, who are you, anyway?");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.yawning, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.death, "...");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "We shall meet again.");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal2, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "Great, thanks for ignoring me.");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.thumbsUp, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.death, "Byyyeee!");
        await ƒS.update();
        await ƒS.Character.animate(characters.death, characters.death.pose.normal, deathSlide());
        await ƒS.update(2);
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.curious, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "Ok, whatever, let's move on.");
        await ƒS.update();

        //meeting of goats
        await ƒS.Character.show(characters.goats, characters.goats.pose.allGoats, ƒS.positionPercent(50, 50));
        await ƒS.Sound.play(sound.goats, 0.5, true);
        await ƒS.update(1);
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.fromBehindLookingAway, ƒS.positionPercent(83, 99));
        await ƒS.Character.hide(characters.goats);
        await ƒS.Character.show(characters.goats, characters.goats.pose.allGoats, ƒS.positionPercent(50, 50));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "Look, goats! Oh, I LOVE goats!");
        await ƒS.update();
        await ƒS.Sound.play(sound.purring, 1, false);
        await ƒS.Character.hide(characters.goats);
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.lovely, ƒS.positionPercent(83, 99));
        await ƒS.Character.show(characters.goats, characters.goats.pose.allGoats, ƒS.positionPercent(50, 50));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "Really?");
        await ƒS.Sound.fade(sound.purring, 0, 2);
        await ƒS.Speech.tell(characters.pinkCat, "They can jump very high, climb absolutely everywhere and the make cute sounds.");
        await ƒS.Sound.play(sound.purrMeow, 1, false);
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(83, 99));
        await ƒS.Character.hide(characters.goats);
        await ƒS.Character.show(characters.goats, characters.goats.pose.allGoats, ƒS.positionPercent(50, 50));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "Makes sense.");
        await ƒS.Speech.tell(characters.protagonist, "You think they're hiding from the sun in those caves?");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(83, 99));
        await ƒS.Character.hide(characters.goats);
        await ƒS.Character.show(characters.goats, characters.goats.pose.allGoats, ƒS.positionPercent(50, 50));
        await ƒS.update(1);
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal2, ƒS.positionPercent(83, 99));
        await ƒS.Character.hide(characters.goats);
        await ƒS.Character.show(characters.goats, characters.goats.pose.allGoats, ƒS.positionPercent(50, 50));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.pinkCat, "Probably? I'm not a goat expert.");
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "Come, let's leave.");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talking, ƒS.positionPercent(83, 99));
        await ƒS.Character.hide(characters.goats);
        await ƒS.Character.show(characters.goats, characters.goats.pose.allGoats, ƒS.positionPercent(50, 50));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "Waiiit! I know we're in a hurry, but do you mind if I say a quick hello at least?");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(83, 99));
        await ƒS.Character.hide(characters.goats);
        await ƒS.Character.show(characters.goats, characters.goats.pose.allGoats, ƒS.positionPercent(50, 50));
        await new Promise(resolve => setTimeout(resolve, 1000));
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.proud, ƒS.positionPercent(83, 99));
        await ƒS.Character.hide(characters.goats);
        await ƒS.Character.show(characters.goats, characters.goats.pose.allGoats, ƒS.positionPercent(50, 50));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "...");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal2Sad, ƒS.positionPercent(83, 99));
        await ƒS.Character.hide(characters.goats);
        await ƒS.Character.show(characters.goats, characters.goats.pose.allGoats, ƒS.positionPercent(50, 50));
        await ƒS.update();

        let catApproachGoats = {
            allow: "Allow Cat to approach goats",
            dontAllow: "Don't allow Cat to approach goats"
        }
        let catApproachGoatsRequest = await ƒS.Menu.getInput(catApproachGoats, "choicesCSSClass");
        switch (catApproachGoatsRequest) {
            case catApproachGoats.allow:
                dataForSave.catScore += 5;
                await ƒS.Speech.tell(characters.protagonist, "Knock yourself out.");
                await ƒS.update();
                await ƒS.Sound.play(sound.purrMeow, 1, false);
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.lovely, ƒS.positionPercent(83, 99));
                break;

            case catApproachGoats.dontAllow:
                dataForSave.catScore -= 10;
                await ƒS.Speech.tell(characters.protagonist, "Naaah, we're wasting time.");
                await ƒS.Speech.tell(characters.protagonist, "Come on, I want to get going!");
                await ƒS.update();
                await ƒS.Sound.play(sound.demanding, 1, false);
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(83, 99));
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, "Oh, fuck you, I'm gonna do it anyways!");
                break;
        }

        //cat says hello to goats
        await ƒS.update();
        ƒS.Speech.hide();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.proudTiny, ƒS.positionPercent(62, 86));
        await new Promise(resolve => setTimeout(resolve, 1000));
        await ƒS.update(1);
        await ƒS.Character.show(characters.goats, characters.goats.pose.singleGoat, ƒS.positionPercent(50, 50));
        await ƒS.update(1);
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.lookingUpTiny, ƒS.positionPercent(62, 86));
        await new Promise(resolve => setTimeout(resolve, 2000));
        await ƒS.update(1);
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.loveTiny, ƒS.positionPercent(62, 86));
        await new Promise(resolve => setTimeout(resolve, 1000));
        await ƒS.update(1);
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.cleaningPawTiny, ƒS.positionPercent(62, 86));
        await new Promise(resolve => setTimeout(resolve, 1000));
        await ƒS.update(1);
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.lookingUpTiny, ƒS.positionPercent(62, 86));
        await new Promise(resolve => setTimeout(resolve, 1000));
        await ƒS.update(1);
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.onBackTiny, ƒS.positionPercent(62, 86));
        await new Promise(resolve => setTimeout(resolve, 1000));
        await ƒS.update(1);
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.cleaningAssTiny, ƒS.positionPercent(62, 86));
        await new Promise(resolve => setTimeout(resolve, 1000));
        await ƒS.update(1);
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.loveTiny, ƒS.positionPercent(62, 86));
        await new Promise(resolve => setTimeout(resolve, 1000));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, "Can we move on now?");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.cleaningPawTiny, ƒS.positionPercent(62, 86));
        await ƒS.Character.hide(characters.goats);
        await ƒS.Character.show(characters.goats, characters.goats.pose.allGoats, ƒS.positionPercent(50, 50));
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(83, 99));
        await ƒS.Character.hide(characters.goats);
        await ƒS.Character.show(characters.goats, characters.goats.pose.allGoats, ƒS.positionPercent(50, 50));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.pinkCat, "You're a real party pooper.");
        await ƒS.update();

        ƒS.Sound.fade(sound.forestWind, 0, 3);
        ƒS.Sound.fade(sound.goats, 0, 2)
        await ƒS.Character.hideAll();

        //check for catScore and hndl badEnding LostCat
        if (dataForSave.catScore >= 0) {
            console.log("cat is not running away");
        } else {
            ƒS.Sound.fade(sound.forestWind, 0, 10);
            ƒS.Sound.fade(sound.goats, 0, 10)
            await ƒS.Progress.save();
            console.log("cat should run away");
            return "BadEnding LostCat Scene";
        }

        dataForSave.currentPath = "MountainsToClouds";
        return "Map Scene"
















    }

}
