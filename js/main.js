//player class info stored
class Player {
  constructor() {
    this.positionX = 50;
    this.positionY = 0;
    this.width = 10;
    this.height = 10;
    this.DOMElement = null; //dom element to store informations
    this.createDOMElement(); //everytime we create a new player we add a div into the html
  }
  createDOMElement() {
    //crete the element
    this.DOMElement = document.createElement("div");
    //add content or modify
    this.DOMElement.innerText = "this is the player";
    this.DOMElement.id = "player";
    this.DOMElement.style.width = this.width + "vw";
    this.DOMElement.style.height = this.height + "vh";
    this.DOMElement.style.bottom = this.positionY;
    this.DOMElement.style.left = this.positionX + "vw";

    //append the DOM to the parent element
    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.DOMElement);
  }
  //commands methods move left and right
  moveLeft() {
    this.positionX -= 1;
    this.DOMElement.style.left = this.positionX + "vw";
    console.log(`new position: ${this.positionX}`);
  }
  moveRight() {
    this.positionX += 1;
    this.DOMElement.style.left = this.positionX + "vw";
    console.log(`new position: ${this.positionX}`);
  }
}
//obstacle class info stored
class Obstacle {
  constructor() {
    this.positionX = 50;
    this.positionY = 100;
    this.width = 20;
    this.height = 10;
    this.DOMElement = null;
    this.createDOMElement();
  }
  createDOMElement() {
    //crete the element
    this.DOMElement = document.createElement("div");
    //add content or modify
    this.DOMElement.innerText = "this is obstacle";
    this.DOMElement.className = "obstacle";
    this.DOMElement.style.width = this.width + "vw";
    this.DOMElement.style.height = this.height + "vh";
    this.DOMElement.style.bottom = this.positionY;
    this.DOMElement.style.left = this.positionX + "vw";

    //append the DOM to the parent element
    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.DOMElement);
  }
  moveDown() {
    this.positionY -= 1;
    this.DOMElement.style.bottom = this.positionY + "vh";
  }
}

//create ojects that relate to their classes
const player = new Player();
const obstaclesArr = [];
//event listeners
document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    player.moveLeft();
  } else if (event.code === "ArrowRight") {
    player.moveRight();
  }
});

//interval that move the obstacle
const intervalIDmoveDown = setInterval(() => {
  obstaclesArr.forEach((obstacleInstance)=>{
    obstacleInstance.moveDown()
  })
}, 50);

const intervalIDnewObstacle = setInterval(() => {
  /* store instances of the class
obstacles into the array so
we have multiple obstacle objects */
  const newObstacle = new Obstacle();
  obstaclesArr.push(newObstacle);
}, 1000);
