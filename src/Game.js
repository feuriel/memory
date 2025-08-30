import Card from "./Card.js";
import "./Game.css";

//import './Game.css';
// var link = document.createElement("link");
// link.rel = "stylesheet";
// link.type = "text/css";
// link.href = "Game.css";
// document.getElementsByTagName("HEAD")[0].appendChild(link);

export default class Game {
  constructor({ lifeNumber = 10, handleLifeNumber }) {
    this._handleLifeNumber = handleLifeNumber;
    this.container = document.createElement("div");
    this.container.classList.add("game-grid");
    this.section = document.createElement("section");
    this.container.appendChild(this.section);
    this._initialLifeNumber = lifeNumber;
    this._lifeNumber = lifeNumber;
    this._clickedCards = [];
    this._step = 0;
    let cards = this.getRandomizedCards();
    this._cards = [];
    let i = 0;
    for (i = 0; i < cards.length; i++) {
      let cardComponent = new Card(cards[i]);
      this._cards.push(cardComponent);
      cardComponent.render(this.section);
    }
  }
}

Game.prototype.hardReset = function () {
  this._lifeNumber = this._initialLifeNumber;
  this._clickedCards = [];
  this._step = 0;
  let cards = this.getRandomizedCards();
  let i = 0;
  this._cards = [];
  this.section.innerHTML = "";
  for (i = 0; i < cards.length; i++) {
    let cardComponent = new Card(cards[i]);
    this._cards.push(cardComponent);
    cardComponent.render(this.section);
  }
};

Game.prototype.softReset = function () {
  this._clickedCards = [];
  let i = 0;
  for (i = 0; i < this._cards.length; i++) {
    if (!this._cards[i]._done) {
      this._cards[i].reset();
    }
  }
};

Game.prototype.getRandomizedCards = function () {
  let picsumIds = [237, 111, 41, 400, 204, 940, 530, 250];
  let alts = [
    "coucou",
    "coucou2",
    "coucou3",
    "rahrar",
    "hellow",
    "a picture of smtg",
    "hey a picture",
    "deeeemn",
  ];
  let arr = [];
  let i = 0;
  let idx = 0;
  for (i = 0; i < picsumIds.length; i++) {
    let j = 0;
    for (j = 0; j < 2; j++) {
      // push every element twice in the array
      arr.push({
        imgSrc: `https://picsum.photos/id/${picsumIds[i]}/300/300`,
        name: `pic${i}`,
        imgAlt: alts[i],
        idx: idx,
        onBeforeClick: (idx) => {
          console.log(`${idx} has been clicked`);
          if (this._clickedCards.length >= 2) {
            // retrieve actual status of the game
            return -1;
          } else {
            if (this._clickedCards.indexOf(idx) < 0) {
              this._clickedCards.push(idx);
              console.log(this._clickedCards);
              return 0;
            }
            return -1;
          }
        },
        onAfterClick: (idx) => {
          if (this._clickedCards.length === 2) {
            console.log("start onAfterClick");
            let aux = this.checkCards();
            if (aux === 0) {
              this._clickedCards = [];
              // display congrats
            } else if (aux === 2) {
              setTimeout(() => {
                this._clickedCards = [];
                // display congrats
                window.alert(
                  `Congrats ! You complete the Memory with only ${this._step} mistakes ! You rock 🤘😎🤘`
                );
                window.localStorage.setItem("memory_steps", this._step);
              }, 100);
            } else {
              setTimeout(() => {
                this.setLifeNumber(--this._lifeNumber);
                this._step++;
                this.softReset();
              }, 1700);
            }
          }
        },
      });
      idx++;
    }
  }
  arr.sort(() => Math.random() - 0.5); // suffle the cards
  return arr;
};

Game.prototype.setLifeNumber = function (nb) {
  this._lifeNumber = nb;
  this._handleLifeNumber && this._handleLifeNumber(nb);
};

Game.prototype.checkCards = function () {
  let card1 = this._cards.find((elem) => elem.idx === this._clickedCards[0]);
  let card2 = this._cards.find((elem) => elem.idx === this._clickedCards[1]);
  if (card1.imageName === card2.imageName) {
    card1.done();
    card2.done();
    if (this.isComplete()) {
      return 2;
    }
    return 0;
  }
  return -1;
};

Game.prototype.render = function (parentContainer) {
  parentContainer.appendChild(this.container);
};

Game.prototype.isComplete = function () {
  let i = 0;
  for (i = 0; i < this._cards.length; i++) {
    if (!this._cards[i]._done) {
      return false;
    }
  }
  return true;
};
