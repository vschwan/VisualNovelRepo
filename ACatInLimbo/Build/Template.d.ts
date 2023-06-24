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
        visitedForest: boolean;
        nameProtagonist: string;
        catScore: number;
        points: number;
        pickedMeterBar: boolean;
        pickedChoice: boolean;
        currentPath: string;
    };
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
        narrator: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {};
        };
        pinkCat: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                normalLookingAway: string;
                normalAngry: string;
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
                thoughtful1: string;
                thoughtful2: string;
                thumbsUp: string;
                walking: string;
                yawning: string;
                crouched: string;
                crouchedLookingAway: string;
                normalSmall: string;
                scaredSmall: string;
                curiousSmall: string;
                lovelySmall: string;
                layingOnBackSmall: string;
                stretchingSmall: string;
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
    };
    function help(): void;
    function buttonFunctionalities(_option: string): Promise<void>;
}
declare namespace ACatInLimbo {
    function ScaredCatAnimation(): ƒS.AnimationDefinition;
    function spiderAnimationHide(): ƒS.AnimationDefinition;
    function spiderAnimationAppear(): ƒS.AnimationDefinition;
    function spiderAnimationDisappear(): ƒS.AnimationDefinition;
    function swampCreatureAppearance(): ƒS.AnimationDefinition;
    function swampCreatureDisappearance(): ƒS.AnimationDefinition;
}
declare namespace ACatInLimbo {
    let sound: {
        forestWind: string;
        scaryForest: string;
        meadowSound: string;
        lakeSound: string;
        DrippingInCave: string;
        smallOceanWaves: string;
        LakeWaves: string;
        swamp: string;
        frogs: string;
        normalMoew: string;
        cathissing: string;
        demandingmeow1: string;
        demandingMeow2: string;
        cuteMeow: string;
        kindOfSadMeow: string;
        purrMeow: string;
        purringDeep: string;
        purring: string;
        growling1: string;
        growling2: string;
        growling3: string;
        yawn: string;
        horrorDrum1: string;
        horrorDrum2: string;
        dive: string;
        slimeSound: string;
        stepOnSlug: string;
        chompEat: string;
        fishEat: string;
        dryFood: string;
        bubblingInTheDeep: string;
        lightbubbling: string;
        footstepsForest: string;
        footstepsGrass: string;
    };
}
declare namespace ACatInLimbo {
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
        meadowForest: {
            name: string;
            background: string;
        };
    };
}
declare namespace ACatInLimbo {
    let transition: {
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
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
        straightLines: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
}
declare namespace ACatInLimbo {
    function BadEnding(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function Empty(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function Forest(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function Lake(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function Map(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function Meadow(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function Swamp(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function testScene(): ƒS.SceneReturn;
}
