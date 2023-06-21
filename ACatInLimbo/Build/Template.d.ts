declare namespace ACatInLimbo {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        visitedLake: boolean;
        nameProtagonist: string;
        catScore: number;
        scoreForCat: string;
        points: number;
        pickedMeterBar: boolean;
        pickedChoice: boolean;
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
            };
        };
    };
    function ItemUse(): void;
    function OpenInventory(): void;
    function buttonFunctionalities(_option: string): Promise<void>;
}
declare namespace ACatInLimbo {
    let canvas: HTMLCanvasElement;
}
declare namespace ACatInLimbo {
    function ScaredCatAnimation(): ƒS.AnimationDefinition;
    function spiderAnimationHide(): ƒS.AnimationDefinition;
    function spiderAnimationAppear(): ƒS.AnimationDefinition;
    function spiderAnimationDisappear(): ƒS.AnimationDefinition;
    function getAnimation(): ƒS.AnimationDefinition;
}
declare namespace ACatInLimbo {
    let sound: {
        forestWind: string;
        scaryForest: string;
        meadowSound: string;
        normalMoew: string;
        cathissing: string;
        demandingmeow1: string;
        demandingMeow2: string;
        cuteMeow: string;
        kindOfSadMeow: string;
        purrMeow: string;
        purringDeep: string;
        purring: string;
        longGrowl: string;
        growling1: string;
        horrorDrum1: string;
        horrorDrum2: string;
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
        nightpark: {
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
    };
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
    function Meadow(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function Swamp(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function testScene(): ƒS.SceneReturn;
}
