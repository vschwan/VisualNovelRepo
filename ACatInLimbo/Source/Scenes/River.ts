namespace ACatInLimbo {

    export async function River(): ƒS.SceneReturn {
        console.log("Scene starting: River");

        ƒS.Speech.hide(); //Sprachfenster ausblenden
        ƒS.Sound.play(sound.river, 1, true);
        await ƒS.Location.show(locations.river);
        await ƒS.update(transition.wet.duration, transition.wet.alpha, transition.wet.edge);
        await ƒS.Character.show(characters.death, characters.death.pose.fishingLookingDown, ƒS.positionPercent(50, 50));
        await ƒS.update();

        //second time river
        if (dataForSave.visitedRiver == true) {
            if (ƒS.Inventory.getAmount(items.Coin) != 0) {
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95));
                await ƒS.update();
                await ƒS.Character.hide(characters.death);
                await ƒS.Character.show(characters.death, characters.death.pose.close, ƒS.positionPercent(50, 50));
                await ƒS.update();
                await ƒS.Speech.tell(characters.death, "So?");
                await ƒS.update();
            } else {

                let nextLocation = {
                    bay: "Bay",
                    cave: "Cave",
                }
                ƒS.Sound.fade(sound.river, 0, 2);
                let nextLocationRequest = await ƒS.Menu.getInput(nextLocation, "choicesCSSClass");
                switch (nextLocationRequest) {
                    case nextLocation.cave:
                        dataForSave.currentPath = "RiverToCave";
                        return "Map Scene"
                        break;

                    case nextLocation.bay:
                        dataForSave.currentPath = "RiverToBay";
                        return "Map Scene"
                        break;
                }
            }

        } else {
            //first time river
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.walking, ƒS.positionPercent(80, 95));
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.protagonist, "There is someone! Who's that?");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.crouchedLookingAway, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Sound.play(sound.cuteMeow, 1, false);
            await ƒS.Speech.tell(characters.pinkCat, "Oh.");
            await ƒS.update();
            await ƒS.Speech.tell(characters.protagonist, "Doesn't look like the rest of the creatures we met.");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.derpy2, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "That's right.");
            await ƒS.update();
            await ƒS.Speech.tell(characters.protagonist, "Hey, excuse me!");
            await ƒS.update();
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Sound.play(sound.horrorDrum2, 1, false);
            await ƒS.Character.hide(characters.death);
            await ƒS.Character.show(characters.death, characters.death.pose.fishingLookingUp, ƒS.positionPercent(50, 50));
            await ƒS.update();
            await new Promise(resolve => setTimeout(resolve, 3000));
            await ƒS.Speech.tell(characters.protagonist, "Why is he not answering?");
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.crouched, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "Cause he's a mysterious weirdo.");
            await ƒS.Speech.tell(characters.protagonist, "You know him?");
            await ƒS.update();
            await ƒS.Character.hide(characters.death);
            await ƒS.Character.show(characters.death, characters.death.pose.close, ƒS.positionPercent(20, 100));
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "Hi. What's up. We're doing fine. You don't have to check on me.");
            await ƒS.Speech.tell(characters.protagonist, "Check on you?");
            await ƒS.Speech.tell(characters.death, "Mhm, sure thing. Want a ride to the mountains?");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.cleaningPaw, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "Since when are you helping?");
            await ƒS.Speech.tell(characters.death, "I'm bored. But I'll tell you what I am not: A cheap bitch! I will help you for an obolus.");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.curious, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "Well, might as well accept the offer, right? Also, I seriously need a break from these scandalous travel conditions.");
            await ƒS.update();
            dataForSave.visitedRiver = true;
        }

        if (ƒS.Inventory.getAmount(items.Coin) != 0) {
            await ƒS.Speech.tell(characters.protagonist, "We do have a coin!");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.proud, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.death, "Then I can be your ferryman. Do you accept my offer?");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal2, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "If we're up there, we won't come back down, you know?");
            await ƒS.Speech.tell(characters.pinkCat, "We could also try to move through the cave.");
            await ƒS.update();

            let payDeathDecision = {
                accept: "accept the offer",
                refuse: "refuse the offer"
            }

            ƒS.Sound.fade(sound.river, 0, 5);
            let payDeathDecisionRequest = await ƒS.Menu.getInput(payDeathDecision, "choicesCSSClass");
            switch (payDeathDecisionRequest) {
                case payDeathDecision.accept:
                    await ƒS.Speech.tell(characters.protagonist, "Whatever. Let's go!");
                    ƒS.Inventory.subtract(items.Coin);
                    await ƒS.update();

                    dataForSave.currentPath = "RiverToMountain";
                    return "Map Scene"


                    break;

                case payDeathDecision.refuse:
                    await ƒS.Speech.tell(characters.protagonist, "Nah, I don't feel like it. Let's go the other way around through the cave.");
                    await ƒS.Speech.tell(characters.death, "Pah! Good luck.");
                    await ƒS.update();
                    await ƒS.Character.hide(characters.death);
                    await ƒS.Character.show(characters.death, characters.death.pose.fishingLookingDown, ƒS.positionPercent(50, 50));
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(80, 95));
                    await ƒS.update();
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.pinkCat, "Let's move through the cave then.");
                    await ƒS.update();
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.hide(characters.death);
                    await ƒS.update();

                    dataForSave.currentPath = "RiverToCave";
                    return "Map Scene"

                    break;
            }

        } else {
            await ƒS.Speech.tell(characters.protagonist, "We could, the only problem is, I don't have money.");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.death, "A coin would be enough.");
            await ƒS.Speech.tell(characters.death, "But if you don't have anything, go back where you came from! I'm disappointed.");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.protagonist, "What?");
            await ƒS.update();
            await ƒS.Character.hide(characters.death);
            await ƒS.Character.show(characters.death, characters.death.pose.fishingLookingDown, ƒS.positionPercent(50, 50));
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "Ooooh, he's so dramatic. Let's go, maybe we can still find a coin or just move through the cave up the mountain.");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.hide(characters.death);
            await ƒS.update();
        }

        let nextLocation = {
            bay: "Bay",
            cave: "Cave",
        }
        ƒS.Sound.fade(sound.river, 0, 2);
        let nextLocationRequest = await ƒS.Menu.getInput(nextLocation, "choicesCSSClass");
        switch (nextLocationRequest) {
            case nextLocation.cave:
                dataForSave.currentPath = "RiverToCave";
                return "Map Scene"
                break;

            case nextLocation.bay:
                dataForSave.currentPath = "RiverToBay";
                return "Map Scene"
                break;
        }


















    }
}