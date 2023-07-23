namespace ACatInLimbo {
  //ANIMATIONS
  // export function ScaredCatAnimation(): ƒS.AnimationDefinition {
  //   return {
  //     start: { translation: ƒS.positionPercent(85, 99), color: ƒS.Color.CSS("", 1) },
  //     end: { translation: ƒS.positionPercent(150, 100), color: ƒS.Color.CSS("black", 0.5) },  <------
  //     duration: 2,
  //     playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
  //   }; //Die Opacity und Farbe der Animation wird, nachdem sie abgespielt wurde, 
  //   //jedes mal auf das Bild auf welches sie angewendet wurde auch in Zukunft auf dieses angewendet (pinkCatScared), 
  //   //auch wenn man halt keine Animation nutzt, sondern das Bild nur erscheinen lassen will
  //   //verstehe nicht, weshalb.
  // }

  export function ScaredCatAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(85, 99), color: ƒS.Color.CSS("", 1) },
      end: { translation: ƒS.positionPercent(150, 100), color: ƒS.Color.CSS("", 1) },
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
      start: { translation: ƒS.positionPercent(-50, 85), color: ƒS.Color.CSS("", 0) },
      end: { translation: ƒS.positionPercent(30, 85), color: ƒS.Color.CSS("", 1) },
      duration: 8,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function swampCreatureDisappearance(): ƒS.AnimationDefinition {
    //something
    return {
      start: { translation: ƒS.positionPercent(30, 85), color: ƒS.Color.CSS("", 1) },
      end: { translation: ƒS.positionPercent(-50, 85), color: ƒS.Color.CSS("", 0) },
      duration: 8,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function path(): ƒS.AnimationDefinition {
    //something
    return {
      start: { translation: ƒS.positionPercent(50, 50), color: ƒS.Color.CSS("", 0) },
      end: { translation: ƒS.positionPercent(50, 50), color: ƒS.Color.CSS("#FF7BAC", 1) },
      duration: 4,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    }; 
  }
  export function pathWalked(): ƒS.AnimationDefinition {
    //something
    return {
      start: { translation: ƒS.positionPercent(50, 50), color: ƒS.Color.CSS("", 1) },
      end: { translation: ƒS.positionPercent(50, 50), color: ƒS.Color.CSS("white", 1) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function snailThrow(): ƒS.AnimationDefinition {
    //something
    return {
      start: { translation: ƒS.positionPercent(30, 95), color: ƒS.Color.CSS("", 1) },
      end: { translation: ƒS.positionPercent(5, 50), color: ƒS.Color.CSS("black", 0) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function deathSlide(): ƒS.AnimationDefinition {
    //something
    return {
      start: { translation: ƒS.positionPercent(20, 100), color: ƒS.Color.CSS("", 1) },
      end: { translation: ƒS.positionPercent(-20, 100), color: ƒS.Color.CSS("", 0) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function skywormAppearing(): ƒS.AnimationDefinition {
    //something
    return {
      start: { translation: ƒS.positionPercent(50, 100), color: ƒS.Color.CSS("", 1) },
      end: { translation: ƒS.positionPercent(50, 50), color: ƒS.Color.CSS("", 1) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function skywormDisappearing(): ƒS.AnimationDefinition {
    //something
    return {
      start: { translation: ƒS.positionPercent(50, 50), color: ƒS.Color.CSS("", 1) },
      end: { translation: ƒS.positionPercent(50, 50), color: ƒS.Color.CSS("#ea9847", 0) },
      duration: 4,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function flyingCatBlue(): ƒS.AnimationDefinition {
    //something
    return {
      start: { translation: ƒS.positionPercent(20, 60), color: ƒS.Color.CSS("", 1) },
      end: { translation: ƒS.positionPercent(50, 50), color: ƒS.Color.CSS("", 1) },
      duration: 6,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function flyingCatRose(): ƒS.AnimationDefinition {
    //something
    return {
      start: { translation: ƒS.positionPercent(70, 60), color: ƒS.Color.CSS("", 1) },
      end: { translation: ƒS.positionPercent(50, 50), color: ƒS.Color.CSS("", 1) },
      duration: 6,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  
}