namespace ACatInLimbo {

    export async function Forest(): ƒS.SceneReturn {
        console.log("Scene starting: Forest");
        dataForSave.visitedForest = true;

        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForCat").style.display = "";

        ƒS.Speech.hide(); //Sprachfenster ausblenden
        ƒS.Sound.play(sound.scaryForest, 2, true);
        await ƒS.Location.show(locations.forest);
        await ƒS.update(transition.circleSwirl.duration, transition.circleSwirl.alpha, transition.circleSwirl.edge);

        await ƒS.update(2);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.walking, ƒS.positionPercent(80, 95));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, "It's kinda eery here. Do we HAVE to be here?");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.cleaningPaw, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "We don't HAVE to, but I want to visit an old friend. I want to see what he's been up to, you know?");
        await ƒS.Speech.tell(characters.protagonist, "...I don't like this place.");
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "That's cause you're a baby.");
        await ƒS.update();
        //creature can be seen
        await ƒS.Character.animate(characters.spiderCreature, characters.spiderCreature.pose.normal, spiderAnimationHide());
        await ƒS.Sound.play(sound.horrorDrum1, 1);
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "!Oh, look! I think I just saw him!");
        await ƒS.Speech.tell(characters.pinkCat, "Come out you chicken shit!");
        await ƒS.update();
        //Creature appears
        await ƒS.Character.animate(characters.spiderCreature, characters.spiderCreature.pose.normal, spiderAnimationAppear());
        await ƒS.update(2);
        await ƒS.Character.hideAll();
        await ƒS.Sound.play(sound.horrorDrum2, 1);
        //creature attacks
        await ƒS.Character.show(characters.spiderCreature, characters.spiderCreature.pose.attackBig, ƒS.positionPercent(55, 55));
        await ƒS.Sound.play(sound.cathissing, 1);
        await ƒS.Character.animate(characters.pinkCat, characters.pinkCat.pose.scared, ScaredCatAnimation());
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "Uaaaah, fuck fuck fuck fuck, LET'S RUN!!!!");
        await ƒS.update();

        //fight in foroest or flight to lake/swamp
        let fightFlight = {
            fight: "Fight",
            flight: "Flight"
        }
        let fightFlightRequest = await ƒS.Menu.getInput(fightFlight, "choicesCSSClass")

        switch (fightFlightRequest) {
            //flight to lake or swamp
            case fightFlight.flight:
                await ƒS.Character.hide(characters.spiderCreature);
                await ƒS.update();
                let nextLocation = {
                    swamp: "Swamp",
                    lake: "Lake"
                }
                //delete lake option if already visited
                if (dataForSave.visitedLake == true) {
                    delete nextLocation.lake
                }

                ƒS.Sound.fade(sound.scaryForest, 0, 2);
                let nextLocationRequest = await ƒS.Menu.getInput(nextLocation, "choicesCSSClass")
                switch (nextLocationRequest) {
                    case nextLocation.lake:
                        dataForSave.currentPath = "ForestToLake";
                        return "Map Scene"
                        break;

                    case nextLocation.swamp:

                        dataForSave.currentPath = "ForestToSwamp";
                        return "Map Scene"
                        break;
                }
                break;

            //fight in forest
            case fightFlight.fight:
                await ƒS.Character.hideAll();
                await ƒS.Character.show(characters.spiderCreature, characters.spiderCreature.pose.attack, ƒS.positionPercent(50, 50));
                await ƒS.update();
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.fromBehindLookingAway, ƒS.positionPercent(80, 95));
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.pinkCat, "Wait...you're not going to attack, are you?", true);
                await ƒS.update();
                await ƒS.Character.hide(characters.spiderCreature);
                await ƒS.Character.show(characters.spiderCreature, characters.spiderCreature.pose.normal, ƒS.positionPercent(50, 50));
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, "I knew it! You're my old chicken shit friend!");
                await ƒS.update();
                await ƒS.Character.hideAll();
                await ƒS.Character.show(characters.spiderCreature, characters.spiderCreature.pose.normal, ƒS.positionPercent(50, 50));
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talking, ƒS.positionPercent(80, 95));
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, "He doesn't do anything, he's just trying to be scary.");
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95));
                await ƒS.update();
                await ƒS.Speech.tell(characters.protagonist, "Well, it's working?!");
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(80, 95));
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, "You should get along well actually, you both seem to stem from the chicken family.");
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95));
                await ƒS.update();
                await ƒS.Speech.tell(characters.protagonist, "...");
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talking, ƒS.positionPercent(80, 95));
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, "Ugh, okay. Listen, it's just a poor soul like you, that got stuck here.");
                await ƒS.update();

                let howToTreatSpider = {
                    insult: "insult spider creature",
                    console: "console spider creature"
                }
                let howToTreatSpiderRequest = await ƒS.Menu.getInput(howToTreatSpider, "choicesCSSClass")

                switch (howToTreatSpiderRequest) {
                    case howToTreatSpider.insult:
                        await ƒS.Character.hideAll();
                        await ƒS.Character.show(characters.spiderCreature, characters.spiderCreature.pose.sad, ƒS.positionPercent(50, 50));
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(80, 95))
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.protagonist, "Ew, I'm nothing like that thing, it's fucking digusting.");
                        await ƒS.update();
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(80, 95));
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.pinkCat, "What in Death's name is wrong with you?");
                        await ƒS.update();
                        await ƒS.Character.hideAll();
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(80, 95));
                        await ƒS.Character.animate(characters.spiderCreature, characters.spiderCreature.pose.sad, spiderAnimationDisappear());
                        await ƒS.update();
                        await ƒS.Character.hide(characters.pinkCat);
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(80, 95));
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.pinkCat, "Wow, great, now it's gone. It heard you!");
                        dataForSave.catScore -= 10;
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.pinkCat, "You're kind of an idiot, you know?");
                        await ƒS.update();

                        //check for catScore and hndl badEnding LostCat
                        if (dataForSave.catScore >= 0) {
                            console.log("cat is not running away");
                        } else {
                            ƒS.Sound.fade(sound.scaryForest, 0, 10);
                            await ƒS.Progress.save();
                            console.log("cat should run away");
                            return "BadEnding LostCat Scene";
                        }

                        break;

                    case howToTreatSpider.console:
                        await ƒS.Speech.tell(characters.protagonist, "Really? That poor thing!");
                        await ƒS.update();
                        await ƒS.Character.hideAll();
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(80, 95));
                        await ƒS.Character.show(characters.spiderCreature, characters.spiderCreature.pose.smile, ƒS.positionPercent(50, 50));
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.pinkCat, "See, we're nice! This is my new companion, " + dataForSave.nameProtagonist + ". Do you remember me?");
                        await ƒS.Speech.tell(characters.spiderCreature, "Grmmmllb");
                        await ƒS.Speech.tell(characters.pinkCat, "Ui, that's gonna be difficult.");
                        await ƒS.Speech.tell(characters.protagonist, "What's wrong with it?");
                        await ƒS.Character.hideAll();
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95));
                        await ƒS.Character.show(characters.spiderCreature, characters.spiderCreature.pose.sad, ƒS.positionPercent(50, 50));
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.pinkCat, "It got lost here. Like you, if we don't stay on our path.");
                        await ƒS.Speech.tell(characters.protagonist, "Wait, so if I'm staying I'm gonna turn into this thing?");
                        await ƒS.Speech.tell(characters.pinkCat, "Not exactly, but yeah. You're probably not gonna turn into a spider, I think. Everyone's different.");
                        await ƒS.Speech.tell(characters.protagonist, "...Great.");
                        await ƒS.update();
                        await ƒS.Character.hideAll();
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(80, 95));
                        await ƒS.Character.show(characters.spiderCreature, characters.spiderCreature.pose.smile, ƒS.positionPercent(50, 50));
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.pinkCat, "Yeah. So, buddy have you got any treats for me maybe?");
                        await ƒS.Speech.tell(characters.spiderCreature, "Brbbrlll yaaaaa");
                        await ƒS.Speech.tell(characters.pinkCat, "OMD, that was almost a word!");
                        await ƒS.Speech.tell(characters.pinkCat, "Thank you, my friend. Take it easy, okay?");
                        await ƒS.Speech.tell(characters.spiderCreature, "Lmmmrb");
                        ƒS.Inventory.add(items.Fly);
                        ƒS.Inventory.add(items.Fly);
                        ƒS.Inventory.add(items.Fly);
                        ƒS.Inventory.add(items.Fly);
                        ƒS.Inventory.add(items.Fly);
                        ƒS.Text.print("Five flies have been added to your Inventory");
                        //add flies to Inventory
                        await ƒS.update();
                        await ƒS.Character.hideAll();
                        await ƒS.Character.animate(characters.spiderCreature, characters.spiderCreature.pose.smile, spiderAnimationDisappear());
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.stretching, ƒS.positionPercent(80, 95));
                        await ƒS.update();
                        await ƒS.Character.hide(characters.pinkCat);
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95));
                        await ƒS.update();
                        break;
                }

        }

        await ƒS.Speech.tell(characters.pinkCat, "Let's move on.");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.update();

        let nextLocation = {
            swamp: "Swamp",
            lake: "Lake"
        }
        if (dataForSave.visitedLake == true) {
            delete nextLocation.lake
        }

        ƒS.Sound.fade(sound.scaryForest, 0, 2);
        let nextLocationRequest = await ƒS.Menu.getInput(nextLocation, "choicesCSSClass")
        switch (nextLocationRequest) {
            case nextLocation.lake:
                dataForSave.currentPath = "ForestToLake";
                return "Map Scene"
            case nextLocation.swamp:
                dataForSave.currentPath = "ForestToSwamp";
                return "Map Scene"
        }


    }
}