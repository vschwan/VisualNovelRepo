"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Template.dataForSave = {
        nameProtagonist: "cat",
        points: 0
        // started: false,
        // ended: false
        //hier auch Punkte verteilungssystem-Variable reinhauen
    };
    Template.items = {
        Spider: {
            name: "Spider",
            description: "a spidery spider",
            image: "./Images/Items/spider.png",
            static: true //nicht gecheckt, falls false, einfach weglassen, weil schon autom. auf false
        },
        Fish: {
            name: "Fish",
            description: "a tiny fishy fish",
            image: "./Images/Items/fish.png",
            static: true
        },
        Fly: {
            name: "Fly",
            description: "an annoying fly, like most flies",
            image: "./Images/Items/fly.png",
            static: true
        }
    };
    function animation() {
        //something
        return {
            start: { translation: Template.ƒS.positionPercent(60, 90), color: Template.ƒS.Color.CSS("", 1) },
            end: { translation: Template.ƒS.positionPercent(90, 90), color: Template.ƒS.Color.CSS("black", 0.5) },
            duration: 3,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
        };
    }
    Template.animation = animation;
    function getAnimation() {
        return {
            start: { translation: Template.ƒS.positions.bottomleft, rotation: -20, scaling: new Template.ƒS.Position(0.5, 1.5), color: Template.ƒS.Color.CSS("white", 0.3) },
            end: { translation: Template.ƒS.positions.bottomright, rotation: 20, scaling: new Template.ƒS.Position(1.5, 0.5), color: Template.ƒS.Color.CSS("red") },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
        };
    }
    Template.getAnimation = getAnimation;
    //Menu shortcuts
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close",
        credits: "Credits" //
    };
    function credits() {
        Template.ƒS.Text.print("");
    }
    let gameMenu;
    //open entspricht Menu ist offen und false zu
    let menuIsOpen = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await Template.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await Template.ƒS.Progress.load();
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
            case inGameMenuButtons.credits:
                credits();
        }
    }
    // Menu shortcuts
    document.addEventListener("keydown", handleKeyPress);
    async function handleKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Close");
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }
    Template.transition = {
        puzzle: {
            duration: 1,
            alpha: "FreeTransitions/JigsawThemedTransitions/puzzle.png",
            edge: 1
        }
    };
    Template.sound = {
        // themes
        forestSound: "Audio/forestWind.mp3",
        //catSounds
        normalMoew: "Audio/catAudio/meow.mp3",
        cathissing: "Audio/catAudio/cathisses.wav",
        demandingmeow: "Template/Audio/demandingMeow.wav"
        // SFX
        //zb drop (namen geben): "audio/drop.mp3"
    };
    Template.locations = {
        forest: {
            name: "Forest",
            background: "Images/Backgrounds/forestBackground.png"
        },
        nightpark: {
            name: "Nightpart",
            background: "Images/Backgrounds/nightpark.png"
        }
    };
    Template.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: ""
        },
        pinkCat: {
            name: "pinkCat",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Characters/pinkCatNormal.png",
                angry: "",
                happy: "",
                upset: "./Images/Characters/pinkCatFrightened.png",
                dormant: "./Images/Characters/pinkCatDormant.png"
            }
        },
        silvesterCat: {
            name: "silvesterCat",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Characters/silvesterCat.png"
            }
        }
    };
    // Szenenstruktur
    window.addEventListener("load", start);
    function start(_event) {
        //Menu
        gameMenu = Template.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSclass");
        buttonFunctionalities("Close");
        let scenes = [
            { scene: Template.firstScene, name: "first Scene" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function firstScene() {
        console.log("FirstScene starting");
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
        Template.ƒS.Speech.hide(); //Sprechfenster ausblenden 
        Template.ƒS.Sound.play(Template.sound.forestSound, 1, true);
        await new Promise(resolve => setTimeout(resolve, 2500));
        Template.ƒS.Sound.play(Template.sound.normalMoew, 1, false);
        //  ƒS.Sound.fade(sound.forestSound, 1, 0.0, true);
        await Template.ƒS.Location.show(Template.locations.forest);
        await Template.ƒS.update(Template.transition.puzzle.duration, Template.transition.puzzle.alpha, Template.transition.puzzle.edge);
        await Template.ƒS.Character.show(Template.characters.pinkCat, Template.characters.pinkCat.pose.normal, Template.ƒS.positionPercent(60, 90));
        await Template.ƒS.update(); //nach jeder location updaten 
        await Template.ƒS.Speech.tell(Template.characters.pinkCat, text.pinkCat.T0001); //maßstabgetreue Grafiken verwenden! 
        await Template.ƒS.Speech.tell(Template.characters.pinkCat, text.pinkCat.T0002);
        Template.ƒS.update(); // wie lange dauert die Fade-transition an? - Zahl in Klammer
        //Entscheidungsmöglichkeiten
        let dialogue = {
            iSayYes: "Yes",
            iSayNo: "No",
            iSayBla: "Bla"
        };
        let dialogueElement = await Template.ƒS.Menu.getInput(dialogue, "choicesCSSClass");
        switch (dialogueElement) {
            case dialogue.iSayYes:
                console.log("answer: yes");
                await Template.ƒS.Character.hide(Template.characters.pinkCat);
                await Template.ƒS.update();
                Template.ƒS.Sound.play(Template.sound.cathissing, 1, false);
                await Template.ƒS.Character.show(Template.characters.pinkCat, Template.characters.pinkCat.pose.upset, Template.ƒS.positionPercent(60, 90)); //ohne await, würde die katze erst nach klicken erscheinen?
                await Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.characters.pinkCat, text.pinkCat.T0005);
                await Template.ƒS.update();
                Template.ƒS.Speech.tell(Template.characters.pinkCat, text.pinkCat.T0006);
                await Template.ƒS.Character.animate(Template.characters.pinkCat, Template.characters.pinkCat.pose.upset, Template.animation());
                await Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.characters.pinkCat);
                await Template.ƒS.update();
                break;
            case dialogue.iSayNo:
                //continue path here
                console.log("answer: No");
                Template.ƒS.Sound.play(Template.sound.normalMoew, 1, false);
                await Template.ƒS.Speech.tell(Template.characters.pinkCat, text.pinkCat.T0003);
                //inventory
                Template.ƒS.Inventory.add(Template.items.Spider);
                for (let i = 0; i < 5; i++) { //5blobs, draufklicken --> konsumieren
                    Template.ƒS.Inventory.add(Template.items.Spider);
                }
                Template.ƒS.Inventory.open();
                Template.ƒS.update();
                break;
            case dialogue.iSayBla:
                //continue path here
                console.log("answer: Bla");
                Template.ƒS.Sound.play(Template.sound.demandingmeow, 1, false);
                await Template.ƒS.Speech.tell(Template.characters.pinkCat, text.pinkCat.T0004);
                break;
        }
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
    Template.firstScene = firstScene;
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
})(Template || (Template = {}));
var Template;
(function (Template) {
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
    function handleItems() {
        let img = document.createElement("img");
        img.src = "./Images/Items/spider.png";
        Template.canvas.appendChild(img);
        positionItemRandomly(img);
    }
    function positionItemRandomly(_img) {
        let left = Math.floor((Math.random() * 400) + 1) + "px";
        let top = Math.floor((Math.random() * 400) + 1) + "px";
        let imagestyle = _img.style;
        imagestyle.position = "absolute";
        imagestyle.top = top;
        imagestyle.left = left;
    }
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map