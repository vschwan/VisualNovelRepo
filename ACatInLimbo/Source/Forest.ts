namespace ACatInLimbo {

    export async function Forest(): ƒS.SceneReturn {
        console.log("Scene starting: Forest");

        let textForest = {
            protagonist: {
                T0001: "It's kinda eery here. Do we HAVE to be here?",
                T0002: "...I don't like this place."
            },
            pinkCat: {
                T0001: "We don't HAVE to, but I want to visit an old friend. I want to see what he's been up to you know?",
                T0002: "That's cause you're a baby. Oh, look! I think I just saw him!"
            },
            spidercreature: {

            }

        }

        ƒS.Speech.hide(); //Sprachfenster ausblenden
        ƒS.Sound.play(sound.scaryForest, 1, true);
        ƒS.Location.show(locations.forest);
        ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.talking, ƒS.positionPercent(80, 95));
        await ƒS.update(transition.circleSwirl.duration, transition.circleSwirl.alpha, transition.circleSwirl.edge);
        await ƒS.update();
        ƒS.Speech.tell(characters.protagonist, textForest.protagonist.T0001);
        ƒS.Speech.tell(characters.pinkCat, textForest.pinkCat.T0001);
        ƒS.Speech.tell(characters.protagonist, textForest.protagonist.T0002);
        await ƒS.update();
        ƒS.Speech.tell(characters.pinkCat, textForest.pinkCat.T0002);

        await ƒS.update(4);



        /*
                //pick next Location
                let nextLocation = {
                    lake: "Lake"
                }
        
                let nextLocationRequest = await ƒS.Menu.getInput(nextLocation, "choicesCSSClass");
        
                switch (nextLocationRequest) {
        
                    case nextLocation.lake:
                        return "lake"
                        break;
        
                    default:
                        return "lake";
                        break
                }*/

    }
}