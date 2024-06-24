import {
    blackKing,
    whiteKing,
  } from "../Data/pieces.js";

  class ModalCreator{
    constructor(body) {
      if (!body) {
        throw new Error("Please pass the body");
      }
  
      this.open = false;
      this.body = body;
    }
  
    show() {
      this.open = true;
      document.body.appendChild(this.body);
      document.getElementById("root").classList.add("blur");
    }
  
    hide() {
      this.open = false;
      document.body.removeChild(this.body);
      document.getElementById("root").classList.remove("blur");
    }
  }

  function Winner(color,callback,id){
    const king = document.createElement("img");
    king.onclick = kingCallback;
    king.src = `Assets/images/pieces/${color}/king.png`;
  
    const imageContainer = document.createElement("div");
    imageContainer.appendChild(king);
  
    const msg = document.createElement("p");
    msg.textContent = "You win";
  
    const finalContainer = document.createElement("div");
    finalContainer.appendChild(msg);
    finalContainer.appendChild(imageContainer);
    finalContainer.classList.add("modal");

    finalContainer.classList.add("modal");
  
    const modal = new ModalCreator(finalContainer);
    modal.show();
  
    function kingCallback() {
      if (color == "white") {
        callback(whiteKing, id);
      } else {
        callback(blackKing, id);
      }
      modal.hide();
    }
  }

  export default Winner;