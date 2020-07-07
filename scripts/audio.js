const mute = document.querySelector('.mute');
const svg = document.querySelector('svg');
var startAudio = new Audio('../audio/start.mp3');
var menuAudio = new Audio('../audio/replay.mp3');
var squirtleaudio = new Audio('../audio/squirtleaudio.mp3');
var charmanderaudio = new Audio('../audio/charmanderaudio.mp3');
var bulbasauraudio = new Audio('../audio/bulbasauraudio.mp3');
var haveBeenClicked = false;
var sound = false;



/// Configurações de sound

startAudio.volume = 0.16;
charmanderaudio.volume = 0.4;
menuAudio.volume = 0.16;

menuAudio.loop = true;

startAudio.play();

mute.addEventListener('click', ()=> {
    if (sound == false) {
        svg.style.fill = "red";
        menuAudio.pause();
        squirtleaudio.volume = 0;
        charmanderaudio.volume = 0;
        bulbasauraudio.volume = 0;
        sound = true;
        console.log('true '+sound);

    }
    else{
        svg.style.fill = "black";
        menuAudio.play();
        squirtleaudio.volume = 1;
        charmanderaudio.volume = 0.6;
        bulbasauraudio.volume = 1;
        sound = false;
        console.log('else '+sound);
    }
});
