namespace ACatInLimbo {

    export async function CaveInside(): ƒS.SceneReturn {
        console.log("Scene starting: Cave Inside");


        ƒS.Speech.hide(); //Sprachfenster ausblenden
        ƒS.Sound.play(sound.DrippingInCave, 1, true);

        if (ƒS.Inventory.getAmount(items.Fireflies) < 1) {
            await ƒS.Location.show(locations.caveInsideDark)
            await ƒS.update(transition.swirl.duration, transition.swirl.alpha, transition.swirl.edge);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.walking, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await new Promise(resolve => setTimeout(resolve, 3000));
            ƒS.Sound.play(sound.monster, 0.5, false);
            await ƒS.Speech.tell(characters.protagonist, "This does not feel good.");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.crouched, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "I told you so.");
            ƒS.Sound
            ƒS.Sound.play(sound.frogQuaks, 1, false);
            await ƒS.update();
            await ƒS.Speech.tell(characters.protagonist, "What is that?");
            await ƒS.update();
            await ƒS.Sound.play(sound.horrorDrum2, 1, false);
            await ƒS.Character.show(characters.caveCreature, characters.caveCreature.pose.attack, ƒS.positionPercent(40, 95));
            await ƒS.Character.hide(characters.pinkCat);
            ƒS.Sound.play(sound.cathissing, 1, false);
            await ƒS.Character.animate(characters.pinkCat, characters.pinkCat.pose.scared, ScaredCatAnimation());
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.pinkCat, "Nooo!");
            await ƒS.update();
            await ƒS.Character.hide(characters.caveCreature);
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.update();

            ƒS.Sound.fade(sound.DrippingInCave, 0, 3);
            return "BadEnding Cave Scene"

        } else {
            await ƒS.Location.show(locations.caveInside);
            await ƒS.update();
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.proud, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "So, as it turned out, helping the swamp creature payed off.");
            await ƒS.Speech.tell(characters.protagonist, "Totally!")
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(80, 95));
            await ƒS.update();
            ƒS.Sound.play(sound.frogQuaks, 1, false);
            await ƒS.Speech.tell(characters.protagonist, "Eh, what was that? That sounds like we're not alone in here.");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(80, 95))
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "Chill, it's just some frogs probably.")
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(80, 95));
            await ƒS.Character.show(characters.caveCreature, characters.caveCreature.pose.sound, ƒS.positionPercent(45, 70));
            ƒS.Sound.play(sound.frogQuak, 1, false);
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "Welp, nevermind. It wasn't here last time I visited this cave. But it looks quite old...");
            await ƒS.update();
            await ƒS.Speech.tell(characters.protagonist, "I guess? How can you tell?");
            await ƒS.update();
            await ƒS.Character.hide(characters.caveCreature);
            await ƒS.Character.show(characters.caveCreature, characters.caveCreature.pose.normal, ƒS.positionPercent(45, 70));
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talking, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "Experience.");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "Let's give it some snails to distract it.");
            await ƒS.Speech.tell(characters.protagonist, "What? I thought you wanted them so badly?");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talking, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "I'm your guide for a reason. This creature comes from a very dark place. Let's not take any chances.");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal2, ƒS.positionPercent(80, 95));
            await ƒS.update();
            await ƒS.Speech.tell(characters.protagonist, "Alright, alright.");
            await ƒS.update();

            if (ƒS.Inventory.getAmount(items.Snail) < 1) {
                await ƒS.Speech.tell(characters.protagonist, "It's just...Apparently, I don't have any snails left.");
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(80, 95));
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, "Ah, yes, of course, you gave all of the to the bay creature.");
                await ƒS.Speech.tell(characters.protagonist, "What can I say, I didn't know we would still need them!");
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(80, 95));
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, "Damnit.");
                await ƒS.update();
                ƒS.Sound.play(sound.frogQuak, 1, false);
                await ƒS.Character.hide(characters.caveCreature);
                await ƒS.Character.show(characters.caveCreature, characters.caveCreature.pose.sound, ƒS.positionPercent(45, 70));
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.crouchedLookingAway, ƒS.positionPercent(80, 95));
                await ƒS.update(1);
                await ƒS.Character.hide(characters.caveCreature);
                await ƒS.Character.show(characters.caveCreature, characters.caveCreature.pose.toungeOut, ƒS.positionPercent(40, 95));
                await ƒS.update();
                await ƒS.Speech.tell(characters.protagonist, "Oh fuck.");
                await ƒS.update();
                await ƒS.Character.hide(characters.caveCreature);
                await ƒS.Character.show(characters.caveCreature, characters.caveCreature.pose.attack, ƒS.positionPercent(40, 95));
                ƒS.Sound.play(sound.cathissing, 1, false);
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.animate(characters.pinkCat, characters.pinkCat.pose.scared, ScaredCatAnimation());
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, "Nooo!");
                await ƒS.update();
                await ƒS.Character.hide(characters.caveCreature);
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.update();

                ƒS.Sound.fade(sound.DrippingInCave, 0, 3);
                return "BadEnding Cave Scene"

            } else {
                await ƒS.Speech.tell(characters.protagonist, "Luckily, I have a bit of snail left.");
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talking, ƒS.positionPercent(80, 95));
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, "Throw it to the left!");
                ƒS.Inventory.subtract(items.Snail);
                await ƒS.update();
                await ƒS.Character.animate(characters.snail, characters.snail.pose.normal, snailThrow());
                await ƒS.update();
                await ƒS.Character.hide(characters.caveCreature);
                await ƒS.update(1);
                ƒS.Sound.play(sound.snailbreak, 1, false);
                await ƒS.Speech.tell(characters.pinkCat, "Let's move on quickly now!");
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);

                ƒS.Sound.fade(sound.DrippingInCave, 0, 3);
                return "Cave Exit Scene"
            }

            //monstergrowl einbauen
            //evtl animation für frog einbauen















        }


    }
}