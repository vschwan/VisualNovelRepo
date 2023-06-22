namespace ACatInLimbo {
    //ANIMATIONS
  export function ScaredCatAnimation(): ƒS.AnimationDefinition {
    //something
    return {
      start: { translation: ƒS.positionPercent(85, 95), color: ƒS.Color.CSS("", 1) },
      end: { translation: ƒS.positionPercent(150, 100), color: ƒS.Color.CSS("black", 0.5) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function spiderAnimationHide(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(50, -20) },
      end: { translation: ƒS.positionPercent(50, 20) },
      duration: 5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
    };
  }
  export function spiderAnimationAppear(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(50, -20) },
      end: { translation: ƒS.positionPercent(50, 50) },
      duration: 5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function spiderAnimationDisappear(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(50, 50) },
      end: { translation: ƒS.positionPercent(50, -20) },
      duration: 5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function swampCreatureAppearance(): ƒS.AnimationDefinition {
    //something
    return {
      start: { translation: ƒS.positionPercent(-50, 50), color: ƒS.Color.CSS("black", 0.5) },
      end: { translation: ƒS.positionPercent(30, 50), color: ƒS.Color.CSS("black", 1) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
/*
  export function getAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0.3) },
      end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCESTOPAFTER
    };
  }*/
}