namespace ACatInLimbo {

    export async function Swamp(): ƒS.SceneReturn {
        console.log("Scene starting: Swamp");
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);

        let textSwamp = {
            protagonist: {
                T0001: "Bah, it really doesn't smell  good here!",
                T0002: "What was that?",

                TD11: "Sorry, I just think it looks a bit nasty.",

                TD21: "He looks really sad. Maybe we can help him somehow?",
                TD22: "Is it the wood that sticks inside your body?",
                TD23: "alright, I'm gonna do it!",
                TD24: "ehm...yeah? If it doesn't mind?",
                TD25: "Better?",
                TD26: "Well, he was talkative. Hey, I think we got something from him!",
                TD27: "Some fireflies!"
            },
            pinkCat: {
                T0001: "Ugh, you're right, and those fucking frogs, what the hell?! Let's move on ASAP.",
                T0002: "The next shitshow, I fear.",
                T0003: "Holy moly, what happened to YOU?",

                TD11: "What?! How can you be so heartless?",
                TD12: "Then let's go, I guess. I would drown If I tried to help him.",

                TD21: "Are you hurt, maybe?",
                TD22: "Sounds about right. Okay let's get that stuff out of you. It would hurt me too, to be honest.",
                TD23: "Hey, can I get those snails maybe? They look pretty.",
                TD24: "Noice. Maybe it's gonna be of use. Please let's move forward now, this place stinks like hell!"
            },
            swampCreature: {
                T0001: "blubblblblblb!"
            }
        }

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
        //set visited Swamp to true
        dataForSave.visitedSwamp = true;
        //start with Scene
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, textSwamp.protagonist.T0001);
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, textSwamp.pinkCat.T0001);
        await ƒS.update();
        await ƒS.Sound.play(sound.bubblingInTheDeep, 1, false);
        await ƒS.Sound.fade(sound.bubblingInTheDeep, 0, 5);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await ƒS.Speech.tell(characters.protagonist, textSwamp.protagonist.T0002);
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, textSwamp.pinkCat.T0002);
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Sound.play(sound.bubblingInTheDeep, 1, false);
        await ƒS.Character.animate(characters.swampCreature, characters.swampCreature.pose.asleep, swampCreatureAppearance());
        await ƒS.Sound.fade(sound.bubblingInTheDeep, 0, 3);
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.derpy1, ƒS.positionPercent(80, 95));
        await ƒS.update(1);
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.crouchedLookingAway, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, textSwamp.pinkCat.T0003);
        await ƒS.update();

        let helpSwampCreature = {
            help: "help",
            dontHelp: "don't help"
        }

        let helpSwampCreatureRequest = await ƒS.Menu.getInput(helpSwampCreature, "choicesCSSClass");
        switch (helpSwampCreatureRequest) {
            case helpSwampCreature.help:
                await ƒS.Speech.tell(characters.protagonist, textSwamp.protagonist.TD21);
                await ƒS.Speech.tell(characters.pinkCat, textSwamp.pinkCat.TD21);
                await ƒS.update();
                await ƒS.Character.hide(characters.swampCreature);
                await ƒS.Character.show(characters.swampCreature, characters.swampCreature.pose.normal, ƒS.positionPercent(30, 85));
                await ƒS.update();
                await ƒS.Speech.tell(characters.swampCreature, textSwamp.swampCreature.T0001);
                await ƒS.Speech.tell(characters.protagonist, textSwamp.protagonist.TD22);
                await ƒS.Speech.tell(characters.swampCreature, textSwamp.swampCreature.T0001);
                await ƒS.Speech.tell(characters.pinkCat, textSwamp.pinkCat.TD22);
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.crouched, ƒS.positionPercent(80, 95));
                await ƒS.update();
                await ƒS.Speech.tell(characters.protagonist, textSwamp.protagonist.TD23);
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.thumbsUp, ƒS.positionPercent(80, 95));
                await ƒS.update(1);
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(80, 95));
                await ƒS.update();
                await ƒS.Sound.play(sound.lightbubbling, 1, false);
                await ƒS.Character.hide(characters.swampCreature);
                await ƒS.Character.show(characters.swampCreature, characters.swampCreature.pose.lessWood1, ƒS.positionPercent(30, 85));
                await ƒS.Sound.fade(sound.lightbubbling, 0, 3);
                await ƒS.update(2);
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.derpy2, ƒS.positionPercent(80, 95));
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, textSwamp.pinkCat.TD23);

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
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(80, 95));
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.pinkCat, "Thanks for nothing.")
                        await ƒS.update();
                        break;
                    case getSnails.getSnails:
                        await ƒS.Speech.tell(characters.protagonist, textSwamp.protagonist.TD24);
                        dataForSave.catScore += 5;
                        await ƒS.update();
                        await ƒS.Character.hide(characters.pinkCat);
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.lovely, ƒS.positionPercent(80, 95));
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.pinkCat, "Thanks!");
                        await ƒS.update();
                        await ƒS.Character.hide(characters.pinkCat);
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(80, 95));
                        await ƒS.update();
                        await ƒS.Sound.play(sound.lightbubbling, 1, false);
                        await ƒS.Character.hide(characters.swampCreature);
                        await ƒS.Character.show(characters.swampCreature, characters.swampCreature.pose.noSnails, ƒS.positionPercent(30, 85));
                        await ƒS.Sound.fade(sound.lightbubbling, 0, 3);
                        await ƒS.update();
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
                await ƒS.Speech.tell(characters.protagonist, textSwamp.protagonist.TD25);
                await ƒS.update();
                await ƒS.Sound.play(sound.lightbubbling, 1, false);
                await ƒS.Character.hide(characters.swampCreature);
                await ƒS.Character.show(characters.swampCreature, characters.swampCreature.pose.smile, ƒS.positionPercent(30, 85));
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.cleaningPaw, ƒS.positionPercent(80, 95));
                await ƒS.update();
                ƒS.Inventory.add(items.Fireflies);
                await ƒS.update();
                await ƒS.Speech.tell(characters.protagonist, textSwamp.protagonist.TD26);
                await ƒS.update();
                ƒS.Text.print("a jar of fireflies has been added to your Inventory");
                await ƒS.update();
                await ƒS.Speech.tell(characters.protagonist, textSwamp.protagonist.TD27);
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95));
                await ƒS.update();
                await ƒS.Sound.play(sound.bubblingInTheDeep, 1, false);
                await ƒS.Character.hide(characters.swampCreature);
                await ƒS.Character.animate(characters.swampCreature, characters.swampCreature.pose.smile, swampCreatureDisappearance());
                await ƒS.Sound.fade(sound.bubblingInTheDeep, 0, 5);
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, textSwamp.pinkCat.TD24)
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.update();

                break;
            case helpSwampCreature.dontHelp:
                dataForSave.catScore -= 15;
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(80, 95));
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, textSwamp.pinkCat.TD11);
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(80, 95));
                await ƒS.update();
                await ƒS.Speech.tell(characters.protagonist, textSwamp.protagonist.TD11);
                await ƒS.Speech.tell(characters.pinkCat, textSwamp.pinkCat.TD12);
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