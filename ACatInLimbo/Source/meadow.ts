namespace ACatInLimbo {

    export async function firstScene(): ƒS.SceneReturn {
        console.log("first Scene starting: Meadow");

        let text = {
            protagonist: {
                T0001: "Where am I?",
                T0002: "WHO am I?",
                T0003: "Ah, I remember, it's ",
                T0004: "What now? There's that strange statue....",
                T0005: "Well, this seems like a lovely meadow, but what the fuck am I doing here? I feel kind of...ghosty. Like I don't have a lot of substance.",
                T0006: "And a cat? Really?",
                T0007: "Why does it look so real? Like it's not supposed to be of stone. Maybe if I touch i...",
                T0008: "Wtf, it's alive!"
            },

            pinkCat: {
                T0001: "Back off! I'm warning you. My claws are sharp as ever.",
                T0002: "You act like someone who has never ever even met a cat!",
                T0004: "Not too fast, that's right.",
                T0005: "Ouuuh, you seem nice!"
            }

        }

        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForCat").style.display = "none";

        ƒS.Speech.hide(); //Sprachfenster ausblenden
        ƒS.Sound.play(sound.meadowSound, 1, true);
        await ƒS.Location.show(locations.meadow);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.awakening1, ƒS.positionPercent(65, 85));
        await ƒS.update(transition.swirlStuff.duration, transition.swirlStuff.alpha, transition.swirlStuff.edge);
        ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0001);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0002, false);
        await ƒS.update(1);
        dataForSave.nameProtagonist = await ƒS.Speech.getInput();// CSS unbedingt ändern--> in Mitte oder so Namen eintragen können
        characters.protagonist.name = dataForSave.nameProtagonist;
        console.log(dataForSave.nameProtagonist);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0003 + dataForSave.nameProtagonist + "!");
        await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0004);

        /*  ƒS.Character.get(characters.pinkCat);
          let stoneCat = ƒS.Character.get(characters.pinkCat);*/

        let firstAction = {
            awakeCat: "Touch the Stone-Cat",
            lookAround: "First, take a look around"
        };

        let firstActionRequest = await ƒS.Menu.getInput(firstAction, "choicesCSSClass");
        switch (firstActionRequest) {
            case firstAction.lookAround:
                console.log("look around");
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0005);
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0006);
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0007);


            case firstAction.awakeCat:
                console.log("cat awakes");
                ƒS.Speech.hide();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.awakening2, ƒS.positionPercent(65, 85));
                await ƒS.update(1);
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.awakening3, ƒS.positionPercent(65, 85));
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0008);
                await ƒS.update(1);
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.awakening4, ƒS.positionPercent(65, 85));
                await ƒS.update(1);
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.awakening5, ƒS.positionPercent(65, 85));
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

        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.stretchingSmall, ƒS.positionPercent(70, 85));
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.stonePedestal, ƒS.positionPercent(65, 85));
        await ƒS.update(1);
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.update();
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalSmall, ƒS.positionPercent(75, 85));
        await ƒS.update(1);

        let approachCat = {
            approachCatCarefully: "Carefully approach cat",
            ApproachCat: "Walk towards cat",
            Wait: "Wait"
        };

        let approachCatRequest = await ƒS.Menu.getInput(approachCat, "choicesCSSClass");
        //Sshow MeterBar 
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);


        switch (approachCatRequest) {
            case approachCat.approachCatCarefully:
                console.log("Carefully approach cat");
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(75, 95));
                await ƒS.Speech.tell(characters.pinkCat, text.pinkCat.T0004);
                dataForSave.catScore += 2;

                break;

            case approachCat.ApproachCat:
                console.log("Walk towards cat");
                await ƒS.Speech.tell(characters.pinkCat, text.pinkCat.T0001);
                await ƒS.Speech.tell(characters.pinkCat, text.pinkCat.T0002);
                dataForSave.catScore -= 5;
                break;

            case approachCat.Wait:
                console.log("Wait");
                document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
                // ƒS.Speech.hide();
                let attractCat = {
                    kneelDown: "Kneel down",
                    reachOut: "Reach Out",
                    makeSounds: "make ksksks"
                };
                let pickedKneelDown: boolean;
                let pickedReachOut: boolean;
                let pickedMakeSounds: boolean;

                do {

                    // if (pickedYes || pickedBla || pickedNo || pickedOk || pickedYes) {
                    //   delete firstDialogueElementAnswers.iSayYes;
                    // }
                    if (pickedKneelDown) {
                        delete attractCat.kneelDown;
                    }
                    else if (pickedMakeSounds) {
                        delete attractCat.makeSounds;
                    }
                    else if (pickedReachOut) {
                        delete attractCat.reachOut;
                    }

                    let attractCatRequest = await ƒS.Menu.getInput(attractCat, "choicesCSSclass");

                    switch (attractCatRequest) {
                        case attractCat.kneelDown:
                            console.log("Kneel down");
                            dataForSave.catScore += 5;
                            pickedKneelDown = true;
                            break;
                        case attractCat.makeSounds:
                            console.log("make ksksks");
                            dataForSave.catScore += 5;
                            pickedMakeSounds = true;
                            break;
                        case attractCat.reachOut:
                            console.log("reach out");
                            dataForSave.catScore += 5;
                            pickedReachOut = true;
                            break;
                    }
                } while (!dataForSave.pickedChoice);


                dataForSave.catScore += 5;
                console.log(dataForSave.catScore);
                await ƒS.update(5);
                document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = true);
                await ƒS.update();

                break;
        }






    }

}