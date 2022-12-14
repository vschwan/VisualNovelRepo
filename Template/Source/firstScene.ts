namespace Template {

    export async function firstScene(): ƒS.SceneReturn { //um Fudge Story funktion aufzurufen - Szene aufrufen
        console.log("FirstScene starting");
        let text = {
            pinkCat: { //charakter muss in der main angelegt werden (oder anscheinend auch nicht, aber zur ÜBersicht sinnvol??)
                T0001: "Hello, I'm a derpy cat.",
                T0002: "Who are you? Should I be afraid of you?",
                //reaction to choices
                T0003: "Ah, good, I'm glad about that.",
                T0004: "Ok, kinda boring.",
                T0005: "Uah!",
                T0006: "Fuck off, don't touch me."
            }
        };

        ƒS.Speech.hide(); //Sprechfenster ausblenden 
        ƒS.Sound.play(sound.forestSound, 1, true);
        await new Promise(resolve => setTimeout(resolve, 2500));
        ƒS.Sound.play(sound.normalMoew, 1, false);
        //  ƒS.Sound.fade(sound.forestSound, 1, 0.0, true);

        await ƒS.Location.show(locations.forest);
        await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge);

        await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.normal, ƒS.positionPercent(60, 90));

        await ƒS.update(); //nach jeder location updaten 
        await ƒS.Speech.tell(characters.pinkCat, text.pinkCat.T0001); //maßstabgetreue Grafiken verwenden! 
        await ƒS.Speech.tell(characters.pinkCat, text.pinkCat.T0002);
        ƒS.update(); // wie lange dauert die Fade-transition an? - Zahl in Klammer

        //Entscheidungsmöglichkeiten
        let dialogue = {
            iSayYes: "Yes",
            iSayNo: "No",
            iSayBla: "Bla"
        };

        let dialogueElement = await ƒS.Menu.getInput(dialogue, "choicesCSSClass");

        switch (dialogueElement) {
            case dialogue.iSayYes:
                console.log("answer: yes");
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.update();
                ƒS.Sound.play(sound.cathissing, 1, false);
                await ƒS.Character.show(characters.pinkCat, characters.pinkCat.pose.upset, ƒS.positionPercent(60, 90)); //ohne await, würde die katze erst nach klicken erscheinen?
                await ƒS.update();
                await ƒS.Speech.tell(characters.pinkCat, text.pinkCat.T0005);
                await ƒS.update();
                ƒS.Speech.tell(characters.pinkCat, text.pinkCat.T0006);
                await ƒS.Character.animate(characters.pinkCat, characters.pinkCat.pose.upset, animation());
                await ƒS.update();
                await ƒS.Character.hide(characters.pinkCat);
                await ƒS.update();
                break;

            case dialogue.iSayNo:
                //continue path here
                console.log("answer: No");
                ƒS.Sound.play(sound.normalMoew, 1, false);
                await ƒS.Speech.tell(characters.pinkCat, text.pinkCat.T0003);

                //inventory
                ƒS.Inventory.add(items.Spider);
                for (let i: number = 0; i < 5; i++) { //5blobs, draufklicken --> konsumieren
                    ƒS.Inventory.add(items.Spider);
                }
                ƒS.Inventory.open();
                ƒS.update();
                break;

            case dialogue.iSayBla:
                //continue path here
                console.log("answer: Bla");
                ƒS.Sound.play(sound.demandingmeow, 1, false);
                await ƒS.Speech.tell(characters.pinkCat, text.pinkCat.T0004);
                break;



        }

        //boolean gibts ja auch noch, ganz vergessen
        let pickedYes: boolean;
        // let pickedNo: boolean;
        // let pickedOk: boolean;
        let pickedBla: boolean;

        if (pickedYes || pickedBla) {
            //delete dialogue.iSayBla; --> Entscheidungsmöglichkeiten oder so löschen
        };

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





}
