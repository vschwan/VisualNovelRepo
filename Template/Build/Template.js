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
        credits: "Credits"
    };
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
            edge: 2
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
                upset: "./Images/Characters/pinkCatFrightened.png"
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
        Template.ƒS.Sound.play(Template.sound.forestSound, 1, true);
        await new Promise(resolve => setTimeout(resolve, 2500));
        Template.ƒS.Sound.play(Template.sound.normalMoew, 1, false);
        //  ƒS.Sound.fade(sound.forestSound, 1, 0.0, true);
        // ƒS.Speech.hide(); //Sprechfenster ausblenden 
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
        /*  //animation stuff
          await ƒS.Character.show(characters.silvesterCat,characters.silvesterCat.pose.normal, ƒS.positions.bottomcenter);
          ƒS.update();
          await ƒS.Character.animate(characters.silvesterCat, characters.silvesterCat.pose.normal, animation());
    
        */
    }
    Template.firstScene = firstScene;
})(Template || (Template = {}));
//Erinnerung: Immer sinnvolle Bezeichnungen für Variablen wählen!
//mit F2 Bezeichnung/Begriff auswechseln
//maßstabgetreue Grafiken verwenden! 
//# sourceMappingURL=Template.js.map