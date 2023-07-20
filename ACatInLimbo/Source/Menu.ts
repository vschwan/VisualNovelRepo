namespace ACatInLimbo {

  export let gameMenu: ƒS.Menu;
  export let menuIsOpen: boolean = true;


  //MENU
  export let inGameMenuButtons = {
    save: "Save",
    load: "Load",
    inventory: "Inventory",
    credits: "Credits",
    help: "Help",
    close: "Close",
    //   map: "Map"
  };

  export async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save();
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
        break;
      case inGameMenuButtons.close:
        gameMenu.close();
        menuIsOpen = false;
        break;
      case inGameMenuButtons.credits:
        credits();
        break;
      case inGameMenuButtons.help:
        help();
        break;
      case inGameMenuButtons.inventory:
        await ƒS.Inventory.open();
    }
  }


  // Menu shortcuts
  document.addEventListener("keydown", handleKeyPress);
  async function handleKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.S:
        console.log("Save Scene");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.C:
        console.log("Credits");
        credits();
        break;
      case ƒ.KEYBOARD_CODE.L:
        console.log("Load Scene");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.H:
        console.log("Help");
        help();
        break;
      case ƒ.KEYBOARD_CODE.I:
        console.log("open Inventory");
        await ƒS.Inventory.open();
        break;
      case ƒ.KEYBOARD_CODE.M:
        if (menuIsOpen) {
          console.log("Menu closed");
          gameMenu.close();
          menuIsOpen = false;
        }
        else {
          console.log("Menu open");
          gameMenu.open();
          menuIsOpen = true;
        }
        break;
    }
  }


  //Help
  export function help(): void {
    ƒS.Text.setClass("TextPrint");
    ƒS.Text.print("<p>In this game you can find a Lovemeter in the right corner of the screen. It shows the affection the pink Cat feels towards you.</p><p>Open your Inventory through the menu to feed your Cat with items you collect throughout the story to make it like you more.</p><p>Be careful it doesn't leave you!</p><p>Shortcuts:</p><p>Menu: M</p><p>Save: S</p><p>Load: L</p><p>Help: H</p><p>Credits: C</p>");
  }


  //Credits
  export async function credits() {

    ƒS.Text.setClass("credits");
    let credits: string[] =
      ["<h3>Images</h3>\
        <table>\
        <tr>\
        <th></th>\
        <th>Asset</th>\
        <th>Source</th>\
        </tr>\
        <tr>\
        <td>Characters</td>\
        <td>All characters</td>\
        <td>by Valentina Schwan</td>\
        </tr>\
        <tr>\
        <td>Backgrounds</td>\
        <td>lake.png (modified)</td>\
        <td><a href:https://www.pexels.com/de-de/foto/szenische-ansicht-des-sees-im-wald-247600/>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>meadow.png,<br>mainBackground.png,<br>clouds.png,<br>all riverflow.pngs,<br>map.png + paths</td>\
        <td>by Valentina Schwan</td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>Remaining (modified)</td>\
        <td>AI-generated with generative Fill Option in Adobe Photoshop (Beta)</td>\
        </tr>\
        <tr>\
        <td>Items</td>\
        <td>All items</td>\
        <td>by Valentina Schwan</td>\
        </tr>\
        </table>\
        ",

        "<h3>Audio</h3>\
        <table>\
        <tr>\
        <th></th>\
        <th>Asset</th>\
        <th>Source</th>\
        </tr>\
        <tr>\
        <td>Ambience</td>\
        <td>forest-swamp-6751, forest-wind-and-birds-6881,<br>frogs-48410, river-in-the-forest-17271,<br>waves-on-the-lake-in-summer-time-in-wav-64379, <br> celestial-melody-18337 </td>\
        <td><a href:https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=114694>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>Dripping Water in Cave</td>\
        <td>Sound effect by <a href:'https://pixabay.com/de/users/solarmusic-27851065/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=114694'>solarmusic</a> from <a href:'https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=114694'>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>small-waves-onto-the-sand-143040</td>\
        <td>Sound Effect by <a href:'https://pixabay.com/de/users/dennish18-26151496/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=143040'>Dennis</a> from <a href:'https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=114694'>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>jazz-happy-110855</td>\
        <td>Music by <a href:'https://pixabay.com/de/users/music_for_videos-26992513/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=110855'>Kirilkov</a> from <a href:'https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=114694'>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>anxious-march-full-15523</td>\
        <td>Music by <a href:'https://pixabay.com/de/users/litesaturation-17654080/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=15523'>LiteSaturation</a> from <a href:https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=36186>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>mindfulness-relaxation-amp-meditation-music-22174</td>\
        <td>Music by <a href:'https://pixabay.com/es/users/john_kensy_music-26026995/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=22174'>Dank John_Kensy_Music</a> from <a href:'https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=114694'>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>horror-music-box-2-145144</td>\
        <td>Music by <a href:'https://pixabay.com/de/users/universfield-28281460/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=145144'>UNIVERSFIELD</a> from <a href:'https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=145144'>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>dreamy-jazz-slow-background-jazz-music-piano-and-seattle-strings-9998</td>\
        <td>Music by <a href:'https://pixabay.com/de/users/juliush-3921568/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=9998'>JuliusH</a> from <a href:'https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=145144'>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>haunted-house-ambience-21831</td>\
        <td>Music by <a href:'https://pixabay.com/de/users/placidplace-25572496/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=21831'>Placidplace</a> from <a href:'https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=145144'>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>spring-forest-birds-sounds</td>\
        <td><a href:'https://www.freesoundslibrary.com/'>Free Sounds Library</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>mixkit-scary-forest-at-night-2486</td>\
        <td><a href:'https://mixkit.co/free-sound-effects/scary-woods/'>Free Scary Woods Sound Effects</a><br>from Mixkit, Envato Elements</td>\
        </tr>\
        ",

        "<h3>Audio</h3>\
        <table>\
        <tr>\
        <th></th>\
        <th>Asset</th>\
        <th>Source</th>\
        </tr>\
        <tr>\
        <td>FX</td>\
        <td>BlubbernInDerTiefe,<br>Originaltitel: In der Tiefe und nah blubberndes Wasser;<br>BlubbernLeisesPlanschen<br>Originaltitel: Blubbern und leises Planschen</td>\
        <td><a href:https://hoerspielbox.de/>hoerspielbox.de</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>5-meters-dive-6070, eating-sound-effect-36186,<br>finger-cracking-40991, frog_quak-81741,<br>frog-qua-cry-36013, monster-rumble-99026,<br>sheep-bleating-31117, slimey-97605,<br>taiko-drumloop-001-120-97780, fear-breathing-14825,<br>scary-wood-74661, clock-ticking-natural-room-verb-17249,<br>croaking-70573</td>\
        <td>Sound Effects from <a href:https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=36186>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>cat-eating-dry-food-133130</td>\
        <td>Sound Effect by <a href:'https://pixabay.com/de/users/soundsforyou-4861230/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=133130'>Micheal</a> from <a href:https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=36186>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>mixkit-hard-horror-hit-drum-565,<br>mixkit-horror-deep-drum-heartbeat-559</td>\
        <td><a href:'https://mixkit.co/free-sound-effects/horror/'>Free Horror Sound Effects</a><br>from Mixkit, Envato Elements</td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>mixkit-big-wild-cat-slow-moan-90</td>\
        <td><a href:'https://mixkit.co/free-sound-effects/monster/'>Free Monster Sound Effects</a><br>from Mixkit, Envato Elements</td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>mixkit-walking-on-grass-1921</td>\
        <td><a href:'https://mixkit.co/free-sound-effects/footsteps/'>Free Footsteps Sound Effects</a><br>from Mixkit, Envato Elements</td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>Fish Eat (Nr. 2  Fortnite Sound) - Sound Effect for editing</td>\
        <td><a href:'https://www.file-upload.net/download-13974100/FishEatNr.2FortniteSound-SoundEffectforediting.mp3.html'>File-Upload.net</a></td>\
        </tr>\
        ",

        "<h3>Audio</h3>\
        <table>\
        <tr>\
        <th></th>\
        <th>Asset</th>\
        <th>Source</th>\
        </tr>\
        <tr>\
        <td>FX<br>Cat-Sounds</td>\
        <td>a-yawn-7011,<br>catmeow1-89814,<br>shari_meow-47485,<br>purring-cat-77928</td>\
        <td><a href:'https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=7011'>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>cat-purr-meow-8327</td>\
        <td>Sound Effect by <a href:'https://pixabay.com/es/users/edr-1177074/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=8327'>EdR</a><br>from <a href:https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=36186>Pixabay</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>ANMLCat_Growling cat 3 (ID 1887)_BSB,<br>ANMLCat_Meow cat 7 (ID 1895)_BSB</td>\
        <td>Joseph Sardin,<br><a href:'https://bigsoundbank.com/'>BigSoundBank</a></td>\
        </tr>\
        <tr>\
        <td></td>\
        <td>Cat-hissing-sound</td>\
        <td>Cat Hissing Sound Effect by Alexander,<br><a href:'https://orangefreesounds.com/cat-hissing-sound-effect/'>OrangeFreeSounds</a></td>\
        </tr>\
        "
      ];
    let creditsNav = {
      back: "«",
      next: "»",
      done: "x"
    };
    let choice: string;
    let current: number = 0;
    do {
      ƒS.Text.print(credits[current]);
      choice = await ƒS.Menu.getInput(creditsNav, "creditsNav");

      switch (choice) {
        case creditsNav.back:
          current = Math.max(0, current - 1);
          break;
        case creditsNav.next:
          current = Math.min(3, current + 1);
          break;
      }
    } while (choice != creditsNav.done);
    ƒS.Text.close();
  }



}