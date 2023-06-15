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
    ACatInLimbo.ƒ = FudgeCore;
    ACatInLimbo.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    ACatInLimbo.dataForSave = {
        catScore: 10,
        scoreForCat: "",
        nameProtagonist: "",
        points: 0,
        pickedMeterBar: false,
        pickedChoice: false
        // started: false,
        // ended: false
        //hier auch Punkte verteilungssystem-Variable reinhauen
    };
    ACatInLimbo.items = {
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
            start: { translation: ACatInLimbo.ƒS.positionPercent(60, 90), color: ACatInLimbo.ƒS.Color.CSS("", 1) },
            end: { translation: ACatInLimbo.ƒS.positionPercent(90, 90), color: ACatInLimbo.ƒS.Color.CSS("black", 0.5) },
            duration: 3,
            playmode: ACatInLimbo.ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
        };
    }
    ACatInLimbo.animation = animation;
    function getAnimation() {
        return {
            start: { translation: ACatInLimbo.ƒS.positions.bottomleft, rotation: -20, scaling: new ACatInLimbo.ƒS.Position(0.5, 1.5), color: ACatInLimbo.ƒS.Color.CSS("white", 0.3) },
            end: { translation: ACatInLimbo.ƒS.positions.bottomright, rotation: 20, scaling: new ACatInLimbo.ƒS.Position(1.5, 0.5), color: ACatInLimbo.ƒS.Color.CSS("red") },
            duration: 1,
            playmode: ACatInLimbo.ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
        };
    }
    ACatInLimbo.getAnimation = getAnimation;
    //Menu shortcuts
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close",
        credits: "Credits" //
    };
    function credits() {
        ACatInLimbo.ƒS.Text.print("");
    }
    let gameMenu;
    //open entspricht Menu ist offen und false zu
    let menuIsOpen = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await ACatInLimbo.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await ACatInLimbo.ƒS.Progress.load();
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
            case ACatInLimbo.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await ACatInLimbo.ƒS.Progress.save();
                break;
            case ACatInLimbo.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await ACatInLimbo.ƒS.Progress.load();
                break;
            case ACatInLimbo.ƒ.KEYBOARD_CODE.M:
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
        }
    };
    ACatInLimbo.sound = {
        // ambience
        forestSound: "Audio/forestWind.mp3",
        meadowSound: "Audio/Ambience/spring-forest-birds-sounds.mp3",
        //catSounds
        normalMoew: "Audio/catAudio/meow.mp3",
        cathissing: "Audio/catAudio/cathisses.wav",
        demandingmeow: "Template/Audio/demandingMeow.wav",
        cuteMeow: "./Audio/catAudio/ANMLCat_Meow cat 7 (ID 1895)_BSB.wav"
        // SFX
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
    ACatInLimbo.characters = {
        narrator: {
            name: "Narrator"
        },
        protagonist: {
            name: "You"
        },
        pinkCat: {
            name: "pinkCat",
            origin: ACatInLimbo.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                //pink Cat poses regular
                normal: "./Images/Characters/pinkCat/pinkCatNormal.png",
                fromBehind: "./Images/Characters/pinkCat/pinkCatBehind.png",
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
                thoughtful1: "./Images/Characters/pinkCat/pinkCatThoughtful1.png",
                thoughtful2: "./Images/Characters/pinkCat/pinkCatThoughtful2.png",
                thumbsUp: "./Images/Characters/pinkCat/pinkCatThumbsUp.png",
                walking: "./Images/Characters/pinkCat/pinkCatWalking.png",
                yawning: "./Images/Characters/pinkCat/pinkCatYawning.png",
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
                awakening8: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening8.png",
                stonePedestal: "./Images/Characters/pinkCat/pinkCatAwakening/stonePedestal.png"
            }
        },
        spiderCreature: {
            name: "-",
            origin: ACatInLimbo.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Characters/Creatures/....png"
            }
        }
    };
    // Szenenstruktur
    window.addEventListener("load", start);
    function start(_event) {
        //Hide MeterBar
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForCat").style.display = "none";
        //Menu
        gameMenu = ACatInLimbo.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSclass");
        buttonFunctionalities("Close");
        let scenes = [
            { id: "", scene: ACatInLimbo.firstScene, name: "meadow", next: "" },
            { id: "write", scene: ACatInLimbo.testScene, name: "test Scene", next: "" },
            { id: "choose", scene: ACatInLimbo.secondScene, name: "second Scene", next: "" },
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
    async function firstScene() {
        console.log("first Scene starting: Meadow");
        let text = {
            protagonist: {
                T0001: "Where am I?",
                T0002: "WHO am I?",
                T0003: "Ah, I remember, it's ",
                T0004: "What now? There's that strange statue....",
                T0005: "Well, this seems like a lovely meadow, but what the fuck am I doing here? I feel kind of...ghosty. Like I don't have a lot of substance.",
                T0006: "And a cat? Really?",
                T0007: "Why does it look so real? Like it's not supposed to be of stone. Maybe if I touch i...",
                T0008: "Wtf, it's alive!"
            },
            pinkCat: {
                T0001: "Back off! I'm warning you. My claws are sharp as ever.",
                T0002: "You act like someone who has never ever even met a cat!",
                T0004: "Not too fast, that's right.",
                T0005: "Ouuuh, you seem nice!"
            }
        };
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForCat").style.display = "none";
        ACatInLimbo.ƒS.Speech.hide(); //Sprachfenster ausblenden
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.meadowSound, 1, true);
        await ACatInLimbo.ƒS.Location.show(ACatInLimbo.locations.meadow);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.awakening1, ACatInLimbo.ƒS.positionPercent(65, 85));
        await ACatInLimbo.ƒS.update(ACatInLimbo.transition.swirlStuff.duration, ACatInLimbo.transition.swirlStuff.alpha, ACatInLimbo.transition.swirlStuff.edge);
        ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, text.protagonist.T0001);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, text.protagonist.T0002, false);
        await ACatInLimbo.ƒS.update(1);
        ACatInLimbo.dataForSave.nameProtagonist = await ACatInLimbo.ƒS.Speech.getInput(); // CSS unbedingt ändern--> in Mitte oder so Namen eintragen können
        ACatInLimbo.characters.protagonist.name = ACatInLimbo.dataForSave.nameProtagonist;
        console.log(ACatInLimbo.dataForSave.nameProtagonist);
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, text.protagonist.T0003 + ACatInLimbo.dataForSave.nameProtagonist + "!");
        await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, text.protagonist.T0004);
        /*  ƒS.Character.get(characters.pinkCat);
          let stoneCat = ƒS.Character.get(characters.pinkCat);*/
        let firstAction = {
            awakeCat: "Touch the Stone-Cat",
            lookAround: "First, take a look around"
        };
        let firstActionRequest = await ACatInLimbo.ƒS.Menu.getInput(firstAction, "choicesCSSClass");
        switch (firstActionRequest) {
            case firstAction.lookAround:
                console.log("look around");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, text.protagonist.T0005);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, text.protagonist.T0006);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, text.protagonist.T0007);
            case firstAction.awakeCat:
                console.log("cat awakes");
                ACatInLimbo.ƒS.Speech.hide();
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.awakening2, ACatInLimbo.ƒS.positionPercent(65, 85));
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.awakening3, ACatInLimbo.ƒS.positionPercent(65, 85));
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.protagonist, text.protagonist.T0008);
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.awakening4, ACatInLimbo.ƒS.positionPercent(65, 85));
                await ACatInLimbo.ƒS.update(1);
                await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.awakening5, ACatInLimbo.ƒS.positionPercent(65, 85));
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
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.stretchingSmall, ACatInLimbo.ƒS.positionPercent(70, 85));
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.stonePedestal, ACatInLimbo.ƒS.positionPercent(65, 85));
        await ACatInLimbo.ƒS.update(1);
        await ACatInLimbo.ƒS.Character.hide(ACatInLimbo.characters.pinkCat);
        await ACatInLimbo.ƒS.update();
        await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normalSmall, ACatInLimbo.ƒS.positionPercent(75, 85));
        await ACatInLimbo.ƒS.update(1);
        let approachCat = {
            approachCatCarefully: "Carefully approach cat",
            ApproachCat: "Walk towards cat",
            Wait: "Wait"
        };
        let approachCatRequest = await ACatInLimbo.ƒS.Menu.getInput(approachCat, "choicesCSSClass");
        //Sshow MeterBar 
        document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
        switch (approachCatRequest) {
            case approachCat.approachCatCarefully:
                console.log("Carefully approach cat");
                await ACatInLimbo.ƒS.Character.show(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.normal, ACatInLimbo.ƒS.positionPercent(75, 95));
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, text.pinkCat.T0004);
                ACatInLimbo.dataForSave.catScore += 2;
                break;
            case approachCat.ApproachCat:
                console.log("Walk towards cat");
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, text.pinkCat.T0001);
                await ACatInLimbo.ƒS.Speech.tell(ACatInLimbo.characters.pinkCat, text.pinkCat.T0002);
                ACatInLimbo.dataForSave.catScore -= 5;
                break;
            case approachCat.Wait:
                console.log("Wait");
                document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = false);
                // ƒS.Speech.hide();
                let attractCat = {
                    kneelDown: "Kneel down",
                    reachOut: "Reach Out",
                    makeSounds: "make ksksks"
                };
                let pickedKneelDown;
                let pickedReachOut;
                let pickedMakeSounds;
                do {
                    // if (pickedYes || pickedBla || pickedNo || pickedOk || pickedYes) {
                    //   delete firstDialogueElementAnswers.iSayYes;
                    // }
                    if (pickedKneelDown) {
                        delete attractCat.kneelDown;
                    }
                    else if (pickedMakeSounds) {
                        delete attractCat.makeSounds;
                    }
                    else if (pickedReachOut) {
                        delete attractCat.reachOut;
                    }
                    let attractCatRequest = await ACatInLimbo.ƒS.Menu.getInput(attractCat, "choicesCSSclass");
                    switch (attractCatRequest) {
                        case attractCat.kneelDown:
                            console.log("Kneel down");
                            ACatInLimbo.dataForSave.catScore += 5;
                            pickedKneelDown = true;
                            break;
                        case attractCat.makeSounds:
                            console.log("make ksksks");
                            ACatInLimbo.dataForSave.catScore += 5;
                            pickedMakeSounds = true;
                            break;
                        case attractCat.reachOut:
                            console.log("reach out");
                            ACatInLimbo.dataForSave.catScore += 5;
                            pickedReachOut = true;
                            break;
                    }
                } while (!ACatInLimbo.dataForSave.pickedChoice);
                ACatInLimbo.dataForSave.catScore += 5;
                console.log(ACatInLimbo.dataForSave.catScore);
                await ACatInLimbo.ƒS.update(5);
                document.getElementsByName("catScore").forEach(meterStuff => meterStuff.hidden = true);
                await ACatInLimbo.ƒS.update();
                break;
        }
    }
    ACatInLimbo.firstScene = firstScene;
})(ACatInLimbo || (ACatInLimbo = {}));
var ACatInLimbo;
(function (ACatInLimbo) {
    async function secondScene() {
    }
    ACatInLimbo.secondScene = secondScene;
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
        ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.forestSound, 1, true);
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
                await ACatInLimbo.ƒS.Character.animate(ACatInLimbo.characters.pinkCat, ACatInLimbo.characters.pinkCat.pose.scared, ACatInLimbo.animation());
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
                ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Spider);
                for (let i = 0; i < 5; i++) { //5blobs, draufklicken --> konsumieren
                    ACatInLimbo.ƒS.Inventory.add(ACatInLimbo.items.Spider);
                }
                ACatInLimbo.ƒS.Inventory.open();
                ACatInLimbo.ƒS.update();
                break;
            case dialogue.iSayBla:
                //continue path here
                console.log("answer: Bla");
                ACatInLimbo.ƒS.Sound.play(ACatInLimbo.sound.demandingmeow, 1, false);
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
        await ACatInLimbo.ƒS.Text.print("Hi"); //novel pages --> 
        ACatInLimbo.ƒS.Text.addClass("novelpage"); //css klasse hinzufügen und gestalten
        //credits in novel page schreiben 
        return "secondScene"; //andere Szene abspielen...id verwenden, nicht szenennahmens
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