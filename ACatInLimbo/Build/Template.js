"use strict";
var ACatInLimbo;
(function (ACatInLimbo) {
    async function Empty() {
        console.log("THE VISUAL NOVEL ENDS HERE");
    }
    ACatInLimbo.Empty = Empty;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function Forest() {
        console.log("Scene starting: Forest");
        let textForest = {
            protagonist: {
                T0001: "It's kinda eery here. Do we HAVE to be here?",
                T0002: "...I don't like this place.",
                T0003: "Uaaaah, fuck fuck fuck fuck, LET'S RUN!!!!",
                T0004: "Well, it's working?!",
                T0005: "...",
                T0006: "Ew, I'm nothing like that thing, it's fucking digusting.",
                T0007: "Really? That poor thing!",
                T0008: "What's wrong with it?",
                T0009: "Wait, so if I'm staying I'm gonna turn into this thing?",
                T0010: "...Great."
            },
            pinkCat: {
                T0001: "We don't HAVE to, but I want to visit an old friend. I want to see what he's been up to you know?",
                T0002: "That's cause you're a baby.",
                T0003: "!Oh, look! I think I just saw him!",
                T0004: "Come out you chicken shit!",
                T0005: "Wait...you're not going to attack, are you?",
                T0006: "I knew it! You're my old chicken shit friend!",
                T0007: "He doesn't do anything, he's just trying to be scary.",
                T0008: "You should get along well actually, you both seem to stem from the chicken family.",
                T0009: "Ugh, okay. Listen, it's just a poor soul like you, that got stuck here.",
                T0010: "What in Death's name is wrong with you?",
                T0011: "Wow, great, now it's gone. It heard you!",
                T0012: "You're kind of an idiot, you know? I'm gonna tell you right now, if you piss me off to much, I'm just leaving you here.",
                T0013: "Let's move on.",
                T0014: "See, we're nice! Do you remember me?",
                T0015: "Ui, that's gonna be difficult.",
                T0016: "It got lost here. Like you, if we don't stay on our path.",
                T0017: "Not exactly, but yeah. You're probably not gonna turn into a spider I think. Everyone's different.",
                T0018: "Yeah. So, buddy have you got any treats for me maybe?",
                T0019: "OMD, that was almost a word!",
                T0020: "Thank you my friend. Take it easy okay?"
            },
            spiderCreature: {
                T0001: "grmmmllb",
                T0002: "brbbrlll yaaaaa",
                T0003: "lmmmrb"
            }
        };
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        // document.getElementById("scoreForCat").style.display = "";
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.scaryForest, 2, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.forest);
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.circleSwirl.duration, ACatInLimbo.transition.circleSwirl.alpha, ACatInLimbo.transition.circleSwirl.edge);
        await ACatInLimbo.ƒS.update(2);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.walking, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textForest.protagonist.T0001);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.cleaningPaw, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0001);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textForest.protagonist.T0002);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0002);
        await ACatInLimbo.ƒS.update();
        //creature can be seen
        await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.normal, ACatInLimbo.spiderAnimationHide());
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.horrorDrum1, 1);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0003);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0004);
        await ACatInLimbo.ƒS.update();
        //Creature appears
        await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.normal, ACatInLimbo.spiderAnimationAppear());
        await ACatInLimbo.ƒS.update(2);
        await ACatInLimbo.ƒS.Character.hideAll();
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.horrorDrum2, 1);
        //creature attacks
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.attackBig, ACatInLimbo.ƒS.positionPercent(55, 55));
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.cathissing, 1);
        await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.scared, ACatInLimbo.ScaredCatAnimation());
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textForest.protagonist.T0003);
        await ACatInLimbo.ƒS.update();
        //fight or flight to lake or swamp
        let FightFlight = {
            fight: "Fight",
            flight: "Flight"
        };
        let fightFlightRequest = await ACatInLimbo.ƒS.Menu.getInput(FightFlight, "choicesCSSClass");
        switch (fightFlightRequest) {
            case FightFlight.flight:
                let nextLocation = {
                    swamp: "Swamp",
                    lake: "Lake"
                };
                if (ACatInLimbo.dataForSave.visitedLake == true) {
                    delete nextLocation.lake;
                }
                let nextLocationRequest = await ACatInLimbo.ƒS.Menu.getInput(nextLocation, "choicesCSSClass");
                switch (nextLocationRequest) {
                    case nextLocation.lake:
                        return "Lake Scene";
                        break;
                    case nextLocation.swamp:
                        return "Swamp Scene";
                        break;
                }
                break;
            case FightFlight.fight:
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.attack, ACatInLimbo.ƒS.positionPercent(50, 50));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.fromBehindLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0005, true);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.spiderCreature);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.normal, ACatInLimbo.ƒS.positionPercent(50, 50));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0006);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hideAll();
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.normal, ACatInLimbo.ƒS.positionPercent(50, 50));
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talking, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0007);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textForest.protagonist.T0004);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0008);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textForest.protagonist.T0005);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0009);
                await ACatInLimbo.ƒS.update();
                let HowToTreatSpider = {
                    berate: "berate spider creature",
                    console: "console spider creature"
                };
                let HowToTreatSpiderRequest = await ACatInLimbo.ƒS.Menu.getInput(HowToTreatSpider, "choicesCSSClass");
                switch (HowToTreatSpiderRequest) {
                    case HowToTreatSpider.berate:
                        await ACatInLimbo.ƒS.Character.hideAll();
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.sad, ACatInLimbo.ƒS.positionPercent(50, 50));
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textForest.protagonist.T0006);
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0010);
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Character.hideAll();
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
                        await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.sad, ACatInLimbo.spiderAnimationDisappear());
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.talkingAngry, ACatInLimbo.ƒS.positionPercent(80, 95));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0011);
                        ACatInLimbo.dataForSave.catScore -= 5;
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0012);
                        await ACatInLimbo.ƒS.update();
                        break;
                    case HowToTreatSpider.console:
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textForest.protagonist.T0007);
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Character.hideAll();
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.smile, ACatInLimbo.ƒS.positionPercent(50, 50));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0014);
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.spiderCreature, textForest.spiderCreature.T0001);
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0015);
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textForest.protagonist.T0008);
                        await ACatInLimbo.ƒS.Character.hideAll();
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.sad, ACatInLimbo.ƒS.positionPercent(50, 50));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0016);
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textForest.protagonist.T0009);
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0017);
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textForest.protagonist.T0010);
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Character.hideAll();
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalLookingAway, ACatInLimbo.ƒS.positionPercent(80, 95));
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.smile, ACatInLimbo.ƒS.positionPercent(50, 50));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0018);
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.spiderCreature, textForest.spiderCreature.T0002);
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0019);
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0020);
                        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.spiderCreature, textForest.spiderCreature.T0003);
                        //add flies to Inventory
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Character.hideAll();
                        await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.spiderCreature, ACatInLimbo.characters.spiderCreature.pose.smile, ACatInLimbo.spiderAnimationDisappear());
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.stretching, ACatInLimbo.ƒS.positionPercent(80, 95));
                        await ACatInLimbo.ƒS.update();
                        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
                        await ACatInLimbo.ƒS.update();
                        break;
                }
        }
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textForest.pinkCat.T0013);
        await ACatInLimbo.ƒS.update();
        let nextLocation = {
            swamp: "Swamp",
            lake: "Lake"
        };
        if (ACatInLimbo.dataForSave.visitedLake == true) {
            delete nextLocation.lake;
        }
        let nextLocationRequest = await ACatInLimbo.ƒS.Menu.getInput(nextLocation, "choicesCSSClass");
        switch (nextLocationRequest) {
            case nextLocation.lake:
                return "Lake Scene";
            case nextLocation.swamp:
                return "Swamp Scene";
        }
    }
    ACatInLimbo.Forest = Forest;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function Lake() {
        console.log("Scene starting: Lake");
        let text = {
            protagonist: {
                T0001: "Oh no"
            }
        };
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.lake);
        ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, text.protagonist.T0001);
    }
    ACatInLimbo.Lake = Lake;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    ACatInLimbo.ƒ = FudgeCore;
    ACatInLimbo.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    let gameMenu;
    //open entspricht Menu ist offen und false zu
    let menuIsOpen = true;
    ACatInLimbo.dataForSave = {
        visitedLake: false,
        nameProtagonist: "You",
        catScore: 10,
        scoreForCat: "",
        points: 0,
        pickedMeterBar: false,
        pickedChoice: false
        // started: false,
        // ended: false
        //hier auch Punkte verteilungssystem-Variable reinhauen
    };
    ACatInLimbo.characters = {
        protagonist: {
            name: ACatInLimbo.dataForSave.nameProtagonist,
            origin: ACatInLimbo.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                front: "./Images/Characters/protagonist/protagonistFront.png",
                side: "./Images/Characters/protagonist/protagonistSide.png",
                handsInHips: "./Images/Characters/protagonist/protagonistHandsInHips.png",
                scared: "./Images/Characters/protagonist/protagonistScared.png",
                thinking: "./Images/Characters/protagonist/protagonistThinking.png"
            }
        },
        narrator: {
            name: "Narrator",
            origin: ACatInLimbo.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {}
        },
        pinkCat: {
            name: "pink Cat",
            origin: ACatInLimbo.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                //pink Cat poses regular
                normal: "./Images/Characters/pinkCat/pinkCatNormal.png",
                normalLookingAway: "./Images/Characters/pinkCat/pinkCatNormalFromBehind.png",
                normalAngry: "./Images/Characters/pinkCat/pinkCatNormalAngry.png",
                fromBehindLookingAway: "./Images/Characters/pinkCat/pinkCatBehind.png",
                fromBehindLookingBack: "./Images/Characters/pinkCat/pinkCatBehindLook.png",
                scared: "./Images/Characters/pinkCat/pinkCatScared.png",
                cleaningAss: "./Images/Characters/pinkCat/pinkCatCleaningAss.png",
                cleaningPaw: "./Images/Characters/pinkCat/pinkCatCleaningPaw.png",
                curious: "./Images/Characters/pinkCat/pinkCatCurious.png",
                derpy1: "./Images/Characters/pinkCat/pinkCatDerp1.png",
                derpy2: "./Images/Characters/pinkCat/pinkCatDerp2.png",
                lovely: "./Images/Characters/pinkCat/pinkCatLove.png",
                layingOnBack: "./Images/Characters/pinkCat/pinkCatOnBack.png",
                sleeping: "./Images/Characters/pinkCat/pinkCatSleeping.png",
                stretching: "./Images/Characters/pinkCat/pinkCatStretching.png",
                talking: "./Images/Characters/pinkCat/pinkCatTalking.png",
                talkingAngry: "./Images/Characters/pinkCat/pinkCatTalkingAngry.png",
                thoughtful1: "./Images/Characters/pinkCat/pinkCatThoughtful1.png",
                thoughtful2: "./Images/Characters/pinkCat/pinkCatThoughtful2.png",
                thumbsUp: "./Images/Characters/pinkCat/pinkCatThumbsUp.png",
                walking: "./Images/Characters/pinkCat/pinkCatWalking.png",
                yawning: "./Images/Characters/pinkCat/pinkCatYawning.png",
                crouched: "./Images/Characters/pinkCat/pinkCatCrouched.png",
                crouchedLookingAway: "./Images/Characters/pinkCat/pinkCatCrouchedLookingAway.png",
                //pink Cat poses small 
                normalSmall: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatNormalSmall.png",
                scaredSmall: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatScaredSmall.png",
                curiousSmall: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatCuriousSmall.png",
                lovelySmall: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatLoveSmall.png",
                layingOnBackSmall: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatOnBackSmall.png",
                stretchingSmall: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatStretchingSmall.png",
                //pink Cat as stone Statue awakes
                awakening1: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening1.png",
                awakening2: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening2.png",
                awakening3: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening3.png",
                awakening4: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening4.png",
                awakening5: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening5.png",
                awakening6: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening6.png",
                awakening7: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening7.png",
                awakening8: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening8.png"
            }
        },
        stonePedestal: {
            name: "stonePedestal",
            origin: ACatInLimbo.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                stonePedestal: "./Images/Characters/pinkCat/pinkCatAwakening/stonePedestal.png"
            }
        },
        spiderCreature: {
            name: "Spider Creature",
            origin: ACatInLimbo.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                attack: "./Images/Characters/creatures/spiderCreature/spiderCreatureLightAttack.png",
                attackBig: "./Images/Characters/creatures/spiderCreature/spiderCreatureLightAttackBig.png",
                normal: "./Images/Characters/creatures/spiderCreature/spiderCreatureLightNormal.png",
                sad: "./Images/Characters/creatures/spiderCreature/spiderCreatureLightSad.png",
                smile: "./Images/Characters/creatures/spiderCreature/spiderCreatureLightSmile.png"
            }
        },
        swampCreature: {
            name: "Swamp Creature",
            origin: ACatInLimbo.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Characters/creatures/swampCreature/swampCreatureAsleep.png",
                asleep: "./Images/Characters/creatures/swampCreature/swampCreatureNormal.png"
            }
        }
    };
    ACatInLimbo.items = {
        Spider: {
            name: "Spider",
            description: "a small spider",
            image: "./Images/Items/spider.png",
            static: false //nicht gecheckt, falls false, einfach weglassen, weil schon autom. auf false
        },
        Fish: {
            name: "Fish",
            description: "a small fishy fish",
            image: "./Images/Items/fish.png",
            static: false
        },
        Fly: {
            name: "Fly",
            description: "a small annoying fly, like most flies are",
            image: "./Images/Items/fly.png",
            static: false
        }
    };
    /*export function UpdateName(): void {
      characters.protagonist.name = dataForSave.nameProtagonist;
    }*/
    function ItemUse() {
    }
    ACatInLimbo.ItemUse = ItemUse;
    //INVENTORY
    function OpenInventory() {
    }
    ACatInLimbo.OpenInventory = OpenInventory;
    //ANIMATIONS
    function ScaredCatAnimation() {
        //something
        return {
            start: { translation: ACatInLimbo.ƒS.positionPercent(85, 95), color: ACatInLimbo.ƒS.Color.CSS("", 1) },
            end: { translation: ACatInLimbo.ƒS.positionPercent(150, 100), color: ACatInLimbo.ƒS.Color.CSS("black", 0.5) },
            duration: 2,
            playmode: ACatInLimbo.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    ACatInLimbo.ScaredCatAnimation = ScaredCatAnimation;
    function spiderAnimationHide() {
        return {
            start: { translation: ACatInLimbo.ƒS.positionPercent(50, -20) },
            end: { translation: ACatInLimbo.ƒS.positionPercent(50, 20) },
            duration: 5,
            playmode: ACatInLimbo.ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
        };
    }
    ACatInLimbo.spiderAnimationHide = spiderAnimationHide;
    function spiderAnimationAppear() {
        return {
            start: { translation: ACatInLimbo.ƒS.positionPercent(50, -20) },
            end: { translation: ACatInLimbo.ƒS.positionPercent(50, 50) },
            duration: 5,
            playmode: ACatInLimbo.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    ACatInLimbo.spiderAnimationAppear = spiderAnimationAppear;
    function spiderAnimationDisappear() {
        return {
            start: { translation: ACatInLimbo.ƒS.positionPercent(50, 50) },
            end: { translation: ACatInLimbo.ƒS.positionPercent(50, -20) },
            duration: 5,
            playmode: ACatInLimbo.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    ACatInLimbo.spiderAnimationDisappear = spiderAnimationDisappear;
    function getAnimation() {
        return {
            start: { translation: ACatInLimbo.ƒS.positions.bottomleft, rotation: -20, scaling: new ACatInLimbo.ƒS.Position(0.5, 1.5), color: ACatInLimbo.ƒS.Color.CSS("white", 0.3) },
            end: { translation: ACatInLimbo.ƒS.positions.bottomright, rotation: 20, scaling: new ACatInLimbo.ƒS.Position(1.5, 0.5), color: ACatInLimbo.ƒS.Color.CSS("red") },
            duration: 1,
            playmode: ACatInLimbo.ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
        };
    }
    ACatInLimbo.getAnimation = getAnimation;
    //Transitions
    ACatInLimbo.transition = {
        puzzle: {
            duration: 1,
            alpha: "FreeTransitions/JigsawThemedTransitions/puzzle.png",
            edge: 1
        },
        swirlStuff: {
            duration: 1,
            alpha: "FreeTransitions/Others/027.jpg",
            edge: 1
        },
        circleSwirl: {
            duration: 2,
            alpha: "FreeTransitions/Others/009.jpg",
            edge: 1
        }
    };
    ACatInLimbo.sound = {
        // ambience
        forestWind: "Audio/Ambience/forestWind.mp3",
        scaryForest: "./Audio/Ambience/mixkit-scary-forest-at-night-2486.wav",
        meadowSound: "Audio/Ambience/spring-forest-birds-sounds.mp3",
        //catSounds
        normalMoew: "./Audio/catAudio/meow.mp3",
        cathissing: "./Audio/catAudio/cathisses.wav",
        demandingmeow1: "./Audio/catAudio/demandingMeow1.wav",
        demandingMeow2: "./Audio/catAudio/demandingMeow2.mp3",
        cuteMeow: "./Audio/catAudio/ANMLCat_Meow cat 7 (ID 1895)_BSB.wav",
        kindOfSadMeow: "./Audio/catAudio/262312__steffcaffrey__cat-meow1-80256.mp3",
        purrMeow: "./Audio/catAudio/cat-purr-meow-8327.mp3",
        purringDeep: "./Audio/catAudio/cat-purring-2-73009.mp3",
        purring: "Audio/catAudio/purring-cat-77928.mp3",
        longGrowl: "./Audio/catAudio/angry-cat-70623.mp3",
        growling1: "./Audio/catAudio/ANMLCat_Growling cat 3 (ID 1887)_BSB.wav",
        // SFX
        horrorDrum1: "./Audio/FX/mixkit-hard-horror-hit-drum-565 (1).wav",
        horrorDrum2: "./Audio/FX/mixkit-horror-deep-drum-heartbeat-559.wav"
        //zb drop (namen geben): "audio/drop.mp3"
    };
    ACatInLimbo.locations = {
        forest: {
            name: "Forest",
            background: "Images/Backgrounds/darkforest.png"
        },
        bay: {
            name: "Bay",
            background: "Images/Backgrounds/bay.png"
        },
        lake: {
            name: "Lake",
            background: "Images/Backgrounds/lake1.png"
        },
        meadow: {
            name: "Meadow",
            background: "Images/Backgrounds/meadow.png"
        },
        swamp: {
            name: "Swamp",
            background: "Images/Backgrounds/swamp.png"
        },
        river: {
            name: "River",
            background: "Images/Backgrounds/swampRiver.png"
        },
        nightpark: {
            name: "Nightpart",
            background: "Images/Backgrounds/nightpark.png"
        }
    };
    //Credits
    function credits() {
        ACatInLimbo.ƒS.Text.print("All characters are drawn by Valentina Schwan");
    }
    //MENU
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        inventory: "Inventory",
        credits: "Credits",
        close: "Close"
    };
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await ACatInLimbo.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await ACatInLimbo.ƒS.Progress.load();
                break;
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
            case inGameMenuButtons.credits:
                credits();
                break;
            case inGameMenuButtons.inventory:
                await ACatInLimbo.ƒS.Inventory.open();
        }
    }
    ACatInLimbo.buttonFunctionalities = buttonFunctionalities;
    // Menu shortcuts
    document.addEventListener("keydown", handleKeyPress);
    async function handleKeyPress(_event) {
        switch (_event.code) {
            case ACatInLimbo.ƒ.KEYBOARD_CODE.S:
                console.log("Save Scene");
                await ACatInLimbo.ƒS.Progress.save();
                break;
            case ACatInLimbo.ƒ.KEYBOARD_CODE.C:
                console.log("Credits");
                credits();
                break;
            case ACatInLimbo.ƒ.KEYBOARD_CODE.L:
                console.log("Load Scene");
                await ACatInLimbo.ƒS.Progress.load();
                break;
            case ACatInLimbo.ƒ.KEYBOARD_CODE.I:
                console.log("open Inventory");
                await ACatInLimbo.ƒS.Inventory.open();
                break;
            case ACatInLimbo.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Menu closed");
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Menu open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        //Menu
        gameMenu = ACatInLimbo.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSS");
        // buttonFunctionalities("Close");
        //Hide MeterBar
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForCat").style.display = "none";
        let scenes = [
            // { id: "Meadow Scene", scene: Meadow, name: "meadow", next: "" },
            // { id: "Forest Scene", scene: Forest, name: "Forest", next: "" },
            // { id: "Lake Scene", scene: Lake, name: "lake", next: "" },
            // {id: "Swamp Scene", scene: Swamp, name: "Swamp", next:""},
            { id: "Test Scene", scene: ACatInLimbo.testScene, name: "Test", next: "" },
            // { id: "choose", scene: secondScene, name: "second Scene", next: "" }, //id um ...next um zu bestimmen welche Szene nach dieser Szene abgespielt wird? mit Hilfe von id 
            // Empty ending scene to stop the program
            { id: "Empty Scene", scene: ACatInLimbo.Empty, name: "END" } //Progamm kann nicht stopenn, deswegen empty Scene zum Schluss erstellen, ohne Inhalt
        ];
        let uiElement = document.querySelector("[type=interface]");
        ACatInLimbo.dataForSave = ACatInLimbo.ƒS.Progress.setData(ACatInLimbo.dataForSave, uiElement);
        // start the sequence
        ACatInLimbo.ƒS.Progress.go(scenes);
    }
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function Meadow() {
        console.log("Scene starting: Meadow");
        let textAwakening = {
            protagonist: {
                T0001: "Where am I?",
                T0002: "WHO am I?",
                T0003: "Ah, I remember, it's ",
                T0004: "What is that strange statue doing over there....",
                T0005: "Well, this seems like a lovely meadow, but what the fuck am I doing here? I feel kind of...ghosty. Like I don't have a lot of substance.",
                T0006: "And a cat? Really?",
                T0007: "Why does it look so real? Like it's not supposed to be of stone. Maybe if I touch i...",
                T0008: "Wtf, it's alive!",
                T0009: "What now?",
                T0010: "Ouuuh, I'm sorry, I'm sorry, calm down!",
                T0011: "Well, you're certainly not a normal cat.",
                T0012: "Alright, I'm gonna behave from now on!"
            },
            pinkCat: {
                T0001: "Back off! I'm warning you. My claws are sharp as ever.",
                T0002: "You act like someone who has never ever even met a cat!",
                T0003: "Ugh, shut up. Do I have to expect you to behave like this all the time? Cause if that's the case I think I'm just gonna scooch right back on my stone over there.",
                T0004: "...I hope so.",
                T0005: "Not too fast, that's right. You seem to know your stuff I guess.",
                T0006: "Ouuuh, you seem nice!"
            }
        };
        let textIntro = {
            protagonist: {
                T0001: "Okay, so what is this and where am I? Do you know about this place?",
                T0002: "What?!",
                T0003: "Limbo? Like the Limbo in Christianity?",
                T0004: "...?",
                T0005: "So... there is a way out? Can I be with my family if I get out?",
                T0006: "You're right, I can't remember anything. But this doesn't really sound like a place that's not bad.",
                T0007: "Why is that?",
                T0008: "A tour to...where exactly?",
                T0009: "Oh, good God, yeah, let's go!"
            },
            pinkCat: {
                T0001: "A warm Hello to you too, good sir. You're dead!",
                T0002: "No need to panic. You're in Limbo.",
                T0003: "Uuuuuh, I don't know anything about Christianity stuff. Though this is neither a good nor a bad place. It's an in-between.",
                T0004: "Well, you're dead, but your soul didn't get to afterlife.",
                T0005: "Why do you care? You can't remember them. No, honestly I don't have a clue about what happens if you get through, but good thing is, you don't have to suffer for eternity.",
                T0006: "Does sound good, ey?",
                T0007: "Okay, you're right, I forgot, it's only a neutral place for me personally.",
                T0008: "That's cause I'm a guide. I can give you a tour if you want?",
                T0009: "To the gate to afterlife you dummy! Want to get out of here and avoid eternal suffering or do you want to stay?"
            }
        };
        //Hide MeterBar
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForCat").style.display = "none";
        //  buttonFunctionalities("Open");
        //Intro
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.meadowSound, 1, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.meadow);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.awakening1, ACatInLimbo.ƒS.positionPercent(65, 85));
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.swirlStuff.duration, ACatInLimbo.transition.swirlStuff.alpha, ACatInLimbo.transition.swirlStuff.edge);
        // ƒS.update();
        //  await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.front, ƒS.positionPercent(10, 95));
        await ACatInLimbo.ƒS.update(2);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textAwakening.protagonist.T0001);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textAwakening.protagonist.T0002);
        await ACatInLimbo.ƒS.update(1);
        //  await ƒS.Character.hide(characters.protagonist);
        //  await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.thinking, ƒS.positionPercent(10, 95));
        ACatInLimbo.dataForSave.nameProtagonist = await ACatInLimbo.ƒS.Speech.getInput();
        await ACatInLimbo.ƒS.update();
        //UpdateName();
        ACatInLimbo.characters.protagonist.name = ACatInLimbo.dataForSave.nameProtagonist; //Danke für nichts. Keine ahnung wie das gehen soll. Ich kann die protagonist figuren nciht mehr hiden wenn ich das mache 
        console.log(ACatInLimbo.dataForSave.nameProtagonist);
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textAwakening.protagonist.T0003 + ACatInLimbo.dataForSave.nameProtagonist + "!");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textAwakening.protagonist.T0004);
        await ACatInLimbo.ƒS.update();
        let firstAction = {
            awakeCat: "Touch the Stone-Cat",
            lookAround: "First, take a look around"
        };
        let firstActionRequest = await ACatInLimbo.ƒS.Menu.getInput(firstAction, "choicesCSSClass");
        switch (firstActionRequest) {
            case firstAction.lookAround:
                console.log("look around");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textAwakening.protagonist.T0005);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textAwakening.protagonist.T0006);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textAwakening.protagonist.T0007);
                await ACatInLimbo.ƒS.update();
                //inventory
                //  let cattest: H document.getElementsByName("pink Cat");
                //let speakerRightI: HTMLImageElement = <HTMLImageElement>document.getElementById("speakerRight_i");
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fly);
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fish);
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fly);
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fish);
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fly);
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fish);
                for (let i = 0; i < 5; i++) {
                    ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Spider);
                }
                await ACatInLimbo.ƒS.Inventory.open();
                await ACatInLimbo.ƒS.update();
            //maybe implement enabling collection of items
            //"Animation" : Stone Cat awakes
            case firstAction.awakeCat:
                console.log("cat awakes");
                ACatInLimbo.ƒS.Speech.hide();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.awakening2, ACatInLimbo.ƒS.positionPercent(65, 85));
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.awakening3, ACatInLimbo.ƒS.positionPercent(65, 85));
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                //       await ƒS.Character.hide(characters.protagonist);
                //     await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.scared, ƒS.positionPercent(10, 95));
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.awakening4, ACatInLimbo.ƒS.positionPercent(65, 85));
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textAwakening.protagonist.T0008);
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Speech.hide();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                //   await ƒS.Character.hide(characters.protagonist);
                // await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.thinking, ƒS.positionPercent(10, 95));
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.awakening5, ACatInLimbo.ƒS.positionPercent(65, 85));
                //insert cat yawn
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.awakening6, ACatInLimbo.ƒS.positionPercent(65, 85));
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.awakening7, ACatInLimbo.ƒS.positionPercent(65, 85));
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.awakening8, ACatInLimbo.ƒS.positionPercent(65, 85));
                await ACatInLimbo.ƒS.update(1);
                break;
        }
        //Cat stretch
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textAwakening.protagonist.T0009);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.hide();
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.stretchingSmall, ACatInLimbo.ƒS.positionPercent(70, 85));
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.stonePedestal, ACatInLimbo.characters.stonePedestal.pose.stonePedestal, ACatInLimbo.ƒS.positionPercent(65, 85));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.cuteMeow, 1, false);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalSmall, ACatInLimbo.ƒS.positionPercent(75, 85));
        await ACatInLimbo.ƒS.update(1);
        //Choices for how to act towards Cat
        let approachCat = {
            approachCatCarefully: "Carefully approach cat",
            ApproachCat: "Walk towards cat",
            Wait: "Wait"
        };
        //wait for input
        let approachCatRequest = await ACatInLimbo.ƒS.Menu.getInput(approachCat, "choicesCSSClass");
        //Show MeterBar 
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementById("scoreForCat").style.display = "";
        switch (approachCatRequest) {
            case approachCat.approachCatCarefully:
                console.log("Carefully approach cat");
                ACatInLimbo.dataForSave.catScore += 5;
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                //  await ƒS.Character.hide(characters.protagonist);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.curiousSmall, ACatInLimbo.ƒS.positionPercent(75, 85));
                //await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.side, ƒS.positionPercent(10, 95));
                await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.purrMeow, 1, false);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textAwakening.pinkCat.T0005);
                await ACatInLimbo.ƒS.update();
                break;
            case approachCat.ApproachCat:
                console.log("Walk towards cat");
                ACatInLimbo.dataForSave.catScore -= 5;
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                //   await ƒS.Character.hide(characters.protagonist);
                await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.longGrowl, 1, false);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.scaredSmall, ACatInLimbo.ƒS.positionPercent(75, 85));
                // await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.thinking, ƒS.positionPercent(10, 95));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textAwakening.pinkCat.T0001);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textAwakening.protagonist.T0010);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textAwakening.pinkCat.T0002);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textAwakening.protagonist.T0011);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textAwakening.pinkCat.T0003);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalSmall, ACatInLimbo.ƒS.positionPercent(75, 85));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textAwakening.protagonist.T0012);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textAwakening.pinkCat.T0004);
                await ACatInLimbo.ƒS.update();
                break;
            case approachCat.Wait:
                console.log("Wait");
                //choices for how to attract cat
                let attractCat = {
                    kneelDown: "Kneel down",
                    reachOut: "Reach Out",
                    makeSounds: "Make ksksks",
                };
                //booleans to be able to delete buttons/choices
                let pickedKneelDown;
                let pickedReachOut;
                let pickedMakeSounds;
                do {
                    if (pickedKneelDown == true) {
                        console.log(pickedKneelDown);
                        delete attractCat.kneelDown;
                        console.log("delete kneel down");
                    }
                    if (pickedMakeSounds == true) {
                        console.log(pickedMakeSounds);
                        delete attractCat.makeSounds;
                        console.log("delete make sounds");
                    }
                    if (pickedReachOut == true) {
                        console.log(pickedReachOut);
                        delete attractCat.reachOut;
                        console.log("delete reach out");
                    }
                    let attractCatRequest;
                    if (pickedKneelDown == true && pickedMakeSounds == true && pickedReachOut == true) {
                        ACatInLimbo.dataForSave.pickedChoice = true;
                    }
                    else {
                        attractCatRequest = await ACatInLimbo.ƒS.Menu.getInput(attractCat, "choicesCSSClass");
                    }
                    switch (attractCatRequest) {
                        case attractCat.kneelDown:
                            console.log("Kneel down");
                            ACatInLimbo.dataForSave.catScore += 5;
                            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.stonePedestal);
                            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.curiousSmall, ACatInLimbo.ƒS.positionPercent(75, 85));
                            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.stonePedestal, ACatInLimbo.characters.stonePedestal.pose.stonePedestal, ACatInLimbo.ƒS.positionPercent(65, 85));
                            await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.purrMeow, 1, false);
                            await ACatInLimbo.ƒS.update();
                            pickedKneelDown = true;
                            break;
                        case attractCat.makeSounds:
                            console.log("make ksksks");
                            ACatInLimbo.dataForSave.catScore += 5;
                            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.stonePedestal);
                            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.lovelySmall, ACatInLimbo.ƒS.positionPercent(75, 85));
                            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.stonePedestal, ACatInLimbo.characters.stonePedestal.pose.stonePedestal, ACatInLimbo.ƒS.positionPercent(65, 85));
                            await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.purrMeow, 1, false);
                            await ACatInLimbo.ƒS.update();
                            pickedMakeSounds = true;
                            break;
                        case attractCat.reachOut:
                            console.log("reach out");
                            ACatInLimbo.dataForSave.catScore += 5;
                            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                            await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.stonePedestal);
                            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.layingOnBackSmall, ACatInLimbo.ƒS.positionPercent(75, 85));
                            await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.stonePedestal, ACatInLimbo.characters.stonePedestal.pose.stonePedestal, ACatInLimbo.ƒS.positionPercent(65, 85));
                            await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.purrMeow, 1, false);
                            await ACatInLimbo.ƒS.update();
                            pickedReachOut = true;
                            break;
                    }
                } while (!ACatInLimbo.dataForSave.pickedChoice);
                await ACatInLimbo.ƒS.update(3);
                console.log("cat is happy and you got +20 in lovebar");
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.stonePedestal);
                await ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.purring, 1, false);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.lovelySmall, ACatInLimbo.ƒS.positionPercent(75, 85));
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.stonePedestal, ACatInLimbo.characters.stonePedestal.pose.stonePedestal, ACatInLimbo.ƒS.positionPercent(65, 85));
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textAwakening.pinkCat.T0006);
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.lovely, ACatInLimbo.ƒS.positionPercent(80, 95));
                await ACatInLimbo.ƒS.update();
                break;
        }
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        //  await ƒS.Character.hide(characters.protagonist);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(80, 95));
        //await ƒS.Character.show(characters.protagonist, characters.protagonist.pose.handsInHips, ƒS.positionPercent(10, 95));
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textIntro.protagonist.T0001);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textIntro.pinkCat.T0001);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textIntro.protagonist.T0002);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textIntro.pinkCat.T0002);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textIntro.protagonist.T0003);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textIntro.pinkCat.T0003);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textIntro.protagonist.T0004);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textIntro.pinkCat.T0004);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textIntro.protagonist.T0005);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textIntro.pinkCat.T0005);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textIntro.pinkCat.T0006);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textIntro.protagonist.T0006);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textIntro.pinkCat.T0007);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textIntro.protagonist.T0007);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textIntro.pinkCat.T0008);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textIntro.protagonist.T0008);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, textIntro.pinkCat.T0009);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, textIntro.protagonist.T0009);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.hideAll();
        await ACatInLimbo.ƒS.update();
        //pick next Location
        let nextLocation = {
            forest: "Forest",
            lake: "Lake"
        };
        let nextLocationRequest = await ACatInLimbo.ƒS.Menu.getInput(nextLocation, "choicesCSSClass");
        switch (nextLocationRequest) {
            case nextLocation.forest:
                return "Forest Scene";
                break;
            case nextLocation.lake:
                return "Lake Scene";
                break;
        }
    }
    ACatInLimbo.Meadow = Meadow;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function Swamp() {
        console.log("Scene starting: Swamp");
    }
    ACatInLimbo.Swamp = Swamp;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    //export let crc2: CanvasRenderingContext2D;
    /* function handleItems(): void {
       let nSpiders: number = 10;
   
       for (let i: number = 0; i < nSpiders; i++) {
   
         let x: number = (Math.random() * canvas.width);
         let y: number = (320 + Math.random() * canvas.height / 4);
   
         let posItem: Vector = new Vector(x, y);
         let item: Flower = new Flower(posFlower);
   
       }
     }*/
    /*function handleItems(): void {
       let img: HTMLImageElement = document.createElement("img");
       img.src = "./Images/Items/spider.png";
       canvas.appendChild(img);
       positionItemRandomly(img);
   
     }*/
    /* function positionItemRandomly(_img: HTMLImageElement): void {
   
       let left = Math.floor((Math.random() * 400) + 1) + "px";
       let top = Math.floor((Math.random() * 400) + 1) + "px";
       let imagestyle = _img.style;
       imagestyle.position = "absolute";
       imagestyle.top = top;
       imagestyle.left = left;
     }*/
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function testScene() {
        console.log("testScene starting");
        let text = {
            pinkCat: {
                T0001: "Hello, I'm a derpy cat.",
                T0002: "Who are you? Should I be afraid of you?",
                //reaction to choices
                T0003: "Ah, good, I'm glad about that.",
                T0004: "Ok, kinda boring.",
                T0005: "Uah!",
                T0006: "Fuck off, don't touch me."
            }
        };
        ACatInLimbo.ƒS.Speech.hide(); //Sprechfenster ausblenden 
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.forestWind, 1, true);
        await new Promise(resolve => setTimeout(resolve, 2500));
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.normalMoew, 1, false);
        //  ƒS.Sound.fade(sound.forestSound, 1, 0.0, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.forest);
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.puzzle.duration, ACatInLimbo.transition.puzzle.alpha, ACatInLimbo.transition.puzzle.edge);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(60, 90));
        await ACatInLimbo.ƒS.update(); //nach jeder location updaten 
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, text.pinkCat.T0001); //maßstabgetreue Grafiken verwenden! 
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, text.pinkCat.T0002);
        ACatInLimbo.ƒS.update(); // wie lange dauert die Fade-transition an? - Zahl in Klammer
        //Entscheidungsmöglichkeiten
        let dialogue = {
            iSayYes: "Yes",
            iSayNo: "No",
            iSayBla: "Bla"
        };
        let dialogueElement = await ACatInLimbo.ƒS.Menu.getInput(dialogue, "choicesCSSClass");
        switch (dialogueElement) {
            case dialogue.iSayYes:
                console.log("answer: yes");
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.update();
                ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.cathissing, 1, false);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.scared, ACatInLimbo.ƒS.positionPercent(60, 90)); //ohne await, würde die katze erst nach klicken erscheinen?
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, text.pinkCat.T0005);
                await ACatInLimbo.ƒS.update();
                ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, text.pinkCat.T0006);
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.scared, ACatInLimbo.ScaredCatAnimation());
                await ACatInLimbo.ƒS.update();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.update();
                break;
            case dialogue.iSayNo:
                //continue path here
                console.log("answer: No");
                ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.normalMoew, 1, false);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, text.pinkCat.T0003);
                //inventory
                // ƒS.Inventory.add(items.Spider);
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fly);
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fish);
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fly);
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fish);
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fly);
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Fish);
                for (let i = 0; i < 5; i++) { //5blobs, draufklicken --> konsumieren
                    ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Spider);
                }
                ACatInLimbo.ƒS.Inventory.open();
                ACatInLimbo.ƒS.update();
                await new Promise(resolve => setTimeout(resolve, 2500));
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, text.pinkCat.T0001); //maßstabgetreue Grafiken verwenden! 
                break;
            case dialogue.iSayBla:
                //continue path here
                console.log("answer: Bla");
                ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.demandingmeow1, 1, false);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, text.pinkCat.T0004);
                //METERBAR
                // dataForSave.pickedMeterScene = true;
                // document.getElementsByName("aisakaScore").forEach(meterStuff => meterStuff.hidden = true);
                // document.getElementById("scoreForAisaka").style.display = "none";
                ACatInLimbo.ƒS.Speech.hide();
                ACatInLimbo.dataForSave.catScore += 100;
                await ACatInLimbo.ƒS.update();
                console.log(ACatInLimbo.dataForSave.catScore);
                await ACatInLimbo.ƒS.update();
                break;
        }
        /*    await ƒS.Text.print("Hi"); //novel pages -->
            ƒS.Text.addClass("novelpage");//css klasse hinzufügen und gestalten
            //credits in novel page schreiben
            return "secondScene"; //andere Szene abspielen...id verwenden, nicht szenennahmens*/
        //boolean gibts ja auch noch, ganz vergessen
        let pickedYes;
        // let pickedNo: boolean;
        // let pickedOk: boolean;
        let pickedBla;
        if (pickedYes || pickedBla) {
            //delete dialogue.iSayBla; --> Entscheidungsmöglichkeiten oder so löschen
        }
        ;
        /*
        
                function handleItems(): void {
                 
                    let canvas: HTMLCanvasElement = document.querySelector("canvas");
                    let img: HTMLImageElement = document.createElement("img");
                    img.src = "./Images/Items/spider.png";
                    canvas.appendChild(img);
                    positionItemRandomly(img);
                }
        
                function positionItemRandomly(_img: HTMLImageElement): void {
                    let left = Math.floor((Math.random() * 400) + 1) + "px";
                    let top = Math.floor((Math.random() * 400) + 1) + "px";
                    console.log("spidies?");
                    let imagestyle = _img.style;
                    imagestyle.position = "absolute";
                    imagestyle.top = top;
                    imagestyle.left = left;
                }
        */
    }
    ACatInLimbo.testScene = testScene;
    //Erinnerung: Immer sinnvolle Bezeichnungen für Variablen wählen!
    //mit F2 Bezeichnung/Begriff auswechseln
    //maßstabgetreue Grafiken verwenden! 
    //wait for Signal bei Methoden --> true/false
    //Klassen definieren für chactere
    //ƒS.Speech.clear();
    //ƒS.Speech.hide() --> keine weitere Möglichkeit 
    //falls man Namen des Chacters nicht angeziegt haben will bei Speech.tell statt name "null" eingeben
    //ƒS.Speech.setTickerDelays(80, 5000); --> Textgeschwindigkeit + Zeit vergehen lassen, bevor Text erscheint
    // let signalDelay3: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)]) ; //Sekunden werden angegebne --> dann kan weiterverwenden
    // signalDelay3;
})(ACatInLimbo || (ACatInLimbo = {}));
//# sourceMappingURL=Template.js.map