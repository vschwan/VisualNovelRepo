namespace ACatInLimbo {

    export async function Lake(): ƒS.SceneReturn {
        console.log("Scene starting: Lake");

        let textLake = {
            protagonist: {
                T0001: "Uh, what a beautiful lake!",
                T0002: "Oh, come on...",
                T0003: "Ehm, okay, you were right.",
                T0004: "We're not alone.",
                T0005: "Whispering: <i>He seems a bit simple.</i>",
                T0006: "Down here?",
                T0007: "Oh.",
                T0008: "Whispering: <i>What's that hole in his body?</i>",
                T0009: "You mean 'Good God', right?",
                T0010: "Is it Lost Love maybe?",
                T0011: "Omg, that's kind of sweet!",

                TD11: "Wow, very wise.",
                TD21: "Nah, I think it's the ultimate goal to be able to fall in love and give your all to someone.",

                T0012: "Hey, maybe we can get it's heart back!",
                T0013: "It should be worth it, right!",
                T0014: "Then let's not waste time and move on!"

            },
            pinkCat: {
                T0001: "You never know...",
                T0002: "What?",
                T0003: "Ah. Hi!",
                T0004: "Buddy, that's the worst bait I've ever seen. Maybe you should just, you know, first, show the fish, and then, if somebody is trying to get it, you could show yourself?",
                T0005: "Yeah, like that!",
                T0006: "Down here, all creatures are a bit dumb.",
                T0007: "Those that don't make it far into the mountains turn into idiots.",
                T0008: "Good Question. Ey, why's that hole in your body?",
                T0009: "Good Death.",
                T0010: "No. We're in Limbo. God has no place here. I don't even know him.",
                T0011: "Ooooh, of course, now I get it! It gave his heart to someone!",
                T0012: "Sweet? You're delusional. You should never give your heart away. It belongs to you and you only. First person you should love is yourself.",

                TD11: "Call me Sokracat.",
                TD21: "How unprogressive and disappointing…",

                T0013: "Maybe…if we can find it on our way…But then we have to go back again…",
                T0014: "…Ok. If we can reduce some of this creatures suffering I guess it can be worth it.",
                T0015: "Jeez, alright, you goody-goody."
            },

        }

        ƒS.Speech.hide(); //Sprachfenster ausblenden
        ƒS.Sound.play(sound.lakeSound, 1, true);
        ƒS.Sound.play(sound.LakeWaves, 0.5, true);
        await ƒS.Location.show(locations.lake);
        await ƒS.update(transition.wet1.duration, transition.wet1.alpha, transition.wet1.edge);

        if (dataForSave.visitedLake == true) {
            //show stuff for when lake creature gets it's heart back
            dataForSave.visitedLakeTwice = true;
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.hide, ƒS.positionPercent(50, 75));
            await ƒS.update();
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(80, 95));
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.protagonist, "Buddy, we got your heart!");
            await ƒS.update();
            await ƒS.Sound.play(sound.dive, 1, false);
            await ƒS.Character.hide(characters.bayCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.smile, ƒS.positionPercent(50, 75));
            await ƒS.update();
            ƒS.Inventory.subtract(items.Heart);
            await ƒS.Character.hide(characters.bayCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.smileHeart, ƒS.positionPercent(50, 75));
            await ƒS.update();
            ƒS.Inventory.add(items.Fish);
            ƒS.Inventory.add(items.Fish);
            ƒS.Inventory.add(items.Fish);
            ƒS.Inventory.add(items.Fish);
            ƒS.Inventory.add(items.Fish);
            await ƒS.Text.print("Five fishes have been added to your inventory");
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "That's really sweet! I love fishies! Yum.");
            await ƒS.update();
            await ƒS.Sound.play(sound.dive, 1, false);
            await ƒS.Character.hide(characters.bayCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.hide, ƒS.positionPercent(50, 75));
            await ƒS.update();
            await ƒS.Speech.tell(characters.protagonist, "Mission accomplished. Alright. Bye Laky!");
        } else {

            dataForSave.visitedLake = true;
            await ƒS.update(1);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.fromBehindLookingBack, ƒS.positionPercent(80, 95));
            await ƒS.update(1);
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.cleaningAss, ƒS.positionPercent(80, 95));
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.protagonist, textLake.protagonist.T0001);
            await ƒS.Speech.tell(characters.pinkCat, textLake.pinkCat.T0001);
            await ƒS.Speech.tell(characters.protagonist, textLake.protagonist.T0002);
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.hide, ƒS.positionPercent(50, 75));
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.cleaningPaw, ƒS.positionPercent(80, 95));
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.protagonist, textLake.protagonist.T0003);
            await ƒS.Speech.tell(characters.pinkCat, textLake.pinkCat.T0002);
            await ƒS.update();
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.bait, ƒS.positionPercent(50, 75));
            await ƒS.update(1);
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.crouchedLookingAway, ƒS.positionPercent(80, 95));
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.pinkCat, textLake.pinkCat.T0003)
            await ƒS.Speech.tell(characters.pinkCat, textLake.pinkCat.T0004);
            await ƒS.update();
            await ƒS.Sound.play(sound.dive, 1, false);
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.attack, ƒS.positionPercent(50, 75));
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, textLake.pinkCat.T0005);
            await ƒS.update();
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.normal, ƒS.positionPercent(50, 75));
            await ƒS.update();
            await ƒS.Speech.tell(characters.protagonist, textLake.protagonist.T0005);
            await ƒS.Speech.tell(characters.pinkCat, textLake.pinkCat.T0006);
            await ƒS.update();
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.sideEye, ƒS.positionPercent(50, 75));
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talking, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.protagonist, textLake.protagonist.T0006);
            await ƒS.Speech.tell(characters.pinkCat, textLake.pinkCat.T0007);
            await ƒS.Speech.tell(characters.protagonist, textLake.protagonist.T0007);
            await ƒS.Speech.tell(characters.protagonist, textLake.protagonist.T0008);
            await ƒS.update();
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.normal, ƒS.positionPercent(50, 75));
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.fromBehindLookingAway, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, textLake.pinkCat.T0008);
            await ƒS.update();
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.sideEye, ƒS.positionPercent(50, 75));
            await ƒS.update(1);
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.cry, ƒS.positionPercent(50, 75));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, textLake.pinkCat.T0009);
            await ƒS.Speech.tell(characters.protagonist, textLake.protagonist.T0009);
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, textLake.pinkCat.T0010);
            await ƒS.update();
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.heartEyes, ƒS.positionPercent(50, 75));
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(80, 95));
            await ƒS.update(1);
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.heartEyesBroken, ƒS.positionPercent(50, 75));
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.protagonist, textLake.protagonist.T0010);
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talking, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, textLake.pinkCat.T0011);
            await ƒS.update();
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.hardCry, ƒS.positionPercent(50, 75));
            await ƒS.update();
            await ƒS.Speech.tell(characters.protagonist, textLake.protagonist.T0011);
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, textLake.pinkCat.T0012);

            let JudgeStatement = {
                agree: "Agree with statement",
                disagree: "Disagree with statement"
            }
            let JudgeStatementRequest = await ƒS.Menu.getInput(JudgeStatement, "choicesCSSClass")

            switch (JudgeStatementRequest) {
                case JudgeStatement.agree:
                    dataForSave.catScore += 2;
                    await ƒS.update();
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.protagonist, textLake.protagonist.TD11);
                    await ƒS.update();
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.thumbsUp, ƒS.positionPercent(80, 95));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.pinkCat, textLake.pinkCat.TD11);
                    break;

                case JudgeStatement.disagree:
                    dataForSave.catScore -= 5;
                    await ƒS.update();
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(80, 95));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.protagonist, textLake.protagonist.TD21);
                    await ƒS.update();
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(80, 95));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.pinkCat, textLake.pinkCat.TD21);
                    break;
            }

            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95));
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.normal, ƒS.positionPercent(50, 75));
            await ƒS.update();
            await ƒS.Speech.tell(characters.protagonist, textLake.protagonist.T0012);
            await ƒS.Speech.tell(characters.pinkCat, textLake.pinkCat.T0013);
            await ƒS.update();
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.sideEye, ƒS.positionPercent(50, 75));
            await ƒS.update();
            await ƒS.Speech.tell(characters.protagonist, textLake.protagonist.T0013);
            await ƒS.Speech.tell(characters.pinkCat, textLake.pinkCat.T0014);
            await ƒS.update();
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.cry, ƒS.positionPercent(50, 75));
            await ƒS.update();
            await ƒS.Speech.tell(characters.protagonist, textLake.protagonist.T0014);
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, textLake.pinkCat.T0015);
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.update();
            ƒS.Speech.hide();
            await new Promise(resolve => setTimeout(resolve, 2000));
            await ƒS.Sound.play(sound.dive, 1, false);
            await ƒS.Character.hide(characters.lakeCreature)
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.hideSad, ƒS.positionPercent(50, 75));
            await ƒS.update();
            await new Promise(resolve => setTimeout(resolve, 2000));
            await ƒS.Character.hide(characters.lakeCreature)
            await ƒS.update(2);
        }


        let nextLocation = {
            swamp: "Swamp",
            forest: "Forest"
        }
        if (dataForSave.visitedForest == true) {
            delete nextLocation.forest
        }

        ƒS.Sound.fade(sound.LakeWaves, 0, 2);
        ƒS.Sound.fade(sound.lakeSound, 0, 2);
        let nextLocationRequest = await ƒS.Menu.getInput(nextLocation, "choicesCSSClass")
        switch (nextLocationRequest) {
            case nextLocation.forest:
                dataForSave.currentPath = "LakeToForest";
                return "Map Scene"
            case nextLocation.swamp:
                dataForSave.currentPath = "LakeToSwamp";
                return "Map Scene"
        }

    }
}