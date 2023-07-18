namespace ACatInLimbo {

    export async function Lake(): ƒS.SceneReturn {
        console.log("Scene starting: Lake");
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForCat").style.display = "";

        ƒS.Speech.hide();
        ƒS.Sound.play(sound.LakeWaves, 1, true);
        await ƒS.Location.show(locations.lake);
        await ƒS.update(transition.wet1.duration, transition.wet1.alpha, transition.wet1.edge);

        //second time visiting lake --> lake creature gets it's heart back
        if (dataForSave.visitedLake == true) {
            //set visitedLakeTwice to true to check for boolean in Bay Scene
            dataForSave.visitedLakeTwice = true;
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.hide, ƒS.positionPercent(50, 75));
            await ƒS.update();
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(80, 95));
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.protagonist, "Buddy, we got your heart!");
            await ƒS.update();
            await ƒS.Sound.play(sound.dive, 1, false);
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.smile, ƒS.positionPercent(50, 75));
            await ƒS.update(1);
            ƒS.Inventory.subtract(items.Heart);
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.smileHeart, ƒS.positionPercent(50, 75));
            await ƒS.update(2);
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
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.hide, ƒS.positionPercent(50, 75));
            await ƒS.update();
            await ƒS.Speech.tell(characters.protagonist, "Mission accomplished. Alright. Bye Laky!");
            await ƒS.update();
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.hide(characters.pinkCat);

        } else {//first time visiting lake
            dataForSave.visitedLake = true;
            await ƒS.update(1);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.fromBehindLookingBack, ƒS.positionPercent(80, 95));
            await ƒS.update(1);
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.cleaningAss, ƒS.positionPercent(80, 95));
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.protagonist, "Uh, what a beautiful lake!");
            await ƒS.Speech.tell(characters.pinkCat, "You never know, " + dataForSave.nameProtagonist + ".");
            await ƒS.Speech.tell(characters.protagonist, "Oh, come on...");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.hide, ƒS.positionPercent(50, 75));
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.cleaningPaw, ƒS.positionPercent(80, 95));
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.protagonist, "Ehm, okay, you were right.");
            await ƒS.Speech.tell(characters.pinkCat, "What?");
            await ƒS.Speech.tell(characters.protagonist, "We're not alone.");
            await ƒS.update();
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.bait, ƒS.positionPercent(50, 75));
            await ƒS.update(1);
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.crouchedLookingAway, ƒS.positionPercent(80, 95));
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.pinkCat, "Ah. Hi!")
            await ƒS.Speech.tell(characters.pinkCat, "Buddy, that's the worst bait I've ever seen. Maybe you should just, you know, first, show the fish, and then, if somebody is trying to get it, you could show yourself?");
            await ƒS.update();
            await ƒS.Sound.play(sound.dive, 1, false);
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.attack, ƒS.positionPercent(50, 75));
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "Yeah, like that!");
            await ƒS.update();
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.normal, ƒS.positionPercent(50, 75));
            await ƒS.update();
            await ƒS.Speech.tell(characters.protagonist, "Whispering: <i>He seems a bit simple.</i>");
            await ƒS.Speech.tell(characters.pinkCat, "Down here, all creatures are a bit dumb.");
            await ƒS.update();
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.sideEye, ƒS.positionPercent(50, 75));
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95));
            await ƒS.Speech.tell(characters.protagonist, "Down here?");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talking, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "Those that don't make it far into the mountains turn into idiots.");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.protagonist, "Oh.");
            await ƒS.Speech.tell(characters.protagonist, "Whispering: <i>What's that hole in his body?</i>");
            await ƒS.update();
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.normal, ƒS.positionPercent(50, 75));
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.fromBehindLookingAway, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "Good Question. Ey, why's that hole in your body?");
            await ƒS.update();
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.sideEye, ƒS.positionPercent(50, 75));
            await ƒS.update(1);
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.cry, ƒS.positionPercent(50, 75));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "Good Death.");
            await ƒS.Speech.tell(characters.protagonist, "You mean 'Good God', right?");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "No. We're in Limbo. God has no place here. I don't even know him.");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(80, 95));
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.heartEyes, ƒS.positionPercent(50, 75));
            await ƒS.update(1);
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.heartEyesBroken, ƒS.positionPercent(50, 75));
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.protagonist, "Is it Lost Love maybe?");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talking, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "Ooooh, of course, now I get it! It gave his heart to someone!");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal2, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.hardCry, ƒS.positionPercent(50, 75));
            await ƒS.update();
            await ƒS.Speech.tell(characters.protagonist, "Omg, that's kind of sweet!");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "Sweet? " + dataForSave.nameProtagonist + ", you're delusional. You should never give your heart away. It belongs to you and you only. First person you should love is yourself.");

            let judgeStatement = {
                agree: "Agree with statement",
                disagree: "Disagree with statement"
            }
            let judgeStatementRequest = await ƒS.Menu.getInput(judgeStatement, "choicesCSSClass")

            switch (judgeStatementRequest) {
                case judgeStatement.agree:
                    dataForSave.catScore += 5;
                    await ƒS.update();
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.protagonist, "Wow, very wise.");
                    await ƒS.update();
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.thumbsUp, ƒS.positionPercent(80, 95));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.pinkCat, "Call me Sokracat.");
                    break;

                case judgeStatement.disagree:
                    dataForSave.catScore -= 5;
                    await ƒS.update();
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(80, 95));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.protagonist, "Nah, I think it's the ultimate goal to be able to fall in love and give your all to someone.");
                    await ƒS.update();
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(80, 95));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.pinkCat, "How unprogressive and disappointing…");
                    break;
            }

            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95));
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.normal, ƒS.positionPercent(50, 75));
            await ƒS.update();
            await ƒS.Speech.tell(characters.protagonist, "Hey, maybe we can get it's heart back!");
            await ƒS.Speech.tell(characters.pinkCat, "Maybe…if we can find it on our way…But then we have to go back again…");
            await ƒS.update();
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.sideEye, ƒS.positionPercent(50, 75));
            await ƒS.update();
            await ƒS.Speech.tell(characters.protagonist, "It should be worth it, right?");
            await ƒS.Speech.tell(characters.pinkCat, "…Ok. If we can reduce some of this creatures suffering I guess it can be worth it.");
            await ƒS.update();
            await ƒS.Character.hide(characters.lakeCreature);
            await ƒS.Character.show(characters.lakeCreature, characters.lakeCreature.pose.cry, ƒS.positionPercent(50, 75));
            await ƒS.update();
            await ƒS.Speech.tell(characters.protagonist, "Then let's not waste time and move on!");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "Jeez, alright, you goody-goody.");
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