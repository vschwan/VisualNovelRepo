namespace ACatInLimbo {
  export async function Empty(): ƒS.SceneReturn {
    console.log("THE VISUAL NOVEL ENDS HERE");

    let title = document.getElementById("title");
    title.innerText = "A Cat in Limbo"

    // await new Promise(resolve => setTimeout(resolve, 5000));
    // let endButtons = {
    //   replay: "Play again",
    //   replayFromLastScene: "Replay from last Scene"
    // }
    // let endButtonsRequest = await ƒS.Menu.getInput(endButtons, "choicesCSSClass");

    // switch (endButtonsRequest) {
    //   case endButtons.replay:
    //     window.location.reload();
    //     break;

    //   case endButtons.replayFromLastScene:
    //     await ƒS.Progress.load();
    //     break;
    // }

  }
}