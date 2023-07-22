namespace ACatInLimbo {

    export async function Bay(): ƒS.SceneReturn {
        console.log("Scene starting: Bay");
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForCat").style.display = "";

        ƒS.Speech.hide(); //Sprachfenster ausblenden
        ƒS.Sound.play(sound.smallOceanWaves, 0.5, true);
        await ƒS.Location.show(locations.bay);
        await ƒS.update(transition.wildSwirl.duration, transition.wildSwirl.alpha, transition.wildSwirl.edge);

        //if you have already visited bay and not visited lake twice to give lake creature heart back: choose next location
        if (dataForSave.visitedBay == true) {
            //if you have visited lake twice and have given lake creature heart back
            if (dataForSave.visitedLakeTwice == true && dataForSave.talkedWithBayCreatureTwice == false) {
                dataForSave.talkedWithBayCreatureTwice = true;
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.fromBehindLookingAway, ƒS.positionPercent(83, 99));
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, "Hey, what's up!");
                await ƒS.update();
                await ƒS.Character.hide(characters.bayCreature);
                await ƒS.Character.show(characters.bayCreature, characters.bayCreature.pose.headNormal, ƒS.positionPercent(60, 82));
                await ƒS.update();
                await ƒS.Speech.tell(characters.protagonist, "Lake creature was really happy to get it's heart back!");
                await ƒS.update();
                await ƒS.Sound.play(sound.dive, 1, false);
                await ƒS.Character.hide(characters.bayCreature);
                await ƒS.Character.show(characters.bayCreature, characters.bayCreature.pose.happyHeart, ƒS.positionPercent(60, 82));
                await ƒS.update();
                await ƒS.Speech.tell(characters.bayCreature, "blblblbHablppy!");
                await ƒS.update();
                await ƒS.Character.hide(characters.bayCreature);
                await ƒS.Character.show(characters.bayCreature, characters.bayCreature.pose.coin, ƒS.positionPercent(60, 82));
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.protagonist, "Is that for us? Thank you, that's really nice!");
                await ƒS.Inventory.add(items.Coin);
                await ƒS.Inventory.add(items.Fish);
                await ƒS.Inventory.add(items.Fish);
                await ƒS.Inventory.add(items.Fish);
                await ƒS.update();
                ƒS.Text.print("A coin an three fishes have been added to your inventory");
                await ƒS.Character.hide(characters.bayCreature);
                await ƒS.Character.show(characters.bayCreature, characters.bayCreature.pose.happyHeart, ƒS.positionPercent(60, 82));
                await ƒS.update();
                await ƒS.Speech.tell(characters.bayCreature, "Blblbl");
                await ƒS.update();
                await ƒS.Sound.play(sound.dive, 1, false);
                await ƒS.Character.hide(characters.bayCreature);
                await ƒS.Character.show(characters.bayCreature, characters.bayCreature.pose.headNormal, ƒS.positionPercent(60, 82));
                await ƒS.update();
                await ƒS.Character.hide(characters.bayCreature);
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(83, 99));
                await ƒS.update(2);
                await ƒS.Speech.tell(characters.pinkCat, "A coin? That could be helpful!");
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
            }

            //pick next Location
            let nextLocation = {
                river: "River",
                cave: "Cave",
            }

            ƒS.Sound.fade(sound.smallOceanWaves, 0, 2);
            let nextLocationRequest = await ƒS.Menu.getInput(nextLocation, "choicesCSSClass");

            switch (nextLocationRequest) {
                case nextLocation.river:
                    dataForSave.currentPath = "BayToRiver";
                    return "Map Scene"
                    break;

                case nextLocation.cave:
                    dataForSave.currentPath = "BayToCave";
                    return "Map Scene"
                    break;
            }
        }

        dataForSave.visitedBay = true;
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.sleeping, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "Aaah, the sea. Salt air. Cool Breeze. Adventure in my soul.");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.yawning, ƒS.positionPercent(83, 99));
        await ƒS.update(2);
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talking, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "You should design wall decals.");
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "You're a grumpy, mean little cat.");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "How dare you!?");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "Excuse me?");
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "I've been here far too long, only to get to live once every few decades, and then spend all my time guiding some lost souls with no sense of direction through the countryside.");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.crouchedLookingAway, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "Most of the time they fail, but that's not my fault! I'm just being treated very poorly here.");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.crouchedSad, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "I get no tips, no holidays, only working hours and then eternal sleep without relaxation.");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "I want to retire, I'm exhausted! And now I have to put up with your insolence!");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "Jesus, you're mad, huh?");
        await ƒS.Speech.tell(characters.pinkCat, "Hmpf.");
        await ƒS.Character.show(characters.bayCreature, characters.bayCreature.pose.glow, ƒS.positionPercent(60, 82));
        await ƒS.update(3);

        let howToTreatGrumpyCat = {
            solution: "Offer solution.",
            ask: "Ask for more info about the job"
        }

        let howToTreatGrumpyCatRequest = await ƒS.Menu.getInput(howToTreatGrumpyCat, "choicesCSSClass");
        switch (howToTreatGrumpyCatRequest) {
            case howToTreatGrumpyCat.solution:
                await ƒS.Speech.tell(characters.protagonist, "Maybe you should speak with HR, I don't know how it works, but...", false);
                await ƒS.update();
                dataForSave.catScore -= 5;
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.crouchedLookingAway, ƒS.positionPercent(83, 99));
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, "Forget it.");
                await ƒS.update();

                //check for catScore and hndl badEnding LostCat
                if (dataForSave.catScore >= 0) {
                    console.log("cat is not running away");
                } else {
                    ƒS.Sound.fade(sound.smallOceanWaves, 0, 2);
                    await ƒS.Progress.save();
                    console.log("cat should run away");
                    return "BadEnding LostCat Scene";
                }

                break;

            case howToTreatGrumpyCat.ask:
                await ƒS.Speech.tell(characters.protagonist, "Who's your boss?");
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talking, ƒS.positionPercent(83, 99));
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, "Oh, you know him.");
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(83, 99));
                await ƒS.update();
                await ƒS.Speech.tell(characters.protagonist, "Okaayyyy....Why do you not quit?");
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(83, 99));
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, "Good idea, " + dataForSave.nameProtagonist + "! Thanks for reminding me of the option!");
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.crouchedLookingAway, ƒS.positionPercent(83, 99));
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, "It's complicated, okay?");
                await ƒS.update();
                break;
        }

        await ƒS.Speech.tell(characters.protagonist, "Wait, what's that in the water?");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.play1Small, ƒS.positionPercent(51, 84));
        await ƒS.update(1);
        await ƒS.Sound.play(sound.cuteMeowMultiple, 1.5, false);
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.play2Small, ƒS.positionPercent(51, 84));
        await ƒS.Sound.fade(sound.cuteMeowMultiple, 0, 2);
        await ƒS.update(1);
        await ƒS.Sound.play(sound.cathissing, 1, false);
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.scaredSmallTurnedRight, ƒS.positionPercent(40, 86));
        await ƒS.Sound.play(sound.dive, 1, false);
        await ƒS.Character.hide(characters.bayCreature);
        await ƒS.Character.show(characters.bayCreature, characters.bayCreature.pose.attack, ƒS.positionPercent(60, 82));
        await ƒS.update(1);
        await ƒS.Character.hide(characters.bayCreature);
        await ƒS.Character.show(characters.bayCreature, characters.bayCreature.pose.headAngry, ƒS.positionPercent(60, 82));
        await ƒS.update(1);
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.scared, ƒS.positionPercent(83, 99));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, "It almost got you!");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.fromBehindLookingAway, ƒS.positionPercent(83, 99));
        await ƒS.Character.hide(characters.bayCreature);
        await ƒS.Character.show(characters.bayCreature, characters.bayCreature.pose.headNormal, ƒS.positionPercent(60, 82));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "Almost. But I think it can't get out of the water, so we should be safe.");
        await ƒS.update();
        await ƒS.Sound.play(sound.dive, 1, false);
        await ƒS.Character.hide(characters.bayCreature);
        await ƒS.Character.show(characters.bayCreature, characters.bayCreature.pose.armSide, ƒS.positionPercent(60, 82));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "Wtf. Does it have two hearts there in it's body?");
        await ƒS.Speech.tell(characters.pinkCat, "Wait.");
        await ƒS.update();
        await ƒS.Character.hide(characters.bayCreature);
        await ƒS.Character.show(characters.bayCreature, characters.bayCreature.pose.lookingDown, ƒS.positionPercent(60, 82));
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.fromBehindLookingBack, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "You think that might be the lake creatures heart?");
        await ƒS.Speech.tell(characters.protagonist, "It's possible.");
        await ƒS.update();
        await ƒS.Character.hide(characters.bayCreature);
        await ƒS.Character.show(characters.bayCreature, characters.bayCreature.pose.talkingAngry, ƒS.positionPercent(60, 82));
        await ƒS.update();
        await ƒS.Speech.tell(characters.bayCreature, "blblbl");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "This creature seems less compromise-oriented though.");

        //had to implement in case you have no snails due to saving+loading or not gettind the snails in the first place
        if (ƒS.Inventory.getAmount(items.Snail) <= 0) {
            await ƒS.Speech.tell(characters.protagonist, "Mhm, we don't really have anything to feed it...To bad we lost those snails, huh?");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(83, 99));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "Yeah, too bad.");
            await ƒS.update();

            let nextLocation = {
                river: "River",
                cave: "Cave",
            }
            ƒS.Sound.fade(sound.smallOceanWaves, 0, 2);
            let nextLocationRequest = await ƒS.Menu.getInput(nextLocation, "choicesCSSClass");

            await ƒS.Character.hideAll();
            ƒS.Sound.fade(sound.smallOceanWaves, 0, 2);

            switch (nextLocationRequest) {
                case nextLocation.river:
                    dataForSave.currentPath = "BayToRiver";
                    return "Map Scene"
                    break;

                case nextLocation.cave:
                    dataForSave.currentPath = "BayToCave";
                    return "Map Scene"
                    break;
            }

        } else {

            let feedBayCreature = {
                feed: "Feed snails",
                talk: "Try to talk it out"
            }

            let pickedFeed: boolean;
            let pickedTalk: boolean;

            do {
        
                if (pickedTalk == true) {
                    delete feedBayCreature.talk;
                    console.log("delete talk");
                }

                let feedBayCreatureRequest = await ƒS.Menu.getInput(feedBayCreature, "choicesCSSClass");
                switch (feedBayCreatureRequest) {
                    case feedBayCreature.talk:
                        await ƒS.update();
                        await ƒS.Character.hide(characters.pinkCat);
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(83, 99));
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.protagonist, "Listen, we've met a friend from a lake who is really really sad. It lost its heart. We thought you could have it, as you have two hearts!");
                        await ƒS.update();
                        await ƒS.Character.hide(characters.bayCreature);
                        await ƒS.Character.show(characters.bayCreature, characters.bayCreature.pose.talkingAngry, ƒS.positionPercent(60, 82));
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.bayCreature, "blblbllb get blblost!");
                        await ƒS.update();
                        pickedTalk = true;

                    case feedBayCreature.feed:
                        // dataForSave.pickedChoice = true;
                        pickedFeed = true;
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.protagonist, "Let's give it some snails or something...");
                        await ƒS.update();
                        await ƒS.Character.hide(characters.pinkCat);
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(83, 99));
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.pinkCat, "They're MY snails!");
                        await ƒS.update();
                        await ƒS.Character.hide(characters.pinkCat);
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal2Sad, ƒS.positionPercent(83, 99));
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.pinkCat, "...We only have four. Maybe don't use all of them up, okay?");

                        let feedSnails = {
                            feed: "Feed a snail",
                            stop: "Stop Feeding"
                        }
                        let pickedStop: boolean = false;
                        let pickedSnail: boolean = false;

                        do {
                            if (pickedStop == true) {
                                delete feedSnails.feed;
                                delete feedSnails.stop;
                            }

                            let feedSnailsRequest = await ƒS.Menu.getInput(feedSnails, "choicesCSSClass");
                            switch (feedSnailsRequest) {
                                case feedSnails.feed:
                                    ƒS.Speech.hide();
                                    pickedSnail = true;
                                    if (ƒS.Inventory.getAmount(items.Snail) > 0) {
                                        ƒS.Sound.play(sound.slimeSound, 1, false);
                                        ƒS.Inventory.subtract(items.Snail);
                                    }
                                    if (ƒS.Inventory.getAmount(items.Snail) == 0) {
                                        dataForSave.catScore -= 10;
                                        pickedStop = true;
                                        await ƒS.Speech.tell(characters.pinkCat, "Awesome, you used all my snails. Thanks a lot. Idiot.")
                                        ƒS.update();
                                    }

                                    //check for catScore and hndl badEnding LostCat
                                    if (dataForSave.catScore >= 0) {
                                        console.log("cat is not running away");
                                    } else {
                                        ƒS.Sound.fade(sound.smallOceanWaves, 0, 2);
                                        await ƒS.Progress.save();
                                        console.log("cat should run away");
                                        return "BadEnding LostCat Scene";
                                    }

                                    break;

                                case feedSnails.stop:
                                    if (pickedSnail == true) {
                                        pickedStop = true;
                                    } else {
                                        await ƒS.Speech.tell(characters.pinkCat, "I don't like it, but I guess it's important the creature trusts us. We need to feed it at least one snail.")
                                        ƒS.update();
                                    }
                                    break;
                            }
                        } while (!pickedStop);



                        await ƒS.update();
                        await ƒS.Character.hide(characters.pinkCat);
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(83, 99));
                        await ƒS.update();
                        await ƒS.Character.hide(characters.bayCreature);
                        await ƒS.Character.show(characters.bayCreature, characters.bayCreature.pose.happy, ƒS.positionPercent(60, 82));
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.protagonist, "Okay, now it looks definitely happier. So, do you know anything about a friend we met in a lake? He is looking for his heart.");
                        await ƒS.update();
                        await ƒS.Character.hide(characters.bayCreature);
                        await ƒS.Character.show(characters.bayCreature, characters.bayCreature.pose.talking, ƒS.positionPercent(60, 82));
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.bayCreature, "blblblLake?");
                        await ƒS.Speech.tell(characters.pinkCat, "Yes, Lake! Big, a bit slimy and very dramatic character! Also, very very sad.");
                        await ƒS.update();
                        await ƒS.Character.hide(characters.bayCreature);
                        await ƒS.Character.show(characters.bayCreature, characters.bayCreature.pose.lookingDown, ƒS.positionPercent(60, 82));
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.bayCreature, "bbllblblb");
                        await ƒS.update();
                        await ƒS.Character.hide(characters.bayCreature);
                        await ƒS.Character.show(characters.bayCreature, characters.bayCreature.pose.lookingDownSad, ƒS.positionPercent(60, 82));
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.bayCreature, "blbllSaaad");
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.protagonist, "What is it doing?");
                        await ƒS.Speech.tell(characters.pinkCat, "I think...");
                        await ƒS.update();
                        await ƒS.Character.hide(characters.bayCreature);
                        await ƒS.Character.show(characters.bayCreature, characters.bayCreature.pose.heart, ƒS.positionPercent(60, 82));
                        await ƒS.update(1);
                        //add lake creatures heart
                        await ƒS.Inventory.add(items.Heart);
                        await ƒS.Speech.tell(characters.protagonist, "Wow, we really got it! Thanks!");
                        await ƒS.update();
                        await ƒS.Character.hide(characters.bayCreature);
                        await ƒS.Character.show(characters.bayCreature, characters.bayCreature.pose.happyHeart, ƒS.positionPercent(60, 82));
                        await ƒS.update(1);
                        ƒS.Text.print("A heart has been added to your inventory");
                        await ƒS.Character.hide(characters.pinkCat);
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal2, ƒS.positionPercent(83, 99));
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.pinkCat, "Great. We don't have any time to lose. Do you still want to help the Lake Creature?");
                        await ƒS.update();
                        await ƒS.Character.hide(characters.bayCreature);
                        break;
                }
            } while (!dataForSave.pickedChoice);
        }

        await ƒS.Character.hide(characters.bayCreature);
        //conversation about helping or not helping
        let helpLakeCreature = {
            help: "bring heart to lake Creature",
            dontHelp: "move forward"
        }
        let helpLakeCreatureRequest = await ƒS.Menu.getInput(helpLakeCreature, "choicesCSSClass");
        switch (helpLakeCreatureRequest) {
            case helpLakeCreature.help:
                dataForSave.catScore += 10;
                await ƒS.Character.hide(characters.pinkCat);
                ƒS.Sound.fade(sound.smallOceanWaves, 0, 2);
                dataForSave.currentPath = "BayToLake"
                return "Map Scene"
                break;

            case helpLakeCreature.dontHelp:
                dataForSave.catScore -= 10;
                await ƒS.Speech.tell(characters.protagonist, "No. We should hurry. Come on.");
                await ƒS.update();

                //check for catScore and hndl badEnding LostCat
                if (dataForSave.catScore >= 0) {
                    console.log("cat is not running away");
                } else {
                    ƒS.Sound.fade(sound.smallOceanWaves, 0, 2);
                    await ƒS.Progress.save();
                    console.log("cat should run away");
                    return "BadEnding LostCat Scene";
                }

                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.update();
                let nextLocation = {
                    river: "River",
                    cave: "Cave",
                }
                ƒS.Sound.fade(sound.smallOceanWaves, 0, 2);
                let nextLocationRequest = await ƒS.Menu.getInput(nextLocation, "choicesCSSClass");

                switch (nextLocationRequest) {
                    case nextLocation.river:
                        dataForSave.currentPath = "BayToRiver";
                        return "Map Scene"
                        break;

                    case nextLocation.cave:
                        dataForSave.currentPath = "BayToCave";
                        return "Map Scene"
                        break;
                }

                break;
        }


    }
}
