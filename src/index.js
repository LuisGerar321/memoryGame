const sound = new Audio("../media/sounds/slowmotion.mp3");
sound.autoplay = false;
sound.loop = true;
sound.isOn = false;

function getMusicIconPath(musicState) {
  return `../media/icons/music-${String(musicState)}.png`
};


const button = document.querySelector(".audioPlay");
const musicIcon = button.querySelector(".sound");
musicIcon.src = getMusicIconPath(sound.isOn);
button.addEventListener("click", () => {
  if (sound.isOn == false) {
    // sound.load();
    sound.play();
    sound.isOn = true;
    console.log(musicIcon);
  } else {
    sound.pause();
    sound.isOn = false;
  }
  musicIcon.src = getMusicIconPath(sound.isOn);
})
