let minutes = 0;
let seconds = 0;
let started = false;

const count = document.getElementById("count");
const playButton = document.getElementById("play");

const start = () => {
  setInterval(() => {
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }

    count.innerHTML =
      minutes.toString().padStart(2, 0) +
      ":" +
      seconds.toString().padStart(2, 0);
    seconds++;
  }, 1000);
  started = true;
};

startOneTime = () => {
  if (!started) start();
};

playButton.addEventListener("click", startOneTime);

const prueba = () => {
  console.log("Esto es una prueba");
};
