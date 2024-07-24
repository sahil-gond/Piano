const pianokeys = document.querySelectorAll(".piano-key .key");

const volumeSlider = document.querySelector(".volume-slider input");

const keysCheckBox = document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio("tunes/a.wav");

const playTune = (keys) => {
  audio.src = `tunes/${keys}.wav` ; //passing audio based on key pressed
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${keys}"]`)
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
}

pianokeys.forEach(keys => {
  allKeys.push(keys.dataset.key)
  keys.addEventListener("click", () => playTune(keys.dataset.key))
  
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
}

const pressedKey = (e) => {
  if(allKeys.includes(e.key)) playTune(e.key);
}

const showHideKeys = (e) => {
  pianokeys.forEach(key => key.classList.toggle("hide"));
}

volumeSlider.addEventListener("input", handleVolume)

keysCheckBox.addEventListener("click", showHideKeys)

document.addEventListener("keydown", pressedKey);