namespace ACatInLimbo {

    export async function Swamp(): ƒS.SceneReturn {
        console.log("Scene starting: Swamp");

        let textSwamp = {
            protagonist: {
                T0001: "Bah, it really doesn't smmell  good here!",
                T0002: "What was that?",

                TD11: "Sorry, I just think it looks a bit nasty.",

                TD21: "He looks really sad. Maybe we can help him somehow?",
                TD22: "Alright. Is it the wood that sticks inside your body?",
                TD23: "alright, I'm gonna do it!",
                TD24: "Better?",
                TD25: "Well, he was talkative. Hey, I think we got something from him!"
            },
            pinkCat: {
                T0001: "Ugh, you're right, let's move on ASAP.",
                T0002: "The next shitshow, I fear.",
                T0003: "Holy moly, what happened to YOU?",

                TD11: "What?! How can you be so heartless?",
                TD12: "Then let's go, I guess. I would drown If I tried to help him.",

                TD21: "Are you hurt, maybe?",
                TD22: "Sounds about right. Okay let's get that stuff out of you. It would hurt me too to be honest.",
                TD23: "Hey, can I get those snails maybe?",
                TD24: "ehm…alright? If it doesn't mind…",
                TD25: "Noice. Maybe it's gonna be of use. Please let's move forward now, this place stinks like hell!"
            },
            swampCreature: {
                T0001: "blubblblblblb!"
            }
        }

        ƒS.Speech.hide(); //Sprachfenster ausblenden
        ƒS.Sound.play(sound.frogs, 0.5, true);
        ƒS.Sound.play(sound.swamp, 0.5, true);
        await ƒS.Location.show(locations.swamp);
        await ƒS.update(transition.wet2.duration, transition.wet2.alpha, transition.wet2.edge);
        await ƒS.update(1);
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normalAngry, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Speech.tell(characters.protagonist, textSwamp.protagonist.T0001);
        await ƒS.update();
        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talkingAngry, ƒS.positionPercent(80, 95));
        await ƒS.update();
        await ƒS.Speech.tell(characters.pinkCat, textSwamp.pinkCat.T0001);
        await ƒS.update();
        await ƒS.Sound.play(sound.bubblingInTheDeep, 1, false);
        await ƒS.Character.animate(characters.swampCreature, characters.swampCreature.pose.asleep, swampCreatureAppearance());



    }
}