import "./Card.css";
// var link = document.createElement('link');
// link.rel = 'stylesheet';
// link.type = 'text/css';
// link.href = 'Card.css';
// document.getElementsByTagName('HEAD')[0].appendChild(link);

export default class Card {
  constructor(imageobj) {
    this.container = document.createElement("div");
    this.container.classList.add("memory-card");
    this.imageName = imageobj.name;
    this.idx = imageobj.idx;
    this._done = false;
    let face = document.createElement("img");
    let back = document.createElement("div");
    face.classList.add("face");
    back.classList.add("back");
    face.src = imageobj.imgSrc;
    face.alt = imageobj.imgAlt;
    this.container.appendChild(face);
    this.container.appendChild(back);

    this.container.onclick = () => {
      let res = imageobj.onBeforeClick(this.idx); // notify the game its clicked
      if (res === 0) {
        this.container.classList.add("toggle");
        imageobj.onAfterClick(this.idx);
      }

      //res = imageobj.onAfterClick(this.idx); // notify the game its clicked
    };
  }
}

Card.prototype.render = function (parentElement) {
  parentElement.appendChild(this.container);
};

Card.prototype.reset = function () {
  this.container.classList.remove("toggle");
};

Card.prototype.done = function () {
  this.container.classList.add("done");
  this._done = true;
  this.container.onclick = () => {};
};
