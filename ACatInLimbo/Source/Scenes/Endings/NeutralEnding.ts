namespace ACatInLimbo {

    export async function NeutralEnding(): ƒS.SceneReturn {
        console.log("Scene starting: Neutral Ending");

        await ƒS.Character.hideAll();
        await ƒS.update();

        ƒS.Speech.hide(); 
        ƒS.Sound.play(sound.clockTicking, 0.3, true);
        await ƒS.Location.show(locations.neutralEnding);
        await ƒS.update(transition.neutralEnding.duration, transition.neutralEnding.alpha, transition.neutralEnding.edge);
        await ƒS.update(1);

        ƒS.Speech.hide();  
        await ƒS.Text.print("Because you treated the cat decently well and your destinies are linked, you both end up in Sweet Nothingness.<br>Let's face it, there is probably neither heaven nor hell.<br>Now you are properly dead, just like the cat.<br> Maybe you'll be reincarnated, maybe this is the final end.<br><p>Who knows what's to come?</p>");
        await new Promise(resolve => setTimeout(resolve, 2000));
        ƒS.Sound.fade(sound.clockTicking, 0.6, 4);

        await ƒS.Location.show(locations.neutralEndingFin);
        await ƒS.update(4);

        await new Promise(resolve => setTimeout(resolve, 2000));
        let endingCaption = document.getElementById("endingCaption");
        endingCaption.innerText = "Neutral Ending: Sweet Nothingness";
    }
}
