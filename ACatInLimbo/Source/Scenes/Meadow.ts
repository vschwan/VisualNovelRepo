namespace ACatInLimbo {

    export async function Meadow(): ƒS.SceneReturn {
        console.log("Scene starting: Meadow");

        //Intro
        ƒS.Speech.hide(); 
        ƒS.Sound.play(sound.meadowSound, 0.7, true);
        await ƒS.Location.show(locations.meadow);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.awakening1, ƒS.positionPercent(65, 85));
        await ƒS.update(transition.swirlStuff.duration, transition.swirlStuff.alpha, transition.swirlStuff.edge);
        await new Promise(resolve => setTimeout(resolve, 3000));
        await ƒS.Speech.tell(characters.protagonist, "Where am I?");
        await ƒS.Speech.tell(characters.protagonist, "WHO am I?");
        await ƒS.update();

        //get name
        dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        await ƒS.update();
        characters.protagonist.name = dataForSave.nameProtagonist;
        console.log(dataForSave.nameProtagonist);

        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, "Ah, I remember, it's " + dataForSave.nameProtagonist + "!");
        await ƒS.Speech.tell(characters.protagonist, "What is that strange statue doing over there....?");
        await ƒS.update();

        let firstAction = {
            awakeCat: "Touch the Stone-Cat",
            lookAround: "First, take a look around"
        };

        let firstActionRequest = await ƒS.Menu.getInput(firstAction, "choicesCSSClass");
        switch (firstActionRequest) {
            case firstAction.lookAround:
                //bissl doof hier, weil die Katze ja noch nicht erwacht ist, aber togglen von item usability geht nicht (zumindest bekomm ichs nicht hin)
                console.log("look around");
                ƒS.Inventory.add(items.Spider);
                ƒS.Inventory.add(items.Spider);
                ƒS.Inventory.add(items.Spider);
                ƒS.Text.print("Three spiders have been added to your Inventory");
                await ƒS.Speech.tell(characters.protagonist, "Got some spiders, great.");
                await ƒS.update();
                await ƒS.Speech.tell(characters.protagonist, "Well, this seems like a lovely meadow, but what the fuck am I doing here? I feel kind of...ghosty. Like I don't have a lot of substance.");
                await ƒS.Speech.tell(characters.protagonist, "Why does this cat look so real? What if I touch i...");
                await ƒS.update();

            case firstAction.awakeCat:
                console.log("cat awakes");
                ƒS.Speech.hide();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.awakening2, ƒS.positionPercent(65, 85));
                await ƒS.update(1);
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.awakening3, ƒS.positionPercent(65, 85));
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.protagonist, "Wtf, it's alive!");
                await ƒS.update();
                await ƒS.Speech.hide();
                await ƒS.update();
                await ƒS.Sound.play(sound.yawn, 1, false);
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.awakening4, ƒS.positionPercent(65, 85));
                await ƒS.update(1)
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.awakening5, ƒS.positionPercent(65, 85));
                await ƒS.Sound.fade(sound.yawn, 0, 5);
                await ƒS.update(1);
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.awakening6, ƒS.positionPercent(65, 85));
                await ƒS.update(1);
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.awakening7, ƒS.positionPercent(65, 85));
                await ƒS.update(1);
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.awakening8, ƒS.positionPercent(65, 85));
                await ƒS.update(1);
                break;
        }

        //Cat stretch
        await ƒS.Speech.tell(characters.protagonist, "What now?");
        await ƒS.update();
        await ƒS.Speech.hide();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.stretchingSmall, ƒS.positionPercent(70, 85));
        await ƒS.Character.show(characters.stonePedestal, characters.stonePedestal.pose.stonePedestal, ƒS.positionPercent(65, 85));
        await ƒS.update(1);
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Sound.play(sound.reowr, 1, false);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalSmall, ƒS.positionPercent(75, 85));
        await ƒS.update(1);

        //Choices for how to act towards Cat
        let approachCat = {
            approachCarefully: "Carefully approach cat",
            walk: "Walk towards cat",
            Wait: "Wait"
        };

        //wait for input
        let approachCatRequest = await ƒS.Menu.getInput(approachCat, "choicesCSSClass");
        //Show MeterBar 
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForCat").style.display = "";

        switch (approachCatRequest) {
            case approachCat.approachCarefully:
                console.log("Carefully approach cat");
                dataForSave.catScore += 5;
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.curiousSmall, ƒS.positionPercent(75, 85));
                await ƒS.Sound.play(sound.purrMeow, 1, false);
                await ƒS.update();
                ƒS.Text.print("Hint: You just got some affection points. <p>The Lovemeter in the right corner shows how much the cat likes you.</p>Try to give it some food (if you have some) out of your Inventory to please it.<p>If the cat doesn't like you anymore, it's gonna leave.</p>");
                await ƒS.Speech.tell(characters.pinkCat, "Not too fast, that's right. You seem to know your stuff I guess.");
                await ƒS.update();
                break;

            case approachCat.walk:
                console.log("Walk towards cat");
                dataForSave.catScore -= 10;
             
                //check for catScore and hndl badEnding LostCat
                if (dataForSave.catScore >= 0) {
                    console.log("cat is not running away");
                  } else {
                    ƒS.Sound.fade(sound.meadowSound, 0, 10);
                    await ƒS.Progress.save();
                    console.log("cat should run away");
                    return "BadEnding LostCat Scene";  //not possible yet to lose cat
                  }

                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Sound.play(sound.growling, 1, false);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.scaredSmall, ƒS.positionPercent(75, 85));
                await ƒS.update();
                ƒS.Text.print("Hint: You just lost some affection points. <p>The Lovemeter in the right corner shows how much the cat likes you.</p><p>Try to give it some food (if you have some) out of your Inventory to please it.</p><p>If the cat doesn't like you anymore, it's gonna leave.</p>");
                await ƒS.Speech.tell(characters.pinkCat, "Back off! I'm warning you. My claws are sharp as ever.");
                await ƒS.Speech.tell(characters.protagonist, "Ouuuh, I'm sorry, I'm sorry, calm down!");
                await ƒS.Speech.tell(characters.pinkCat, "You act like someone who has never ever even met a cat!");
                await ƒS.Speech.tell(characters.protagonist, "Well, you're certainly not a normal cat.");
                await ƒS.Speech.tell(characters.pinkCat, "Ugh, shut up. Do I have to expect you to behave like this all the time? Cause if that's the case I think I'm just gonna scooch right back on my stone over there.");
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalSmall, ƒS.positionPercent(75, 85));
                await ƒS.update();
                await ƒS.Speech.tell(characters.protagonist, "Alright, I'm gonna behave from now on!");
                await ƒS.Speech.tell(characters.pinkCat, "...I hope so.");
                await ƒS.update();
                break;

            case approachCat.Wait:
                console.log("Wait");
                //choices for how to attract cat
                let attractCat = {
                    kneelDown: "Kneel down",
                    reachOut: "Reach Out",
                    makeSounds: "Make ksksks",
                };

                //booleans to be able to delete buttons/choices
                let pickedKneelDown: boolean;
                let pickedReachOut: boolean;
                let pickedMakeKsKsKs: boolean;
                let pickedChoice: boolean;

                do {
                    if (pickedKneelDown == true) {
                        delete attractCat.kneelDown;
                        console.log("delete kneel down");
                    }
                    if (pickedMakeKsKsKs == true) {
                        delete attractCat.makeSounds;
                        console.log("delete make sounds");
                    }

                    if (pickedReachOut == true) {
                        delete attractCat.reachOut;
                        console.log("delete reach out");
                    }

                    let attractCatRequest;
                    if (pickedKneelDown == true && pickedMakeKsKsKs == true && pickedReachOut == true) {
                        pickedChoice = true;
                    }
                    else {
                        attractCatRequest = await ƒS.Menu.getInput(attractCat, "choicesCSSClass");
                    }

                    switch (attractCatRequest) {
                        case attractCat.kneelDown:
                            console.log("Kneel down");
                            dataForSave.catScore += 5;
                            await ƒS.Character.hide(characters.pinkCat);
                            await ƒS.Character.hide(characters.stonePedestal);
                            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.curiousSmall, ƒS.positionPercent(75, 85));
                            await ƒS.Character.show(characters.stonePedestal, characters.stonePedestal.pose.stonePedestal, ƒS.positionPercent(65, 85));
                            await ƒS.Sound.play(sound.purrMeow, 1, false);
                            await ƒS.update();
                            pickedKneelDown = true;
                            break;
                        case attractCat.makeSounds:
                            console.log("make ksksks");
                            dataForSave.catScore += 5;
                            await ƒS.Character.hide(characters.pinkCat);
                            await ƒS.Character.hide(characters.stonePedestal);
                            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.lovelySmall, ƒS.positionPercent(75, 85));
                            await ƒS.Character.show(characters.stonePedestal, characters.stonePedestal.pose.stonePedestal, ƒS.positionPercent(65, 85));
                            await ƒS.Sound.play(sound.purrMeow, 1, false);
                            await ƒS.update();
                            pickedMakeKsKsKs = true;
                            break;
                        case attractCat.reachOut:
                            console.log("reach out");
                            dataForSave.catScore += 5;
                            await ƒS.Character.hide(characters.pinkCat);
                            await ƒS.Character.hide(characters.stonePedestal);
                            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.layingOnBackSmall, ƒS.positionPercent(75, 85));
                            await ƒS.Character.show(characters.stonePedestal, characters.stonePedestal.pose.stonePedestal, ƒS.positionPercent(65, 85));
                            await ƒS.Sound.play(sound.purrMeow, 1, false);
                            await ƒS.update();
                            pickedReachOut = true;
                            break;
                    }
                } while (!pickedChoice);

                await ƒS.update(2);
                console.log("cat is happy and you got +20 in lovebar");
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.hide(characters.stonePedestal);
                await ƒS.Sound.play(sound.purring, 1, false);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.lovelySmall, ƒS.positionPercent(75, 85));
                await ƒS.Character.show(characters.stonePedestal, characters.stonePedestal.pose.stonePedestal, ƒS.positionPercent(65, 85));
                await ƒS.update();
                ƒS.Text.print("Hint: You just got a lot of affection points. <p>The Lovemeter in the right corner shows how much the cat likes you.</p>Try to give it some food (if you have some) out of your Inventory to please it.<p>If the cat doesn't like you anymore, it's gonna leave.</p>");
                await ƒS.Speech.tell(characters.pinkCat, "Ouuuh, you seem nice!");
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.lovely, ƒS.positionPercent(83, 99));
                await ƒS.update();
                await ƒS.Sound.fade(sound.purring, 0, 2);
                break;

        }

        //First conversation
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal2, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "Do you know where I am? Do you know about this place?");
        await ƒS.Speech.tell(characters.protagonist, "I'm " + dataForSave.nameProtagonist + " by the way.");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "A warm Hello to you too, good sir. Looks like you're pretty dead, " + dataForSave.nameProtagonist + "!");
        await ƒS.Speech.tell(characters.protagonist, "What?!");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.cleaningPaw, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "No need to panic. You're in Limbo.");
        await ƒS.Speech.tell(characters.protagonist, "Limbo? Like the Limbo in Christianity?");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.thoughtful2, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "Uuuuuh, I don't know anything about that Christianity stuff. This is neither a good nor a bad place though. It's an in-between.");
        await ƒS.Speech.tell(characters.protagonist, "...?");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.derpy2, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "Well, you're dead, but your soul didn't get to afterlife.");
        await ƒS.Speech.tell(characters.protagonist, "So... there is a way out? Can I be with my family if I get out?");
        await ƒS.Speech.tell(characters.pinkCat, "Why do you care? You can't remember them.");
        await ƒS.Speech.tell(characters.pinkCat, "No, honestly I don't have a clue about what happens if you get through, but good thing is, you don't have to suffer for eternity.");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.curious, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "Does sound good, ey?");
        await ƒS.Speech.tell(characters.protagonist, "You're right, I can't remember anything.");
        await ƒS.Speech.tell(characters.protagonist, "From what you're telling me, this place doesn't sound like one I would want to stay in.");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.derpy1, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "Okay, you're right, I forgot, it's only a neutral place for me personally.");
        await ƒS.Speech.tell(characters.protagonist, "Why is that?");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.proud, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "That's cause I'm a guide. I can give you a tour if you want?");
        await ƒS.Speech.tell(characters.protagonist, "A tour to...where exactly?");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "To the gate to afterlife, you dummy! Want to get out of here and avoid eternal suffering or do you want to stay?");
        await ƒS.Speech.tell(characters.protagonist, "Oh, good God, yeah, let's go!");
        await ƒS.update();
        await ƒS.Character.hideAll();
        await ƒS.update();

        //pick next Location
        let nextLocation = {
            forest: "Forest",
            lake: "Lake"
        }

        ƒS.Sound.fade(sound.meadowSound, 0, 2);
        let nextLocationRequest = await ƒS.Menu.getInput(nextLocation, "choicesCSSClass");

        switch (nextLocationRequest) {
            case nextLocation.forest:
                dataForSave.currentPath = "MeadowToForest";
                return "Map Scene"
                // return "Forest Scene"
                break;

            case nextLocation.lake:
                dataForSave.currentPath = "MeadowToLake";
                return "Map Scene"
                //return "Lake Scene"
                break;
        }

    }
}