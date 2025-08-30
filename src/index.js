import Game from "./Game.js";

let initialLife = 8;
let gameHelper = document.createElement("div");
gameHelper.classList.add("game-helper");
let spanCount = document.createElement("span");
for (let i = 0; i < initialLife; i++) {
  spanCount.textContent += "❤️";
}
//spanCount.textContent = initialLife;

let titleHelper = document.createElement("h1");
//titleHelper.textContent = 'Remaning : ';
//titleHelper.style.color = '#3e2b50';
titleHelper.appendChild(spanCount);

let button = document.createElement("button");
let span = document.createElement("span");
span.textContent = "Start a new Game";
button.appendChild(span);
//button.textContent = 'Start a new Game';
let handleRestart = () => {
  memoGame.hardReset();
  handleLifeNumber(initialLife);
};
button.onclick = handleRestart;

let mobileSpan = document.createElement("span");
mobileSpan.classList.add("mobile-life-span");
mobileSpan.textContent = spanCount.textContent;
document.getElementById("game-container").appendChild(mobileSpan);

let button2 = document.createElement("button");
let span2 = document.createElement("span");
span2.textContent = "View highscore";
button2.appendChild(span2);
//button.textContent = 'Start a new Game';
let handleShowHighScore = () => {
  let steps = window.localStorage.getItem("memory_steps");
  if (steps !== "" && steps != null) {
    window.alert(
      `🚀 You have completed the Memory in ${steps} steps ! Congratulations! 🚀`
    );
  } else {
    window.alert(`🧪 You have not yet finished Memory. Keep trying ! 🧪`);
  }
};
button2.onclick = handleShowHighScore;

let button3 = document.createElement("button");
button3.classList.add("button-twitter");
let span3 = document.createElement("span");
span3.textContent = "Share on ";
let svg3 = document.createElement("div");
svg3.innerHTML =
  '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" class="svg-inline--fa fa-twitter fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>';
button3.appendChild(span3);
button3.appendChild(svg3);
//button.textContent = 'Start a new Game';
let handleShareTwitter = () => {
  window.alert("We will share it on twitter soon 💌 🐤");
};
button3.onclick = handleShareTwitter;

gameHelper.appendChild(titleHelper);
gameHelper.appendChild(button);
gameHelper.appendChild(button2);
gameHelper.appendChild(button3);
document.getElementById("game-container").appendChild(gameHelper);

let handleLifeNumber = (nb) => {
  spanCount.textContent = "";
  let i = 0;
  for (i = 0; i < nb; i++) {
    spanCount.textContent += "❤️";
  }
  for (i = nb; i < initialLife; i++) {
    spanCount.textContent += "💔";
  }
  mobileSpan.textContent = spanCount.textContent;
  setTimeout(() => {
    if (nb === 0) {
      window.alert(
        "You have no chances remaining. We will restart the game for you :)"
      );
      memoGame.hardReset();
      handleLifeNumber(initialLife);
    }
  }, 200);
};

let memoGame = new Game({
  lifeNumber: initialLife,
  handleLifeNumber: handleLifeNumber,
});

memoGame.render(document.getElementById("game-container"));

let sandwishMenu = document.createElement("div");
sandwishMenu.classList.add("icon-menu", "icon-sandwsish");
let opencode =
  '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="svg-inline--fa fa-plus fa-w-12 fa-5x"><path fill="currentColor" d="M376 232H216V72c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v160H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h160v160c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V280h160c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z" class=""></path></svg>';
sandwishMenu.innerHTML = opencode;

document.getElementById("game-container").appendChild(sandwishMenu);
// inspired from https://codepen.io/havardob/pen/zZvLgw
sandwishMenu.onclick = () => {
  sandwishMenu.classList.toggle("close");

  restartIcon.classList.toggle("hidden");
  restartIcon.classList.toggle("show");
  highScoreIcon.classList.toggle("hidden");
  highScoreIcon.classList.toggle("show");
  twitterIcon.classList.toggle("hidden");
  twitterIcon.classList.toggle("show");
};

let restartIcon = document.createElement("div");
restartIcon.classList.add("icon-menu", "hidden", "icon-restart");
restartIcon.innerHTML =
  '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="sync-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-sync-alt fa-w-16 fa-2x"><path fill="currentColor" d="M457.373 9.387l-50.095 50.102C365.411 27.211 312.953 8 256 8 123.228 8 14.824 112.338 8.31 243.493 7.971 250.311 13.475 256 20.301 256h10.015c6.352 0 11.647-4.949 11.977-11.293C48.159 131.913 141.389 42 256 42c47.554 0 91.487 15.512 127.02 41.75l-53.615 53.622c-20.1 20.1-5.855 54.628 22.627 54.628H480c17.673 0 32-14.327 32-32V32.015c0-28.475-34.564-42.691-54.627-22.628zM480 160H352L480 32v128zm11.699 96h-10.014c-6.353 0-11.647 4.949-11.977 11.293C463.84 380.203 370.504 470 256 470c-47.525 0-91.468-15.509-127.016-41.757l53.612-53.616c20.099-20.1 5.855-54.627-22.627-54.627H32c-17.673 0-32 14.327-32 32v127.978c0 28.614 34.615 42.641 54.627 22.627l50.092-50.096C146.587 484.788 199.046 504 256 504c132.773 0 241.176-104.338 247.69-235.493.339-6.818-5.165-12.507-11.991-12.507zM32 480V352h128L32 480z" class=""></path></svg>';
document.getElementById("game-container").appendChild(restartIcon);
restartIcon.onclick = handleRestart;

let highScoreIcon = document.createElement("div");
highScoreIcon.classList.add("icon-menu", "hidden", "icon-highscore");
highScoreIcon.innerHTML =
  '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18 fa-3x"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class=""></path></svg>';
document.getElementById("game-container").appendChild(highScoreIcon);
highScoreIcon.onclick = handleShowHighScore;

let twitterIcon = document.createElement("div");
twitterIcon.classList.add("icon-menu", "hidden", "icon-twitter");
twitterIcon.innerHTML =
  '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" class="svg-inline--fa fa-twitter fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>';
document.getElementById("game-container").appendChild(twitterIcon);
twitterIcon.onclick = handleShareTwitter;

let activateCheat = false;
document.getElementById("are-you-a-cheater").onclick = () => {
  let allTiles = document.getElementsByClassName("back");
  activateCheat = !activateCheat;
  let i = 0;
  if (activateCheat) {
    for (i = 0; i < allTiles.length; i++) {
      allTiles[i].style.opacity = 0.8;
    }
  } else {
    for (i = 0; i < allTiles.length; i++) {
      allTiles[i].style.opacity = 1;
    }
  }
};

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("./sw.js")
//     .then((reg) => {
//       // registration worked
//       console.log("success registering Service Worker");
//     })
//     .catch((error) => {
//       // registration failed
//       console.log("Error : " + error);
//     });
// }

document.getElementById("date").innerText = new Date().getFullYear();

let copyright = `© ${new Date().getFullYear()} Gabriel Somogyi`;
console.log(`made with ❤️ by Gabriel S.
  https://gabriel-somogyi.vercel.app/
  ${copyright}`);
