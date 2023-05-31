const button = document.getElementById("play-pause-button");

let isPlaying = false;

button.addEventListener("click", playButton);

document.getElementById("play").style.visibility = "visible";
document.getElementById("pause").style.visibility = "hidden";

function playButton() {
  console.log("click");
  const playButton = document.getElementById("audio");
  console.log(playButton.paused);

  playButton.controls = false;

  if (isPlaying) {
    playButton.play();
    document.getElementById("play").style.visibility = "hidden";
    document.getElementById("pause").style.visibility = "visible";
  } else {
    playButton.pause();
    document.getElementById("play").style.visibility = "visible";
    document.getElementById("pause").style.visibility = "hidden";
  }

  isPlaying = !isPlaying;
}
