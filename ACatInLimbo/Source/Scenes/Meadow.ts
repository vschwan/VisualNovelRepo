namespace ACatInLimbo {

    export async function Meadow(): ƒS.SceneReturn {
        console.log("Scene starting: Meadow");

        let textAwakening = {
            protagonist: {
                T0001: "Where am I?",
                T0002: "WHO am I?",
                T0003: "Ah, I remember, it's ",
                T0004: "What is that strange statue doing over there....",
                T0005: "Well, this seems like a lovely meadow, but what the fuck am I doing here? I feel kind of...ghosty. Like I don't have a lot of substance.",
                T0006: "And a cat? Really?",
                T0007: "Why does it look so real? Like it's not supposed to be of stone. Maybe if I touch i...",
                T0008: "Wtf, it's alive!",
                T0009: "What now?",
                T0010: "Ouuuh, I'm sorry, I'm sorry, calm down!",
                T0011: "Well, you're certainly not a normal cat.",
                T0012: "Alright, I'm gonna behave from now on!"
            },

            pinkCat: {
                T0001: "Back off! I'm warning you. My claws are sharp as ever.",
                T0002: "You act like someone who has never ever even met a cat!",
                T0003: "Ugh, shut up. Do I have to expect you to behave like this all the time? Cause if that's the case I think I'm just gonna scooch right back on my stone over there.",
                T0004: "...I hope so.",
                T0005: "Not too fast, that's right. You seem to know your stuff I guess.",
                T0006: "Ouuuh, you seem nice!"
            }
        }

        let textIntro = {
            protagonist: {
                T0001: "Okay, so what is this and where am I? Do you know about this place?",
                T0002: "What?!",
                T0003: "Limbo? Like the Limbo in Christianity?",
                T0004: "...?",
                T0005: "So... there is a way out? Can I be with my family if I get out?",
                T0006: "You're right, I can't remember anything. But this doesn't really sound like a place that's not bad.",
                T0007: "Why is that?",
                T0008: "A tour to...where exactly?",
                T0009: "Oh, good God, yeah, let's go!"
            },

            pinkCat: {
                T0001: "A warm Hello to you too, good sir. You're dead!",
                T0002: "No need to panic. You're in Limbo.",
                T0003: "Uuuuuh, I don't know anything about Christianity stuff. Though this is neither a good nor a bad place. It's an in-between.",
                T0004: "Well, you're dead, but your soul didn't get to afterlife.",
                T0005: "Why do you care? You can't remember them. No, honestly I don't have a clue about what happens if you get through, but good thing is, you don't have to suffer for eternity.",
                T0006: "Does sound good, ey?",
                T0007: "Okay, you're right, I forgot, it's only a neutral place for me personally.",
                T0008: "That's cause I'm a guide. I can give you a tour if you want?",
                T0009: "To the gate to afterlife you dummy! Want to get out of here and avoid eternal suffering or do you want to stay?"
            }
        }
        //Hide MeterBar
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForCat").style.display = "none";
        //  buttonFunctionalities("Open");

        //Intro
        ƒS.Speech.hide(); //Sprachfenster ausblenden
        ƒS.Sound.play(sound.meadowSound, 1, true);
        await ƒS.Location.show(locations.meadow);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.awakening1, ƒS.positionPercent(65, 85));
        await ƒS.update(transition.swirlStuff.duration, transition.swirlStuff.alpha, transition.swirlStuff.edge);
        // ƒS.update();
        //  await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.front, ƒS.positionPercent(10, 95));
        await ƒS.update(2);
        await ƒS.Speech.tell(characters.protagonist, textAwakening.protagonist.T0001);
        await ƒS.Speech.tell(characters.protagonist, textAwakening.protagonist.T0002);
        await ƒS.update(1);
        //  await ƒS.Character.hide(characters.protagonist);
        //  await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.thinking, ƒS.positionPercent(10, 95));
        dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        await ƒS.update();
        //UpdateName();
        characters.protagonist.name = dataForSave.nameProtagonist;  //Danke für nichts. Keine ahnung wie das gehen soll. Ich kann die protagonist figuren nciht mehr hiden wenn ich das mache 
        console.log(dataForSave.nameProtagonist);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, textAwakening.protagonist.T0003 + dataForSave.nameProtagonist + "!");
        await ƒS.Speech.tell(characters.protagonist, textAwakening.protagonist.T0004);
        await ƒS.update();

        let firstAction = {
            awakeCat: "Touch the Stone-Cat",
            lookAround: "First, take a look around"
        };

        let firstActionRequest = await ƒS.Menu.getInput(firstAction, "choicesCSSClass");
        switch (firstActionRequest) {
            case firstAction.lookAround:
                console.log("look around");
                await ƒS.Speech.tell(characters.protagonist, textAwakening.protagonist.T0005);
                await ƒS.Speech.tell(characters.protagonist, textAwakening.protagonist.T0006);
                await ƒS.Speech.tell(characters.protagonist, textAwakening.protagonist.T0007);
                await ƒS.update();
                //inventory
             
               //  let cattest: HMTLdocument.getElementsByName("pink Cat");
                //let speakerRightI: HTMLImageElement = <HTMLImageElement>document.getElementById("speakerRight_i");
                ƒS.Inventory.add(items.Fly);
                ƒS.Inventory.add(items.Fish);
                ƒS.Inventory.add(items.Fly);
                ƒS.Inventory.add(items.Fish);
                ƒS.Inventory.add(items.Fly);
                ƒS.Inventory.add(items.Fish);
                for (let i: number = 0; i < 5; i++) {
                    ƒS.Inventory.add(items.Spider);
                }
                await ƒS.Inventory.open();
                await ƒS.update();
            //maybe implement enabling collection of items

            //"Animation" : Stone Cat awakes
            case firstAction.awakeCat:
                console.log("cat awakes");
                ƒS.Speech.hide();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.awakening2, ƒS.positionPercent(65, 85));
                await ƒS.update(1);
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.awakening3, ƒS.positionPercent(65, 85));
                await ƒS.update(1);
                await ƒS.Character.hide(characters.pinkCat);
                //       await ƒS.Character.hide(characters.protagonist);
                //     await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.scared, ƒS.positionPercent(10, 95));
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.awakening4, ƒS.positionPercent(65, 85));
                await ƒS.update(1)
                await ƒS.Speech.tell(characters.protagonist, textAwakening.protagonist.T0008);
                await ƒS.update(1);
                await ƒS.Speech.hide();
                await ƒS.Character.hide(characters.pinkCat);
                //   await ƒS.Character.hide(characters.protagonist);
                // await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.thinking, ƒS.positionPercent(10, 95));
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.awakening5, ƒS.positionPercent(65, 85));
                //insert cat yawn
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
        await ƒS.Speech.tell(characters.protagonist, textAwakening.protagonist.T0009);
        await ƒS.update();
        await ƒS.Speech.hide();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.stretchingSmall, ƒS.positionPercent(70, 85));
        await ƒS.Character.show(characters.stonePedestal, characters.stonePedestal.pose.stonePedestal, ƒS.positionPercent(65, 85));
        await ƒS.update(1);
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Sound.play(sound.cuteMeow, 1, false);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalSmall, ƒS.positionPercent(75, 85));
        await ƒS.update(1);

        //Choices for how to act towards Cat
        let approachCat = {
            approachCatCarefully: "Carefully approach cat",
            ApproachCat: "Walk towards cat",
            Wait: "Wait"
        };

        //wait for input
        let approachCatRequest = await ƒS.Menu.getInput(approachCat, "choicesCSSClass");
        //Show MeterBar 
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForCat").style.display = "";

        switch (approachCatRequest) {
            case approachCat.approachCatCarefully:
                console.log("Carefully approach cat");
                dataForSave.catScore += 5;
                await ƒS.Character.hide(characters.pinkCat);
                //  await ƒS.Character.hide(characters.protagonist);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.curiousSmall, ƒS.positionPercent(75, 85));
                //await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.side, ƒS.positionPercent(10, 95));
                await ƒS.Sound.play(sound.purrMeow, 1, false);
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, textAwakening.pinkCat.T0005);
                await ƒS.update();
                break;

            case approachCat.ApproachCat:
                console.log("Walk towards cat");
                dataForSave.catScore -= 5;
                await ƒS.Character.hide(characters.pinkCat);
                //   await ƒS.Character.hide(characters.protagonist);
                await ƒS.Sound.play(sound.longGrowl, 1, false);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.scaredSmall, ƒS.positionPercent(75, 85));
                // await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.thinking, ƒS.positionPercent(10, 95));

                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, textAwakening.pinkCat.T0001);
                await ƒS.Speech.tell(characters.protagonist, textAwakening.protagonist.T0010);
                await ƒS.Speech.tell(characters.pinkCat, textAwakening.pinkCat.T0002);
                await ƒS.Speech.tell(characters.protagonist, textAwakening.protagonist.T0011);
                await ƒS.Speech.tell(characters.pinkCat, textAwakening.pinkCat.T0003);
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalSmall, ƒS.positionPercent(75, 85));
                await ƒS.update();
                await ƒS.Speech.tell(characters.protagonist, textAwakening.protagonist.T0012);
                await ƒS.Speech.tell(characters.pinkCat, textAwakening.pinkCat.T0004);
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
                let pickedMakeSounds: boolean;

                do {
                    if (pickedKneelDown == true) {
                        console.log(pickedKneelDown);
                        delete attractCat.kneelDown;
                        console.log("delete kneel down");
                    }
                    if (pickedMakeSounds == true) {
                        console.log(pickedMakeSounds);
                        delete attractCat.makeSounds;
                        console.log("delete make sounds");
                    }

                    if (pickedReachOut == true) {
                        console.log(pickedReachOut);
                        delete attractCat.reachOut;
                        console.log("delete reach out");
                    }

                    let attractCatRequest;
                    if (pickedKneelDown == true && pickedMakeSounds == true && pickedReachOut == true) {
                        dataForSave.pickedChoice = true;
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
                            pickedMakeSounds = true;
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
                } while (!dataForSave.pickedChoice);

                await ƒS.update(3);
                console.log("cat is happy and you got +20 in lovebar");
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.hide(characters.stonePedestal);
                await ƒS.Sound.play(sound.purring, 1, false);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.lovelySmall, ƒS.positionPercent(75, 85));
                await ƒS.Character.show(characters.stonePedestal, characters.stonePedestal.pose.stonePedestal, ƒS.positionPercent(65, 85));
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, textAwakening.pinkCat.T0006);
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.lovely, ƒS.positionPercent(80, 95));
                await ƒS.update();
                break;
        }

        await ƒS.Character.hide(characters.pinkCat);
        //  await ƒS.Character.hide(characters.protagonist);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95));
        //await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.handsInHips, ƒS.positionPercent(10, 95));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, textIntro.protagonist.T0001);
        await ƒS.Speech.tell(characters.pinkCat, textIntro.pinkCat.T0001);
        await ƒS.Speech.tell(characters.protagonist, textIntro.protagonist.T0002);
        await ƒS.Speech.tell(characters.pinkCat, textIntro.pinkCat.T0002);
        await ƒS.Speech.tell(characters.protagonist, textIntro.protagonist.T0003);
        await ƒS.Speech.tell(characters.pinkCat, textIntro.pinkCat.T0003);
        await ƒS.Speech.tell(characters.protagonist, textIntro.protagonist.T0004);
        await ƒS.Speech.tell(characters.pinkCat, textIntro.pinkCat.T0004);
        await ƒS.Speech.tell(characters.protagonist, textIntro.protagonist.T0005);
        await ƒS.Speech.tell(characters.pinkCat, textIntro.pinkCat.T0005);
        await ƒS.Speech.tell(characters.pinkCat, textIntro.pinkCat.T0006);
        await ƒS.Speech.tell(characters.protagonist, textIntro.protagonist.T0006);
        await ƒS.Speech.tell(characters.pinkCat, textIntro.pinkCat.T0007);
        await ƒS.Speech.tell(characters.protagonist, textIntro.protagonist.T0007);
        await ƒS.Speech.tell(characters.pinkCat, textIntro.pinkCat.T0008);
        await ƒS.Speech.tell(characters.protagonist, textIntro.protagonist.T0008);
        await ƒS.Speech.tell(characters.pinkCat, textIntro.pinkCat.T0009);
        await ƒS.Speech.tell(characters.protagonist, textIntro.protagonist.T0009);
        await ƒS.update();
        await ƒS.Character.hideAll();
        await ƒS.update();


        //pick next Location
        let nextLocation = {
            forest: "Forest",
            lake: "Lake"
        }

        let nextLocationRequest = await ƒS.Menu.getInput(nextLocation, "choicesCSSClass");

        switch (nextLocationRequest) {
            case nextLocation.forest:
                return "Forest Scene"
                break;

            case nextLocation.lake:
                return "Lake Scene"
                break;
        }
    }



} 