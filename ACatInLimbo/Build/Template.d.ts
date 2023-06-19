declare namespace ACatInLimbo {
    function Empty(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        catScore: number;
        scoreForCat: string;
        nameProtagonist: string;
        points: number;
        pickedMeterBar: boolean;
        pickedChoice: boolean;
    };
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
    function animation(): ƒS.AnimationDefinition;
    function getAnimation(): ƒS.AnimationDefinition;
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
    };
    let sound: {
        forestSound: string;
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
    };
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
    let characters: {
        narrator: {
            name: string;
        };
        protagonist: {
            name: string;
        };
        pinkCat: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                fromBehind: string;
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
                thoughtful1: string;
                thoughtful2: string;
                thumbsUp: string;
                walking: string;
                yawning: string;
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
                stonePedestal: string;
            };
        };
        spiderCreature: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                attack: string;
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
}
declare namespace ACatInLimbo {
    let canvas: HTMLCanvasElement;
}
declare namespace ACatInLimbo {
    function firstScene(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function secondScene(): ƒS.SceneReturn;
}
declare namespace ACatInLimbo {
    function testScene(): ƒS.SceneReturn;
}
