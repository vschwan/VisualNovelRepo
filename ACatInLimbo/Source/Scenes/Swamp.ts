namespace ACatInLimbo {

    export async function Swamp(): ƒS.SceneReturn {
        console.log("Scene starting: Swamp");
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForCat").style.display = "";

        ƒS.Speech.hide(); //Sprachfenster ausblenden
        ƒS.Sound.play(sound.frogs, 0.1, true);
        ƒS.Sound.play(sound.swamp, 0.5, true);
        await ƒS.Location.show(locations.swamp);
        await ƒS.update(transition.wet2.duration, transition.wet2.alpha, transition.wet2.edge);
        await ƒS.update(1);

        //check if Swamp has already been visited and jump to next scene if so
        if (dataForSave.visitedSwamp == true) {
            //pick next Location
            let nextLocation = {
                bay: "Bay",
                river: "River",
                forest: "Forest",
                lake: "Lake"
            }
            if (dataForSave.visitedForest == false || dataForSave.visitedLake == false) {
                delete nextLocation.bay
                delete nextLocation.river
            }
            if (dataForSave.visitedForest == true) {
                delete nextLocation.forest
            }
            if (dataForSave.visitedLake == true) {
                delete nextLocation.lake
            }

            ƒS.Sound.fade(sound.frogs, 0, 2);
            ƒS.Sound.fade(sound.swamp, 0, 2);
            let nextLocationRequest = await ƒS.Menu.getInput(nextLocation, "choicesCSSClass");

            switch (nextLocationRequest) {
                case nextLocation.bay:
                    dataForSave.currentPath = "SwampToBay";
                    return "Map Scene"
                    // return "Forest Scene"
                    break;

                case nextLocation.river:
                    dataForSave.currentPath = "SwampToRiver";
                    return "Map Scene"
                    //return "Lake Scene"
                    break;

                case nextLocation.forest:
                    dataForSave.currentPath = "SwampToForest";
                    return "Map Scene"
                    //return "Lake Scene"
                    break;

                case nextLocation.lake:
                    dataForSave.currentPath = "SwampToLake";
                    return "Map Scene"
                    //return "Lake Scene"
                    break;
            }
        }
        dataForSave.visitedSwamp = true;
        //start with Scene 
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "Bah, it really doesn't smell good here!");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "Ugh, you're right, and those fucking frogs, what the hell?! Let's move on ASAP.");
        await ƒS.update();
        await ƒS.Sound.play(sound.bubblingInTheDeep, 1, false);
        await ƒS.Sound.fade(sound.bubblingInTheDeep, 0, 5);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await ƒS.Speech.tell(characters.protagonist, "What was that?");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "The next shitshow, I fear.");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Sound.play(sound.bubblingInTheDeep, 1, false);
        await ƒS.Character.animate(characters.swampCreature, characters.swampCreature.pose.asleep, swampCreatureAppearance());
        await ƒS.Sound.fade(sound.bubblingInTheDeep, 0, 3);
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.derpy1, ƒS.positionPercent(83, 99));
        await ƒS.update(1);
        await new Promise(resolve => setTimeout(resolve, 1000));
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.crouchedLookingAway, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "Holy moly, what happened to YOU?");
        await ƒS.update();

        let helpSwampCreature = {
            help: "help",
            dontHelp: "don't help"
        }

        let helpSwampCreatureRequest = await ƒS.Menu.getInput(helpSwampCreature, "choicesCSSClass");
        switch (helpSwampCreatureRequest) {
            case helpSwampCreature.help:
                await ƒS.Speech.tell(characters.protagonist, "He looks really sad. Maybe we can help him somehow?");
                await ƒS.Speech.tell(characters.pinkCat, "Are you hurt, maybe?");
                await ƒS.update();
                await ƒS.Character.hide(characters.swampCreature);
                await ƒS.Character.show(characters.swampCreature, characters.swampCreature.pose.normal, ƒS.positionPercent(30, 85));
                await ƒS.update();
                await ƒS.Speech.tell(characters.swampCreature, "Blubblblblblb!");
                await ƒS.Speech.tell(characters.protagonist, "Is it the wood that sticks inside your body?");
                await ƒS.Speech.tell(characters.swampCreature, "Blubblblblblb!");
                await ƒS.Speech.tell(characters.pinkCat, "Sounds about right. Okay let's get that stuff out of you. It would hurt me too, to be honest.");
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.crouched, ƒS.positionPercent(83, 99));
                await ƒS.update();
                await ƒS.Speech.tell(characters.protagonist, "Alright, I'm gonna do it!");
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.thumbsUp, ƒS.positionPercent(83, 99));
                await ƒS.update(1);
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(83, 99));
                await ƒS.update();
                await ƒS.Sound.play(sound.lightbubbling, 1, false);
                await ƒS.Character.hide(characters.swampCreature);
                await ƒS.Character.show(characters.swampCreature, characters.swampCreature.pose.lessWood1, ƒS.positionPercent(30, 85));
                await ƒS.Sound.fade(sound.lightbubbling, 0, 3);
                await ƒS.update(3);
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.derpy2, ƒS.positionPercent(83, 99));
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, "Hey, " + dataForSave.nameProtagonist + "! Can I get those snails maybe? They look pretty.");

                let getSnails = {
                    getSnails: "get Snails",
                    dontGetSnails: "Don't get snails"
                }
                let getSnailsRequest = await ƒS.Menu.getInput(getSnails, "choicesCSSClass");
                switch (getSnailsRequest) {
                    case getSnails.dontGetSnails:
                        await ƒS.Speech.tell(characters.protagonist, "What? No. They don't belong to you and they don't hut the creature. Maybe it wants to keep them.")
                        await ƒS.update();
                        dataForSave.catScore -= 5;
                        await ƒS.Character.hide(characters.pinkCat);
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(83, 99));
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.pinkCat, "Wow, thanks for nothing.")
                        await ƒS.update();

                        //check for catScore and hndl badEnding LostCat
                        if (dataForSave.catScore >= 0) {
                            console.log("cat is not running away");
                        } else {
                            ƒS.Sound.fade(sound.frogs, 0, 10);
                            ƒS.Sound.fade(sound.swamp, 0, 10);
                            await ƒS.Progress.save();
                            console.log("cat should run away");
                            return "BadEnding LostCat Scene";
                        }

                        break;
                    case getSnails.getSnails:
                        await ƒS.Speech.tell(characters.protagonist, " Ehm… Alright? If it doesn't mind…");
                        dataForSave.catScore += 5;
                        await ƒS.update();
                        await ƒS.Character.hide(characters.pinkCat);
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.lovely, ƒS.positionPercent(83, 99));
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.pinkCat, "Thanks!");
                        await ƒS.update();
                        await ƒS.Character.hide(characters.pinkCat);
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(83, 99));
                        await ƒS.update();
                        await ƒS.Sound.play(sound.lightbubbling, 1, false);
                        await ƒS.Character.hide(characters.swampCreature);
                        await ƒS.Character.show(characters.swampCreature, characters.swampCreature.pose.noSnails, ƒS.positionPercent(30, 85));
                        await ƒS.Sound.fade(sound.lightbubbling, 0, 3);
                        await ƒS.update(3);
                        ƒS.Inventory.add(items.Snail);
                        ƒS.Inventory.add(items.Snail);
                        ƒS.Inventory.add(items.Snail);
                        ƒS.Inventory.add(items.Snail);
                        ƒS.Text.print("Four snails have been added to your Inventory");
                        await ƒS.update(2);
                        break;
                }

                await ƒS.Sound.play(sound.lightbubbling, 1, false);
                await ƒS.Character.hide(characters.swampCreature);
                await ƒS.Character.show(characters.swampCreature, characters.swampCreature.pose.lessWood2, ƒS.positionPercent(30, 85));
                await ƒS.Sound.fade(sound.lightbubbling, 0, 3);
                await ƒS.update(2);
                await ƒS.Speech.tell(characters.protagonist, "Better?");
                await ƒS.update();
                await ƒS.Sound.play(sound.lightbubbling, 1, false);
                await ƒS.Character.hide(characters.swampCreature);
                await ƒS.Character.show(characters.swampCreature, characters.swampCreature.pose.smile, ƒS.positionPercent(30, 85));
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.cleaningPaw, ƒS.positionPercent(83, 99));
                await ƒS.update();
                ƒS.Inventory.add(items.Fireflies);
                await ƒS.update();
                await ƒS.Speech.tell(characters.protagonist, "Well, he was talkative. Hey, I think we got something from him!");
                await ƒS.update();
                ƒS.Text.print("A jar of fireflies has been added to your Inventory");
                await ƒS.update();
                await ƒS.Speech.tell(characters.protagonist, "Some fireflies!");
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(83, 99));
                await ƒS.update();
                await ƒS.Sound.play(sound.bubblingInTheDeep, 1, false);
                await ƒS.Character.hide(characters.swampCreature);
                await ƒS.Character.animate(characters.swampCreature, characters.swampCreature.pose.smile, swampCreatureDisappearance());
                await ƒS.Sound.fade(sound.bubblingInTheDeep, 0, 5);
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, "Noice. Maybe it's gonna be of use. Please let's move forward now, this place stinks like hell!")
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.update();

                break;
            case helpSwampCreature.dontHelp:
                dataForSave.catScore -= 10;
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(83, 99));
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, "What?! " + dataForSave.nameProtagonist + ", how can you be so heartless?");
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(83, 99));
                await ƒS.update();
                await ƒS.Speech.tell(characters.protagonist, "Sorry, I just think it looks a bit nasty.");

                //check for catScore and hndl badEnding LostCat
                if (dataForSave.catScore >= 0) {
                    console.log("cat is not running away");
                } else {
                    ƒS.Sound.fade(sound.frogs, 0, 10);
                    ƒS.Sound.fade(sound.swamp, 0, 10);
                    await ƒS.Progress.save();
                    console.log("cat should run away");
                    return "BadEnding LostCat Scene";
                }

                await ƒS.Speech.tell(characters.pinkCat, "Then let's go, I guess. I would drown If I tried to help him.");
                await ƒS.update();
                await ƒS.Sound.play(sound.bubblingInTheDeep, 1, false);
                await ƒS.Character.hide(characters.swampCreature);
                await ƒS.Character.animate(characters.swampCreature, characters.swampCreature.pose.asleep, swampCreatureDisappearance());
                await ƒS.Sound.fade(sound.bubblingInTheDeep, 0, 5);
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.update();
                //hide swamp creature?
                break;
        }

        //pick next Location
        let nextLocation = {
            bay: "Bay",
            river: "River",
            forest: "Forest",
            lake: "Lake"
        }
        if (dataForSave.visitedForest == false || dataForSave.visitedLake == false) {
            delete nextLocation.bay
            delete nextLocation.river
        }
        if (dataForSave.visitedForest == true) {
            delete nextLocation.forest
        }
        if (dataForSave.visitedLake == true) {
            delete nextLocation.lake
        }
        ƒS.Sound.fade(sound.frogs, 0, 2);
        ƒS.Sound.fade(sound.swamp, 0, 2);
        let nextLocationRequest = await ƒS.Menu.getInput(nextLocation, "choicesCSSClass");

        switch (nextLocationRequest) {
            case nextLocation.bay:
                dataForSave.currentPath = "SwampToBay";
                return "Map Scene"
                // return "Forest Scene"
                break;

            case nextLocation.river:
                dataForSave.currentPath = "SwampToRiver";
                return "Map Scene"
                //return "Lake Scene"
                break;

            case nextLocation.forest:
                dataForSave.currentPath = "SwampToForest";
                return "Map Scene"
                //return "Lake Scene"
                break;

            case nextLocation.lake:
                dataForSave.currentPath = "SwampToLake";
                return "Map Scene"
                //return "Lake Scene"
                break;
        }






    }
}