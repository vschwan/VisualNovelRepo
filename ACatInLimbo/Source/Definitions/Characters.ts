namespace ACatInLimbo {


  //CHARACTERS
  export let characters = {
    protagonist: {
      name: dataForSave.nameProtagonist,
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        front: "./Images/Characters/protagonist/protagonistFront.png",
        side: "./Images/Characters/protagonist/protagonistSide.png",
        handsInHips: "./Images/Characters/protagonist/protagonistHandsInHips.png",
        scared: "./Images/Characters/protagonist/protagonistScared.png",
        thinking: "./Images/Characters/protagonist/protagonistThinking.png"
      }
    },

    pinkCat: {
      name: "pinkCat",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        //pink Cat poses regular
        normal: "./Images/Characters/pinkCat/pinkCatNormal.png",
        normalLookingAway: "./Images/Characters/pinkCat/pinkCatNormalFromBehind.png",
        normalAngry: "./Images/Characters/pinkCat/pinkCatNormalAngry.png",
        normalSad: "./Images/Characters/pinkCat/pinkCatNormalSad.png",
        fromBehindLookingAway: "./Images/Characters/pinkCat/pinkCatBehind.png",
        fromBehindLookingBack: "./Images/Characters/pinkCat/pinkCatBehindLook.png",
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
        talkingAngry: "./Images/Characters/pinkCat/pinkCatTalkingAngry.png",
        talkingSad: "./Images/Characters/pinkCat/pinkCatTalkingSad.png",
        thoughtful1: "./Images/Characters/pinkCat/pinkCatThoughtful1.png",
        thoughtful2: "./Images/Characters/pinkCat/pinkCatThoughtful2.png",
        thumbsUp: "./Images/Characters/pinkCat/pinkCatThumbsUp.png",
        walking: "./Images/Characters/pinkCat/pinkCatWalking.png",
        yawning: "./Images/Characters/pinkCat/pinkCatYawning.png",
        crouched: "./Images/Characters/pinkCat/pinkCatCrouched.png",
        crouchedLookingAway: "./Images/Characters/pinkCat/pinkCatCrouchedLookingAway.png",
        crouchedSad: "./Images/Characters/pinkCat/pinkCatCrouchedSad.png",
        crouchedAngry: "./Images/Characters/pinkCat/pinkCatCrouchedAngry.png",
        proud: "./Images/Characters/pinkCat/pinkCatProud.png",
        play1: "./Images/Characters/pinkCat/pinkCatplay1.png",
        play2: "./Images/Characters/pinkCat/pinkCatplay2.png",
        normal2: "./Images/Characters/pinkCat/pinkCatNormal2.png",
        normal2Sad: "./Images/Characters/pinkCat/pinkCatNormal2Sad.png",
        lookingUp: "./Images/Characters/pinkCat/pinkCatLookingUp.png",

        //pink Cat poses small 
        normalSmall: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatNormalSmall.png",
        scaredSmall: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatScaredSmall.png",
        scaredSmallTurnedRight: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatScaredSmallTurnedRight.png",
        curiousSmall: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatCuriousSmall.png",
        lovelySmall: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatLoveSmall.png",
        layingOnBackSmall: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatOnBackSmall.png",
        stretchingSmall: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatStretchingSmall.png",
        play1Small: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatPlay1Small.png",
        play2Small: "./Images/Characters/pinkCat/pinkCatSmall/pinkCatPlay2Small.png",

        //pink Cat tiny (mountain scene with goats)
        cleaningAssTiny: "./Images/Characters/pinkCat/pinkCatTiny/pinkCatCleaningAssTiny.png",
        cleaningPawTiny: "./Images/Characters/pinkCat/pinkCatTiny/pinkCatCleaningPawTiny.png",
        lookingUpTiny: "./Images/Characters/pinkCat/pinkCatTiny/pinkCatLookingUpTiny.png",
        onBackTiny: "./Images/Characters/pinkCat/pinkCatTiny/pinkCatOnBackTiny.png",
        proudTiny: "./Images/Characters/pinkCat/pinkCatTiny/pinkCatProudTiny.png",
        loveTiny: "./Images/Characters/pinkCat/pinkCatTiny/pinkCatLoveTiny.png",

        //pink Cat as stone Statue awakes
        awakening1: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening1.png",
        awakening2: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening2.png",
        awakening3: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening3.png",
        awakening4: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening4.png",
        awakening5: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening5.png",
        awakening6: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening6.png",
        awakening7: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening7.png",
        awakening8: "./Images/Characters/pinkCat/pinkCatAwakening/pinkCatAwakening8.png"
      }
    },

    stonePedestal: {
      name: "stonePedestal",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        stonePedestal: "./Images/Characters/pinkCat/pinkCatAwakening/stonePedestal.png"
      }
    },

    spiderCreature: {
      name: "Spider Creature",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        attack: "./Images/Characters/creatures/spiderCreature/spiderCreatureLightAttack.png",
        attackBig: "./Images/Characters/creatures/spiderCreature/spiderCreatureLightAttackBig.png",
        normal: "./Images/Characters/creatures/spiderCreature/spiderCreatureLightNormal.png",
        sad: "./Images/Characters/creatures/spiderCreature/spiderCreatureLightSad.png",
        smile: "./Images/Characters/creatures/spiderCreature/spiderCreatureLightSmile.png"
      }
    },

    swampCreature: {
      name: "Swamp Creature",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "./Images/Characters/creatures/swampCreature/swampCreatureNormal.png",
        asleep: "./Images/Characters/creatures/swampCreature/swampCreatureAsleep.png",
        lessWood1: "./Images/Characters/creatures/swampCreature/swampCreatureLessWood1.png",
        lessWood2: "./Images/Characters/creatures/swampCreature/swampCreatureLessWood2.png",
        noSnails: "./Images/Characters/creatures/swampCreature/swampCreatureNoSnails.png",
        smile: "./Images/Characters/creatures/swampCreature/swampCreatureSmile.png"
      }
    },

    lakeCreature: {
      name: "Lake Creature",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "./Images/Characters/creatures/lakeCreature/lakeCreatureNormal.png",
        sideEye: "./Images/Characters/creatures/lakeCreature/lakeCreatureSideEye.png",
        hide: "./Images/Characters/creatures/lakeCreature/lakeCreatureHide.png",
        attack: "./Images/Characters/creatures/lakeCreature/lakeCreatureAttack.png",
        bait: "./Images/Characters/creatures/lakeCreature/lakeCreatureBait.png",
        smile: "./Images/Characters/creatures/lakeCreature/lakeCreatureSmile.png",
        cry: "./Images/Characters/creatures/lakeCreature/lakeCreatureCry.png",
        hardCry: "./Images/Characters/creatures/lakeCreature/lakeCreatureHardCry.png",
        heartEyes: "./Images/Characters/creatures/lakeCreature/lakeCreatureHeartEyes.png",
        heartEyesBroken: "./Images/Characters/creatures/lakeCreature/lakeCreatureHeartEyesBroken.png",
        hideSad: "./Images/Characters/creatures/lakeCreature/lakeCreatureHideSad.png",
        smileHeart: "./Images/Characters/creatures/lakeCreature/lakeCreatureSmileHeart.png",

      }
    },

    bayCreature: {
      name: "Bay Creature",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        armSide: "./Images/Characters/creatures/bayCreature/bayCreatureArmsSide.png",
        attack: "./Images/Characters/creatures/bayCreature/bayCreatureAttack.png",
        coin: "./Images/Characters/creatures/bayCreature/bayCreatureCoin.png",
        happy: "./Images/Characters/creatures/bayCreature/bayCreatureHappy.png",
        headAngry: "./Images/Characters/creatures/bayCreature/bayCreatureHeadAngry.png",
        headNormal: "./Images/Characters/creatures/bayCreature/bayCreatureHeadNormal.png",
        heart: "./Images/Characters/creatures/bayCreature/bayCreatureHeart.png",
        lookingDownSad: "./Images/Characters/creatures/bayCreature/bayCreatureLookindDownSad.png",
        lookingDown: "./Images/Characters/creatures/bayCreature/bayCreatureLookingDown.png",
        normal: "./Images/Characters/creatures/bayCreature/bayCreatureNormal.png",
        talking: "./Images/Characters/creatures/bayCreature/bayCreatureTalking.png",
        talkingAngry: "./Images/Characters/creatures/bayCreature/bayCreatureTalkingAngry.png",
        glow: "./Images/Characters/creatures/bayCreature/bayGlow.png",
        happyHeart: "./Images/Characters/creatures/bayCreature/bayCreatureHappyHeart.png"

      }
    },
    caveCreature: {
      name: "Cave Creature",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "./Images/Characters/creatures/caveCreature/CaveCreatureNormal.png",
        sound: "./Images/Characters/creatures/caveCreature/CaveCreatureSound.png",
        toungeOut: "./Images/Characters/creatures/caveCreature/CaveCreaturOpenMouth.png",
        attack: "./Images/Characters/creatures/caveCreature/CaveCreatureAttack.png"
      }
    },

    death: {
      name: "Death",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        fishingLookingDown: "./Images/Characters/death/deathFishingLookingDown.png",
        fishingLookingUp: "./Images/Characters/death/deathFishingLookingUp.png",
        normal: "./Images/Characters/death/deathNormal.png",
        smile: "./Images/Characters/death/deathSmile.png",
        evilSmile: "./Images/Characters/death/deathEvilSmile.png",
        angry: "./Images/Characters/death/deathAngry.png",
        surprised: "./Images/Characters/death/deathSurprised.png",
        DeathBigAtGate: "./Images/Characters/death/bigAtGate.png",
      }
    },

    gateCloser: {
      name: "GateCLoser",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        closer1: "./Images/Backgrounds/gateDeathCloser1.png",
        closer2: "./Images/Backgrounds/gateDeathCloser2.png",
        closer3: "./Images/Backgrounds/gateDeathCloser3.png",
        closer4: "./Images/Backgrounds/gateDeathCloser4.png",
        closer5: "./Images/Backgrounds/gateDeathCloser5.png"
      }
    },

    goats: {
      name: "Goats",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        allGoats: "./Images/Characters/creatures/goats/mountainGoats.png",
        singleGoat: "./Images/Characters/creatures/goats/singleGoatLookingAtCat.png"
      }
    },

    path: {
      name: "Path",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        meadowForest: "./Images/Map/MeadowForest.png",
        meadowLake: "./Images/Map/MeadowLake.png",
        forestLake: "./Images/Map/ForestLake.png",
        forestSwamp: "./Images/Map/ForestSwamp.png",
        lakeSwamp: "./Images/Map/LakeSwamp.png",
        swampRiver: "./Images/Map/SwampRiver.png",
        swampBay: "./Images/Map/SwampBay.png",
        bayRiver: "./Images/Map/BayRiver.png",
        bayCave: "./Images/Map/BayCave.png",
        riverCave: "./Images/Map/RiverCave.png",
        riverMountains: "./Images/Map/RiverMountains.png",
        mountainsClouds: "./Images/Map/MountainsClouds.png",
        caveClouds: "./Images/Map/CaveClouds.png",
        cloudsGate: "./Images/Map/CloudsGate.png"
      }
    },
    riverflow: {
      name: "Riverflow",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        plain: "./Images/Backgrounds/riverflow/riverflow.png",
        flow1: "./Images/Backgrounds/riverflow/riverflow1.png",
        flow2: "./Images/Backgrounds/riverflow/riverflow2.png",
        flow3: "./Images/Backgrounds/riverflow/riverflow3.png",
        flowWaving3: "./Images/Backgrounds/riverflow/riverflow3Waving.png",
        flow4: "./Images/Backgrounds/riverflow/riverflow4.png",
        flowWaving4: "./Images/Backgrounds/riverflow/riverflow4Waving.png",
        flow5: "./Images/Backgrounds/riverflow/riverflow5.png",
        flow6: "./Images/Backgrounds/riverflow/riverflow6.png"

      }
    },
    snail: {
      name: "Snail",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "./Images/Items/snail.png"
      }
    },

    skyworm: {
      name: "Skyworm",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        normal: "./Images/Characters/creatures/skyworm/skywormNormal.png",
        friendly: "./Images/Characters/creatures/skyworm/skywormFriendly.png",
        thinking: "./Images/Characters/creatures/skyworm/skywormThinking.png",
        evil: "./Images/Characters/creatures/skyworm/skywormEvil.png",
        excited: "./Images/Characters/creatures/skyworm/skywormExcited.png",
        cheeky: "./Images/Characters/creatures/skyworm/skywormCheeky.png",
        dreaming: "./Images/Characters/creatures/skyworm/skywormDreaming.png",
        smelling: "./Images/Characters/creatures/skyworm/skywormSmelling.png",
        persuading: "./Images/Characters/creatures/skyworm/skyWormPersuading.png",
        fin: "./Images/Characters/creatures/skyworm/skywormFin.png",
        bye: "./Images/Characters/creatures/skyworm/skywormBye.png",
        disappearing: "./Images/Characters/creatures/skyworm/sykwormDisappearing.png",
        angry: "./Images/Characters/creatures/skyworm/skywormAngry.png",
        angry2: "./Images/Characters/creatures/skyworm/skywormAngry2.png",
        cliffEdge: "./Images/Characters/creatures/skyworm/skywormCliffEdge.png"
        // multiple: "./Images/Characters/creatures/skyworm/worms.png"
      }
    }
  }

  /* export function UpdateName(): void {
       characters.protagonist.name = dataForSave.nameProtagonist;
   }*/
}
