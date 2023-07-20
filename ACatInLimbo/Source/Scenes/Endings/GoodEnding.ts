namespace ACatInLimbo {

    export async function GoodEnding(): ƒS.SceneReturn {
        console.log("Scene starting: Good Ending: Cat's Heaven");
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForCat").style.display = "none";
        await ƒS.Character.hideAll();
        await ƒS.update();

        ƒS.Speech.hide(); //Sprachfenster ausblenden
        ƒS.Sound.play(sound.backgroundJazz, 0.1, true);
        await ƒS.Location.show(locations.goodEndingNoCats);
        await ƒS.update(transition.goodEnding.duration, transition.goodEnding.alpha, transition.goodEnding.edge);

        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.lovely, ƒS.positionPercent(87, 103));
        await ƒS.update(1);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talking, ƒS.positionPercent(87, 103));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "I can't believe it. We made it to heaven!");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.proud, ƒS.positionPercent(87, 103));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "Cat Heaven, apparently?");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.curious, ƒS.positionPercent(87, 103));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "Well, that's how it is. You did well.");
        await ƒS.Speech.tell(characters.pinkCat, "You were the nicest soul I've met in a long time, " + dataForSave.nameProtagonist + ".");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.cleaningPaw, ƒS.positionPercent(87, 103));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "Thank you. You're the strangest cat I've ever met, I'll give you that.");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.lovely, ƒS.positionPercent(87, 103));
        await ƒS.update();
        await ƒS.Sound.play(sound.cuteMeow, 1, false);
        await ƒS.Speech.tell(characters.pinkCat, "Hehe.", false);
        await ƒS.update();
        await ƒS.Character.hide(characters.orangeCat);
        await ƒS.Character.show(characters.orangeCat, characters.orangeCat.pose.reading, ƒS.positionPercent(50, 50));
        await ƒS.update(3);
        await ƒS.Speech.tell(characters.protagonist, "Look, there is one of your kind!");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(87, 103));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "Ouh!");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.fromBehindLookingAway, ƒS.positionPercent(87, 103));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "Shouting: Hello?");
        await ƒS.update();
        await ƒS.Character.hide(characters.orangeCat);
        await ƒS.Character.show(characters.orangeCat, characters.orangeCat.pose.looking, ƒS.positionPercent(50, 50));
        await ƒS.update();
        await ƒS.Character.show(characters.multipleCats, characters.multipleCats.pose.curious, ƒS.positionPercent(50, 50));
        await ƒS.Character.show(characters.catGod, characters.catGod.pose.normal, ƒS.positionPercent(50, 50));
        await ƒS.update(3);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await ƒS.Sound.play(sound.cuteMeow, 0.1, false);
        await ƒS.Character.hide(characters.orangeCat);
        await ƒS.Character.show(characters.orangeCat, characters.orangeCat.pose.waving, ƒS.positionPercent(50, 50));
        await ƒS.update();
        await new Promise(resolve => setTimeout(resolve, 2000));
        await ƒS.Character.hide(characters.orangeCat);
        await ƒS.Character.show(characters.orangeCat, characters.orangeCat.pose.looking, ƒS.positionPercent(50, 50));
        await ƒS.update();
        await ƒS.Character.hide(characters.catGod);
        await ƒS.Character.show(characters.catGod, characters.catGod.pose.lookingLeft, ƒS.positionPercent(50, 50));
        await ƒS.update();
        await ƒS.Character.animate(characters.blueCat, characters.blueCat.pose.flying, flyingCatBlue());
        await ƒS.update();
        await ƒS.Character.hide(characters.catGod);
        await ƒS.Character.show(characters.catGod, characters.catGod.pose.lookingRight, ƒS.positionPercent(50, 50));
        await ƒS.update();
        await ƒS.Character.animate(characters.roseCat, characters.roseCat.pose.flying, flyingCatRose());
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.proud, ƒS.positionPercent(87, 103));
        await ƒS.Character.hide(characters.catGod);
        await ƒS.Character.show(characters.catGod, characters.catGod.pose.smile, ƒS.positionPercent(50, 50));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "This is the best day of my life.");
        await ƒS.update();
        ƒS.Sound.fade(sound.backgroundJazz, 0.5, 9);
        await ƒS.Character.hideAll();
        await ƒS.Location.show(locations.goodEnding);
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "Come on, " + dataForSave.nameProtagonist + ". It's time to move into our new home.");
        await ƒS.update();
        ƒS.Speech.hide(); //Sprachfenster ausblenden

    
        await ƒS.Location.show(locations.goodEndingFin);
        await ƒS.update(4);


        await new Promise(resolve => setTimeout(resolve, 5000));
        let endingCaption = document.getElementById("endingCaption");
        endingCaption.innerText = "Good Ending: Cat's Heaven";
    }
}