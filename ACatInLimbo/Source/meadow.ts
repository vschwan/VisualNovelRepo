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
        //Hide MeterBar
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForCat").style.display = "none";

        //Intro
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
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.awakening4, ƒS.positionPercent(65, 85));
                await ƒS.Speech.tell(characters.protagonist, text.protagonist.T0008);
                await ƒS.update(1);
                await ƒS.Character.hide(characters.pinkCat);
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
        await ƒS.Speech.hide();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.stretchingSmall, ƒS.positionPercent(70, 85));
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.stonePedestal, ƒS.positionPercent(65, 85));
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
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.update();

        switch (approachCatRequest) {
            case approachCat.approachCatCarefully:
                console.log("Carefully approach cat");
                await ƒS.Sound.play(sound.demandingMeow2, 1, false);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95));
                await ƒS.Speech.tell(characters.pinkCat, text.pinkCat.T0004);
                dataForSave.catScore += 2;
                await ƒS.update();

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
                    //keine Ahnung wie das sonst gehen soll: check if booleans are true to delete each button without affecting the variety of all choices 
                    if (pickedKneelDown == true && pickedMakeSounds == true && pickedReachOut == true) {
                        dataForSave.pickedChoice = true;
                    } //Problem: die if-Zeile sorgt dafür, dass wenn der letzte Button gedrückt wurde, 
                    //die if bedingung erfüllt wurde, der Code weiterspringt und somit auf eine weitere Eingabe gewartet wird. 
                    //Erst nach weiterem Drücken auf den gelichen Button verschwindet er dann
                    else if (pickedKneelDown == true) {
                        console.log(pickedKneelDown);
                        delete attractCat.kneelDown;
                        console.log("delete kneel down");
                    }

                    if (pickedKneelDown == true && pickedMakeSounds == true && pickedReachOut == true) {
                        dataForSave.pickedChoice = true;
                    }
                    else if (pickedMakeSounds == true) {
                        console.log(pickedMakeSounds);
                        delete attractCat.makeSounds;
                        console.log("delete make sounds");
                    }

                    if (pickedKneelDown == true && pickedMakeSounds == true && pickedReachOut == true) {
                        dataForSave.pickedChoice = true;
                    }
                    else if (pickedReachOut == true) {
                        console.log(pickedReachOut);
                        delete attractCat.reachOut;
                        console.log("delete reach out");
                    }
                    //warte auf Inout
                    let attractCatRequest = await ƒS.Menu.getInput(attractCat, "choicesCSSClass");

                    switch (attractCatRequest) {
                        case attractCat.kneelDown:
                            console.log("Kneel down");
                            await ƒS.Sound.play(sound.purrMeow, 1, false); //sound wird nicht gefunden 404
                            dataForSave.catScore += 5;
                            pickedKneelDown = true;
                            break;
                        case attractCat.makeSounds:
                            console.log("make ksksks");
                            await ƒS.Sound.play(sound.purrMeow, 1, false);
                            dataForSave.catScore += 5;
                            pickedMakeSounds = true;
                            break;
                        case attractCat.reachOut:
                            console.log("reach out");
                            await ƒS.Sound.play(sound.purrMeow, 1, false);
                            dataForSave.catScore += 5;
                            pickedReachOut = true;
                            //    dataForSave.pickedChoice = true;
                            break;
                    }
                } while (!dataForSave.pickedChoice);

                console.log("delete all and cat is happy");
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Sound.play(sound.purring, 1, false);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.lovelySmall, ƒS.positionPercent(75, 85));
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.lovely, ƒS.positionPercent(80, 95));
                await ƒS.update();

                /*
                
                dataForSave.catScore += 5;
                console.log(dataForSave.catScore);
                await ƒS.update(5);
                document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = true);
                await ƒS.update();
                */
                break;
        }






    }

}