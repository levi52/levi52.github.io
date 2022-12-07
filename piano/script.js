const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keyCheckbox = document.querySelector(".keys-checkbox input");
let allKeys=[];
let audio = new Audio("tunes/a.wav")//by default, audio src is "a" tune

const playTune = (key) => {
    audio.src=`tunes/${key}.wav`;//passing audio src based on key pressed
    audio.play();//playing audio

    const clickedkey = document.querySelector(`[data-key="${key}"]`);
    clickedkey.classList.add("active");//adding active class to the clicked key element

    setTimeout(() => {//remove active class after 150 ms from the clicked key element
      clickedkey.classList.remove("active");
    },150);
};

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);//adding data-key value to the allKey array
    //calling playTune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
  audio.volume=e.target.value;
};

const showHideKeys = () => {
  pianoKeys.forEach(key => key.classList.toggle("hide"));
};

const pressedKey = (e) => {
  //if the pressed key is in the allKeys array, only call the playTune function
  if(allKeys.includes(e.key)) playTune(e.key);
};

volumeSlider.addEventListener("input",handleVolume);
keyCheckbox.addEventListener("click",showHideKeys);
document.addEventListener("keydown",pressedKey);