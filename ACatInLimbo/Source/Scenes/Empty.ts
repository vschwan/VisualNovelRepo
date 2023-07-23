namespace ACatInLimbo {
  export async function Empty(): ƒS.SceneReturn {

    let title = document.getElementById("title");
    title.innerText = "A Cat in Limbo"

    console.log("THE VISUAL NOVEL ENDS HERE");

    ////play/replay --> doesn't look good on end screen, also menu already there
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