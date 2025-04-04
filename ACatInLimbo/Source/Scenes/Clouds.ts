namespace ACatInLimbo {

    export async function Clouds(): ƒS.SceneReturn {
        console.log("Scene starting: Clouds");
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForCat").style.display = "";

        ƒS.Speech.hide();
        ƒS.Sound.play(sound.relaxMusic, 0.1, true);
        await ƒS.Location.show(locations.clouds);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.crouchedLookingAway, ƒS.positionPercent(83, 99));
        await ƒS.update(transition.fuzzyPatches.duration, transition.fuzzyPatches.alpha, transition.fuzzyPatches.edge);

        await new Promise(resolve => setTimeout(resolve, 3000));
        await ƒS.Speech.tell(characters.protagonist, "Wow!");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.crouched, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "Pretty great, huh?");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.crouchedLookingAway, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "It's amazing!");
        await ƒS.Speech.tell(characters.protagonist, "What are these things in the sky?");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.thoughtful2, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "Skyworms, I think.");

        //if you came here from mountain
        if (dataForSave.pathMountainClouds == true) {
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(83, 99));
            await ƒS.update(1);
            await new Promise(resolve => setTimeout(resolve, 1000));
            //geile spannende  mucke hier rein
            ƒS.Sound.play(sound.taikoDrum, 1, false);
            ƒS.Sound.fade(sound.relaxMusic, 0, 1);
            await ƒS.Sound.play(sound.wildRoar, 0.4, false);
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.scared, ƒS.positionPercent(85, 105));
            await ƒS.Character.animate(characters.skyworm, characters.skyworm.pose.evil, skywormAppearing());
            await ƒS.Sound.play(sound.cathissing, 0.5, false);
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "Whoa!");
            await ƒS.update();
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(83, 99));
            await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.evil, ƒS.positionPercent(50, 50));
            await ƒS.update();
            ƒS.Sound.fade(sound.taikoDrum, 0, 2);
            ƒS.Sound.play(sound.anxiousMarch, 0.3, true);
            await ƒS.Speech.tell(characters.pinkCat, "For fuck's sake!");
            await ƒS.update();
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.scared, ƒS.positionPercent(85, 105));
            await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.evil, ƒS.positionPercent(50, 50));
            await ƒS.update();
            await ƒS.Speech.tell(characters.skyworm, "I'm smelling something!");
            await ƒS.update();
            await ƒS.Character.hide(characters.skyworm);
            await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.excited, ƒS.positionPercent(50, 50));
            await ƒS.update();
            await ƒS.Speech.tell(characters.skyworm, "I'm smelling...");
            await ƒS.update();
            await ƒS.Character.hide(characters.skyworm);
            await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.smelling, ƒS.positionPercent(50, 50));
            await ƒS.update();
            await ƒS.Speech.tell(characters.skyworm, "my FAVOURITE THING!");
            await ƒS.update();
            await ƒS.Speech.tell(characters.protagonist, "Please don't eat us!");
            await ƒS.update();
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.fromBehindLookingAway, ƒS.positionPercent(83, 99));
            await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.persuading, ƒS.positionPercent(50, 50));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "Cats, pink cats especially, taste like rotten mice, I swear!");
            await ƒS.update();
            await ƒS.Character.hide(characters.skyworm);
            await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.thinking, ƒS.positionPercent(50, 50));
            await ƒS.update();
            ƒS.Sound.fade(sound.anxiousMarch, 0.1, 2);
            await ƒS.Speech.tell(characters.skyworm, "Cats? No shit! Blargh! I haven't tried a pink one, but you guys taste like litter box leftovers!");
            await ƒS.update();
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.crouchedSad, ƒS.positionPercent(83, 99));
            await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.thinking, ƒS.positionPercent(50, 50));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "Ouch?");
            await ƒS.Speech.tell(characters.protagonist, "Lol, why do you feel offended?");
            await ƒS.update();
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(83, 99));
            await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.thinking, ƒS.positionPercent(50, 50));
            await ƒS.update();
            await new Promise(resolve => setTimeout(resolve, 2000));
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(83, 99));
            await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.thinking, ƒS.positionPercent(50, 50));
            await ƒS.update(1);
            await ƒS.Character.hide(characters.skyworm);
            await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.friendly, ƒS.positionPercent(50, 50));
            await ƒS.update();
            await ƒS.Speech.tell(characters.skyworm, "No, what I'm smelling is...");
            await ƒS.update();
            await ƒS.Character.hide(characters.skyworm);
            await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.excited, ƒS.positionPercent(50, 50));
            await ƒS.update();
            await ƒS.Speech.tell(characters.skyworm, "GOATS!");
            await ƒS.update();
            await ƒS.Character.hide(characters.skyworm);
            await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.friendly, ƒS.positionPercent(50, 50));
            await ƒS.update();
            await ƒS.Speech.tell(characters.skyworm, "You smell like goats.");
            await ƒS.update();
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.derpy1, ƒS.positionPercent(83, 99));
            await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.friendly, ƒS.positionPercent(50, 50));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "Whispering: <i>Oh no.</i>");
            await ƒS.Speech.tell(characters.protagonist, "Whispering: <i>Just because you couldn't leave them alone.</i>");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal2Sad, ƒS.positionPercent(83, 99));
            await ƒS.Character.hide(characters.skyworm);
            await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.thinking, ƒS.positionPercent(50, 50));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "Whispering: <i>Sorry, I love goats.</i>");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.fromBehindLookingAway, ƒS.positionPercent(83, 99));
            await ƒS.Character.hide(characters.skyworm);
            await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.evil, ƒS.positionPercent(50, 50));
            await ƒS.update();
            await ƒS.Speech.tell(characters.skyworm, "WHAT ARE YOU WHISPERING ABOUT?!");
            await ƒS.Speech.tell(characters.skyworm, "I'm hearing goat-talk.");
            await ƒS.update();
            await ƒS.Character.hide(characters.skyworm);
            await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.excited, ƒS.positionPercent(50, 50));
            await ƒS.update();
            await ƒS.Speech.tell(characters.skyworm, "You probably know where they are, right? RIGHT?!");
            await ƒS.update();
            await ƒS.Character.hide(characters.skyworm);
            await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.normal, ƒS.positionPercent(50, 50));
            await ƒS.update();
            await ƒS.Speech.tell(characters.skyworm, " I'm always smelling them, but they are sneaky. Somehow they always get away from me.");
            await ƒS.update();
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(83, 99));
            await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.normal, ƒS.positionPercent(50, 50));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "Whispering: <i>Poor guy.</i>");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(83, 99));
            await ƒS.Character.hide(characters.skyworm);
            await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.dreaming, ƒS.positionPercent(50, 50));
            await ƒS.update();
            await ƒS.Speech.tell(characters.skyworm, "Except this one time. It was DELICIOUS!");
            await ƒS.update();
            await ƒS.Character.hide(characters.skyworm);
            await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.smelling, ƒS.positionPercent(50, 50));
            await ƒS.update();
            await ƒS.Speech.tell(characters.skyworm, "DELICIOUS!!!");
            await ƒS.update();
            await ƒS.Character.hide(characters.skyworm);
            await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.persuading, ƒS.positionPercent(50, 50));
            await ƒS.update();
            await ƒS.Speech.tell(characters.skyworm, "Tell me, where are they?");
            await ƒS.Speech.tell(characters.protagonist, "If we knew, why would we tell you? You're gonna eat them!");
            await ƒS.update();
            await ƒS.Character.hide(characters.skyworm);
            await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.cheeky, ƒS.positionPercent(50, 50));
            await ƒS.update();
            await ƒS.Speech.tell(characters.skyworm, "Well, you know, I am good friends with a certain…ruler. I could whisper in his ear about how you've helped me out!");
            await ƒS.update();
            await ƒS.Character.hide(characters.skyworm);
            await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.dreaming, ƒS.positionPercent(50, 50));
            await ƒS.update();
            await ƒS.Speech.tell(characters.skyworm, "Also, ha, it's just some goats! Kill one animal for the possibility of a happy afterlife? What do you say? Suddenly, a goat's life gets precious? I don't think so.");
            await ƒS.update();
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(83, 99));
            await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.dreaming, ƒS.positionPercent(50, 50));
            await ƒS.update();
            await ƒS.Speech.tell(characters.protagonist, "Mhmm.");
            await ƒS.update();
            await ƒS.Character.hide(characters.skyworm);
            await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.angry2, ƒS.positionPercent(50, 50));
            await ƒS.update();

            let betrayGoats = {
                betrayGoats: "reveal goat hideout",
                dontBetrayGoats: "don't reveal goat hideout"
            }
            let betrayGoatsRequest = await ƒS.Menu.getInput(betrayGoats, "choicesCSSClass");

            switch (betrayGoatsRequest) {
                case betrayGoats.betrayGoats:
                    dataForSave.betrayGoats = true;
                    await ƒS.Speech.tell(characters.protagonist, "They live in small caves further down the mountain.");
                    await ƒS.update();
                    await ƒS.Character.hide(characters.skyworm);
                    await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.excited, ƒS.positionPercent(50, 50));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.skyworm, "Caaaaves?");
                    await ƒS.Speech.tell(characters.protagonist, "Small holes in the big stone we stand on.");
                    await ƒS.update();
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(83, 99));
                    await ƒS.Character.hide(characters.skyworm);
                    await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.evil, ƒS.positionPercent(50, 50));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.pinkCat, "You're a bitch, " + dataForSave.nameProtagonist + ".");
                    dataForSave.catScore -= 15;
                    await ƒS.update();
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(83, 99));
                    await ƒS.Character.hide(characters.skyworm);
                    await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.persuading, ƒS.positionPercent(50, 50));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.protagonist, "Huh? Me?");
                    await ƒS.Speech.tell(characters.protagonist, "Dude, I just want to live a peaceful afterlife!");
                    await ƒS.update();
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(83, 99));
                    await ƒS.Character.hide(characters.skyworm);
                    await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.cheeky, ƒS.positionPercent(50, 50));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.pinkCat, "You think they're gonna eat just one goat?");
                    await ƒS.Speech.tell(characters.pinkCat, "It's gonna be a fucking massacre!");
                    await ƒS.update();
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(83, 99));
                    await ƒS.Character.hide(characters.skyworm);
                    await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.fin, ƒS.positionPercent(50, 50));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.protagonist, "But they're all already dead! We're in Limbo, are we not?");
                    await ƒS.update();
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.crouchedAngry, ƒS.positionPercent(83, 99));
                    await ƒS.Character.hide(characters.skyworm);
                    await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.bye, ƒS.positionPercent(50, 50));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.pinkCat, "Of course we are, but just because someone is already suffering does not excuse being an asshole to them or torturing and killing them fucking AGAIN!");
                    await ƒS.update();
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.crouchedLookingAway, ƒS.positionPercent(83, 99));
                    await ƒS.Character.hide(characters.skyworm);
                    await ƒS.Character.animate(characters.skyworm, characters.skyworm.pose.disappearing, skywormDisappearing());
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.pinkCat, "Fuck this.");
                    await ƒS.update();

                    //check for catScore and hndl badEnding LostCat
                    if (dataForSave.catScore >= 0) {
                        console.log("cat is not running away");
                    } else {
                        ƒS.Sound.fade(sound.relaxMusic, 0, 10);
                        ƒS.Sound.fade(sound.anxiousMarch, 0, 10);
                        await ƒS.Progress.save();
                        console.log("cat should run away");
                        return "BadEnding LostCat Scene";
                    }

                    break;

                case betrayGoats.dontBetrayGoats:
                    dataForSave.catScore += 10;
                    await ƒS.Speech.tell(characters.protagonist, "Nah, sorry, we don't really know where they are, right?");
                    await ƒS.update();
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.lovely, ƒS.positionPercent(83, 99));
                    await ƒS.Character.hide(characters.skyworm);
                    await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.angry, ƒS.positionPercent(50, 50));
                    await ƒS.Sound.play(sound.purrMeow, 1, false);
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    await ƒS.update(1);
                    await ƒS.Character.hideAll();
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(83, 99));
                    await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.angry, ƒS.positionPercent(50, 50));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.pinkCat, "Nooo, sorry! We met them but they were so damn fast!");
                    await ƒS.update();
                    await ƒS.Sound.play(sound.wildRoar, 1, false);
                    await ƒS.Character.hide(characters.skyworm);
                    await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.evil, ƒS.positionPercent(50, 50));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.pinkCat, "What?! You're lying!");
                    await ƒS.Speech.tell(characters.pinkCat, "Nooo, we wouldn't! We like to eat goats, same as you! If you see them, could you do <i>us</i> a favor and tell us where they're hiding?");
                    await ƒS.update();
                    await ƒS.Character.hide(characters.skyworm);
                    await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.angry, ƒS.positionPercent(50, 50));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.skyworm, "Hmpf, alright.");
                    await ƒS.update();
                    await ƒS.Character.hide(characters.skyworm);
                    await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.thinking, ƒS.positionPercent(50, 50));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.skyworm, "Maybe...");
                    await ƒS.update();
                    await ƒS.Character.hide(characters.skyworm);
                    await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.angry2, ƒS.positionPercent(50, 50));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.skyworm, "Damn little hiding artists.");
                    await ƒS.update();
                    await ƒS.Character.hide(characters.skyworm);
                    await ƒS.Character.show(characters.skyworm, characters.skyworm.pose.fin, ƒS.positionPercent(50, 50));
                    await ƒS.update(2);
                    await ƒS.Character.hide(characters.skyworm);
                    await ƒS.Character.animate(characters.skyworm, characters.skyworm.pose.disappearing, skywormDisappearing());
                    await ƒS.update();
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(83, 99));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.pinkCat, "Damn, " + dataForSave.nameProtagonist + ", for a moment I thought you would betray those cute little goats.");
                    await ƒS.Speech.tell(characters.protagonist, "Well, I thought about it, but it didn't seem right.");
                    await ƒS.update();
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talking, ƒS.positionPercent(83, 99));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.pinkCat, "It wouldn't have been right.");
                    await ƒS.update();
                    break;
            }

            ƒS.Sound.fade(sound.anxiousMarch, 0, 7);
            await ƒS.Speech.tell(characters.pinkCat, "Let's get you to that damn gate.");
            await ƒS.update();

            //if you came here from Cave
        } else {
            await ƒS.Speech.tell(characters.protagonist, "They're pretty");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.curious, ƒS.positionPercent(83, 99));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "From far away maybe... Once, i saw one up close.");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talking, ƒS.positionPercent(83, 99));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "It was terrifying.");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(83, 99));
            await ƒS.update();
            await ƒS.Speech.tell(characters.protagonist, "Mhm.");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.cleaningAss, ƒS.positionPercent(83, 99));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "We should get going.");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.cleaningPaw, ƒS.positionPercent(83, 99));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "Before one notices us.");
            await ƒS.update();
            ƒS.Sound.fade(sound.relaxMusic, 0, 4);
        }

        // ƒS.Sound.fade(sound.forestWind, 0, 4);
        await ƒS.Character.hide(characters.pinkCat);
        return "Gate Scene";


    }
}