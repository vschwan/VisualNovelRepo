namespace ACatInLimbo {

    export async function Forest(): ƒS.SceneReturn {
        console.log("Scene starting: Forest");

        dataForSave.visitedForest = true;

        let textForest = {
            protagonist: {
                T0001: "It's kinda eery here. Do we HAVE to be here?",
                T0002: "...I don't like this place.",
                T0003: "Uaaaah, fuck fuck fuck fuck, LET'S RUN!!!!",
                T0004: "Well, it's working?!",
                T0005: "...",

                T0006: "Ew, I'm nothing like that thing, it's fucking digusting.",

                T0007: "Really? That poor thing!",
                T0008: "What's wrong with it?",
                T0009: "Wait, so if I'm staying I'm gonna turn into this thing?",
                T0010: "...Great."
            },
            pinkCat: {
                T0001: "We don't HAVE to, but I want to visit an old friend. I want to see what he's been up to you know?",
                T0002: "That's cause you're a baby.",
                T0003: "!Oh, look! I think I just saw him!",
                T0004: "Come out you chicken shit!",
                T0005: "Wait...you're not going to attack, are you?",
                T0006: "I knew it! You're my old chicken shit friend!",
                T0007: "He doesn't do anything, he's just trying to be scary.",
                T0008: "You should get along well actually, you both seem to stem from the chicken family.",
                T0009: "Ugh, okay. Listen, it's just a poor soul like you, that got stuck here.",

                T0010: "What in Death's name is wrong with you?",
                T0011: "Wow, great, now it's gone. It heard you!",
                T0012: "You're kind of an idiot, you know? I'm gonna tell you right now, if you piss me off to much, I'm just leaving you here.",

                T0013: "Let's move on.",

                T0014: "See, we're nice! Do you remember me?",
                T0015: "Ui, that's gonna be difficult.",
                T0016: "It got lost here. Like you, if we don't stay on our path.",
                T0017: "Not exactly, but yeah. You're probably not gonna turn into a spider I think. Everyone's different.",
                T0018: "Yeah. So, buddy have you got any treats for me maybe?",
                T0019: "OMD, that was almost a word!",
                T0020: "Thank you my friend. Take it easy okay?"
            },

            spiderCreature: {
                T0001: "grmmmllb",
                T0002: "brbbrlll yaaaaa",
                T0003: "lmmmrb"
            }

        }


        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        // document.getElementById("scoreForCat").style.display = "";

        ƒS.Speech.hide(); //Sprachfenster ausblenden
        ƒS.Sound.play(sound.scaryForest, 2, true);
        await ƒS.Location.show(locations.forest);
        await ƒS.update(transition.circleSwirl.duration, transition.circleSwirl.alpha, transition.circleSwirl.edge);
        await ƒS.update(2);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.walking, ƒS.positionPercent(80, 95));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, textForest.protagonist.T0001);
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.cleaningPaw, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, textForest.pinkCat.T0001);
        await ƒS.Speech.tell(characters.protagonist, textForest.protagonist.T0002);
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, textForest.pinkCat.T0002);
        await ƒS.update();
        //creature can be seen
        await ƒS.Character.animate(characters.spiderCreature, characters.spiderCreature.pose.normal, spiderAnimationHide())
        await ƒS.Sound.play(sound.horrorDrum1, 1);
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, textForest.pinkCat.T0003);
        await ƒS.Speech.tell(characters.pinkCat, textForest.pinkCat.T0004);
        await ƒS.update();
        //Creature appears
        await ƒS.Character.animate(characters.spiderCreature, characters.spiderCreature.pose.normal, spiderAnimationAppear())
        await ƒS.update(2);
        await ƒS.Character.hideAll();
        await ƒS.Sound.play(sound.horrorDrum2, 1);
        //creature attacks
        await ƒS.Character.show(characters.spiderCreature, characters.spiderCreature.pose.attackBig, ƒS.positionPercent(55, 55));
        await ƒS.Sound.play(sound.cathissing, 1);
        await ƒS.Character.animate(characters.pinkCat, characters.pinkCat.pose.scared, ScaredCatAnimation());
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, textForest.protagonist.T0003);
        await ƒS.update()

        //fight or flight to lake or swamp
        let FightFlight = {
            fight: "Fight",
            flight: "Flight"
        }
        let fightFlightRequest = await ƒS.Menu.getInput(FightFlight, "choicesCSSClass")

        switch (fightFlightRequest) {
            case FightFlight.flight:
                ƒS.Sound.fade(sound.scaryForest, 0, 2);
                let nextLocation = {
                    swamp: "Swamp",
                    lake: "Lake"
                }
                if (dataForSave.visitedLake == true) {
                    delete nextLocation.lake
                }

                let nextLocationRequest = await ƒS.Menu.getInput(nextLocation, "choicesCSSClass")
                switch (nextLocationRequest) {
                    case nextLocation.lake:
                        return "Lake Scene"
                        break;

                    case nextLocation.swamp:
                        return "Swamp Scene"
                        break;
                }
                break;

            case FightFlight.fight:
                await ƒS.Character.hideAll();
                await ƒS.Character.show(characters.spiderCreature, characters.spiderCreature.pose.attack, ƒS.positionPercent(50, 50));
                await ƒS.update();
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.fromBehindLookingAway, ƒS.positionPercent(80, 95));
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.pinkCat, textForest.pinkCat.T0005, true);
                await ƒS.update();
                await ƒS.Character.hide(characters.spiderCreature);
                await ƒS.Character.show(characters.spiderCreature, characters.spiderCreature.pose.normal, ƒS.positionPercent(50, 50));
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, textForest.pinkCat.T0006);
                await ƒS.update();
                await ƒS.Character.hideAll();
                await ƒS.Character.show(characters.spiderCreature, characters.spiderCreature.pose.normal, ƒS.positionPercent(50, 50));
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talking, ƒS.positionPercent(80, 95));
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, textForest.pinkCat.T0007);
                await ƒS.Speech.tell(characters.protagonist, textForest.protagonist.T0004);
                await ƒS.Speech.tell(characters.pinkCat, textForest.pinkCat.T0008);
                await ƒS.Speech.tell(characters.protagonist, textForest.protagonist.T0005);
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95));
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, textForest.pinkCat.T0009);
                await ƒS.update();

                let HowToTreatSpider = {
                    berate: "berate spider creature",
                    console: "console spider creature"
                }
                let HowToTreatSpiderRequest = await ƒS.Menu.getInput(HowToTreatSpider, "choicesCSSClass")

                switch (HowToTreatSpiderRequest) {
                    case HowToTreatSpider.berate:
                        await ƒS.Character.hideAll();
                        await ƒS.Character.show(characters.spiderCreature, characters.spiderCreature.pose.sad, ƒS.positionPercent(50, 50));
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(80, 95))
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.protagonist, textForest.protagonist.T0006);
                        await ƒS.update();
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(80, 95));
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.pinkCat, textForest.pinkCat.T0010);
                        await ƒS.update();
                        await ƒS.Character.hideAll();
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(80, 95));
                        await ƒS.Character.animate(characters.spiderCreature, characters.spiderCreature.pose.sad, spiderAnimationDisappear());
                        await ƒS.update();
                        await ƒS.Character.hide(characters.pinkCat);
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(80, 95));
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.pinkCat, textForest.pinkCat.T0011);
                        dataForSave.catScore -= 5;
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.pinkCat, textForest.pinkCat.T0012);
                        await ƒS.update();
                        break;

                    case HowToTreatSpider.console:
                        await ƒS.Speech.tell(characters.protagonist, textForest.protagonist.T0007);
                        await ƒS.update();
                        await ƒS.Character.hideAll();
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(80, 95));
                        await ƒS.Character.show(characters.spiderCreature, characters.spiderCreature.pose.smile, ƒS.positionPercent(50, 50));
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.pinkCat, textForest.pinkCat.T0014);
                        await ƒS.Speech.tell(characters.spiderCreature, textForest.spiderCreature.T0001);
                        await ƒS.Speech.tell(characters.pinkCat, textForest.pinkCat.T0015);
                        await ƒS.Speech.tell(characters.protagonist, textForest.protagonist.T0008);
                        await ƒS.Character.hideAll();
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95));
                        await ƒS.Character.show(characters.spiderCreature, characters.spiderCreature.pose.sad, ƒS.positionPercent(50, 50));
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.pinkCat, textForest.pinkCat.T0016);
                        await ƒS.Speech.tell(characters.protagonist, textForest.protagonist.T0009);
                        await ƒS.Speech.tell(characters.pinkCat, textForest.pinkCat.T0017);
                        await ƒS.Speech.tell(characters.protagonist, textForest.protagonist.T0010);
                        await ƒS.update();
                        await ƒS.Character.hideAll();
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(80, 95));
                        await ƒS.Character.show(characters.spiderCreature, characters.spiderCreature.pose.smile, ƒS.positionPercent(50, 50));
                        await ƒS.update();
                        await ƒS.Speech.tell(characters.pinkCat, textForest.pinkCat.T0018);
                        await ƒS.Speech.tell(characters.spiderCreature, textForest.spiderCreature.T0002);
                        await ƒS.Speech.tell(characters.pinkCat, textForest.pinkCat.T0019);
                        await ƒS.Speech.tell(characters.pinkCat, textForest.pinkCat.T0020);
                        await ƒS.Speech.tell(characters.spiderCreature, textForest.spiderCreature.T0003);
                        ƒS.Inventory.add(items.Fly);
                        ƒS.Inventory.add(items.Fly);
                        ƒS.Inventory.add(items.Fly);
                        ƒS.Inventory.add(items.Fly);
                        ƒS.Inventory.add(items.Fly);
                        ƒS.Text.print("Five flies added");
                        //add flies to Inventory
                        await ƒS.update();
                        await ƒS.Character.hideAll();
                        await ƒS.Character.animate(characters.spiderCreature, characters.spiderCreature.pose.smile, spiderAnimationDisappear());
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.stretching, ƒS.positionPercent(80, 95));
                        await ƒS.update();
                        await ƒS.Character.hide(characters.pinkCat);
                        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95));
                        //
                        await ƒS.update();
                        break;
                }

        }

        await ƒS.Speech.tell(characters.pinkCat, textForest.pinkCat.T0013);
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
                return "Lake Scene"
            case nextLocation.swamp:
                return "Swamp Scene"
        }


    }
}