namespace ACatInLimbo {

    export async function BadEndingHell(): ƒS.SceneReturn {
        console.log("Scene starting: Bad Ending - Hell");
        await ƒS.Character.hideAll();
        await ƒS.update();

        ƒS.Speech.hide(); 
        ƒS.Sound.play(sound.hell, 0.3, true);
        await ƒS.Location.show(locations.badEndingHell);
        await ƒS.update(transition.badEndingHell.duration, transition.badEndingHell.alpha, transition.badEndingHell.edge);
        await ƒS.update(1);
        ƒS.Speech.hide(); 
        if (dataForSave.betrayCat == true) {
           await ƒS.Text.print("Death has his twisted ways to test the kindness of souls trapped in Limbo.<br>What were you thinking, leaving the cat behind? I mean, this whole story was a test, were you not aware?<br>Death has kept his little cat, of course.<br>Though it now has to stay in Limbo and pursue it's boring job as a guide (thanks to you) it at least doesn't have to endure endless torture in hell.<br><p>Have fun in here.</p>");
        } else {
           await ƒS.Text.print("Apparently you haven't been very nice to the cat and other creatures in Limbo.<br>I mean, this whole story was a test, were you not aware?<br>Of course the cat didn't want to go with you!<br>Though it now has to stay in Limbo and pursue it's boring job as a guide (thanks to you) it at least doesn't have to endure endless torture in hell.<br><p>Have fun in here.</p>");
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
        ƒS.Sound.fade(sound.hell, 0.6, 4);

        await ƒS.Location.show(locations.badEndingHellFin);
        await ƒS.update(4);

        await new Promise(resolve => setTimeout(resolve, 2000));
        let endingCaption = document.getElementById("endingCaption");
        endingCaption.innerText = "Bad Ending: Burn in Hell!";
    }
}