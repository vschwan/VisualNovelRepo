declare namespace ACatInLimbo {
    let originAmountFish: number;
    let originAmountSpider: number;
    let originAmountFly: number;
}
declare namespace ACatInLimbo {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        visitedLake: boolean;
        visitedLakeTwice: boolean;
        visitedForest: boolean;
        visitedSwamp: boolean;
        visitedBay: boolean;
        visitedBayCreatureTwice: boolean;
        visitedRiver: boolean;
        pathMeadowForest: boolean;
        pathMeadowLake: boolean;
        pathForestLake: boolean;
        pathForestSwamp: boolean;
        pathLakeSwamp: boolean;
        pathSwampBay: boolean;
        pathSwampRiver: boolean;
        pathBayCave: boolean;
        pathBayRiver: boolean;
        pathRiverMountain: boolean;
        pathRiverCave: boolean;
        pathCaveClouds: boolean;
        pathMountainClouds: boolean;
        pathCloudsGate: boolean;
        betrayGoats: boolean;
        betrayCat: boolean;
        nameProtagonist: string;
        catLeaving: boolean;
        catScore: number;
        pickedMeterBar: boolean;
        pickedChoice: boolean;
        currentPath: string;
    };
}
declare namespace ACatInLimbo {
    function Map(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    let gameMenu: ƒS.Menu;
    let menuIsOpen: boolean;
    let inGameMenuButtons: {
        save: string;
        load: string;
        inventory: string;
        credits: string;
        help: string;
        close: string;
    };
    function buttonFunctionalities(_option: string): Promise<void>;
    function help(): void;
    function credits(): Promise<void>;
}
declare namespace ACatInLimbo {
    function ScaredCatAnimation(): ƒS.AnimationDefinition;
    function spiderAnimationHide(): ƒS.AnimationDefinition;
    function spiderAnimationAppear(): ƒS.AnimationDefinition;
    function spiderAnimationDisappear(): ƒS.AnimationDefinition;
    function swampCreatureAppearance(): ƒS.AnimationDefinition;
    function swampCreatureDisappearance(): ƒS.AnimationDefinition;
    function path(): ƒS.AnimationDefinition;
    function pathWalked(): ƒS.AnimationDefinition;
    function snailThrow(): ƒS.AnimationDefinition;
    function deathSlide(): ƒS.AnimationDefinition;
    function skywormAppearing(): ƒS.AnimationDefinition;
    function skywormDisappearing(): ƒS.AnimationDefinition;
    function flyingCatBlue(): ƒS.AnimationDefinition;
    function flyingCatRose(): ƒS.AnimationDefinition;
}
declare namespace ACatInLimbo {
    let sound: {
        forestWind: string;
        scaryForest: string;
        meadowSound: string;
        DrippingInCave: string;
        smallOceanWaves: string;
        LakeWaves: string;
        swamp: string;
        frogs: string;
        river: string;
        relaxMusic: string;
        anxiousMarch: string;
        celestial: string;
        slowInsanity: string;
        happyJazz: string;
        backgroundJazz: string;
        clockTicking: string;
        frogStomach: string;
        hell: string;
        cathissing: string;
        demanding: string;
        cuteMeow: string;
        cuteMeowMultiple: string;
        purrMeow: string;
        purring: string;
        growling: string;
        yawn: string;
        reowr: string;
        horrorDrum1: string;
        horrorDrum2: string;
        dive: string;
        slimeSound: string;
        chompEat: string;
        fishEat: string;
        dryFood: string;
        bubblingInTheDeep: string;
        lightbubbling: string;
        footstepsGrass: string;
        frogQuak: string;
        frogQuaks: string;
        snailbreak: string;
        monster: string;
        goats: string;
        wildRoar: string;
        taikoDrum: string;
        breathing: string;
        Howling: string;
    };
}
declare namespace ACatInLimbo {
    let characters: {
        protagonist: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                front: string;
                side: string;
                handsInHips: string;
                scared: string;
                thinking: string;
            };
        };
        pinkCat: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                normalLookingAway: string;
                normalAngry: string;
                normalSad: string;
                fromBehindLookingAway: string;
                fromBehindLookingBack: string;
                scared: string;
                cleaningAss: string;
                cleaningPaw: string;
                curious: string;
                derpy1: string;
                derpy2: string;
                lovely: string;
                layingOnBack: string;
                sleeping: string;
                stretching: string;
                talking: string;
                talkingAngry: string;
                talkingSad: string;
                thoughtful1: string;
                thoughtful2: string;
                thumbsUp: string;
                walking: string;
                yawning: string;
                crouched: string;
                crouchedLookingAway: string;
                crouchedSad: string;
                crouchedAngry: string;
                proud: string;
                play1: string;
                play2: string;
                normal2: string;
                normal2Sad: string;
                lookingUp: string;
                normalSmall: string;
                scaredSmall: string;
                scaredSmallTurnedRight: string;
                curiousSmall: string;
                lovelySmall: string;
                layingOnBackSmall: string;
                stretchingSmall: string;
                play1Small: string;
                play2Small: string;
                cleaningAssTiny: string;
                cleaningPawTiny: string;
                lookingUpTiny: string;
                onBackTiny: string;
                proudTiny: string;
                loveTiny: string;
                awakening1: string;
                awakening2: string;
                awakening3: string;
                awakening4: string;
                awakening5: string;
                awakening6: string;
                awakening7: string;
                awakening8: string;
            };
        };
        stonePedestal: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                stonePedestal: string;
            };
        };
        spiderCreature: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                attack: string;
                attackBig: string;
                normal: string;
                sad: string;
                smile: string;
            };
        };
        swampCreature: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                asleep: string;
                lessWood1: string;
                lessWood2: string;
                noSnails: string;
                smile: string;
            };
        };
        lakeCreature: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                sideEye: string;
                hide: string;
                attack: string;
                bait: string;
                smile: string;
                cry: string;
                hardCry: string;
                heartEyes: string;
                heartEyesBroken: string;
                hideSad: string;
                smileHeart: string;
            };
        };
        bayCreature: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                armSide: string;
                attack: string;
                coin: string;
                happy: string;
                headAngry: string;
                headNormal: string;
                heart: string;
                lookingDownSad: string;
                lookingDown: string;
                normal: string;
                talking: string;
                talkingAngry: string;
                glow: string;
                happyHeart: string;
            };
        };
        caveCreature: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                sound: string;
                toungeOut: string;
                attack: string;
            };
        };
        death: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                fishingLookingDown: string;
                fishingLookingUp: string;
                normal: string;
                smile: string;
                evilSmile: string;
                angry: string;
                surprised: string;
                DeathBigAtGate: string;
            };
        };
        gateCloser: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                closer1: string;
                closer2: string;
                closer3: string;
                closer4: string;
                closer5: string;
            };
        };
        goats: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                allGoats: string;
                singleGoat: string;
            };
        };
        path: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                meadowForest: string;
                meadowLake: string;
                forestLake: string;
                forestSwamp: string;
                lakeSwamp: string;
                swampRiver: string;
                swampBay: string;
                bayRiver: string;
                bayCave: string;
                riverCave: string;
                riverMountains: string;
                mountainsClouds: string;
                caveClouds: string;
                cloudsGate: string;
            };
        };
        riverflow: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                plain: string;
                flow1: string;
                flow2: string;
                flow3: string;
                flowWaving3: string;
                flow4: string;
                flowWaving4: string;
                flow5: string;
                flow6: string;
            };
        };
        snail: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        skyworm: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                friendly: string;
                thinking: string;
                evil: string;
                excited: string;
                cheeky: string;
                dreaming: string;
                smelling: string;
                persuading: string;
                fin: string;
                bye: string;
                disappearing: string;
                angry: string;
                angry2: string;
                cliffEdge: string;
            };
        };
        orangeCat: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                looking: string;
                reading: string;
                waving: string;
            };
        };
        blueCat: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                flying: string;
            };
        };
        roseCat: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                flying: string;
            };
        };
        catGod: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                smile: string;
                lookingLeft: string;
                lookingRight: string;
            };
        };
        multipleCats: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                curious: string;
            };
        };
    };
}
declare namespace ACatInLimbo {
    let items: {
        Spider: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        Fish: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        Fly: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        Snail: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        Fireflies: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        Heart: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        Coin: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
}
declare namespace ACatInLimbo {
    let locations: {
        forest: {
            name: string;
            background: string;
        };
        bay: {
            name: string;
            background: string;
        };
        lake: {
            name: string;
            background: string;
        };
        meadow: {
            name: string;
            background: string;
        };
        swamp: {
            name: string;
            background: string;
        };
        river: {
            name: string;
            background: string;
        };
        map: {
            name: string;
            background: string;
        };
        riverflow: {
            name: string;
            background: string;
        };
        caveEntrance: {
            name: string;
            background: string;
        };
        caveInside: {
            name: string;
            background: string;
        };
        caveInsideDark: {
            name: string;
            background: string;
        };
        caveExit: {
            name: string;
            background: string;
        };
        mountains: {
            name: string;
            background: string;
        };
        clouds: {
            name: string;
            background: string;
        };
        gate: {
            name: string;
            background: string;
        };
        gateCloser5: {
            name: string;
            background: string;
        };
        badEndingFrog: {
            name: string;
            background: string;
        };
        badEndingFrogFin: {
            name: string;
            background: string;
        };
        badEndingHell: {
            name: string;
            background: string;
        };
        badEndingHellFin: {
            name: string;
            background: string;
        };
        neutralEnding: {
            name: string;
            background: string;
        };
        neutralEndingFin: {
            name: string;
            background: string;
        };
        badEndingLostCat: {
            name: string;
            background: string;
        };
        badEndingLostCatFin: {
            name: string;
            background: string;
        };
        goodEndingNoCats: {
            name: string;
            background: string;
        };
        goodEnding: {
            name: string;
            background: string;
        };
        goodEndingFin: {
            name: string;
            background: string;
        };
    };
}
declare namespace ACatInLimbo {
    let transition: {
        swirlStuff: {
            duration: number;
            alpha: string;
            edge: number;
        };
        circleSwirl: {
            duration: number;
            alpha: string;
            edge: number;
        };
        hardEdges: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wet1: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wet2: {
            duration: number;
            alpha: string;
            edge: number;
        };
        dots: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wildSwirl: {
            duration: number;
            alpha: string;
            edge: number;
        };
        straightLines: {
            duration: number;
            alpha: string;
            edge: number;
        };
        maze: {
            duration: number;
            alpha: string;
            edge: number;
        };
        swirl: {
            duration: number;
            alpha: string;
            edge: number;
        };
        circleWipeCCW: {
            duration: number;
            alpha: string;
            edge: number;
        };
        fuzzyPatches: {
            duration: number;
            alpha: string;
            edge: number;
        };
        sunCatcher: {
            duration: number;
            alpha: string;
            edge: number;
        };
        badEndingLostCat: {
            duration: number;
            alpha: string;
            edge: number;
        };
        goodEnding: {
            duration: number;
            alpha: string;
            edge: number;
        };
        neutralEnding: {
            duration: number;
            alpha: string;
            edge: number;
        };
        badEndingFrog: {
            duration: number;
            alpha: string;
            edge: number;
        };
        badEndingHell: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
}
declare namespace ACatInLimbo {
    function Bay(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function CaveEntrance(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function CaveExit(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function CaveInside(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function Clouds(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function Empty(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function Forest(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function Gate(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function Lake(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function Meadow(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function Mountain(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function River(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function Swamp(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function BadEndingFrog(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function BadEndingHell(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function BadEndingLostCat(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function GoodEnding(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function NeutralEnding(): ƒS.SceneReturn;
}
