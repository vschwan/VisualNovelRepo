namespace ACatInLimbo {

    export async function BadEndingLostCat(): ƒS.SceneReturn {
        console.log("Scene starting: Bad Ending - Lost Cat");
        await ƒS.Sound.play(sound.slowInsanity, 0.1, true);
        await ƒS.update(1);

        await ƒS.Character.hideAll();
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "You know what?");
        await ƒS.Speech.tell(characters.pinkCat, "I don't care anymore. Why should I waste my time with you?");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingSad, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "I'm the one helping you, cause your soul's twisted. You should have been nicer.");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalSad, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "But...Wait!");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "You failed the test. Figure out how you're going to cope on your own.");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.update(3);

        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForCat").style.display = "none";

        await ƒS.Sound.fade(sound.slowInsanity, 0.7, 4);
        await ƒS.Location.show(locations.badEndingLostCat);
        await ƒS.update(transition.badEndingLostCat.duration, transition.badEndingLostCat.alpha, transition.badEndingLostCat.edge);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await ƒS.Sound.play(sound.Howling, 0.4, false);
        await ƒS.Text.print("You've pissed off the pink cat and it's abandoning you.<br>The second it leaves, you get dizzy, your vision gets blurry and you see things that definitely weren't there before.");
        await ƒS.Speech.tell(characters.protagonist, "What are those sounds?");
        await ƒS.Speech.tell(characters.protagonist, "Where am I?");
        await ƒS.Speech.tell(characters.protagonist, "What happened?");
        await ƒS.update();
        await ƒS.Location.show(locations.badEndingLostCatFin);
        await ƒS.update(4);
        await ƒS.Text.print("You have to stay in Limbo.<br>Seems like you're not a cat-person.");
        await ƒS.update();
        ƒS.Speech.hide(); 

        await new Promise(resolve => setTimeout(resolve, 2000));
        let endingCaption = document.getElementById("endingCaption");
        endingCaption.innerText = "Bad Ending: Lost Cat";

    }
}