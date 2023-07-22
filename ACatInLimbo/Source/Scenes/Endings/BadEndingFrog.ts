namespace ACatInLimbo {

    export async function BadEndingFrog(): ƒS.SceneReturn {
        console.log("Scene starting: Bad Ending - Frog");
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForCat").style.display = "none";
        await ƒS.Character.hideAll();
        await ƒS.update();

        ƒS.Speech.hide(); //Sprachfenster ausblenden
        ƒS.Sound.play(sound.frogStomach, 0.3, true);
        await ƒS.Location.show(locations.badEndingFrog);
        await ƒS.update(transition.badEndingFrog.duration, transition.badEndingFrog.alpha, transition.badEndingFrog.edge);
        await ƒS.update(1);

        ƒS.Speech.hide(); //Sprachfenster ausblenden
        await ƒS.Text.print("Your soul got devoured by a huge frog and now you're not only dead and in Limbo, but also trapped in a creature's body.<br>Congratulations.<br>Maybe you shouldn't have gone in there.<br>If it's any consolation: The cat will probably make sure that the monster from the cave gets a proper kick in the arse.");
        await new Promise(resolve => setTimeout(resolve, 2000));
        ƒS.Sound.fade(sound.frogStomach, 0.6, 4);
        await ƒS.update();
        await ƒS.Location.show(locations.badEndingFrogFin);
        await ƒS.update(4);

        await new Promise(resolve => setTimeout(resolve, 2000));
        let endingCaption = document.getElementById("endingCaption");
        endingCaption.innerText = "Bad Ending: Hungry Frog";
    }
}