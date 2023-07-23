namespace ACatInLimbo {

    export async function Gate(): ƒS.SceneReturn {
        console.log("Scene starting: Gate");
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForCat").style.display = "";

        ƒS.Speech.hide(); 
        ƒS.Sound.play(sound.celestial, 0.1, true);
        await ƒS.Location.show(locations.gate);
        await ƒS.update(transition.sunCatcher.duration, transition.sunCatcher.alpha, transition.sunCatcher.edge);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.walking, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await new Promise(resolve => setTimeout(resolve, 3000));
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.fromBehindLookingAway, ƒS.positionPercent(83, 99));
        await ƒS.update(1);
        await ƒS.Text.print("You're almost there!<br>Don't forget to feed any remaining items from your inventory to the cat.");
        await ƒS.update();
        await ƒS.Character.show(characters.death, characters.death.pose.DeathBigAtGate, ƒS.positionPercent(50, 100));
        await ƒS.update(3);
        await ƒS.Speech.tell(characters.death, "Well, hello my little friends! How have you been?");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalLookingAway, ƒS.positionPercent(83, 99));
        await ƒS.update();

        if (dataForSave.pathMountainClouds == true && dataForSave.betrayGoats == true) {
            await ƒS.Speech.tell(characters.pinkCat, "My buddy here has just made sure that quite a few goats are going to die.");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(83, 99));
            await ƒS.Character.hide(characters.death);
            await ƒS.Character.show(characters.death, characters.death.pose.surprised, ƒS.positionPercent(20, 100));
            await ƒS.update();
            await ƒS.Speech.tell(characters.death, "Noooooo. I love those goats!");
            await ƒS.update();
            await ƒS.Character.hide(characters.death);
            await ƒS.Character.show(characters.death, characters.death.pose.angry, ƒS.positionPercent(20, 100));
            await ƒS.update();
            await ƒS.Speech.tell(characters.death, "Why would you do that, " + dataForSave.nameProtagonist + " ?");
            await ƒS.update();
            await ƒS.Speech.tell(characters.protagonist, "For real? What is it about these goats?");
            await ƒS.update();
            await ƒS.Character.hide(characters.death);
            await ƒS.Character.show(characters.death, characters.death.pose.normal, ƒS.positionPercent(20, 100));
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.crouchedAngry, ƒS.positionPercent(83, 99));
            await ƒS.update();
            await ƒS.Speech.tell(characters.death, "What's done is done.");
            await ƒS.update();

        } else if (dataForSave.pathMountainClouds == true && dataForSave.betrayGoats == false) {
            await ƒS.Speech.tell(characters.pinkCat, "Yeah, I mean, my buddy here just saved quite a few goats from a skyworm, so I am pleased.");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.proud, ƒS.positionPercent(83, 99));
            await ƒS.Character.hide(characters.death);
            await ƒS.Character.show(characters.death, characters.death.pose.smile, ƒS.positionPercent(20, 100));
            await ƒS.update();
            await ƒS.Speech.tell(characters.death, "Woohoo! I love those goats!");
            await ƒS.update();
            await ƒS.Character.hide(characters.pinkCat);
            await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.lovely, ƒS.positionPercent(83, 99));
            await ƒS.update();
            await ƒS.Speech.tell(characters.pinkCat, "I know.");
            await ƒS.Speech.tell(characters.protagonist, "I'm glad I did the right thing.");
            await ƒS.update();
        }

        await ƒS.Character.hide(characters.death);
        await ƒS.Character.show(characters.death, characters.death.pose.evilSmile, ƒS.positionPercent(20, 100));
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(83, 99));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.death, "Now that you made it up here you need to leave this place and take one last step through this gate.");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal2, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "What happens when I step through the gate?");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talking, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "Either something very good or very bad.");
        await ƒS.update();
        await ƒS.Character.hide(characters.death);
        await ƒS.Character.show(characters.death, characters.death.pose.normal, ƒS.positionPercent(20, 100));
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "So heaven or hell?");
        await ƒS.Speech.tell(characters.death, "Yes. There's also the possibility of sweet nothingness. There will be no pain or sorrow. You will find peace in an endless sleep.");
        await ƒS.Speech.tell(characters.protagonist, "How is it decided what's gonna happen?");
        await ƒS.update();
        await ƒS.Character.hide(characters.death);
        await ƒS.Character.show(characters.death, characters.death.pose.smile, ƒS.positionPercent(20, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.death, " It depends on your past actions of course. - How you've treated my little kitty here!");
        await ƒS.update();
        await ƒS.Sound.play(sound.cuteMeow, 1, false);
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.lovely, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, "Oh. Wait. What?");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.proud, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "Yep.");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(83, 99));
        await ƒS.Character.hide(characters.death);
        await ƒS.Character.show(characters.death, characters.death.pose.normal, ƒS.positionPercent(20, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.death, "This cat was not only your guide, but a means to test your character.");
        await ƒS.update();
        await ƒS.Character.hide(characters.death);
        await ƒS.Character.show(characters.death, characters.death.pose.evilSmile, ƒS.positionPercent(20, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.death, "Surprised? Well, that was expected. Humans are not the brightest.");
        await ƒS.update();
        await ƒS.Character.hide(characters.death);
        await ƒS.Character.show(characters.death, characters.death.pose.angry, ƒS.positionPercent(20, 100));
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal2, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.death, "Now walk through the gate!");
        await ƒS.Speech.tell(characters.protagonist, "Okay okay…It's… goodbye I guess.");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal2Sad, ƒS.positionPercent(83, 99));
        await ƒS.Character.hide(characters.death);
        await ƒS.Character.show(characters.death, characters.death.pose.DeathBigAtGate, ƒS.positionPercent(50, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "Goodbye.");


        await ƒS.update();
        await ƒS.Sound.fade(sound.celestial, 1, 3);
        await ƒS.update();
        ƒS.Speech.hide(); 
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForCat").style.display = "none";
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.hide(characters.death);
        await ƒS.Sound.play(sound.breathing, 3, true);
        await ƒS.Character.show(characters.gateCloser, characters.gateCloser.pose.closer1, ƒS.positionPercent(50, 50));
        await ƒS.update(2);
        await ƒS.Character.hide(characters.gateCloser);
        await ƒS.Character.show(characters.gateCloser, characters.gateCloser.pose.closer2, ƒS.positionPercent(50, 50));
        await ƒS.update(2);
        await ƒS.Character.hide(characters.gateCloser);
        await ƒS.Character.show(characters.gateCloser, characters.gateCloser.pose.closer3, ƒS.positionPercent(50, 50));
        await ƒS.update(2);

        
        await ƒS.Sound.play(sound.demanding, 1, false);
        await ƒS.Speech.tell(characters.pinkCat, "WAIT!", false);
        await ƒS.update();
        await ƒS.Character.hide(characters.gateCloser);
        await ƒS.Character.show(characters.death, characters.death.pose.DeathBigAtGate, ƒS.positionPercent(50, 100));
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.fromBehindLookingAway, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Sound.fade(sound.breathing, 0, 0.1);
        await ƒS.Sound.fade(sound.celestial, 0.05, 0.1);
        await ƒS.Speech.tell(characters.death, "What is it?");
        await ƒS.Speech.tell(characters.pinkCat, "Death, may I come along?");
        await ƒS.Speech.tell(characters.death, "What? No!");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.crouchedSad, ƒS.positionPercent(83, 99));
        await ƒS.Character.hide(characters.death);
        await ƒS.Character.show(characters.death, characters.death.pose.angry, ƒS.positionPercent(20, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.death, "You know very well that you are not allowed to do so!");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingSad, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "But I want to die already! This place is so boring and guiding souls fucking sucks!");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalSad, ƒS.positionPercent(83, 99));
        await ƒS.Character.hide(characters.death);
        await ƒS.Character.show(characters.death, characters.death.pose.normal, ƒS.positionPercent(20, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.death, "Mhm. I got to admit, you've been here for quite some time.");
        await ƒS.update();
        await ƒS.Character.hide(characters.death);
        await ƒS.Character.show(characters.death, characters.death.pose.angry, ƒS.positionPercent(20, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.death, "You've been complaining a lot though. That got on my nerves a little bit…");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingSad, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "I'm soooorry, I was just not made for this!");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalSad, ƒS.positionPercent(83, 99));
        await ƒS.Character.hide(characters.death);
        await ƒS.Character.show(characters.death, characters.death.pose.normal, ƒS.positionPercent(20, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.death, "Actually, you were solely made to be a guide in limbo.");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.crouchedSad, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, "Oh no.");
        await ƒS.update();
        await ƒS.Character.hide(characters.death);
        await ƒS.Character.show(characters.death, characters.death.pose.smile, ƒS.positionPercent(20, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.death, "Ah, what the hell. I'm feeling generous today!");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.lovely, ƒS.positionPercent(83, 99));
        await ƒS.Character.hide(characters.death);
        await ƒS.Character.show(characters.death, characters.death.pose.normal, ƒS.positionPercent(20, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.death, "But I won't let you go so easily cause you're causing me more work!");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(83, 99));
        await ƒS.update();
        await ƒS.Speech.tell(characters.death, "I will have to craft a new guide if I lose you.");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(83, 99));
        await ƒS.Character.hide(characters.death);
        await ƒS.Character.show(characters.death, characters.death.pose.evilSmile, ƒS.positionPercent(20, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.death, "If " + dataForSave.nameProtagonist + " takes you with them, both your fates are linked to those of your companion!");
        await ƒS.update();
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal2, ƒS.positionPercent(83, 99));
        await ƒS.Character.hide(characters.death);
        await ƒS.Character.show(characters.death, characters.death.pose.normal, ƒS.positionPercent(20, 100));
        await ƒS.update();
        await ƒS.Speech.tell(characters.death, dataForSave.nameProtagonist + ", you choose first whether to allow Kitty to accompany you at all.");
        await ƒS.Speech.tell(characters.death, "Choose wisely.");
        await ƒS.update();


        let allowCat = {
            toFollow: "allow cat to follow you",
            notToFollow: "don't allow cat to follow you"
        }

        let allowcatRequest = await ƒS.Menu.getInput(allowCat, "choicesCSSClass");
        switch (allowcatRequest) {
            case allowCat.toFollow:
                dataForSave.catScore += 10;

                if (dataForSave.catScore >= 60) {
                    await ƒS.Sound.play(sound.purring, 1, false);
                    await ƒS.Character.hide(characters.death);
                    await ƒS.Character.show(characters.death, characters.death.pose.smile, ƒS.positionPercent(20, 100));
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.lovely, ƒS.positionPercent(83, 99));
                    await ƒS.update();
                    await ƒS.Sound.fade(sound.purring, 0, 3);
                    await ƒS.Speech.tell(characters.death, "It is decided.");
                    await ƒS.Speech.tell(characters.death, "Now, my little soul and you, kitty...step through the gate. Your destiny awaits on the other side.");
                    await ƒS.update();
                    await ƒS.Sound.play(sound.cuteMeow, 1, false);
                    await ƒS.Character.hide(characters.death);
                    await ƒS.Character.show(characters.death, characters.death.pose.DeathBigAtGate, ƒS.positionPercent(50, 100));
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.proud, ƒS.positionPercent(83, 99));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.pinkCat, "Thanks to both of you!");
                    await ƒS.update();
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talking, ƒS.positionPercent(83, 99));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.pinkCat, "Quick, let's go! Before he changes his mind!");
                    await ƒS.update();

                } else {
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talking, ƒS.positionPercent(83, 99));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.pinkCat, "Mhm, I don't know. I think I'll stay here.");
                    await ƒS.update();
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(83, 99));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.protagonist, "For real?");
                    await ƒS.update();
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(83, 99));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.pinkCat, "I won't take any chances. You haven't been very pleasant.");
                    await ƒS.update();
                    await ƒS.Character.hide(characters.death);
                    await ƒS.Character.show(characters.death, characters.death.pose.DeathBigAtGate, ƒS.positionPercent(50, 100));
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(83, 99));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.death, "It is decided.");
                    await ƒS.Speech.tell(characters.death, "Now, my little soul...step through the gate. Your destiny awaits on the other side.");
                    await ƒS.update();
                }

                break;

            case allowCat.notToFollow:
                dataForSave.betrayCat = true;
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(83, 99));
                await ƒS.Character.hide(characters.death);
                await ƒS.Character.show(characters.death, characters.death.pose.angry, ƒS.positionPercent(20, 100));
                await ƒS.update();

                if (dataForSave.catScore >= 60) {
                    await ƒS.Speech.tell(characters.pinkCat, "Wow, " + dataForSave.nameProtagonist + ". I really underestimated the shittiness of your character.");
                    await ƒS.update();
                    await ƒS.Character.hide(characters.pinkCat);
                    await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(83, 99));
                    await ƒS.update();
                    await ƒS.Speech.tell(characters.protagonist, "Sorry, but I haven't had the best time with you, you know. You're a mean brat.");
                } else {
                    await ƒS.Speech.tell(characters.pinkCat, "Lol. Since my fate would be linked to yours, believe me, I wanted to stay anyway.");
                }
                await ƒS.update();
                await ƒS.Character.hide(characters.death);
                await ƒS.Character.show(characters.death, characters.death.pose.DeathBigAtGate, ƒS.positionPercent(50, 100));
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.cleaningAss, ƒS.positionPercent(83, 99));
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, "Goodbye forever, " + dataForSave.nameProtagonist + ".");
                await ƒS.Speech.tell(characters.protagonist, "Goodbye.");
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.cleaningPaw, ƒS.positionPercent(83, 99));
                await ƒS.update();
                await ƒS.Speech.tell(characters.death, "It is decided.");
                await ƒS.Speech.tell(characters.death, "Step through the gate. Your destiny awaits on the other side.");
                await ƒS.update();

                break;
        }

        await ƒS.update();
        await ƒS.Sound.fade(sound.celestial, 1, 3);
        await ƒS.update();
        ƒS.Speech.hide();
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForCat").style.display = "none";
        await ƒS.Character.hide(characters.pinkCat);
        await ƒS.Character.hide(characters.death);
        await ƒS.Sound.play(sound.breathing, 3, true);
        await ƒS.Character.show(characters.gateCloser, characters.gateCloser.pose.closer1, ƒS.positionPercent(50, 50));
        await ƒS.update(2);
        await ƒS.Character.hide(characters.gateCloser);
        await ƒS.Character.show(characters.gateCloser, characters.gateCloser.pose.closer2, ƒS.positionPercent(50, 50));
        await ƒS.update(2);
        await ƒS.Character.hide(characters.gateCloser);
        await ƒS.Character.show(characters.gateCloser, characters.gateCloser.pose.closer3, ƒS.positionPercent(50, 50));
        await ƒS.update(2);
        await ƒS.Character.hide(characters.gateCloser);
        await ƒS.Character.show(characters.gateCloser, characters.gateCloser.pose.closer4, ƒS.positionPercent(50, 50));
        await ƒS.update(2);
        await ƒS.Character.hide(characters.gateCloser);
        await ƒS.Character.show(characters.gateCloser, characters.gateCloser.pose.closer5, ƒS.positionPercent(50, 50));
        await ƒS.Location.show(locations.gateCloser5);
        await ƒS.update(2);

        await ƒS.Sound.fade(sound.celestial, 0, 4);
        await ƒS.Sound.fade(sound.breathing, 0, 5);

        if (dataForSave.betrayCat == true) {
            return "BadEnding Hell Scene"
        }
        if (dataForSave.catScore < 60) {
            return "BadEnding Hell Scene"
        }
        if (dataForSave.catScore >= 60 && dataForSave.catScore < 90) {
            return "NeutralEnding Scene"
        }
        if (dataForSave.catScore >= 90) {
            return "GoodEnding Scene"
        }


    }
}