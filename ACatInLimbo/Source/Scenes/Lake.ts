namespace ACatInLimbo {

    export async function Lake(): ƒS.SceneReturn {
        console.log("Scene starting: Lake");

        let text={
            protagonist:{
                T0001: "Oh no"
            }
            
        }
        ƒS.Speech.hide(); //Sprachfenster ausblenden
        ƒS.Location.show(locations.lake);
        ƒS.Speech.tell(characters.protagonist, text.protagonist.T0001);
     }
}